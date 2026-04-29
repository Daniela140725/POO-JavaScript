import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Perfil } from "./perfil/perfil"; 

@Component({
  selector: 'app-root',
  imports:[Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title= 'mi-primer-app';
}