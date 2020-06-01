import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Restaurant } from './../models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private afs: AngularFirestore) {}

  createRestaurant(name) {
    return this.afs
      .collection('wte-restaurants')
      .add({ name, createdAt: Date.now(), votes: 0 });
  }

  readRestaurants() {
    return this.afs.collection<Restaurant>('wte-restaurants');
  }
}
