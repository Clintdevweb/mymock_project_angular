import { NgModule } from '@angular/core';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { ListAppointmentComponent } from './list-appointment/list-appointment.component';
import { AppointmentComponent } from './appointment.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentsService } from 'src/app/services/appointments.service';
import { IconModule } from 'src/assets/icons/icon.module';

@NgModule({
  imports: [
   
    CommonModule,
    MaterialModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    IconModule,
  ],
  declarations: [
    NewAppointmentComponent,
    ListAppointmentComponent,
    AppointmentComponent,
  ],
  bootstrap: [AppointmentComponent],
  exports: [
    NewAppointmentComponent,
    ListAppointmentComponent,
    AppointmentComponent,
  ],
  providers: [AppointmentsService],
})
export class AppointmentModule {}
