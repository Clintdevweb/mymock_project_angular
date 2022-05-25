import { NgModule } from '@angular/core';
import { DoctorComponent } from './doctor.component';
import { IconModule } from 'src/assets/icons/icon.module';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import {DialogModule} from 'primeng/dialog';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
@NgModule({
  imports: [IconModule, CardModule, BadgeModule, DialogModule, MenuModule],
  declarations: [DoctorComponent],
  exports: [DoctorComponent],
})
export class DoctorModules {}
