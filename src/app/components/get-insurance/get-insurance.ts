import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceService } from '../../services/insurance.service';
import { Insurance } from '../../models/insurance.model';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-insurance.html',
  styleUrls: ['./get-insurance.css']
})
export class GetInsuranceComponent implements OnInit {

  insurances: Insurance[] = [];

  constructor(private service: InsuranceService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => {
      this.insurances = data;
    });
  }
}
