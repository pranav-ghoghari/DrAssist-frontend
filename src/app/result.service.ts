import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  private selectedResult: any;

  constructor() { }

  setSelectedResult(result: any) {
    this.selectedResult = result;
  }

  getSelectedResult() {
    return this.selectedResult;
  }
}
