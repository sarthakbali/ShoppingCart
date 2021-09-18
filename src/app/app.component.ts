import { Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AuthService } from './Auth/auth/auth.service';
import { ModalControlService } from './modal-control.service';
import { PwaService } from './services/pwa.service';
import { UpdateService } from './update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  promptEvent:any;
  datass:any;
  modals:any;
  @ViewChild('closebutton') closebutton;
  @ViewChild("ref")
  abc:boolean=false;
  isactive:any;
  userDialogTemplate: ElementRef;
  constructor(private authservice:AuthService,private sw: UpdateService,private pwas:PwaService,private viewContainerRef: ViewContainerRef,private modalControlService:ModalControlService){
   this.sw.checkForUpdates();
   this.datass = this.pwas.initPwaPrompt();
    console.log("hhhhjjkl",this.datass);
    window.addEventListener('beforeinstallprompt', (event: any) => {
      // event.preventDefault();
      if(window.location.href=="https://recipebook-ebb6c.web.app/auth"){
        event.preventDefault();
      }
      else{
         this.promptEvent = event;
       // this.openPromptComponent('android');
    this.promptEvent.prompt();
    // Wait for the user to respond to the prompt
    this.promptEvent.userChoice
    .then((choiceResult) => {
    if (choiceResult.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }
    this.promptEvent = null;
  });
}
})
  }

  loaded_feature = 'recipe';
  ngOnInit(){
    //this.closebutton.nativeElement.click();
    //this.abc = false;
    this.isactive = false;
    this.authservice.autologin();
  }
  // onnavigate(features: string){
  //   this.loaded_feature = features;
  // }
  closeatab(){
    this.isactive =true
    this.abc =true;
    // this.modalControlService.close();
  }
  title = 'Shopping-cart';
closeModal(id: string) {
  this.pwas.close(id);
}
}
