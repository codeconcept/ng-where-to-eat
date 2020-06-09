import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { RestaurantService } from './../services/restaurant.service';
import { Restaurant } from './../models/restaurant';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-suggestion-list',
  templateUrl: './suggestion-list.component.html',
  styleUrls: ['./suggestion-list.component.css'],
})
export class SuggestionListComponent implements OnInit, OnDestroy {
  private restaurantsCollection: AngularFirestoreCollection<Restaurant>;
  restaurants$: Observable<Restaurant[]>;
  restaurants: Restaurant[] = [];
  sub;

  constructor(private rs: RestaurantService) {}

  async ngOnInit() {
    this.restaurantsCollection = await this.rs.readRestaurants();
    this.sub = this.restaurantsCollection.valueChanges({
      idField: 'id',
    }).subscribe(data => {
      this.restaurants = data;
    })
  }

  vote(restaurant, id) {
    const restaurantWithId = { ...restaurant, id };
    console.log('restaurantWithId', restaurantWithId);
    this.rs.voteForRestaurant(restaurantWithId);
  }
}
