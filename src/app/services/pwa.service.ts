import { Platform } from '@angular/cdk/platform';
import { Injectable } from '@angular/core';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';
import { RecipeStartComponent } from '../recipes/recipe-start/recipe-start.component';
@Injectable({
  providedIn: 'root'
})
export class PwaService {
   promptEvent: any;
   private modals: any[] = [];
  constructor(
    private platform: Platform
  ) {
    window.addEventListener('beforeinstallprompt', (event: any) => {
     // event.preventDefault();
      setTimeout(()=>{
        event.preventDefault();
        this.promptEvent = event;
     },1000)
      // this.openPromptComponent('android');
    });
   }

  public initPwaPrompt() {



    if (this.platform.IOS) {
      const isInStandaloneMode = ('standalone' in window.navigator) && (window.navigator['standalone']);
      if (!isInStandaloneMode) {
        return 'ios';
      }
    }
  }

  close(id: string) {
    // close modal specified by id
    const modal = this.modals.find(x => x.id === id);
    modal.close();
}

  // private openPromptComponent(mobileType: 'ios' | 'android') {
  //   timer(3000)
  //     .pipe(take(1))
  //     .subscribe(() => {
  //       return mobileType
  //     });
  // }
}
