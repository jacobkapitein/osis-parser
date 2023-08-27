import { Index } from ".";
import { BaseElement } from "../baseElement";
import { A } from "./a";
import { Abbr } from "./abbr";
import { Foreign } from "./foreign";
import { Note } from "./note";
import { Reference } from "./reference";
import { Seg } from "./seg";
import { W } from "./w";

type AllowedSubElements =
  | A
  | Abbr
  | Foreign
  | Index
  | Note
  | Reference
  | Seg
  | W;
type AllowedAttributes = never;

export class DivineName implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = {};
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
