import { Router } from '@angular/router';
import * as farmerActions from '../../store/actions/farmer.actions';
import { Component, OnInit, } from '@angular/core';
import *as fromFarmer from '../../store/reducer/farmer.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Farmer } from 'src/app/model/farmers-model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-farmer-edit',
  templateUrl: './farmer-edit.component.html',
  styleUrls: ['./farmer-edit.component.css']
})
export class FarmerEditComponent implements OnInit {

  wards = ['Githobokoni', 'Gituamba'];
  subCounties = ['Githunguri', 'Kiambaa', 'Lari', 'Limuru', 'Kabete', 'Gatundu North',
    'Gatundu South', 'Juja', 'Kikuyu', 'Thika town', 'Ruiru', 'Kiambu Town'];
  counties = ['Kiambu', 'Muranga', 'Karinyaga'];
  genders = ['Male', 'Female',];
  lands = ['Fully Owned', 'Leased'];
  education = ['Primary School', 'Secondary School','Diploma', 'Undergraduate', 'Graduate', 'Post-Graduate'];

  farmerForm: FormGroup;

  constructor(
    private store: Store<fromFarmer.AppState>,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
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
      identification: ['', Validators.required],
      email: ['', Validators.required],
      landNumber: ['', Validators.required],
      educationLevel: ['', Validators.required],

      id: null
    })


    const farmer$: Observable<Farmer> =
      this.store.select(
        fromFarmer.getCurrentFarmer
      );

    farmer$.subscribe(currentFarmer => {
      if (currentFarmer) {
        this.farmerForm.patchValue({
          name: currentFarmer.name,
          phone: currentFarmer.phone,
          dateOfBirth: currentFarmer.dateOfBirth,
          gender: currentFarmer.gender,
          sizeOfFarm: currentFarmer.sizeOfFarm,
          geoLocation: currentFarmer.geoLocation,
          ward: currentFarmer.ward,
          subCounty: currentFarmer.subCounty,
          county: currentFarmer.county,
          landOwnership: currentFarmer.landOwnership,
          id: currentFarmer.id,
          email: currentFarmer.email,
          landNumber: currentFarmer.landNumber,
          educationLevel: currentFarmer.educationLevel,
          identification: currentFarmer.identification

        });
      }

    });

  }

  updateFarmer() {
    const updatedFarmer: Farmer = {
      name: this.farmerForm.get('name').value,
      id: this.farmerForm.get('id').value,
      phone: this.farmerForm.get('phone').value,
      dateOfBirth: this.farmerForm.get('dateOfBirth').value,
      gender: this.farmerForm.get('gender').value,
      sizeOfFarm: this.farmerForm.get('sizeOfFarm').value,
      geoLocation: this.farmerForm.get('geoLocation').value,
      ward: this.farmerForm.get('ward').value,
      subCounty: this.farmerForm.get('subCounty').value,
      county: this.farmerForm.get('county').value,
      landOwnership: this.farmerForm.get('landOwnership').value,
      landNumber: this.farmerForm.get('landNumber').value,
      identification: this.farmerForm.get('identification').value,
      email: this.farmerForm.get('email').value,
      educationLevel: this.farmerForm.get('educationLevel').value

    }

    this.store.dispatch(new farmerActions.
      UpdateFarmer(updatedFarmer));
    this.toastr.success('Details updated successful');
    this.router.navigate(['/farmer-list']);


  }
}
