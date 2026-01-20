import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  standalone: true,
  selector: 'app-add-insurance',
  imports: [FormsModule],
  templateUrl: './add-insurance.html',
  styleUrls: ['./add-insurance.css']
})
export class AddInsuranceComponent {

  insurance: Insurance = {
    policyHolderName: '',
    email: '',
    phone: '',
    policyType: '',
    policyDuration: 0,
    premiumAmount: 0
  };

  constructor(
    private service: InsuranceService,
    private router: Router
  ) {}

  submit() {
  this.service.addInsurance(this.insurance).subscribe(() => {
    alert('Insurance Application Submitted');
    this.router.navigate(['/insurances']);
  });
}

}
