import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
})
export class LayoutModule { }
