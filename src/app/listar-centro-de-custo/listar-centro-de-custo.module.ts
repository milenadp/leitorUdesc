import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListarCentroDeCustoPageRoutingModule } from './listar-centro-de-custo-routing.module';

import { ListarCentroDeCustoPage } from './listar-centro-de-custo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListarCentroDeCustoPageRoutingModule
  ],
  declarations: [ListarCentroDeCustoPage]
})
export class ListarCentroDeCustoPageModule {}
