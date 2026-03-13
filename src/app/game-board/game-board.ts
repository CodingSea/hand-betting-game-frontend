import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game-board',
  imports: [RouterLink],
  templateUrl: './game-board.html',
  styleUrl: './game-board.css',
})
export class GameBoard implements OnInit
{
  username: string = "";

  ngOnInit(): void
  {
    this.username = sessionStorage.getItem("username")!;
    console.log(this.username);
  }

}
