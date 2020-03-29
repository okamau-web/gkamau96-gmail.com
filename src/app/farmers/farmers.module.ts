
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';
import { FarmersRoutingModule } from './farmers-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FarmersComponent } from './farmers.component';
import { AnimalsComponent } from './animals/animals.component';
import { FarmerDetailsComponent } from './farmer-details/farmer-details.component';
import { FarmersListComponent } from './farmers-list/farmers-list.component';
import { FarmerEditComponent } from './farmer-edit/farmer-edit.component';
import { farmerReducer } from '../store/reducer/farmer.reducer';
import { FarmerEffect } from '../store/effects/farmer.effects';


@NgModule({
  declarations: [FarmersComponent, AnimalsComponent,
    FarmerDetailsComponent, FarmersListComponent, FarmerEditComponent],
  imports: [
    CommonModule,
    FarmersRoutingModule,
    MaterialModule,
    StoreModule.forFeature('farmers', farmerReducer),
    EffectsModule.forFeature([FarmerEffect])
  ],
  exports: [
    FarmersComponent, AnimalsComponent,
    FarmerDetailsComponent, FarmerEditComponent, FarmersListComponent
  ]
})
export class FarmersModule { }
