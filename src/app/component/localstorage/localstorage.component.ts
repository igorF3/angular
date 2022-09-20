import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-localstorage',
  templateUrl: './localstorage.component.html',
  styleUrls: ['./localstorage.component.scss']
})
export class LocalstorageComponent implements OnInit {

  session: any;


  saveData() {
    let data = {id: 1, name:  'Igor'}
    

    localStorage.setItem('session', JSON.stringify(data))
  }


  loadData() {
    let data:any = localStorage.getItem('session')
    this.session = JSON.parse(data)
  }



  constructor() {
    
   }

  
  ngOnInit(): void {
   
   
  }


 
   
}


