import { Component } from '@angular/core';
import { ProdutoService } from '../model/produto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../model/Produto';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  formulario : FormGroup

  produto : Produto;

  isCadastrado : boolean = false
  isInvalido : boolean = false

  constructor(private service: ProdutoService, private formBuilder: FormBuilder){
    this.produto = new Produto('', '', '', '')
    this.formulario = this.formBuilder.group({
      codigo: [this.produto.codigo, [Validators.required]],
      nome: [this.produto.nome, Validators.required],
      descricao: [this.produto.descricao, [Validators.required, Validators.minLength(20)]],
      valor: [this.produto.valor, Validators.required]
      
    });
  }


  

  cadastrar(){
    if (this.formulario.valid) {
      const produto: Produto = this.formulario.value;
      this.service.addProduto(produto);

      this.isCadastrado = true
      this.isInvalido = false


    }else{
      this.isInvalido = true
      this.isCadastrado = false
    }

    
  }
}
