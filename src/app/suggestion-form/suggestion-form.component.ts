import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestaurantService } from './../services/restaurant.service';

@Component({
  selector: 'app-suggestion-form',
  templateUrl: './suggestion-form.component.html',
  styleUrls: ['./suggestion-form.component.css'],
})
export class SuggestionFormComponent implements OnInit {
  suggestionForm;
  message = '';

  constructor(private fb: FormBuilder, private rs: RestaurantService) {}

  ngOnInit(): void {
    this.suggestionForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  async addRestaurant() {
    console.log('this.suggestionForm.value', this.suggestionForm.value);
    const result = await this.rs.createRestaurant(
      this.suggestionForm.value.name
    );
    console.log('result', result);
    if ((result as any).jT) {
      this.message = `Restaurant créé avec l'id ${(result as any).id}`;
    }

    this.suggestionForm.reset();
  }
}
