import { Index } from ".";
import { BaseElement } from "../baseElement";
import { A } from "./a";
import { Abbr } from "./abbr";
import { Date } from "./date";
import { DivineName } from "./divineName";
import { Foreign } from "./foreign";
import { Hi } from "./hi";
import { Lb } from "./lb";
import { Milestone } from "./milestone";
import { Name } from "./name";
import { Note } from "./note";
import { Q } from "./q";
import { Reference } from "./reference";
import { Seg } from "./seg";
import { Speaker } from "./speaker";
import { Speech } from "./speech";
import { TransChange } from "./transChange";
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
  | Q
  | Reference
  | Seg
  | Speaker
  | Speech
  | TransChange
  | W;
type AllowedAttributes = never;

export class Inscription implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = {};
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
