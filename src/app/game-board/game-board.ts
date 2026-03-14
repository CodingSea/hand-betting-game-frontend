import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { defaultTiles, Tile } from '../../Tile';

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

  currentTileValue: number | undefined;
  currentTile: Tile | undefined;

  tileHistory: Tile[] = [];

  bet: "Higher" | "Lower" | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void
  {
    this.username = sessionStorage.getItem("username")!;

    this.drawPile = defaultTiles;
    // this.drawPile = makeASet(this.drawPile, 4);

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
      if(this.currentTileValue == undefined)
      {
        this.currentTileValue = 5;
      }
      else
      {
        if(this.bet == "Higher")
        {
          if(this.currentTileValue < 5)
          {
            this.currentTileValue = 6;
            this.score += 1;
          }
          else if(this.currentTileValue > 5)
          {
            this.currentTileValue = 4;
            this.score -= 1;
          }
        }
        else
        {
          if(this.currentTileValue > 5)
          {
            this.currentTileValue = 6;
            this.score += 1;
          }
          else if(this.currentTileValue < 5)
          {
            this.currentTileValue = 4;
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
        if(this.currentTileValue! < val)
        {
          this.score += 1;
        }
        else if(this.currentTileValue! > val)
        {
          this.score -= 1;
        }
      }
      else if (this.bet == "Lower")
      {
        if(this.currentTileValue! < val)
        {
          this.score -= 1;
        }
        else if(this.currentTileValue! > val)
        {
          this.score += 1;
        }
      }

      this.currentTileValue = Number(this.drawPile[i].value);
      
    }

    this.currentTile = this.drawPile[i];
    this.tileHistory.push(this.currentTile);
    this.discardPile.push(this.currentTile);
    this.drawPile.splice(i, 1);
    this.checkGameOver();
  }

  checkGameOver()
  {
    if(this.tileHistory.length < 2) return;

    const val = this.tileHistory.at(-1)!.currentValue + this.tileHistory.at(-2)!.currentValue;

    if(val == 0 || val == 10)
    {
      sessionStorage.setItem("score", this.score.toString());
      
      this.router.navigate([`/game-over`]);
    }
  }

}
