import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadoresPage } from './cuidadores.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadoresPageRoutingModule {}
