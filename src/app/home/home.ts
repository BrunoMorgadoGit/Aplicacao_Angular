import { Component } from '@angular/core';
import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

type Categoria = 'higiene' | 'beleza' | 'limpeza';

interface Produto {
  nome: string;
  qnt: number;
  status_do_estoque: 'disponivel' | 'em falta' | 'baixo estoque';
  preco: number;
  icone: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  categoriaAtiva: Categoria = 'higiene';

  categorias: { label: string; valor: Categoria; icone: string }[] = [
    { label: 'Higiene', valor: 'higiene', icone: '🧴' },
    { label: 'Beleza', valor: 'beleza', icone: '💄' },
    { label: 'Limpeza', valor: 'limpeza', icone: '🧹' },
  ];

  produtos: Record<Categoria, Produto[]> = {
    higiene: [
      { nome: 'Shampoo', qnt: 20, status_do_estoque: 'disponivel', preco: 18.90, icone: '🧴' },
      { nome: 'Condicionador', qnt: 45, status_do_estoque: 'disponivel', preco: 21.50, icone: '🫧' },
      { nome: 'Desodorante', qnt: 1, status_do_estoque: 'em falta', preco: 12.00, icone: '🌿' },
      { nome: 'Sabonete Líquido', qnt: 8, status_do_estoque: 'baixo estoque', preco: 9.90, icone: '🧼' },
    ],
    beleza: [
      { nome: 'Batom', qnt: 30, status_do_estoque: 'disponivel', preco: 35.00, icone: '💄' },
      { nome: 'Base Facial', qnt: 2, status_do_estoque: 'baixo estoque', preco: 89.90, icone: '✨' },
      { nome: 'Máscara de Cílios', qnt: 0, status_do_estoque: 'em falta', preco: 42.00, icone: '👁️' },
      { nome: 'Perfume', qnt: 15, status_do_estoque: 'disponivel', preco: 120.00, icone: '🌸' },
    ],
    limpeza: [
      { nome: 'Detergente', qnt: 60, status_do_estoque: 'disponivel', preco: 3.50, icone: '🍋' },
      { nome: 'Desinfetante', qnt: 5, status_do_estoque: 'baixo estoque', preco: 8.90, icone: '🧹' },
      { nome: 'Esponja de Aço', qnt: 0, status_do_estoque: 'em falta', preco: 2.00, icone: '🪣' },
      { nome: 'Amaciante', qnt: 22, status_do_estoque: 'disponivel', preco: 14.00, icone: '🌊' },
    ],
  };

  selecionarCategoria(cat: Categoria): void {
    this.categoriaAtiva = cat;
  }

  get produtosAtivos(): Produto[] {
    return this.produtos[this.categoriaAtiva];
  }

  get totalItens(): number {
    return this.produtosAtivos.reduce((acc, p) => acc + p.qnt, 0);
  }

  get totalDisponivel(): number {
    return this.produtosAtivos.filter(p => p.status_do_estoque === 'disponivel').length;
  }
}
