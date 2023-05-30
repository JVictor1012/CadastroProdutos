export class Produto {
    codigo: string
    nome: string
    descricao: string
    valor: string
  
    constructor(codigo: string, nome: string, descricao: string, valor: string) {
      this.descricao = descricao
      this.nome = nome
      this.codigo = codigo
      this.valor = valor
    }
  }
  