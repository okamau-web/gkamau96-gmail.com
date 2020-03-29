import { Component, OnInit,ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as farmerActions from '../../store/actions/farmer.actions';
import * as fromFarmer from '../../store/reducer/farmer.reducer';
import { Farmer } from 'src/app/model/farmers-model';



@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css']
})
export class FarmerDetailsComponent implements OnInit {

  wards = ['Githobokoni', 'Gituamba'];
  subCounties = ['Githunguri', 'Kiambaa', 'Lari', 'Limuru', 'Kabete', 'Gatundu North',
    'Gatundu South', 'Juja', 'Kikuyu', 'Thika town', 'Ruiru', 'Kiambu Town'];
  counties = ['Kiambu'];
  genders = ['Male', 'Female',]
  lands = ['Fully Owned', 'Leased'];

  farmerForm: FormGroup;

  @ViewChild('farmerForm', { static: false }) formValues;

  newFarmer: Farmer = {

  name:'',
  phone:'',
  dateOfBirth:'',
  gender:'',
  sizeOfFarm:'',
  geoLocation:'',
  ward:'',

  subCounty:'',
  county:'',
  landOwnership:'',


  };

  constructor(
    private store: Store<fromFarmer.AppState>,
   ) { }

  ngOnInit() {

  }

  addFarmer() {
    this.store.dispatch(new farmerActions.CreateFarmer(
      this.newFarmer));
    this.newFarmer = {
      name:'',
      phone:'',
      dateOfBirth:'',
      gender:'',
      sizeOfFarm:'',
      geoLocation:'',
      ward:'',
      subCounty:'',
      county:'',
      landOwnership:'',



    };

    this.formValues.resetForm();
}

}



