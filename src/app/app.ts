import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list'; // <-- 1. IMPORTA TU COMPONENTE

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CharacterListComponent], // <-- 2. AÑÁDELO A LOS IMPORTS
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'rick-y-morty-app';
}
