import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryPageComponent } from './delivery-page.component';

const routes: Routes = [
  { path: '', component: DeliveryPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryPageRoutingModule { }
