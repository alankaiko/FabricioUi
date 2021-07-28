export class Carro {
  codigo: number;
  modelo = new Modelo;
  anomodelo: string;
  anofabricacao: string;
  cor: string;
  valorveiculo: string;
  valorfipe: string;
  placaveiculo: string;
  quilometragem: string;
  observacao: string;
  blindado: boolean;
  versao: string;
  imagens = new Array<Imagem>();
}

export class Marca {
  codigo: number;
  nome: string;
  descricao: string;
}

export class Modelo {
  codigo: number;
  nome: string;
  descricao: string;
  marca = new Marca;
}

export class Imagem {
  codigo: number;
  nome: string;
}
