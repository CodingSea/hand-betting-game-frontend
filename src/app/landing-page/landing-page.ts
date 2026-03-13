import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage
{
  @ViewChild("username") username!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) {}

  play()
  {
    sessionStorage.setItem('username', this.username.nativeElement.value);

    this.router.navigate([`/game-board`]);
  }
}
