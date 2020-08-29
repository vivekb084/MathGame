import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title:string = 'AmplusSolar';

  public player1:boolean=true;
  public player2:boolean=false;

  public sumPlayer1=0;
  public sumPlayer2=0;

  public winner:string=null

  public randomArray=[];
  constructor(){

  }

  ngOnInit() {
    let length =Math.floor((Math.random() * 10) + 1);
    for(let i=0;i<length;i++){
      this.randomArray.push(Math.floor((Math.random() * 100) + 1));
    }
  }

  public IncreaseSum(position:string){
    if(position=='left'){
      this.increasePlayerLeft();
    }
    else{
      this.increasePlayerRight();
    }
    if(!this.randomArray.length){
      if(this.sumPlayer1>this.sumPlayer2){
        this.winner="Player One wins";
      }
      else if(this.sumPlayer1<this.sumPlayer2)
      {
        this.winner="Player Two wins";
      }
      else{
        this.winner="Match Ties";
      }
    }
    this.togglePlayers();
  }

  public increasePlayerLeft(){
    if(this.player1){
      this.sumPlayer1+=this.randomArray[0];
    }
    else{
      this.sumPlayer2+=this.randomArray[0];
    }
    this.randomArray.shift();
  }

  public increasePlayerRight(){
    if(this.player1){
      this.sumPlayer1+=this.randomArray[this.randomArray.length-1];
    }
    else{
      this.sumPlayer2+=this.randomArray[this.randomArray.length-1];
    }
    this.randomArray.pop();
  }

  public togglePlayers(){
    this.player1=!this.player1;
    this.player2=!this.player2;
  }

}
