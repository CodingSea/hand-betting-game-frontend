import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-game-over',
  imports: [HttpClientModule],
  providers: [PlayerService],
  templateUrl: './game-over.html',
  styleUrl: './game-over.css',
})
export class GameOver implements OnInit
{

  constructor(private playerService: PlayerService) { }

  ngOnInit(): void
  {
    this.playerService.addNewScore(sessionStorage.getItem("username")!, Number(sessionStorage.getItem("score")!)).subscribe({
      next: (res) => console.log("added new player log", res),
      error: (e) => console.log("error: ", e)
    });
  }

}
