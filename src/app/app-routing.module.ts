import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  {
    path: 'contact',
    loadChildren: () => import('./modules/general/contact/contact.module')
      .then(mod => mod.ContactModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./modules/general/menu/menu.module')
      .then(mod => mod.MenuModule)
  },
  {
    path: 'delivery-page',
    loadChildren: () => import('./modules/general/delivery-page/delivery-page.module')
      .then(mod => mod.DeliveryPageModule)
  },
  
  {
    path: 'about',
    loadChildren: () => import('./modules/general/about/about.module')
      .then(mod => mod.AboutModule)
  },
  {
    path: 'careers',
    loadChildren: () => import('./modules/general/careers/careers.module')
      .then(mod => mod.CareersModule)
  },
  {
    path: 'employees-list',
    loadChildren: () => import('./modules/general/employees-list/employees-list.module')
      .then(mod => mod.EmployeesListModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./modules/general/signin/signin.module')
      .then(mod => mod.SigninModule)
  },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
