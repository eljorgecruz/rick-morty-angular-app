import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api'; // Import our service

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.html',
  styleUrls: ['./character-list.css']
})
export class CharacterListComponent implements OnInit {
  // Create an array to store characters
  public characters: any[] = [];

  // Inject the ApiService
  constructor(private apiService: ApiService) { }

  // This method runs when the component is initialized
  ngOnInit(): void {
    this.apiService.getCharacters().subscribe(data => {
      console.log(data); // Useful for debugging
      this.characters = data.results;
    });
  }
}
