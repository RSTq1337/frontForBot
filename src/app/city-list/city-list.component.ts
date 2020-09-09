import {Component, NgIterable, OnInit} from '@angular/core';
import { CityService } from '../city.service';
import { City } from '../city';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

 constructor(private cityservice:CityService) { }

  citiesArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  cities: City[];    //MYCHANGE
  city : City=new City();
  deleteMessage=false;
  citylist:any;
  isupdated = false;


  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.cityservice.getCityList().subscribe(data =>{
    this.cities = data;
    this.dtTrigger.next();
    })
  }

  deleteCity(id: number) {
    this.cityservice.deleteCity(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.cityservice.getCityList().subscribe(data =>{
            this.cities =data
            })
        },
        error => console.log(error));
  }


  updateCity(id: number){
    this.cityservice.getCity(id)
      .subscribe(
        data => {
          this.citylist=data
        },
        error => console.log(error));
  }

  cityupdateform=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    description:new FormControl()
  });

  updateCty(updcty){
    this.city=new City();
   this.city.id=this.CityId.value;
   this.city.name=this.CityName.value;
   this.city.description=this.CityDescription.value;

   this.cityservice.updateCity(this.city.id,this.city).subscribe(
    data => {
      this.isupdated=true;
      this.cityservice.getCityList().subscribe(data =>{
        this.cities =data
        })
    },
    error => console.log(error));
  }

  get CityName(){
    return this.cityupdateform.get('name');
  }

  get CityDescription(){
    return this.cityupdateform.get('description');
  }


  get CityId(){
    return this.cityupdateform.get('id');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
