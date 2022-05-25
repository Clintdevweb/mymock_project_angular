import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppointmentModule } from './pages/appointment/appointment.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { ShareModule } from './shared/share.module';
import { DoctorModules } from './pages/doctor/doctor.module';
import { DashBoardModule } from './pages/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    AppointmentModule,
    ShareModule,
    DoctorModules,
    DashBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
