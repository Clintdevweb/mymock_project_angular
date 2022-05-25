import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorComponent } from './pages/doctor/doctor.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'doctors', component: DoctorComponent },
  { path: 'departments', component: AppointmentComponent },
  { path: 'patients', component: AppointmentComponent },
  { path: 'chats', component: AppointmentComponent },
  { path: 'calls', component: AppointmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
