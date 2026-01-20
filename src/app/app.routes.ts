import { Routes } from '@angular/router';
import { AddInsuranceComponent } from './components/add-insurance/add-insurance';
import { GetInsuranceComponent } from './components/get-insurance/get-insurance';
import { UpdateInsuranceComponent } from './components/update-insurance/update-insurance';
import { DeleteInsuranceComponent } from './components/delete-insurance/delete-insurance';

export const routes: Routes = [
  { path: '', redirectTo: 'insurances', pathMatch: 'full' },
  { path: 'add', component: AddInsuranceComponent },
  { path: 'insurances', component: GetInsuranceComponent },
  { path: 'update', component: UpdateInsuranceComponent },   // ✅ FIXED
  { path: 'delete', component: DeleteInsuranceComponent },   // ✅ ADDED
];
