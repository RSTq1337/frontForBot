import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './city-list/city-list.component';
import { AddCityComponent } from './add-city/add-city.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-city', pathMatch: 'full' },
  { path: 'view-city', component: CityListComponent },
  { path: 'add-city', component: AddCityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
