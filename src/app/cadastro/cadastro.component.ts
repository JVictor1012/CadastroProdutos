import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  produto : any = {}

  constructor(private service: ProdutoService){

  }

  cadastrar(){
    this.service.addProduto(this.produto);
    this.produto = {}
  }

}
