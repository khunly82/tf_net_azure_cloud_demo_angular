import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.scss',
  // interpolation: ['♥', '♥']
})
export class HelloComponent {
  prenom: string = 'khun';
  age: number = 42;
  date_naissance: Date = new Date('1982-05-06');
  estAdmin: boolean = true;

  // ingredients: Array<string> = ['sel', 'sucre', 'poivre'];
  ingredients: string[] = ['sel', 'sucre', 'poivre'];
}
