import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      weight: ['', Validators.required],
      chronicDisease: ['non', Validators.required],
      symptoms: ['', Validators.required],
      history: ['']
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      this.generatePDF(formData);
    }
  }

  generatePDF(formData: any) {
    const doc = new jsPDF();

    doc.text('Rapport de diagnostic IA', 10, 10);
    doc.text(`Nom: ${formData.firstName}`, 10, 20);
    doc.text(`Prénom: ${formData.lastName}`, 10, 30);
    doc.text(`Âge: ${formData.age}`, 10, 40);
    doc.text(`Poids: ${formData.weight}`, 10, 50);
    doc.text(`Maladie chronique: ${formData.chronicDisease}`, 10, 60);
    doc.text(`Symptômes: ${formData.symptoms}`, 10, 70);
    doc.text(`Historique: ${formData.history}`, 10, 80);

    doc.save('diagnostic_report.pdf');

    // Navigate to the report component and pass the form data
    this.router.navigate(['/report'], { state: { formData: formData } });
  }
}