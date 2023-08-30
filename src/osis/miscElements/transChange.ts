/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
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
  | W;
type AllowedAttributes = "type";
type CustomAllowedAttributes = {
  type:
    | "added"
    | "amplified"
    | "changed"
    | "deleted"
    | "implied"
    | "moved"
    | "tenseChange"
    | string;
};

export class TransChange implements BaseElement {
  public attributes: Record<
    AllowedAttributes,
    CustomAllowedAttributes[keyof CustomAllowedAttributes]
  > = {
    type: "",
  };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
