import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { HowToSubscribeComponent } from './how-to-subscribe/how-to-subscribe.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    LayoutModule
  ],
  declarations: [HomePage, HowToSubscribeComponent]
})
export class HomePageModule {}
