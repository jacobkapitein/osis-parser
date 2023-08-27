import { Index } from ".";
import { BaseElement } from "../baseElement";
import { A } from "./a";
import { DivineName } from "./divineName";
import { Foreign } from "./foreign";
import { Name } from "./name";
import { Note } from "./note";
import { Reference } from "./reference";
import { W } from "./w";

type AllowedSubElements =
  | A
  | DivineName
  | Foreign
  | Index
  | Name
  | Note
  | Reference
  | W;
type AllowedAttributes = "expansion";

export class Abbr implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = { expansion: "" };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
