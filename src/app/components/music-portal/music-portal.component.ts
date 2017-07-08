import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music-portal',
  templateUrl: './music-portal.component.html',
  styleUrls: ['./music-portal.component.scss']
})
export class MusicPortalComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }  
  
  public coverImages: Array<Object> = [
    {
      img: '/assets/img/amusement.jpg',
      title: 'Random band - Random song (2017) 01',
      link: '/test'
    },
    {
      img: '/assets/img/amusement.jpg',
      title: 'Random band - Random song (2017) 02',
      link: '/test'
    },
    {
      img: '/assets/img/amusement.jpg',
      title: 'Random band - Random song (2017) 03',
      link: '/test'
    },
    {
      img: '/assets/img/amusement.jpg',
      title: 'Random band - Random song (2017) 04',
      link: '/test'
    },
  ];

}
