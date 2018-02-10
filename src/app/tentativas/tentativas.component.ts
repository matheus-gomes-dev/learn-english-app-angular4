import { Component, OnInit, OnChanges, Input} from '@angular/core';

import { Coracao } from '../shared/coracao.model'

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number //inputed variable

  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() { 
    console.log(this.coracoes)
  }

  ngOnChanges(){
    //runs when inputed variable changes 
    console.log(this.tentativas)
  }

  ngOnInit() {
  }

}
