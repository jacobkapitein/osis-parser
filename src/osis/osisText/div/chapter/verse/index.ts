import { BaseElement } from "../../../../baseElement";

export class Verse implements BaseElement {
  public readonly osisID: string = "";
  public readonly number: number = 0;
  readonly allowedSubElements: string[] = [
    "a",
    "abbr",
    "date",
    "divineName",
    "foreign",
    "hi",
    "index",
    "inscription",
    "lb",
    "list",
    "mentioned",
    "milestone",
    "name",
    "note",
    "q",
    "reference",
    "seg",
    "speaker",
    "title",
    "transChange",
    "w",
  ];
  readonly allowedAttributes: string[] = [];

  public text: string = "";

  constructor(osisID: string, number: number) {
    this.osisID = osisID;
    this.number = number;
  }
}
