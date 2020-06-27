import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CovidData } from '../../models/data.model';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-filter-by-country',
  templateUrl: './filter-by-country.component.html',
  styleUrls: ['./filter-by-country.component.css']
})
export class FilterByCountryComponent implements OnInit {

  constructor(private dataService:DataService) { }

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  public covidData : CovidData [];
  public country:string; //per memorizzare la stringa dell’input
  

  getEntries(){ //mi prendo i dati
    this.dataService.getData().subscribe( (response : any) => {
      this.covidData = response;
    })
  }
  ngOnInit() {
    this.getEntries()
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


  //Questo codice javascript va' trasformato in typescript
//   $("#country").autocomplete({
//     source: covidData
// });

// $('#country').change(function () {
//     alert($('#country').val());
// });
}
