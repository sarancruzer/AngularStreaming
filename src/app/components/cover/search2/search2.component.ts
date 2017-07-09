import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchService } from '../../../shared';

@Component({
  selector: 'app-search2',
  templateUrl: './search2.component.html',
  styleUrls: ['./search2.component.scss']
})
export class Search2Component implements OnInit {
  inputField: FormControl = new FormControl();
  searchResults: any[] = [];

  constructor(private searchService: SearchService) { }

  ngOnInit() {    
    this.inputField.valueChanges
      .subscribe(inputField => this.searchService.searchArtists(inputField)
      .subscribe(result => {
        if (result.status === 400) {
          return;
        } else { 
          this.searchResults = result.artists.items; 
        }
      }));
  }

}
