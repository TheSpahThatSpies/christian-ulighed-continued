import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from 'src/app/components/admin/create/create/create.component';
import { ReadComponent } from 'src/app/components/admin/read/read/read.component';
import { FactCreateComponent } from 'src/app/components/admin/factcreate/factcreate/factcreate.component';
import { FactReadComponent } from 'src/app/components/admin/factread/read/factread.component';
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
    path:'create/:id',component:CreateComponent
  },
  {
    path:'read',component:ReadComponent
  },
  {
    path:'factcreate',component:FactCreateComponent
  },
  {
    path:'factcreate/:id',component:FactCreateComponent
  },
  {
    path:'factread',component:FactReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminpagePageRoutingModule {}
