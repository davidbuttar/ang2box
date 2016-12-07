import { Component, Input } from '@angular/core';
import {DomElement} from '../domElement';

@Component({
  selector: '[cb-component]',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {

  @Input() domElements: Array<DomElement>;

}
