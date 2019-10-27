import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  profileForm: FormGroup;
  autocompleteDisabled: boolean;
  persons: {firstName: string, lastName: string} [];
  ngOnInit() {
    this.autocompleteDisabled = true;
    this.buildForm();
  }

  buildForm() {
    this.persons = [];
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl('')
    });

  }

  onSubmit() {
    this.persons.push({firstName: this.profileForm.value.firstName, lastName: this.profileForm.value.lastName});
    this.profileForm.reset();
  }
}
