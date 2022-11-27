import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminpagePageRoutingModule } from './adminpage-routing.module';

import { AdminpagePage } from './adminpage.page';

import { HeroComponent } from 'src/app/components/admin/hero/hero.component';
import { NavComponent } from 'src/app/components/main/nav/nav.component';
import { LightNavComponent } from 'src/app/components/main/light-nav/light-nav.component';
import { CreateComponent } from 'src/app/components/admin/create/create/create.component';
import { ReadComponent } from 'src/app/components/admin/read/read/read.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminpagePageRoutingModule
  ],
  declarations: [AdminpagePage,
    HeroComponent,
    NavComponent,
    LightNavComponent,
    CreateComponent,
    ReadComponent]
})
export class AdminpagePageModule {}
