import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Header } from './Templates/header/header';
import { Sidebar } from './Templates/sidebar/sidebar';
import { Footer } from './Templates/footer/footer';
import { Main } from './Templates/main/main';
import { Headertopics } from './Templates/headertopics/headertopics';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterModule,Header,Sidebar,Footer,Main,Headertopics,NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  fullScreen = true;
  //sidebarVisible = true;

  // ngOnInit() {
  //   this.fullScreen = window.innerWidth > 768;
  //   if(!this.fullScreen)      //Mobile screen
  //   {
  //     this.fullScreen = true;
  //   }
  // }
  @HostListener('window:resize', [])    
  onResize() {                                //I am generating true in both cases mobile and PC
    this.fullScreen = window.innerWidth > 768;
    if(!this.fullScreen)      //Mobile screen
    {
      this.fullScreen = true;
    }
  }
  onSidebarEvent(isVisible:boolean) {
    this.fullScreen = !isVisible;
  }
}
