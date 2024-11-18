import { Component, OnInit, OnDestroy } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-locais-treino',
  templateUrl: './locais-treino.component.html',
  styleUrl: './locais-treino.component.scss'
})
export class LocaisTreinoComponent implements OnInit, OnDestroy {
  private maps: L.Map[] = [];

  locais = [
    {
      nome: 'Mestre Nininho',
      local: 'Centro Social Paroquial do Cacém',
      Morada: 'R. da Paz 5, 2735-480 Agualva-Cacém',
      horario: 'Terça-feiras e quintas das 19h às 20h30',
      contacto: '987 654 321',
      coordinates: [38.7666, -9.2998] as [number, number]
    },
    {
      nome: 'CM Bandas',
      local: 'Pavilhão da Escola Secundária de Caneças',
      Morada: 'N 250 72 1685, Caneças',
      horario: 'Terça-feiras e quintas das 20h30 às 22h00',
      contacto: '987 654 321',
      coordinates: [38.8156, -9.2277] as [number, number]
    },
    {
      nome: 'CM Barravento',
      local: 'Pavilhão Moinhos da Arroja',
      Morada: 'R. Alice Cruz 13, 2675-583 Odivelas',
      horario: 'Segundas, quartas e sexta das 20h45 às 22h30',
      contacto: '987 654 321',
      coordinates: [38.7933, -9.1830] as [number, number]
    },
  ];

  ngOnInit() {
    // Aumentando o timeout para garantir que o DOM esteja completamente carregado
    setTimeout(() => {
      this.initMaps();
    }, 300);
  }

  private initMaps(): void {
    this.locais.forEach((local, index) => {
      const mapElement = document.getElementById(`map${index}`);
      if (mapElement) {
        // Limpa qualquer instância anterior do mapa
        mapElement.innerHTML = '';

        setTimeout(() => {
          const map = L.map(`map${index}`, {
            zoomControl: true,
            scrollWheelZoom: true,
            renderer: L.canvas() // Tente usar o renderer canvas
          }).setView(local.coordinates, 15);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
            tileSize: 512,
            zoomOffset: -1
          }).addTo(map);

          const marker = L.marker(local.coordinates, {
            icon: L.icon({
              iconUrl: 'assets/marker-icon.png',
              shadowUrl: 'assets/marker-shadow.png',
              iconSize: [25, 41],
              iconAnchor: [12, 41]
            })
          }).addTo(map);

          // Força uma atualização do tamanho do mapa
          map.invalidateSize();

          this.maps.push(map);
        }, 500);
      }
    });
  }

  ngOnDestroy() {
    // Limpar os mapas quando o componente for destruído
    this.maps.forEach(map => map.remove());
  }
}
