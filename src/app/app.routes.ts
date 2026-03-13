import { Routes } from '@angular/router';
import { App } from './app';
import { GameBoard } from './game-board/game-board';
import { GameOver } from './game-over/game-over';
import { Leaderboard } from './leaderboard/leaderboard';
import { LandingPage } from './landing-page/landing-page';

export const routes: Routes = [
    {path: "", component: LandingPage},
    {path: "game-board", component: GameBoard},
    {path: "game-over", component: GameOver},
    {path: "leaderboard", component: Leaderboard}
];
