import { Component, VERSION } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {dinosaurIconsSleep} from './dinosaur-icons'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

 constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ){
    this.matIconRegistry.addSvgIconLiteral(
      "unicorn",
      this.domSanitizer.bypassSecurityTrustHtml(dinosaurIconsSleep.data)
    );
  }
}
