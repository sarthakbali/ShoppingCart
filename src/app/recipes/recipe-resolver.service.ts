import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorage } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { recipeService } from './recipe.service';

@Injectable({
    providedIn:'root'
})
export class RecipeResolverSevice implements Resolve<Recipe[]>{
constructor(private dataStorage:DataStorage,private recipeservice:recipeService){
}

resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    const recipeee = this.recipeservice.getvalue();
    if(recipeee.length == 0 ){
        
        return this.dataStorage.fetchRecipes();
    }
    else{
        return recipeee;
    }
    }
}