import { Component } from '@angular/core';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.scss'
})
export class FotosComponent {

  arrayFotos=[
    {src:'assets/fotos/1.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/2.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/3.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/4.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/5.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/6.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/7.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/8.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/9.jpg', desc:'Foto muito bonita'},
    {src:'assets/fotos/arroja.png', desc:'Foto arroja'},
    {src:'assets/fotos/canecas.png', desc:'Foto canecas'},
    {src:'assets/fotos/igreja.png', desc:'Foto igreja'},
  ]

}
