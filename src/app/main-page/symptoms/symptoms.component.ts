import { Component } from '@angular/core';
import { SymptomsService } from 'src/app/symptoms.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent {

  constructor(private symptomsService: SymptomsService, private router: Router) {}

  symptoms: string = ''; // Property to store entered symptoms

  // Method to save symptoms
  // Method to convert an object to a string
  private convertObjectToString(obj: any): string {
    if (!obj) {
      return '';
    }

    const keyValuePairs = Object.keys(obj)
      .map((key) => `${key}: ${obj[key]}`)
      .join(', ');

    return keyValuePairs;
  }
  
  saveAndExportData() {
    // Save the entered symptoms
    this.symptomsService.setSymptoms(this.symptoms);

    // Convert the symptoms to a string and save it as a resultant string
    const resultString = this.convertObjectToString({ symptoms: this.symptoms });
    
    console.log(this.symptoms);
    console.log(resultString);  
    // Navigate to the result page
    this.router.navigate(['/result']);

  }
}
