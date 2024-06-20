// form.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service'; // Importer le service ApiService
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;
  errorMessage: string | undefined;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      age: [null, Validators.required],
      weight: [null, Validators.required],
      symptoms: ['', Validators.required],
      patient_history: [''],
      chronicDisease: ['']
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.apiService.runMedicalCrew(formData).subscribe(
        (response) => {
          if (response.status === 'success') {
            // Rediriger vers ReportComponent et transmettre les données via state
            this.router.navigate(['/report'], { state: { result: response.result } });
          } else {
            this.errorMessage = 'Erreur lors de l\'exécution de la requête.';
          }
        },
        (error) => {
          this.errorMessage = 'Erreur lors de l\'exécution de la requête.';
        }
      );
    }
  }
}
