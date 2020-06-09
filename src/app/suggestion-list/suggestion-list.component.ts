import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RestaurantService } from './../services/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit {
  private restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurants$: Observable<Restaurant[]>;

  constructor(private rs: RestaurantService) {}

  async ngOnInit() {
    this.restaurantsCollection = await this.rs.readRestaurants();
    this.restaurants$ = this.restaurantsCollection.valueChanges({
      idField: 'id',
    });
  }

  vote(restaurant, id) {
    const restaurantWithId = { ...restaurant, id };
    console.log('restaurantWithId', restaurantWithId);
    this.rs.voteForRestaurant(restaurantWithId);
  }
}
