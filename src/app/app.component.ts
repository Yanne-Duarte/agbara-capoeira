import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isMenuOpen = false;
  isDropdownOpen = false;
  anoAtual = new Date().getFullYear();

  // Método para fechar o menu
  closeMenu() {
    this.isMenuOpen = false;
    this.isDropdownOpen = false;
  }

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
