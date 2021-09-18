import { Platform } from '@angular/cdk/platform';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { PwaService } from 'src/app/services/pwa.service';
@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})
export class RecipeStartComponent implements OnInit {

  promptEvent:any;
  datas:any;
  mobiletype:string = 'ios';
  datass:any;
  constructor(
  private pwas:PwaService
  ) {
    // window.addEventListener('beforeinstallprompt', (event: any) => {
    //   // event.preventDefault();
    //    setTimeout(()=>{
    //      event.preventDefault();
    //      this.promptEvent = event;
    //   },1000)
    //    // this.openPromptComponent('android');
    //  });

   }

  ngOnInit(): void {

//     window.addEventListener('beforeinstallprompt', (event: any) => {
//       // event.preventDefault();
//       if(window.location.href=="https://recipebook-ebb6c.web.app"){
//         event.preventDefault();
//       }
//       else{
//          this.promptEvent = event;
//        // this.openPromptComponent('android');
//     this.promptEvent.prompt();
//     // Wait for the user to respond to the prompt
//     this.promptEvent.userChoice
//     .then((choiceResult) => {
//     if (choiceResult.outcome === 'accepted') {
//       console.log('User accepted the A2HS prompt');
//     } else {
//       console.log('User dismissed the A2HS prompt');
//     }
//     this.promptEvent = null;
//   });
// }
// })

  }
  // deferredPrompt: any;
  // showButton = false;
  // @HostListener('window:beforeinstallprompt', ['$event'])
  // onbeforeinstallprompt(e) {
  //   console.log(e);
  //   // Prevent Chrome 67 and earlier from automatically showing the prompt
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   this.deferredPrompt = e;
  //   this.showButton = true;
  // }
  // onadd() {
  //   // hide our user interface that shows our A2HS button
  //   this.showButton = false;
  //   // Show the prompt
  //   this.deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   this.deferredPrompt.userChoice
  //   .then((choiceResult) => {
  //   if (choiceResult.outcome === 'accepted') {
  //     console.log('User accepted the A2HS prompt');
  //   } else {
  //     console.log('User dismissed the A2HS prompt');
  //   }
  //   this.deferredPrompt = null;
  // });
  // }
  // public installPwa(): void {
  //   this.data.promptEvent.prompt();
  //   this.close();
  // }

  // public close() {
  //   this.bottomSheetRef.dismiss();
  // }

  // public initPwaPrompt() {
  //   if (this.platform.IOS) {
  //     const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
  //     if (!isInStandaloneMode) {
  //       this.openPromptComponent('ios');
  //     }
  //   }
  // }


}
