import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-texto',
  templateUrl: './card-texto.component.html',
  styleUrl: './card-texto.component.scss'
})
export class CardTextoComponent {

  @Input() nome: any;
  @Input() foto: any;
  @Input() texto: any;
  @Input() size: any;
  @Input() weigth: any;
  @Input() half: boolean = false; 




}
