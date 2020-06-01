import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RestaurantService } from './../services/restaurant.service';

@Component({
  selector: 'app-modal-component',
  template: `
    <h1 mat-dialog-title>Supprimer {{ data.name }}</h1>
    <div mat-dialog-content>
      Etes-vous bien sûr de vouloir supprimer {{ data.name }} ?
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">
        Non merci
      </button>
      <button mat-button cdkFocusInitial (click)="delete()">
        Oui, supprimer
      </button>
    </div>
  `,
})
export class ModalComponent {
  constructor(
    private rs: RestaurantService,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close('nope');
  }

  async delete() {
    console.log('TODO delete ', this.data);
    const result = await this.rs.deleteRestaurant(this.data);
    this.dialogRef.close(result);
  }
}
