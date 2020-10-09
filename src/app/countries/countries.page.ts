import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../service.service';


@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  countriescases = []

  constructor(public service:ServiceService, public router: Router) { }

  ngOnInit() {


    this.service.getCountries().subscribe((item:any)=>{
      console.log(item)
      this.countriescases =item;
      console.log(this.countriescases)
    })
  }
  

  getItems(ev: any) {
    // Reset items back to all of the items
   

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.countriescases =  this.countriescases.filter((item) => {
        return (item.country.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}


