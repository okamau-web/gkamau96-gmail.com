import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersRoutingModule } from './farmers-routing.module';
import { FarmersComponent } from './farmers.component';
import { AnimalsComponent } from './animals/animals.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';


@NgModule({
  declarations: [FarmersComponent, AnimalsComponent, FarmerDetailsComponent],
  imports: [
    CommonModule,
    FarmersRoutingModule
  ]
})
export class FarmersModule { }
