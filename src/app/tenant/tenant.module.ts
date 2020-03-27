import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StatementComponent } from './statement/statement.component';
import { LandingComponent } from './landing/landing.component';
import { TenantComponent } from './tenant/tenant.component';
import { customerReducer } from '../store/reducer/tenant.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TenantEffect } from '../store/effects/tenant.effects';
import { TenantRoutingModule } from './tenant-routing.module';

@NgModule({
  declarations: [
    AddComponent,
    EditComponent,
    ListComponent,
    InvoiceComponent,
    StatementComponent,
    TenantComponent,
    LandingComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TenantRoutingModule,

    StoreModule.forFeature('customers', customerReducer),
    EffectsModule.forFeature([TenantEffect]),
  ],
  exports: [
    AddComponent, EditComponent, ListComponent,
    InvoiceComponent, StatementComponent, TenantComponent,
    LandingComponent
  ]
})
export class TenantModule { }
