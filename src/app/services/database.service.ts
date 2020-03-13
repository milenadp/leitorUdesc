import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Dev {
  id: number,
  nome: string,
  codeRead: string
}

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private dbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
 
  centroCusto = new BehaviorSubject([]);
  produtos = new BehaviorSubject([]);

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) { 
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'patrimonio.db',
        location: 'default'
      })
      .then((db: SQLiteObject) => {
          this.database = db;
          this.seedDatabase();
      });
    });
  }

  seedDatabase() {
    this.http.get('/assets/arquivos/insert.sql', { responseType: 'text'})
    .subscribe(sql => {
      this.sqlitePorter.importSqlToDb(this.database, sql)
        .then(_ => {
          this.carregaCcs();
          this.loadProdutos();
          this.dbReady.next(true);
        })
        .catch(e => console.error(e));
    });
  }

  getDatabaseState() {
    return this.dbReady.asObservable();
  }
 
  getCcs(): Observable<Dev[]> {
    return this.centroCusto.asObservable();
  }
 
  getProdutos(): Observable<any[]> {
    return this.produtos.asObservable();
  }

  carregaCcs() {
    return this.database.executeSql('SELECT * FROM centroCusto', []).then(data => {
      let ccs: Dev[] = [];
 
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          let skills = [];
          if (data.rows.item(i).skills != '') {
            skills = JSON.parse(data.rows.item(i).skills);
          }
 
          ccs.push({ 
            id: data.rows.item(i).id,
            nome: data.rows.item(i).nome,  
            codeRead: data.rows.item(i).codigoBarras
           });
        }
      }
      this.centroCusto.next(ccs);
    });
  }
 
  addCentroCusto(nome, codigoBarras) {
    let data = [nome, codigoBarras];
    return this.database.executeSql('INSERT INTO centroCusto (nome, codigoBarras) VALUES (?, ?)', data).then(data => {
      this.carregaCcs();
    });
  }
 
  getCentroCusto(id): Promise<Dev> {
    return this.database.executeSql('SELECT * FROM centroCusto WHERE id = ?', [id]).then(data => { 
      return {
        id: data.rows.item(0).id,
        nome: data.rows.item(0).nome,  
        codeRead: data.rows.item(0).codigoBarras
      }
    });
  }
 
  deleteCentroCusto(id) {
    return this.database.executeSql('DELETE FROM centroCusto WHERE id = ?', [id]).then(_ => {
      this.carregaCcs();
      this.loadProdutos();
    });
  }
 
  updateCentroCusto(dev: Dev) {
    let data = [dev.nome, dev.codeRead];
    return this.database.executeSql(`UPDATE centroCusto SET nome = ?, codigoBarras = ? WHERE id = ${dev.id}`, data).then(data => {
      this.carregaCcs();
    })
  }
 
  loadProdutos() {
    let query = 'SELECT produto.nome, produto.codigoBarras, centroCusto.nome AS centroCusto FROM produto JOIN centroCusto ON centroCusto.id = produto.ccId';
    return this.database.executeSql(query, []).then(data => {
      let produtos = [];
      if (data.rows.length > 0) {
        for (var i = 0; i < data.rows.length; i++) {
          produtos.push({ 
            nome: data.rows.item(i).name,
            id: data.rows.item(i).id,
            centroCusto: data.rows.item(i).centroCusto,
            codigoBarras: data.rows.item(i).codigoBarras,
           });
        }
      }
      this.produtos.next(produtos);
    });
  }
 
  addProduto(nome, centroCusto, codigoBarras) {
    let data = [nome, centroCusto, codigoBarras];
    return this.database.executeSql('INSERT INTO produto (nome, ccId, codigoBarras) VALUES (?, ?, ?)', data).then(data => {
      this.loadProdutos();
    });
  }
}

