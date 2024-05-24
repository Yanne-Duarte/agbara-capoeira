import { Component } from '@angular/core';

@Component({
  selector: 'app-contra-mestre',
  templateUrl: './contra-mestre.component.html',
  styleUrl: './contra-mestre.component.scss'
})
export class ContraMestreComponent {


  txtBandas = [
    'Contramestre Bandas',
    'Contramestre Bandas',
    'Contramestre Bandas',
  ]
  txtBarravento = [
    'Contramestre Barravento',
    'Contramestre Barravento',
    'Contramestre Barravento',
    'Contramestre Barravento',
  ]


  fotoBandas = 'assets/fotos/4.jpg';
  fotoBarravento = 'assets/fotos/4.jpg';
}
