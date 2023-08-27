import { Index } from ".";
import { BaseElement } from "../baseElement";
import { A } from "./a";
import { Abbr } from "./abbr";
import { Date } from "./date";
import { DivineName } from "./divineName";
import { Foreign } from "./foreign";
import { Hi } from "./hi";
import { Inscription } from "./inscription";
import { Lb } from "./lb";
import { List } from "./list";
import { Mentioned } from "./mentioned";
import { Milestone } from "./milestone";
import { Name } from "./name";
import { Note } from "./note";
import { Q } from "./q";
import { Quote } from "./quote";
import { Reference } from "./reference";
import { Seg } from "./seg";
import { Speaker } from "./speaker";
import { Title } from "./title";
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
  | Inscription
  | Lb
  | List
  | Mentioned
  | Milestone
  | Name
  | Note
  | Q
  | Reference
  | Seg
  | Speaker
  | Title
  | TransChange
  | W;
type AllowedAttributes = "osisRef";

export class CatchWord implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = { osisRef: "" };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
