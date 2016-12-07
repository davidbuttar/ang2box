import { Component, Input } from '@angular/core';
import {DomElement} from "../domElement";

@Component({
  selector: 'edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.css']
})
export class EditElementComponent {

  @Input() curElement: DomElement;

  constructor() { }

}
