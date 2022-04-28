import { AuthService } from './../auth/auth.service';
import { Recipe } from './../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private recipesService: RecipeService,
    private authService: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    //put sovrascrive tutto: se crei il tuo backend potrebbe
    // funz diff: dipende dalle api che usi
    this.http
      .put(
        'https://ng-course-recipe-book-6b330-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((response) => {
        console.log(response);
      });
  }

  fetchRecipes() {
    // return this.authService.user.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    return this.http
      .get<Recipe[]>(
        'https://ng-course-recipe-book-6b330-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipesService.setRecipes(recipes);
        })
      );

    // }),
    // map((recipes) => {
    //   return recipes.map((recipe) => {
    //     return {
    //       ...recipe,
    //       ingredients: recipe.ingredients ? recipe.ingredients : [],
    //     };
    //   });
    // }),
    // tap((recipes) => {
    //   this.recipesService.setRecipes(recipes);
    // })
    // );
  }
}
