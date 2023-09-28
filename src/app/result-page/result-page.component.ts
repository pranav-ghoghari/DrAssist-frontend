import { Component, OnInit } from '@angular/core';
import { SymptomsService } from '../symptoms.service';
import { ChatService } from '../chat.service';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  savedSymptoms: string | null = null;
  savedResultantString: string | null = null;
  prompt: string = '';
  response: string | undefined = undefined;
  tableData: { key: string; value: string }[] = []; 

  displayedColumns: string[] = ['key', 'value']; // Define table columns

  constructor(
    private symptomsService: SymptomsService,
    private chatService: ChatService
  ) {}

  ngOnInit() {
    // Retrieve the saved symptoms and resultant string using the service
    this.savedSymptoms = this.symptomsService.getSymptoms();
    this.savedResultantString = this.symptomsService.getResultantString();

    // Construct the prompt after fetching the values
    this.prompt = `Ehr: ${this.savedResultantString}\nSymptoms: ${this.savedSymptoms}\nfrom the EHR, extract information related to symptoms that is important for the doctor to know to provide the treatment only for the given symptoms. Present this information in summarized `;

    // Execute the send prompt function
    this.executeSendPrompt();
  }

  // This method is triggered when you want to get the response
  executeSendPrompt() {
    console.log('Prompt sent:', this.prompt);

    if (this.prompt) {
      this.chatService.sendPrompt(this.prompt).subscribe({
          next: (chatResponse: string) => {
              const data: { key: string; value: string }[] = [];

              // Regular expression for capturing key-value pairs
              const regex = /([^-].*?):\s(.*)/g;
              let match;

              while ((match = regex.exec(chatResponse)) !== null) {
                  data.push({ key: match[1], value: match[2] });
              }

              // Update the tableData with the parsed key-value pairs
              this.tableData = data;
          },
          error: (error) => {
              console.error('Error occurred:', error);
          },
      });
   }
  }
}
