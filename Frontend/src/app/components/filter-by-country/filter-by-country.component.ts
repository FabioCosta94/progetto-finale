import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CovidData } from '../../models/data.model';

@Component({
  selector: 'app-filter-by-country',
  templateUrl: './filter-by-country.component.html',
  styleUrls: ['./filter-by-country.component.css']
})
export class FilterByCountryComponent implements OnInit {

  constructor(private dataService:DataService) { }

  public covidData : CovidData [];
  public country:string; //per memorizzare la stringa dell’input
  

  getEntries(){ //mi prendo i dati
    this.dataService.getData().subscribe( (response : any) => {
      this.covidData = response;
    })
  }
  ngOnInit() {
    this.getEntries()
  }


  //Questo codice javascript va' trasformato in typescript
//   $("#country").autocomplete({
//     source: covidData
// });

// $('#country').change(function () {
//     alert($('#country').val());
// });
}
