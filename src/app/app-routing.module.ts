
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { UnitsComponent } from './units/units.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { ViewUnitsComponent } from './view-units/view-units.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';

import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyComponent } from './property/property.component';
import { AuthGuard } from './auth.guard';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { MapComponent } from './map/map.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/reports' },
  { path: 'login', component: LoginComponent },
  { path: 'property-list', component: PropertyListComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'property', component: PropertyComponent, canActivate: [AuthGuard] },
  { path: 'gallery', component: GalleryComponent },
  { path: 'view-units', component: ViewUnitsComponent },
  { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
  { path: 'units', component: UnitsComponent },
  { path: 'map', component: MapComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'editprop', component: EditPropertyComponent },
  { path: 'farmers', loadChildren: () => import('./farmers/farmers.module').then(m => m.FarmersModule) },

  {path:'**',component:PagenotfoundComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
