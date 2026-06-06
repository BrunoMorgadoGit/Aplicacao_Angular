import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  visibilidadeTexto = false;

  produtos = [
    { nome: 'shampoo', qnt: 20, status_do_estoque: 'disponivel' },
    { nome: 'condicionador', qnt: 45, status_do_estoque: 'disponivel' },
    { nome: 'desodorante', qnt: 1, status_do_estoque: 'em falta' }
  ]

  mostrarTexto(): void {
    this.visibilidadeTexto = !this.visibilidadeTexto;
  }
}
