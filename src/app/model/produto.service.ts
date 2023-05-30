import { Injectable } from '@angular/core';
import { Produto } from './Produto';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  listaProdutos : Produto[]

  constructor() {
    this.listaProdutos = []
}

  getProdutos(){
    return this.listaProdutos
  }

  addProduto(produto: Produto){
    if (!this.veridicaCodigo(produto.codigo)) {
      this.listaProdutos.push(produto);
    } else {
      console.log('ERRO! O código do produto já existe na lista.');
    }
  }

  veridicaCodigo(codigo: string): boolean {
    return this.listaProdutos.some(produto => produto.codigo === codigo);
  }

  removerProduto(produto: Produto) {
    const index = this.listaProdutos.indexOf(produto);
    if (index !== -1) {
      this.listaProdutos.splice(index, 1);
      console.log('Produto removido:', produto);
    } else {
      console.log('produto não encontrado na lista.');
    }
  }

  removerTodos(){
    this.listaProdutos.length = 0
  }
  

  

}


