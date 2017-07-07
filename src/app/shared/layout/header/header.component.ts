import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  artistCtrl: FormControl;
  filteredArtists: any;

  artists = [
    'David Guetta',
    'Ed Sheeran',
    'Swae Lee',
    'Calvin Harris',
    'Kendrick Lamar'
  ];

  constructor() {
    this.artistCtrl = new FormControl();
    this.filteredArtists = this.artistCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterArtists(name));
  }

  ngOnInit() {
  }

  filterArtists(val: string) {
    return val ? this.artists.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.artists;
  }

}
