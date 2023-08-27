import { BaseElement } from "../baseElement";

export class Rdg implements BaseElement {
  readonly allowedAttributes = ["type"];
  readonly allowedSubElements = [
    "divineName",
    "foreign",
    "index",
    "name",
    "note",
    "reference",
    "w",
  ];
}
