import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  listaProdutos : any[]

  constructor(listaProdutos : any[]) {
    this.listaProdutos = listaProdutos
}

  getProdutos(){
    return this.listaProdutos
  }

  addProduto(produto: any){
    this.listaProdutos.push()
  }

}


