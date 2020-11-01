import {Component, HostListener, OnInit} from '@angular/core';
import {KeyDirection, TreeService} from '../../services/tree.service';
import {Maybe, NodeFragment} from '../../../generated/graphql';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent implements OnInit {
  nodes$!: Observable<Maybe<NodeFragment[]>>;
  public treeStructure$$: any;

  constructor(
    protected treeService: TreeService,
  ) { }

  ngOnInit(): void {
    this.nodes$ = this.treeService.getRootNodes();
    this.treeStructure$$ = this.treeService.treeStructure$$;
  }
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (['ArrowRight', 'ArrowLeft', 'ArrowDown', 'ArrowUp'].includes(event.key)) {
      this.treeService.handleKeyboardAction(event.key as KeyDirection);
    }
  }
}
