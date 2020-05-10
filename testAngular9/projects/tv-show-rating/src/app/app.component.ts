import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TitleService } from './tv-rating-form/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title = null;
// ...
title$: Observable < string > ;
constructor(
  private titleSvc: TitleService
) {

}

ngOnInit() {
  this.title$ = this.titleSvc.title$;
}
// ...


}
