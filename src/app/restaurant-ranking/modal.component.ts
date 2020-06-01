import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

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
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close('nope');
  }

  delete() {
    // TODO delete
    this.dialogRef.close('delete soon');
    console.log('TODO delete ', this.data);
  }
}
