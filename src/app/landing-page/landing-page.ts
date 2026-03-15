import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.css',
})
export class LandingPage implements OnInit
{
  @ViewChild("username", { static: true }) username!: ElementRef<HTMLInputElement>;

  constructor(private router: Router) { }

  ngOnInit(): void
  {
    const val = sessionStorage.getItem("username");
    if (val && this.username)
    {
      this.username.nativeElement.value = val;
    }
  }

  play()
  {
    sessionStorage.setItem('username', this.username.nativeElement.value);

    this.router.navigate([`/game-board`]);
  }
}
