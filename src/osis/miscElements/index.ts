import { BaseElement } from "../baseElement";

export class Index implements BaseElement {
  readonly allowedAttributes = [
    "level1",
    "level2",
    "level3",
    "level4",
    "index",
    "see",
    "name",
  ];
  readonly allowedSubElements = [];
}
