import { BaseElement } from "../baseElement";

export class Mentioned implements BaseElement {
  readonly allowedAttributes = [];
  readonly allowedSubElements = [
    "a",
    "abbr",
    "date",
    "divineName",
    "foreign",
    "hi",
    "index",
    "lb",
    "milestone",
    "name",
    "note",
    "q",
    "reference",
    "seg",
    "transChange",
    "w",
  ];
}
