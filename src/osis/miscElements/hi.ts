import { Index } from ".";
import { BaseElement } from "../baseElement";
import { A } from "./a";
import { Abbr } from "./abbr";
import { Date } from "./date";
import { DivineName } from "./divineName";
import { Foreign } from "./foreign";
import { Lb } from "./lb";
import { Milestone } from "./milestone";
import { Name } from "./name";
import { Note } from "./note";
import { Reference } from "./reference";
import { Seg } from "./seg";
import { W } from "./w";

type AllowedSubElements =
  | A
  | Abbr
  | Date
  | DivineName
  | Foreign
  | Hi
  | Index
  | Lb
  | Milestone
  | Name
  | Note
  | Reference
  | Seg
  | W;
type AllowedAttributes = "type";

export class Hi implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = { type: "" };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
