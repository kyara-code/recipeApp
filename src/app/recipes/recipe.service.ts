import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model"; 
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeSelected = new Subject<Recipe>();

    private recipes : Recipe[] = [
        new Recipe('Tasty Schnitzel', 
        'A super tasty schnitzel - just awesome!', 
        'https://media.istockphoto.com/photos/homemade-breaded-german-weiner-schnitzel-picture-id486565658?k=20&m=486565658&s=612x612&w=0&h=OerVxsFlVouPFnXz5jA8B4WmwRVgKM9uVh7BoW0AYSI=',
        [
            new Ingredient('Meat', 1),
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Big Fat Burger', 
        'What else you need to say?', 
        'https://media.istockphoto.com/photos/juicy-hamburger-on-white-background-picture-id1206323282?k=20&m=1206323282&s=612x612&w=0&h=yatlq6BHRCCvoTzFZLSwaJc0O8Quct_tRPWtH0dj9Fc=',
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ])
      ];

      constructor(private slService: ShoppingListService) {}
    
      getRecipes() {
          return this.recipes.slice();
        //   slice mi ritorna una copia--> non cambio recipes
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

}