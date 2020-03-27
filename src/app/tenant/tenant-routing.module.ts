import { LandingComponent } from './landing/landing.component';


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TenantComponent } from './tenant/tenant.component';
import { EditComponent } from './edit/edit.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { StatementComponent } from './statement/statement.component';
import { ListComponent } from './list/list.component';

import { AddComponent } from './add/add.component';



const routes: Routes = [
    { path: 'tenants', component: TenantComponent },
    { path: 'edit', component: EditComponent },
    { path: 'add', component: AddComponent },
    { path: 'invoice', component: InvoiceComponent },
    {path: 'list', component:ListComponent},
    {path:'statement',component:StatementComponent},
    {path:'landing',component:LandingComponent}

  ];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TenantRoutingModule { }
