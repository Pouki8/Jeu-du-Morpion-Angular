import { Component } from '@angular/core';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent {
  joueurActuel = 'X';
  tableau = Array(9).fill('');

  jouerCase(index: number): void {
    if (!this.tableau[index]) {
      this.tableau[index] = this.joueurActuel;
      this.joueurActuel = this.joueurActuel === 'X' ? 'O' : 'X';
    }
  }

  reinitialiser(): void {
    this.tableau = Array(9).fill('');
    this.joueurActuel = 'X';
  }
}
