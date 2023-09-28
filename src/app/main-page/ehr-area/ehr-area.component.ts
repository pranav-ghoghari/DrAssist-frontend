import { Component } from '@angular/core';
import { ResultService } from 'src/app/result.service';
import { SymptomsService } from 'src/app/symptoms.service';
@Component({
  selector: 'app-ehr-area',
  templateUrl: './ehr-area.component.html',
  styleUrls: ['./ehr-area.component.css']
})

export class EhrAreaComponent {
  constructor(private resultService: ResultService,
              private symptomsService: SymptomsService          
    ) {}
  
  // Create a method to access the selected result
  getSelectedResult() {
    const result = this.resultService.getSelectedResult();
    
    // If result is available, save and export it
    if (result) {
      this.saveAndExportResult(result);
    }

    return result;
  }
  

  getObjectProperties(obj: any): { key: string; value: any }[] {
    if (!obj) {
      return [];
    }
    return Object.keys(obj).map((key) => ({ key, value: obj[key] }));
  }

  convertObjectToString(obj: any): string {
    if (!obj) {
      return '';
    }

    const keyValuePairs = Object.keys(obj)
      .map((key) => `${key}: ${obj[key]}`)
      .join(', ');

    return keyValuePairs;
  }
  saveAndExportResult(result: any) {
    const resultString = this.convertObjectToString(result);
    console.log(resultString);
    // Save the resultant string in the SymptomsService
    this.symptomsService.setResultantString(resultString);
  }
  
}

