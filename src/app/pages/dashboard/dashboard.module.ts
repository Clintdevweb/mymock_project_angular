import { NgModule } from '@angular/core';
import { IconModule } from 'src/assets/icons/icon.module';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';

@NgModule({
  imports: [IconModule, ChartModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class DashBoardModule {}
