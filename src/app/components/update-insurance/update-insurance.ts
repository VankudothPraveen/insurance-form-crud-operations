import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-insurance.html',
  styleUrls: ['./update-insurance.css']
})
export class UpdateInsuranceComponent implements OnInit {

  insurance: Insurance = {
    id: 0,
    policyHolderName: '',
    email: '',
    phone: '',
    policyType: '',
    policyDuration: 0,
    premiumAmount: 0
  };

  constructor(private service: InsuranceService) {}

  ngOnInit() {
    // load latest record automatically
    this.service.getAll().subscribe(data => {
      if (data.length > 0) {
        this.insurance = { ...data[data.length - 1] };
      }
    });
  }

  updatePolicy() {
    if (!this.insurance.id) {
      alert('Policy ID is required');
      return;
    }

    console.log('PUT payload:', this.insurance);

    this.service.updateInsurance(this.insurance.id, this.insurance)
      .subscribe(() => {
        alert('Insurance Policy Updated Successfully');
      });
  }
}
