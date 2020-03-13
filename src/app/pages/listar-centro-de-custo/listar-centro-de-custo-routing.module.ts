import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListarCentroDeCustoPage } from './listar-centro-de-custo.page';

const routes: Routes = [
  {
    path: '',
    component: ListarCentroDeCustoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListarCentroDeCustoPageRoutingModule {}
