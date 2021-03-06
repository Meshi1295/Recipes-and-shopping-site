import { Ingredient } from './../shared/ingredient.module';
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

   private ingredients: Ingredient[]  = [
        new Ingredient ('appels',5),
        new Ingredient ('tomatoes',10)
      ];
      
      getIngredients(){
          return this.ingredients.slice();
      }

      addIngredient (ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice());
      }

      addIngredients(ingredients: Ingredient[]){
        // for(let ingredient of ingredients){
        //   this.addIngredient(ingredient)
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
      }
}