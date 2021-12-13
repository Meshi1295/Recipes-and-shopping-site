import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(private recipeService:RecipeService ) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  onSelected(){
     this.recipeService.recipeSelected.emit(this.recipe);

  }

}
