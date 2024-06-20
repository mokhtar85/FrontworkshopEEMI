import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent implements OnInit {
  reportData: any; // Définissez le type approprié selon votre structure de données

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.reportData = navigation.extras.state['result'];
    } else {
      // Gérer le cas où il n'y a pas de données
      this.router.navigate(['/']); // Rediriger vers la page d'accueil ou une autre page par défaut
    }
  }

  ngOnInit(): void {
    // Si nécessaire, effectuez des actions supplémentaires lors de l'initialisation du composant
  }
}