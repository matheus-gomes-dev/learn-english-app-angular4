import { Component, OnInit , EventEmitter, Output, OnDestroy} from '@angular/core';

import { Frase } from '../shared/frase.model'
import { FRASES } from './frases-mock'

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase

  public progresso: number = 0
  public tentativas: number = 3;

  //para enviar um sinal de uma classe filho para classe pai, uso o @Output
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter()

  constructor() { 
    this.atualizaRodada()
    console.log(this.rodadaFrase) 
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log("Painel destruido!");
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    //console.log(this.resposta)
  }

  public verificarResposta(): void {
    
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta')

      //trocar pergunta da rodada
      this.rodada++
      if(this.rodada === 4)
        this.encerrarJogo.emit('vitória')

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)
      console.log(this.progresso)

      //atualiza o objeto rodadaFrase 
      this.atualizaRodada()

    } else {
      this.tentativas--

      if(this.tentativas === -1){
        this.encerrarJogo.emit('derrota')
      }
    }

    
  }

  public atualizaRodada(): void{
    //define frase a ser exibida
    this.rodadaFrase = this.frases[this.rodada]

    //limpa campo textarea
    this.resposta = '';
  }

}
