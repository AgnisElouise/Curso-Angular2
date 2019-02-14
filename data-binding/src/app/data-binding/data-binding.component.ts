import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  //styleUrls: ['./data-binding.component.css']
  styles: [
  `.highlight{
    background-color: yellow;
    font-weight: bold;}
  `]
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/';

  valorAtual:string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  nome: string = 'abc';

  getValor(){
    return 1;
  }
  getCurtirCurso(){
    return true;
  }

  botaoClicado(){
    alert('Botão Clicado!');
  }
  onKeyUP(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  OnMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit() {
  }

}
