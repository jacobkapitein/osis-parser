import { BaseElement } from "../baseElement";

export class Inscription implements BaseElement {
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
    "speaker",
    "speech",
    "transChange",
    "w",
  ];
}
