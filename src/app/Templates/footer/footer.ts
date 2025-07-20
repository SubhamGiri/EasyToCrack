import { NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [NgClass],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer implements OnInit {
  isFooterOpen = false;
  isMobile = false;

  ngOnInit(): void {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.isFooterOpen = true;
    }
  }

  toggleFooterCollapse() {
    this.isFooterOpen = !this.isFooterOpen;
  }

}
