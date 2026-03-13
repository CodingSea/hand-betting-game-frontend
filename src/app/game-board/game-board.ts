import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { defaultTiles, makeASet, Tile } from '../../Tile';

@Component({
  selector: 'app-game-board',
  imports: [RouterLink],
  templateUrl: './game-board.html',
  styleUrl: './game-board.css',
})
export class GameBoard implements OnInit
{
  drawPile: Tile[] = [];
  discardPile: Tile[] = [];
  username: string = "";
  score: number = 0;

  handValue: number | undefined;

  tileHistory: Tile[] = [];

  bet: "Higher" | "Lower" | undefined;


  ngOnInit(): void
  {
    this.username = sessionStorage.getItem("username")!;

    this.drawPile = defaultTiles;
    this.drawPile = makeASet(this.drawPile, 4);

    this.drawTile();
  }

  placeBet(bet: "Higher" | "Lower"): void
  {
    this.bet = bet;

    this.drawTile();
  }

  drawTile()
  {
    if(this.drawPile.length <= 0) return;

    const i = Math.floor(Math.random() * this.drawPile.length);
    
    if(this.drawPile[i].type != "number")
    {
      if(this.handValue == undefined)
      {
        this.handValue = 5;
      }
      else
      {
        if(this.bet == "Higher")
        {
          if(this.handValue < 5)
          {
            this.handValue = 6;
            this.score += 1;
          }
          else if(this.handValue > 5)
          {
            this.handValue = 4;
            this.score -= 1;
          }
        }
        else
        {
          if(this.handValue > 5)
          {
            this.handValue = 6;
            this.score += 1;
          }
          else if(this.handValue < 5)
          {
            this.handValue = 4;
            this.score -= 1;
          }
        }
      }
    }
    else
    {
      const val = Number(this.drawPile[i].value);

      if(this.bet == "Higher")
      {
        if(this.handValue! < val)
        {
          this.score += 1;
        }
        else if(this.handValue! > val)
        {
          this.score -= 1;
        }
      }
      else if (this.bet == "Lower")
      {
        if(this.handValue! < val)
        {
          this.score -= 1;
        }
        else if(this.handValue! > val)
        {
          this.score += 1;
        }
      }

      this.handValue = Number(this.drawPile[i].value);
      
    }

    console.log(this.drawPile[i]);
    this.discardPile.push(this.drawPile[i]);
    this.drawPile.splice(i, 1);
  }

}
