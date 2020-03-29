import { Router } from '@angular/router';
import * as farmerActions from '../../store/actions/farmer.actions';
import { Component, OnInit, } from '@angular/core';
import *as fromFarmer from '../../store/reducer/farmer.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Farmer } from 'src/app/model/farmers-model';

@Component({
  selector: 'app-farmer-edit',
  templateUrl: './farmer-edit.component.html',
  styleUrls: ['./farmer-edit.component.css']
})
export class FarmerEditComponent implements OnInit {

  wards = ['Githobokoni', 'Gituamba'];
  subCounties = ['Githunguri', 'Kiambaa', 'Lari', 'Limuru', 'Kabete', 'Gatundu North',
    'Gatundu South', 'Juja', 'Kikuyu', 'Thika town', 'Ruiru', 'Kiambu Town'];
  counties = ['Kiambu'];
  genders = ['Male', 'Female',]
  lands = ['Fully Owned', 'Leased'];

  farmerForm: FormGroup;

  constructor(
    private store: Store<fromFarmer.AppState>,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    this.farmerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      sizeOfFarm: ['', Validators.required],
      geoLocation: ['', Validators.required],
      ward: ['', Validators.required],
      subCounty: ['', Validators.required],
      county: ['', Validators.required],
      landOwnership: ['', Validators.required],
      id: null
    })


    const farmer$: Observable<Farmer> =
      this.store.select(
        fromFarmer.getCurrentFarmer
      );

    farmer$.subscribe(currentFarmer => {
      if (currentFarmer) {
        this.farmerForm.patchValue({
           name:currentFarmer.name,
            phone:currentFarmer.phone,
            dateOfBirth:currentFarmer.dateOfBirth,
            gender:currentFarmer.gender,
            sizeOfFarm:currentFarmer.sizeOfFarm,
            geoLocation:currentFarmer.geoLocation,
            ward:currentFarmer.ward,
            subCounty:currentFarmer.subCounty,
            county:currentFarmer.county,
            landOwnership:currentFarmer.landOwnership,
            id:currentFarmer.id



        });
      }

    });

  }

  updateFarmer() {
    const updatedFarmer: Farmer = {
      name: this.farmerForm.get('name').value,
      id:this.farmerForm.get('id').value,
      phone:this.farmerForm.get('phone').value,
      dateOfBirth:this.farmerForm.get('dateOfBirth').value,
      gender:this.farmerForm.get('gender').value,
      sizeOfFarm:this.farmerForm.get('sizeOfFarm').value,
      geoLocation:this.farmerForm.get('geoLocation').value,
      ward:this.farmerForm.get('ward').value,
      subCounty:this.farmerForm.get('subCounty').value,
      county:this.farmerForm.get('county').value,
      landOwnership:this.farmerForm.get('landOwnership').value,


    }

    this.store.dispatch(new farmerActions.
      UpdateFarmer(updatedFarmer));
    this.router.navigate(['/farmer-list']);


  }
}
