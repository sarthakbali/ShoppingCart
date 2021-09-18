import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes=[
   
    { path:'', redirectTo:'/recipes',pathMatch:'full' },
    { path:'recipes', loadChildren: () => import('./recipes/recipe.module').then( m => m.RecipeModule) },
    { path:'shopping-list', loadChildren: () => import('./shopping-list/shopping.module').then( m => m.ShoppingModule) },
    { path:'auth', loadChildren: () => import('./Auth/auth/auth.module').then( m => m.AuthModule) }
    

]
@NgModule({
imports:[RouterModule.forRoot(appRoutes, { preloadingStrategy:PreloadAllModules }) ],
exports:[RouterModule]
})

export class AppRoutingModule{

}