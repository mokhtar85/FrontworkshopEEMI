import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.css']
})
export class RapportComponent {
  formData: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.formData = navigation?.extras.state?.['formData'];
  }

  ngOnInit(): void {
    if (!this.formData) {
      this.router.navigate(['/']);
    }
}
}
