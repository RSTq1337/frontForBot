import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { City } from '../city';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {

  constructor(private cityservice:CityService) { }

  city : City=new City();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  citysaveform=new FormGroup({
    name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    description:new FormControl('',[Validators.required,Validators.minLength(5)])
  });

  saveCity(saveCity){
    this.city=new City();
    this.city.name=this.CityName.value;
    this.city.description=this.CityDescription.value;
    this.submitted = true;
    this.save();
  }



  save() {
    this.cityservice.createCity(this.city)
      .subscribe(data => console.log(data), error => console.log(error));
    this.city = new City();
  }

  get CityName(){
    return this.citysaveform.get('name');
  }

  get CityDescription(){
    return this.citysaveform.get('description');
  }

  addCityForm(){
    this.submitted=false;
    this.citysaveform.reset();
  }
}
