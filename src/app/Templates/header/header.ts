import { Component } from '@angular/core';
import { Constants } from '../../Java/Services/Constants/constants';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  constructor(public cons: Constants) {}
}
