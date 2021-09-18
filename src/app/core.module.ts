import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './Auth/auth/auth-interceptor.service';
import { recipeService } from './recipes/recipe.service';
import { PwaService } from './services/pwa.service';
import { shoppingService } from './shopping-list/shopping.service';

@NgModule({
    providers:[
        shoppingService,recipeService,PwaService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}
    ]
})
export class CoreModule{

}
