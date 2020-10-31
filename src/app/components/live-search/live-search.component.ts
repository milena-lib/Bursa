import { Component, OnInit, ViewChild } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { Bank, BANKS } from '../../classes/Banks';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { map, startWith, take, takeUntil } from 'rxjs/operators';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@Component({
  selector: 'app-live-search',
  templateUrl: './live-search.component.html',
  styleUrls: ['./live-search.component.css']
})
export class LiveSearchComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  
  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onChangeSelect($event) {
    console.log("change value: ", $event);
  }
}
