import { Component, OnChange, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { Restaurant } from './../models/restaurant';

@Component({
  selector: 'app-restaurant-ranking',
  templateUrl: './restaurant-ranking.component.html',
  styleUrls: ['./restaurant-ranking.component.css'],
})
export class RestaurantRankingComponent implements OnChange {
  @Input()
  restaurants$;
  sortedRestaurants: Observable<Restaurant[]>;

  constructor() {}

  ngOnChanges(changes): void {
    console.log('changes', changes);
    if (!changes.restaurants$.currentValue) {
      return;
    }
    changes.restaurants$.currentValue
      .pipe(
        map((restaurants) => {
          const sortResult = restaurants.sort(this.sortByScore);
          this.sortedRestaurants = sortResult;
        })
      )
      .subscribe();
  }

  sortByScore(a, b) {
    // a.votes > b.votes orders vote desc
    if (a.votes > b.votes) {
      return -1;
    } else {
      return 1;
    }
    return 0;
  }

  setRankLabel(restaurant) {
    const label =
      restaurant.votes <= 1
        ? `${restaurant.votes} vote pour ${restaurant.name}`
        : `${restaurant.votes} votes pour ${restaurant.name}`;
    return label;
  }

  onSelectionChange(event) {
    console.log(event.option.value);
  }
}
