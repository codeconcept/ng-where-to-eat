import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  constructor(private afs: AngularFirestore) {}

  createRestaurant(restaurant) {
    return this.afs
      .collection('wte-restaurants')
      .add({ restaurant, createdAt: Date.now(), votes: 0 });
  }
}
