import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() post:Post;
  constructor() { }

  ngOnInit() {
  }
loveIt(){
  this.post.loveIts+=1;
}
dontLoveIt(){
  this.post.loveIts-=1;
}
}
