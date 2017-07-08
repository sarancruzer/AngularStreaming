import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
artistCtrl: FormControl;
  filteredArtists: any;

  artists = [
    'David Guetta',
    'Ed Sheeran',
    'Swae Lee',
    'Calvin Harris',
    'Kendrick Lamar',
    'Twenty One Pilots',
    'Childsplay',
    'Pell',
    'Drake',
    'J. Cole'
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
