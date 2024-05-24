import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-img-video',
  templateUrl: './card-img-video.component.html',
  styleUrl: './card-img-video.component.scss'
})
export class CardImgVideoComponent {

  @Input() nome: any;
  @Input() foto: any;
  @Input() texto: any;
  @Input() array: any; 



}
