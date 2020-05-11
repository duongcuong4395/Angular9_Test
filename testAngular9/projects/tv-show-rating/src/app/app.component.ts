import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from './tv-rating-form/title.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = null;
  // ...
  title$: Observable < string > ;
  ratings$: Observable<any>;
  constructor(
    private titleSvc: TitleService,
    private af: AngularFirestore
  ) {

  }

  ngOnInit() {
    this.title$ = this.titleSvc.title$;
    this.ratings$ = this.af.collection('ratings').valueChanges();
  }
  // ...


}
