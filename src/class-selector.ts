import {
  Selector,
  HtmlElement
} from "./public-api";

export class ClassSelector extends Selector {
  public className: string;

  constructor(class_name: string){
    super();
    this.className = class_name;
    this.specificity.b = 1;
  }

  public toString(): string {
    return "." + this.className;
  }

  public test(element: HtmlElement): boolean {
    return element.classList.contains(this.className);
  }
}
