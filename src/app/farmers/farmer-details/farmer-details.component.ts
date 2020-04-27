import { timeout } from 'rxjs/operators';
import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as farmerActions from '../../store/actions/farmer.actions';
import * as fromFarmer from '../../store/reducer/farmer.reducer';
import { Farmer } from 'src/app/model/farmers-model';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-farmer-details',
  templateUrl: './farmer-details.component.html',
  styleUrls: ['./farmer-details.component.css']
})
export class FarmerDetailsComponent implements OnInit {

  wards = ['Githobokoni', 'Gituamba'];
  subCounties = ['Githunguri', 'Kiambaa', 'Lari', 'Limuru', 'Kabete', 'Gatundu North',
    'Gatundu South', 'Juja', 'Kikuyu', 'Thika town', 'Ruiru', 'Kiambu Town'];
  counties = ['Kiambu', 'Muranga', 'Karinyaga'];
  genders = ['Male', 'Female',]
  lands = ['Fully Owned', 'Leased'];
  education = ['Primary School', 'Secondary School', 'Undergraduate', 'Graduate', 'Post-Graduate']
  farmerForm: FormGroup;

  @ViewChild('farmerForm', { static: false }) formValues;

  newFarmer: Farmer = {
    identification: '',
    name: '',
    phone: '',
    dateOfBirth: '',
    gender: '',
    sizeOfFarm: '',
    geoLocation: '',
    ward: '',
    email: '',
    landNumber: '',
    educationLevel: '',
    subCounty: '',
    county: '',
    landOwnership: '',


  };

  constructor(private toastr: ToastrService,
    private store: Store<fromFarmer.AppState>,
  ) { }

  ngOnInit() {

  }

  addFarmer() {
    this.store.dispatch(new farmerActions.CreateFarmer(
      this.newFarmer));
    this.newFarmer = {
      name: '',
      phone: '',
      dateOfBirth: '',
      gender: '',
      sizeOfFarm: '',
      geoLocation: '',
      ward: '',
      email: '',
      landNumber: '',
      educationLevel: '',
      subCounty: '',
      county: '',
      landOwnership: '',
      identification: ''



    };

    this.formValues.resetForm();
    this.toastr.success('Farmer registered successfuly');
  }

}



