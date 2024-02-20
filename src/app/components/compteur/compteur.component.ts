import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrl: './compteur.component.scss'
})
export class CompteurComponent {
  total: number = 0;

  augmenter(): void {
    this.total++;
  }

  diminuer(): void {
    this.total--;
  }
}
