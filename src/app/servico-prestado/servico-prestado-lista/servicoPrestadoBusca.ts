import { Cliente } from './../../clientes/cliente';
export interface ServicoPrestadoBusca {
  descricao: string;
  valor: number;
  data: string;
  cliente: Cliente;
}
