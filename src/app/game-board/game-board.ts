import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { defaultTiles, Tile } from '../../Tile';
import { GameOver } from '../game-over/game-over';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game-board',
  imports: [RouterLink],
  templateUrl: './game-board.html',
  styleUrl: './game-board.css',
})
export class GameBoard implements OnInit
{
  // tiles info
  drawPile: Tile[] = [];
  discardPile: Tile[] = [];
  username: string = "";
  score: number = 0;
  tileHistory: Tile[] = [];

  // current player info
  currentTileValue: number | undefined;
  currentTile: Tile | undefined;
  bet: "Higher" | "Lower" | undefined;

  // behind the scenes info
  reshuffleCount: number = 0;
  shuffleLimit: number = 3;
  animateTile: boolean = false;

  constructor(private router: Router, private dialog: MatDialog) { }

  ngOnInit(): void
  {
    // get username from session storage
    this.username = sessionStorage.getItem("username")!;

    // loads the information once the board-game page loads
    this.reshuffleCount = 0;
    this.drawPile = [...defaultTiles];
    this.drawTile();
  }

  placeBet(bet: "Higher" | "Lower"): void
  {
    this.bet = bet;

    this.drawTile();
  }

  drawTile()
  {
    if (this.drawPile.length <= 0)
    {
      this.reshuffle();
      return;
    }

    const i = Math.floor(Math.random() * this.drawPile.length);
    this.animateTile = true;

    if (this.drawPile[i].type != "number")
    {
      if (this.currentTileValue == undefined)
      {
        this.currentTileValue = 5;
      }
      else
      {
        if (this.bet == "Higher")
        {
          if (this.currentTileValue < this.drawPile[i].currentValue)
          {
            this.drawPile[i].currentValue += 1;
            this.score += 1;
          }
          else if (this.currentTileValue > this.drawPile[i].currentValue)
          {
            this.drawPile[i].currentValue -= 1;
            this.score -= 1;
          }
        }
        else if(this.bet == "Lower")
        {
          if (this.currentTileValue > this.drawPile[i].currentValue)
          {
            this.drawPile[i].currentValue += 1;
            this.score += 1;
          }
          else if (this.currentTileValue < this.drawPile[i].currentValue)
          {
            this.drawPile[i].currentValue -= 1;
            this.score -= 1;
          }
        }
      }
    }
    else
    {
      const val = Number(this.drawPile[i].currentValue);

      if (this.bet == "Higher")
      {
        if (this.currentTileValue! < val)
        {
          this.score += 1;
        }
        else if (this.currentTileValue! > val)
        {
          this.score -= 1;
        }
      }
      else if (this.bet == "Lower")
      {
        if (this.currentTileValue! < val)
        {
          this.score -= 1;
        }
        else if (this.currentTileValue! > val)
        {
          this.score += 1;
        }
      }

    }

    this.currentTile = this.drawPile[i];
    this.currentTileValue = this.currentTile.currentValue;
    this.tileHistory.push(this.currentTile);
    this.discardPile.push(this.currentTile);
    this.drawPile.splice(i, 1);
    this.checkGameOver();

    setTimeout(() =>
    {
      this.animateTile = false;
    }, 500);
  }

  checkGameOver()
  {
    if (this.tileHistory.length < 2) return;

    // Check score of tiles on hand
    const val = this.tileHistory.at(-1)!.currentValue + this.tileHistory.at(-2)!.currentValue;
    if (val == 0 || val == 10)
    {
      sessionStorage.setItem("score", this.score.toString());
      this.gameOverPopup();
    }

    // Check the number of shuffles
    if (this.reshuffleCount === this.shuffleLimit)
    {
      sessionStorage.setItem("score", this.score.toString());

      this.gameOverPopup();
    }
  }

  // opend game over popup page
  gameOverPopup()
  {
    this.dialog.open(GameOver, {
      disableClose: true,
      width: '50em',
      height: '32em',
      data: {
        score: this.score,
        username: this.username
      }
    });
  }

  // returns the discarded tiles into the draw pile with a new set of tiles included
  reshuffle()
  {
    this.reshuffleCount++;
    const newTiles: Tile[] = [...this.discardPile, ...defaultTiles];
    this.discardPile = [];

    this.drawPile = newTiles;

    this.drawTile();
  }

}
