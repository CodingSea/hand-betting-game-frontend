import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-leaderboard',
  imports: [HttpClientModule],
  providers: [PlayerService],
  templateUrl: './leaderboard.html',
  styleUrl: './leaderboard.css',
})
export class Leaderboard implements OnInit
{
  players: Player[] | undefined;

  constructor(private playerService: PlayerService) {}

  ngOnInit(): void
  {
    this.playerService.getHighScores().subscribe(data => this.players = data);
  }


}
