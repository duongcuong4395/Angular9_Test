import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TitleService } from './title.service';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-tv-rating-form',
  templateUrl: './tv-rating-form.component.html',
  styleUrls: ['./tv-rating-form.component.scss']
})

export class TvRatingFormComponent implements OnInit {

  //@Input() title: string; => error
  //The right way to fix this, though, would be to make title on the form nullable:
  @Input() titleNew: string | null;

  tvShows = [
    { name: 'Better call Saul!' },
    { name: 'Breaking Bad' },
    { name: 'Lost' },
    { name: 'Mad men' }
  ];

  constructor(
    private titleSvc: TitleService,
    private af: AngularFirestore,
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.titleSvc.update('new title!');
    });
  }

  form = new FormGroup({
    tvShow: new FormControl('', Validators.required),
    rating: new FormControl('', Validators.required),
  });

  /*
  submit() {
    alert(JSON.stringify(this.form.value));
    this.form.reset();
  }
  */

  async submit() {
    this.form.disable();
    await this.af.collection('ratings').add(this.form.value);
    this.form.enable();
    this.form.reset();
  }

}
