import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-routing';
  links = [
    { text: 'נתוני בורסה', link: 'bursa'}, 
    { text: 'חיפוש מהיר', link: 'search'},
    { text: 'טפסים מורכבים', link: 'forms'}
  ];
  activeLink: string;
  route: string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private location: Location) {
      router.events.subscribe(val => {
        if (location.path() != "") {
          this.route = location.path();
        } else {
          this.route = "";
        }
        this.activeLink = this.route?.substring(1);
      });
  }

  
}
