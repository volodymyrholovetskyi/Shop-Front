import { SelectorContext } from "@angular/compiler";
import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div [formGroup]="parentForm" fxLayout="column">
        <mat-form-field appearance="fill">
            <mat-label>Name</mat-label>
            <input matInput placeholder="Enter the product name" formControlName="name">
            <div *ngIf="name?.invalid && (name?.dirty || name?.touched)" class="errorMessages">
                <div *ngIf="name?.errors?.['required']">
                    Name is required
                </div>
                <div *ngIf="name?.errors?.['minlength']">
                    The name must be at least 4 characters long
                </div>
            </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>Description</mat-label>
        <textarea matInput rows="20" placeholder="Enter a product description" formControlName="description"></textarea>
        <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
                <div *ngIf="description?.errors?.['required']">
                    Description is required
                </div>
                <div *ngIf="description?.errors?.['minlength']">
                    The description must be at least 4 characters long
                </div>
            </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>Category</mat-label>
        <input matInput placeholder="Enter the product category" formControlName="category">
        <div *ngIf="category?.invalid && (category?.dirty || category?.touched)" class="errorMessages">
                <div *ngIf="category?.errors?.['required']">
                    Category is required
                </div>
                <div *ngIf="category?.errors?.['minlength']">
                     Category must be at least 4 characters long
                </div>
            </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>Price</mat-label>
        <input matInput placeholder="Enter the price of the product" formControlName="price">
        <div *ngIf="price?.invalid && (price?.dirty || price?.touched)" class="errorMessages">
                <div *ngIf="price?.errors?.['required']">
                    The price is required
                </div>
                <div *ngIf="price?.errors?.['min']">
                    The price must be greater than zero
                </div>
            </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>Currency</mat-label>
        <input matInput placeholder="Enter the product currency" formControlName="currency">
            <div *ngIf="currecny?.invalid && (currecny?.dirty || currecny?.touched)" class="errorMessages">
                <div *ngIf="currecny?.errors?.['required']">
                    Currency is required
                </div>
            </div>
    </mat-form-field>

    <div fxLayoutAlign="end">
        <button mat-flat-button color="primary" [disabled]="!parentForm.valid">Save</button>
    </div>
    </div>`,
        styles: [`
            .errorMessages{
            color:red;
       }`]
})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    get name() {
        return this.parentForm.get("name")
    }

    get description() {
        return this.parentForm.get("description")
    }

    get category() {
        return this.parentForm.get("category")
    }

    get price() {
        return this.parentForm.get("price")
    }

    get currecny() {
        return this.parentForm.get("currency")
    }
}