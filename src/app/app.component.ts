import { Component } from '@angular/core';
import {DomElement} from "./domElement";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Me Boxes';
  domElements: Array<DomElement>;
  selectedElement: DomElement;
  constructor() {
    let header = new DomElement('header',[],[], {margin:'10px', background:'blue'});
    let footer = new DomElement('footer',[],[], {margin:'10px'});
    let page = new DomElement('page',[header, footer],[],{margin:'10px'});
    this.domElements = [page];
    this.selectedElement = page;
  }
}
