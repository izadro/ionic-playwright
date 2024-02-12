import {Component} from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
  }

  company: string | undefined;
  address: string | undefined;
  city: string | undefined;
  zip: string | undefined;

  soumettre() {
    console.log({
      company: this.company, address: this.address, city: this.city, zip: this.zip
    });
  }
}
