import { Injectable } from '@angular/core';
import {
  GetNodeGQL,
  GetRootNodesGQL,
  NodeFragment,
  Node,
  Maybe,
  GetNodeWithChildrenGQL,
  RenameNodeGQL, CreateNodeGQL, GetNodeWithChildrenDocument, DeleteNodeGQL, SetStatusGQL
} from '../../generated/graphql';
import {delay, filter, map, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

export type StructureItem = {id: number; children: number[]; parent?: number | null; isExpanded: boolean};
export type KeyDirection =  'ArrowUp' | 'ArrowDown' | 'ArrowRight' | 'ArrowLeft';
@Injectable({
  providedIn: 'root'
})
export class TreeService {
  constructor(
    protected getNodeGQL: GetNodeGQL,
    protected getRootNodesGQL: GetRootNodesGQL,
    protected getNodeWithChildrenGQL: GetNodeWithChildrenGQL,
    protected renameNodeGQL: RenameNodeGQL,
    protected createNodeGQL: CreateNodeGQL,
    protected deleteNodeGQL: DeleteNodeGQL,
    protected setStatusGQL: SetStatusGQL,
  ) { }

  get activeNode$() {
    return this.activeNode$$.asObservable();
  }

  protected activeNode$$ = new BehaviorSubject(1);

  public treeStructure$$ = new BehaviorSubject<{
    [p: number]: StructureItem
  }>({});

  setActiveNode(nodeId: number) {
    if (this.getNodeFromStructureSync(nodeId)) {
      this.activeNode$$.next(nodeId);
    }
  }

  setNodeToStructure(node: StructureItem) {
    const currentValue = this.treeStructure$$.value;
    this.treeStructure$$.next({
      ...currentValue,
      [node.id]: node
    });
  }

  getNodeFromStructureSync(nodeId: number) {
    return this.treeStructure$$.value[nodeId];
  }

  isExpanded$(nodeId: number): Observable<boolean> {
    return this.treeStructure$$.pipe(map(it => {
      return it[nodeId]?.isExpanded;
    }));
  }

  expandNode(nodeId: number): void {
    this.setNodeToStructure({
      ...this.treeStructure$$.value[nodeId],
      isExpanded: true
    });
  }

  hideNode(nodeId: number): void {
    console.log(nodeId);
    this.setNodeToStructure({
      ...this.treeStructure$$.value[nodeId],
      isExpanded: false
    });
  }

  toggleNode(nodeId: number) {
    if (this.treeStructure$$.value[nodeId].isExpanded) {
      this.hideNode(nodeId);
    } else {
      this.expandNode(nodeId);
    }
  }

  handleKeyboardAction(direction: KeyDirection) {
    const activeNodeId = this.activeNode$$.getValue();
    const activeNode = this.getNodeFromStructureSync(activeNodeId);
    const isNodeRoot = !activeNode.parent;
    const parentNode = this.getNodeFromStructureSync(activeNode.parent || 0);
    const indexOfCurrentNode = parentNode?.children.indexOf(activeNodeId);
    const isNodeLast = parentNode?.children.length === indexOfCurrentNode - 1;
    const isNodeFirst = indexOfCurrentNode === 0;

    switch (direction) {
      case 'ArrowDown': {
        if (activeNode.isExpanded) {
          this.setActiveNode(activeNode.children[0]);
        } else {
          if (isNodeRoot) {
            return;
          } else {
            this.setActiveNode(parentNode.children[indexOfCurrentNode + 1]);
          }
        }
        break;
      }
      case 'ArrowUp': {
        if (isNodeFirst){
          if (!isNodeRoot) {
            this.setActiveNode(parentNode.id);
          }
        } else {
          if (!isNodeRoot) {
            this.setActiveNode(parentNode.children[indexOfCurrentNode - 1]);
          }
        }
        break;
      }
      case 'ArrowRight': {
        this.expandNode(activeNodeId);
        break;
      }
      case 'ArrowLeft': {
        if (activeNode.isExpanded){
          this.hideNode(activeNodeId);
        } else {
          if (!isNodeRoot) {
            this.setActiveNode(activeNode.parent as number);
          }
        }
        break;
      }
    }
  }





  // ############## GraphQL ############### //

  public getNode(nodeId: number): Observable<Maybe<NodeFragment>> {
    return this.getNodeGQL.watch({nodeId})
      .valueChanges
      .pipe(
        delay(500),
        map((it): Maybe<NodeFragment> => it.data.node_by_pk || null)
      );
  }

  public getRootNodes(): Observable<Maybe<NodeFragment[]>> {
    return this.getRootNodesGQL.watch()
      .valueChanges
      .pipe(
        delay(500),
        map((it): Maybe<NodeFragment[]> => it.data.root_node || null)
      );
  }

  public getNodeChildren(nodeId: any): Observable<Maybe<NodeFragment[]>> {
    return this.getNodeWithChildrenGQL.watch({nodeId})
      .valueChanges
      .pipe(
        map((it) => it.data.node_by_pk),
        tap(it => {
          if (it?.id) {
            const isExpanded = !!this.treeStructure$$.value[it.id]?.isExpanded;

            this.setNodeToStructure({
              id: it.id,
              children: it?.children.map(child => child.id),
              parent: it?.parentId,
              isExpanded,
            });

            it.children.map(node => {
              const isChildExpanded = !!this.treeStructure$$.value[node.id]?.isExpanded;

              this.setNodeToStructure({
                id: node.id,
                children: [],
                parent: node?.parentId,
                isExpanded: isChildExpanded,
              });
            });
          }
        }),
        map((it) => it?.children || [])
      );
  }

  renameNode(nodeId: number, nodeTitle: string) {
    return this.renameNodeGQL.mutate({nodeId, nodeTitle});
  }

  createNode(parentNodeId: number) {
    return this.createNodeGQL.mutate({parentNodeId},
      {
        refetchQueries: [
          {query: GetNodeWithChildrenDocument, variables: {nodeId: parentNodeId}}
        ]
      }
    );
  }

  deleteNode(nodeId: number, parentNodeId?: Maybe<number>) {
    return this.deleteNodeGQL.mutate({nodeId}, {
      refetchQueries: [
        {query: GetNodeWithChildrenDocument, variables: {nodeId: parentNodeId}}
      ]
    });
  }

  setStatus(nodeId: number, status: boolean) {
    return this.setStatusGQL.mutate({nodeId, value: status});
  }
}
