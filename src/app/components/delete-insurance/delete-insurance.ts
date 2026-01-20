import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InsuranceService } from '../../services/insurance.service';

@Component({
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delete-insurance.html',
  styleUrls: ['./delete-insurance.css']
})
export class DeleteInsuranceComponent {

  policyId!: number;

  constructor(private service: InsuranceService) {}

  deletePolicy() {
    if (!this.policyId) {
      alert('Please enter Policy ID');
      return;
    }

    if (confirm('Are you sure you want to delete this policy?')) {
      this.service.deleteInsurance(this.policyId).subscribe({
        next: () => {
          alert('Insurance policy deleted successfully');
          this.policyId = undefined!;
        },
        error: () => {
          alert('Policy ID not found');
        }
      });
    }
  }
}
