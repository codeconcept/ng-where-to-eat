import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css'],
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm: NgForm;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      restaurant: ['', Validators.required],
    });
  }

  addRestaurant() {
    console.log('this.suggestionForm.value', this.suggestionForm.value);
    this.suggestionForm.reset();
  }
}
