import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SuggestionFormComponent } from './suggestion-form/suggestion-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './restaurant-ranking/modal.component';

//  Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';

// Firebase imports
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import firestoreConfig from './my-firestore';
import { SuggestionListComponent } from './suggestion-list/suggestion-list.component';
import { RestaurantRankingComponent } from './restaurant-ranking/restaurant-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    SuggestionFormComponent,
    SuggestionListComponent,
    RestaurantRankingComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firestoreConfig),
    AngularFirestoreModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
