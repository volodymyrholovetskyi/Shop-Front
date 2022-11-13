import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-confirm-dailog',
  templateUrl: './admin-confirm-dailog.component.html',
  styleUrls: ['./admin-confirm-dailog.component.scss']
})
export class AdminConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
