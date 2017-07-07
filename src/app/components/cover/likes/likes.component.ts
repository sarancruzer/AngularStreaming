import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  @Input() totalLikes = 0;
  @Input() Like = false;

  constructor() { }

  ngOnInit() {
  }
  
  onLike() {
      this.Like = !this.Like;
      this.totalLikes += this.Like ? 1 : -1;
  }
}
