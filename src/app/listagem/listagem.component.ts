import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../model/produto.service';
import { Produto } from '../model/Produto';


@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']

})
export class ListagemComponent implements OnInit {

  listaProdutos: Produto[]

  constructor(private service: ProdutoService){
    this.listaProdutos = []

  }

  ngOnInit(){
    console.log(this.service.getProdutos)
    console.log(this.listaProdutos)
    this.listaProdutos = this.service.getProdutos()
  }

  removerItem(produto: Produto){
    this.service.removerProduto(produto)
  }

  removerTodos(){
    this.service.removerTodos()
  }


}
