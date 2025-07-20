import { NgClass, NgFor } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Constants } from '../../Java/Services/Constants/constants';

@Component({
  selector: 'app-headertopics',
  imports: [NgFor],
  templateUrl: './headertopics.html',
  styleUrl: './headertopics.css'
})
export class Headertopics {

  labels = [
    'Home', 'Trending', 'Popular', 'Technology', 'Sports', 'News',
    'Movies', 'Music', 'Fashion', 'Gaming', 'Books', 'Health',
    'Home', 'Trending', 'Popular', 'Technology', 'Sports', 'News',
    'Movies', 'Music', 'Fashion', 'Gaming', 'Books', 'Health'
  ];

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -150,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 150,
      behavior: 'smooth'
    });
  }
}
