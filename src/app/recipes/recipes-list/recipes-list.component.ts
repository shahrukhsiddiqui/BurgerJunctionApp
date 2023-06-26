import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[]=[new Recipe('Test', 'This is Test',
  ''),new Recipe('Test2', 'This is Test2',
  '')
];
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe:Recipe){
    console.log(this.recipeWasSelected+' tyuio '+ recipe);
    this.recipeWasSelected.emit(recipe);

  }

}
