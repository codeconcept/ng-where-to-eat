import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestaurantService } from './../services/restaurant.service';
import { Restaurant } from './../models/restaurant';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {
  private restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurants$: Observable<Restaurant[]>;

  constructor(private rs: RestaurantService) {}

  async ngOnInit(): void {
    this.restaurantsCollection = await this.rs.readRestaurants();
    this.restaurants$ = this.restaurantsCollection.valueChanges({
      idField: 'id',
    });
  }

  vote(id) {
    console.log(id);
  }
}
