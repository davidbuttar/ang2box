export class DomElement {
  name: string;
  domElements: Array<DomElement>;
  files: Array<string>;
  expanded:boolean;
  checked:boolean;
  styles:any;
  constructor(name, domElements, files, styles) {
    this.name = name;
    this.files = files;
    this.domElements = domElements;
    this.expanded = false;
    this.checked = false;
    this.styles = styles;
  }
  toggle(){
    this.expanded = !this.expanded;
    //this.domElements.push(new DomElement('Test Elm',[],[],{margin:'10px'}));
  }
  check(){
    let newState = !this.checked;
    this.checked = newState;
    this.checkRecursive(newState);
  }
  setStyles(){
    let styles = this.styles;
    return styles;
  }
  checkRecursive(state){
    this.domElements.forEach(d => {
      d.checked = state;
      d.checkRecursive(state);
    })
  }
}
