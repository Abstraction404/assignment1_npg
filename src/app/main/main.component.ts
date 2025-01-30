import { Component } from '@angular/core';

import { Card } from '../classSetups';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ MatCardModule ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
    card = new Card();
}
