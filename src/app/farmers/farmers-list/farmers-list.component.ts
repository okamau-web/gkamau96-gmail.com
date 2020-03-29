import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as farmerActions from '../../store/actions/farmer.actions';
import * as fromFarmer from '../../store/reducer/farmer.reducer';
import { Farmer } from 'src/app/model/farmers-model';



@Component({
  selector: 'app-farmers-list',
  templateUrl: './farmers-list.component.html',
  styleUrls: ['./farmers-list.component.css']
})
export class FarmersListComponent implements OnInit {

  farmers$: Observable<Farmer[]>;
  error$: Observable<String>;

  constructor(private store: Store<fromFarmer.AppState>,
    private route: Router) {}

  ngOnInit() {
    this.store.dispatch(new farmerActions.LoadFarmers());
    this.farmers$ = this.store.pipe(select(fromFarmer.getFarmers));
    this.error$ = this.store.pipe(select(fromFarmer.getError));
  }

  deleteFarmer(farmer: Farmer) {
    if (confirm('Are You Sure You want to Delete the User?')) {
      this.store.dispatch(new farmerActions.DeleteFarmer(farmer.id));
    }
  }

  editFarmer(farmer: Farmer) {
    this.store.dispatch(new farmerActions.LoadFarmer(farmer.id));
    this.route.navigate(['/farmer-edit']);
  }

}
