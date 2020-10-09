import { Component, OnInit } from '@angular/core';
import { ServiceService} from '../service.service';

@Component({
  selector: 'app-global',
  templateUrl: './global.page.html',
  styleUrls: ['./global.page.scss'],
})
export class GlobalPage implements OnInit {

cases ;

  constructor(public service:ServiceService) { }

  ngOnInit() {

    this.service.getGlobal().subscribe((item)=>{
      console.log(item)
      this.cases =item;
    })


    
  }

  

}
