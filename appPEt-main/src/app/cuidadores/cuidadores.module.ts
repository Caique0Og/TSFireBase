import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadoresPageRoutingModule } from './cuidadores-routing.module';

import { CuidadoresPage } from './cuidadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadoresPageRoutingModule
  ],
  declarations: []
})
export class CuidadoresPageModule {}
