import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  ngOnInit(): void
  {
    this.username = sessionStorage.getItem("username")!;

    this.drawPile = defaultTiles;
  }

}
