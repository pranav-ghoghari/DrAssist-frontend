import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResultService } from 'src/app/result.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {
  searchCriteria = {
    ID: '',
    Name: '',
    DateOfBirth: ''
  };

  searchResults: any[] = [];
  

  constructor(private http: HttpClient, private resultService: ResultService) {}
  
  search() {
    // Send a POST request to your backend API to search for patient information
    this.http.post('http://localhost:3000/api/search-patient' , this.searchCriteria)
      .subscribe((response: any) => {
        console.log('Search result:', response.results);
        this.searchResults = response.results; // Assign the results array to searchResults
      });
  }

  selectResult(result: any) {
    // Here, you can implement the logic to handle the selected result.
    // For example, you can store the selected result in a variable or perform some action.
    console.log('Selected result:', result);
    this.resultService.setSelectedResult(result);
  }
}

