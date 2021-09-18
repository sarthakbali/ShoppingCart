import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipe.model';
import { recipeService } from '../recipes/recipe.service';
import { AuthService } from '../Auth/auth/auth.service';


@Injectable({ providedIn: 'root' })
export class DataStorage {
  constructor(
    private http:HttpClient,private recipeservice:recipeService,private authservice:AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeservice.getvalue();
    this.http
      .put(
        'https://recipebook-ebb6c.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchRecipes() {
    return this.authservice.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Recipe[]>(
          'https://recipebook-ebb6c.firebaseio.com/recipes.json'
        ).pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipeservice.setRecipe(recipes);
      })
    );
  })
    )
}
}
