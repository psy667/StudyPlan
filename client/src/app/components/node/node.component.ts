import {Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {Maybe, NodeFragment} from '../../../generated/graphql';
import {KeyDirection, TreeService} from '../../services/tree.service';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node!: NodeFragment;
  @ViewChild('inputElement') inputElement!: ElementRef;

  nodeChildren$: Observable<Maybe<NodeFragment[]>> = of(null);
  isEditable = false;
  isFullInfo = false;

  public isExpanded$!: Observable<boolean>;
  public isActive$!: Observable<boolean>;
  public isActive!: boolean;
  private nodeTitleInput = '';

  constructor(
    protected treeService: TreeService,
  ) { }

  ngOnInit(): void {
    this.isExpanded$ = this.treeService.isExpanded$(this.node.id);
    this.nodeChildren$ = this.treeService.getNodeChildren(this.node.id);
    this.isActive$ = this.treeService.activeNode$.pipe(map(it => it === this.node.id));
    this.isActive$.subscribe(r => this.isActive = r);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (event.code === 'Space' && this.isActive) {
      this.handleSetStatus();
    }
    if (event.code === 'Enter' && this.isActive) {
      this.handleSaveTitle();
    }
  }

  handleToggleExpand() {
    this.treeService.toggleNode(this.node.id);
  }

  handleSelectNode() {
    this.treeService.setActiveNode(this.node.id);
    return true;
  }

  handleInput($event: any) {
    this.nodeTitleInput = $event.target.value;
  }

  handleSaveTitle() {
    this.isEditable = false;
    if (this.nodeTitleInput) {
      if (this.nodeTitleInput !== this.node.title) {
        this.treeService.renameNode(this.node.id, this.nodeTitleInput)
          .subscribe(() => this.isEditable = false);
      } else {
        this.isEditable = false;
      }
    } else {
      // this.treeService.deleteNode(this.node.id, this.node.parentId).subscribe(() => this.isEditable = false);
    }
  }

  toggleEditableMode(): boolean {
    this.isEditable = !this.isEditable;

    setTimeout(() => {
      this.inputElement.nativeElement.focus();
    }, 10);
    return true;
  }

  handleAddNode() {
    this.treeService.createNode(this.node.id).subscribe();
  }

  handleSetStatus() {
    this.treeService.setStatus(this.node.id, !this.node.isCompleted).subscribe();
  }
}
