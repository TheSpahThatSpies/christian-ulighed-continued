import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from 'src/app/components/admin/create/create/create.component';
import { ReadComponent } from 'src/app/components/admin/read/read/read.component';

import { AdminpagePage } from './adminpage.page';

const routes: Routes = [
  {
    path: '',
    component: AdminpagePage
  },
  {
    path:'create',component:CreateComponent
  },
  {
    path:'read',component:ReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpagePageRoutingModule {}
