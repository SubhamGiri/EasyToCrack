import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [NgClass,NgFor],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

  @Output() sidebarEvent = new EventEmitter<boolean>();      //Created a new event

  sidebarOpen = true;
  showToggleBtn = false;

  menuItems = [
    { icon: 'fas fa-home', label: 'Home', link: '/java/context' },
    { icon: 'fas fa-user', label: 'Profile', link: '/java/context' },
    { icon: 'fas fa-cog', label: 'Settings', link: '/java/context' },
    { icon: 'fas fa-home', label: 'Home', link: '/java/context' },
    { icon: 'fas fa-user', label: 'Profile', link: '/java/context' },
    { icon: 'fas fa-cog', label: 'Settings', link: '/java/context' },
    { icon: 'fas fa-home', label: 'Home', link: '/java/context' },
    { icon: 'fas fa-user', label: 'Profile', link: '/java/context' },
    { icon: 'fas fa-cog', label: 'Settings', link: '/java/context' },
    { icon: 'fas fa-home', label: 'Home', link: '/java/context' },
    { icon: 'fas fa-user', label: 'Profile', link: '/java/context' },
    { icon: 'fas fa-cog', label: 'Settings', link: '/java/context' },
    { icon: 'fas fa-home', label: 'Home', link: '/java/context' },
    { icon: 'fas fa-user', label: 'Profile', link: '/java/context' },
    { icon: 'fas fa-cog', label: 'Settings', link: '/java/context' }
  ];

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarEvent.emit(this.sidebarOpen);           // Triggers the parent (AppComponent)

  }
  ngOnInit() {
    this.sidebarOpen = window.innerWidth > 768;
    this.showToggleBtn = window.innerWidth > 768;
  }
  @HostListener('window:resize', [])
  onResize() {
    this.sidebarOpen = window.innerWidth > 768;
    this.showToggleBtn = window.innerWidth > 768;
  }

  /******************* Start : Clicking on sidebar popup*************************/
  @ViewChild('popup') popup!: ElementRef;
  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    
      const clickedInsidePopup = this.popup?.nativeElement.contains(event.target);

  }
  /******************* End : Clicking on sidebar popup*************************/
}
