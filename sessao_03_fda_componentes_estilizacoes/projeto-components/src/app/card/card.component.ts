import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  type = 'Teste';
  price = 100;

  getFullPrice() {
    // setTimeout(() => {
    //   console.log('Set Timeout');
    //   this.type = 'Simples';
    // }, 4000);
    return 'R$' + this.price + ',00/Mês';
  }
}
