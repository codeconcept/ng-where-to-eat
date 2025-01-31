import { Component, OnChanges, Input } from '@angular/core';
import { map } from 'rxjs/operators';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Restaurant } from './../models/restaurant';
import { ModalComponent } from './modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-restaurant-ranking',
  templateUrl: './restaurant-ranking.component.html',
  styleUrls: ['./restaurant-ranking.component.css'],
})
export class RestaurantRankingComponent implements OnChanges {
  @Input()
  restaurants: Restaurant[];
  sortedRestaurants: Restaurant[];
  modalResult;

  constructor(public dialog: MatDialog) {}

  openDialog(restau) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '350px',
      data: { ...restau },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.modalResult = result;
      console.log(
        'dialogRef.afterClosed() / this.modalResult',
        this.modalResult
      );
    });
  }

  ngOnChanges(changes): void {
    console.log('changes', changes);
    if (!changes.restaurants.currentValue) {
      return;
    }
    this.sortedRestaurants = changes.restaurants.currentValue.sort(this.sortByScore)
  }

  sortByScore(a, b) {
    // a.votes > b.votes orders vote desc
    if (a.votes > b.votes) {
      return -1;
    } else if(a.votes < b.votes) {
      return 1;
    } else {
      return 0;
    }
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

  openConfirmDialog(restaurant) {
    this.openDialog(restaurant);
  }
}
