import { Component, OnInit } from '@angular/core';

export class Phone{
  constructor(public title: string, 
              public price: number, 
              public company: string)
  { }
}




@Component({
  selector: 'app-form-ng',
  templateUrl: './form-ng.component.html',
  styleUrls: ['./form-ng.component.scss']
})
export class FormNGComponent  {

  constructor() { }

  title: string = "";
    price: number = 0;
    company: string = "";
     
    phones: Phone[] = [];
    companies: string[] = ["Apple", "Huawei", "Xiaomi", "Samsung", "LG", "Motorola", "Alcatel"];
     
    addPhone(){
        this.phones.push(new Phone(this.title, this.price, this.company));
    }


    
    
}

