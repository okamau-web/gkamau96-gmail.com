import { FarmersModule } from './farmers/farmers.module';
import { TenantModule } from './tenant/tenant.module';
import { TenantsService } from './tenant/tenants.service';

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreModule } from '@ngrx/store';
import { PropertyEffect } from './store/effects/property.effects';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { EffectsModule } from '@ngrx/effects';
import { MatCardModule } from '@angular/material/card';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { GalleryComponent } from './gallery/gallery.component';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { PropertyComponent } from './property/property.component';
import { propertyReducer } from './store/reducer/property.reducer';
import { AuthReducer } from './store/reducer/auth.reducer';
import { PropertyListComponent } from './property-list/property-list.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ViewUnitsComponent } from './view-units/view-units.component';
import { ReportsComponent } from './reports/reports.component';
import { HomeComponent } from './home/home.component';
import { UnitsComponent } from './units/units.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FooterComponent } from './shared/footer/footer.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { EditPropertyComponent } from './edit-property/edit-property.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FarmersService } from './farmers/farmers.service';
import { ToastrModule} from 'ngx-toastr'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    GalleryComponent,
    PropertyComponent,
    PropertyListComponent,
    ViewUnitsComponent,
    ReportsComponent,
    HomeComponent,
    UnitsComponent,
    FooterComponent,
    EditPropertyComponent,
    MapComponent,
    PagenotfoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    TenantModule,

    ReactiveFormsModule,
    MaterialModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatCheckboxModule,
    EffectsModule.forRoot([PropertyEffect]),
    StoreModule.forRoot({ properties: propertyReducer, auth: AuthReducer, }),
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyDyNGdUKaJu574UitqUo1RKX6ly6NlKKeM' }),
    MatCardModule,

    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),

    MatTableModule,

    MatPaginatorModule,

    MatSortModule,

    LayoutModule,

    MatToolbarModule,

    MatButtonModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule,
    FarmersModule,

    AppRoutingModule,
  ],
  providers: [
    TenantsService,
    AuthService,
    AuthGuard,
    FarmersService,
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
