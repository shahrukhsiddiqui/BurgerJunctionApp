import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Tomatoes',1)
  ]

  constructor(){
    console.log(this.ingredients)+'COns';
  }
  ngOnInit(): void {
    console.log(this.ingredients);
  }
  onIngredientAdded(ingredient:Ingredient){
    console.log("THis is INGREDIENT"+ ingredient)
     this.ingredients.push(ingredient);
  }
}
