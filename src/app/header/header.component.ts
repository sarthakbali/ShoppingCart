import { Component, Output,EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../Auth/auth/auth.service';
import { DataStorage } from '../shared/data-storage.service';
@Component({
selector : 'app-header',
templateUrl: './header.component.html'
})

export class headerComponent implements OnInit,OnDestroy{
  isAuth:boolean = false;
constructor(private storageservice:DataStorage,private authservice:AuthService,private router:Router){

}
private usersub:Subscription;
    // @Output() onclick_feature_selected = new EventEmitter<string>();
    // onclickrecipe(features: string){
    //   this.onclick_feature_selected.emit(features);
    // }
    // onclickshopping(features: string){
    //     this.onclick_feature_selected.emit(features);
    // }
//https://recipebook-ebb6c.firebaseio.com/
ngOnInit(){
  this.usersub = this.authservice.user.subscribe(user=>{
      this.isAuth = !!user;
  })
}
onsavedata(){
  this.storageservice.storeRecipes();
}
onfetchdata(){
    this.storageservice.fetchRecipes().subscribe();
}
onlogout(){
  this.authservice.logout();
}
ngOnDestroy(){
  this.usersub.unsubscribe();
}
}