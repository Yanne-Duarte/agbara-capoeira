import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-desc-grad',
  templateUrl: './desc-grad.component.html',
  styleUrl: './desc-grad.component.scss'
})
export class DescGradComponent {

  @Input() src: any;
  @Input() topicosArray: any;

}
