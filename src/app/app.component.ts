import { Component } from '@angular/core';
import { NgModel} from '@angular/forms';
import {DataService} from './data.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DataService]
})
export class AppComponent {
 
  myForm : FormGroup;
    constructor(){
        this.myForm = new FormGroup({
              
            "userName": new FormControl("Tom", Validators.required),
            "userEmail": new FormControl("", [
                                Validators.required, 
                                Validators.email 
                            ]),
            "userPhone": new FormControl("", Validators.pattern("[0-9]{10}")) 
        });
    }
      
    submit(){
        console.log(this.myForm);
    }
  

    images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

}


