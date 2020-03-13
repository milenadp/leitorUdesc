import { Component, OnInit } from '@angular/core';

import { DatabaseService, Dev } from 'src/app/services/database.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-centro-de-custo',
  templateUrl: './listar-centro-de-custo.page.html',
  styleUrls: ['./listar-centro-de-custo.page.scss'],
})
export class ListarCentroDeCustoPage implements OnInit {

  ccs: Dev[] = [];
 
  produtos: Observable<any[]>;
 
  centroCusto = {};
  produto = {};
 
  selectedView = 'ccs';
 
  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.db.getCcs().subscribe(ccs => {
          this.centroCusto = ccs;
        })
        this.produtos = this.db.getProdutos();
      }
    });
  }

  addCentroCusto() { 
    this.db.addCentroCusto(this.centroCusto['nome'], this.centroCusto['codeRead'])
    .then(_ => {
      this.centroCusto = {};
    });
  }
 
  addProduto() {
    this.db.addProduto(this.produto['nome'], this.produto['codigoBarras'], this.produto['centroCusto'])
    .then(_ => {
      this.produto = {};
    });
  }

  /* Como colocar dados JSON em um array no Ionic:
   *
   * var json;
   *
   * this.http.get('link/to/your/api').map(res => res.json()).subscribe(data => {
   *   json = data;
   * });
   * 
   * e depois:
   * 
   * and then parse it in this way:
   * 
   * var qp = []
   * for (var i of json.data) {
   *    p.push(i.quantity_produced);
   * }
   * 
   * Bether solution:
   * 
   * 

interface Product {
  id: number;
  date: string;
  // &c
}

interface ProductsResponse {
  data: Product[];
}

class Provider {
  constructor(private _http: HttpClient) {}
  allProducts(): Observable<Product[]> {
    return this._http.get<ProductsResponse>(url).pipe(
      map(prsp => prsp.data));

  onlyQuantities(): Observable<number[]> {
    return this.allProducts().pipe(
      map(prods => prods.map(prod => prod["quantity_produced"])));
  }
}
   * 
   * 
   * https://forum.ionicframework.com/t/how-to-get-json-data-in-array-in-ionic/98552
   * 
   */
}
