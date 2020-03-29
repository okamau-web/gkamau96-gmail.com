
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FarmersComponent } from './farmers.component';
import { FarmersListComponent } from './farmers-list/farmers-list.component';
import { FarmerEditComponent } from './farmer-edit/farmer-edit.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
const routes: Routes = [
  { path: 'farm', component: FarmersComponent },
  {path: 'farmer-reg', component:FarmerDetailsComponent},
  {path:'farmer-list',component:FarmersListComponent},
  {path:'farmer-edit', component:FarmerEditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmersRoutingModule { }
