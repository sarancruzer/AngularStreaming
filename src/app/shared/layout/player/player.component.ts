import { Component, OnInit } from '@angular/core';

// import { PlayerService } from '../../services';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  value = 0;

  constructor(// private playerService: PlayerService
              ) { }

  ngOnInit() {
  }

}
