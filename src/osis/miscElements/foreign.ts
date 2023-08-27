import { Index } from ".";
import { BaseElement } from "../baseElement";
import { A } from "./a";
import { Abbr } from "./abbr";
import { Date } from "./date";
import { DivineName } from "./divineName";
import { Hi } from "./hi";
import { Lb } from "./lb";
import { Milestone } from "./milestone";
import { Name } from "./name";
import { Note } from "./note";
import { Reference } from "./reference";
import { Seg } from "./seg";
import { Title } from "./title";
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
  | Title
  | W;
type AllowedAttributes = "xml:lang";

export class Foreign implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = { "xml:lang": "" };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
