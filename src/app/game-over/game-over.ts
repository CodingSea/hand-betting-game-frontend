import { Component, Inject, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContainer, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-game-over',
  imports: [HttpClientModule, MatButtonModule, MatDialogModule],
  providers: [PlayerService],
  templateUrl: './game-over.html',
  styleUrl: './game-over.css',
})
export class GameOver implements OnInit
{

  constructor(private playerService: PlayerService,
    private router: Router,
    private dialogRef: MatDialogRef<GameOver>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void
  {

  }

  async saveScore()
  {
    await this.playerService.addNewScore(this.data.username, this.data.score).subscribe({
      next: (res) =>
      {
        console.log("added new player log", res);
        this.dialogRef.close();
        this.router.navigate([`/leaderboard`]);
      },
      error: (e) =>
      {
        console.log("error: ", e);
        this.dialogRef.close();
        this.router.navigate([`/`]);
      }
    });
  }

  tryAgain()
  {
    this.dialogRef.close();
    this.router.navigate([`/game-board`]);
    window.location.reload();
  }

  exit()
  {
    this.dialogRef.close();
    this.router.navigate([`/`]);
  }

}
