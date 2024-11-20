import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';



@NgModule({
  declarations: [
    CardRoxoComponent,
    CardRoxoButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardRoxoComponent,
    CardRoxoButtonComponent //como eu não estou fazendo uma referencia direta desse componente no app.component então eu não preciso exportar esse componente
  ],
})
export class CardsModule { }
