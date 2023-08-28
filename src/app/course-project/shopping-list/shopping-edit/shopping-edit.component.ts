import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('name') nameRef : ElementRef;
  @ViewChild('amount') amountRef : ElementRef;
  @Output() onIngredientAdded = new EventEmitter<Ingredient>();

  onAddingIngredient(){
    const nameVal = this.nameRef.nativeElement.value;
    const amountVal = this.amountRef.nativeElement.value;
    this.onIngredientAdded.emit(new Ingredient(nameVal,amountVal))
  }
}
