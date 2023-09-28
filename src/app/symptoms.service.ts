// symptoms.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SymptomsService {
  private symptoms: string = '';
  private resultantString: string = '';

  setSymptoms(symptoms: string) {
    this.symptoms = symptoms;
  }

  getSymptoms() {
    return this.symptoms;
  }

  // Method to set the resultant string
  setResultantString(resultantString: string) {
    this.resultantString = resultantString;
  }

  // Method to get the resultant string
  getResultantString() {
    return this.resultantString;
  }
}
