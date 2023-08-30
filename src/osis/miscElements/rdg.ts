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
import { Lg } from "./lg";
import { List } from "./list";
import { Milestone } from "./milestone";
import { Name } from "./name";
import { Note } from "./note";
import { P } from "./p";
import { Q } from "./q";
import { Reference } from "./reference";
import { Seg } from "./seg";
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
  | Lg
  | List
  | Milestone
  | Name
  | Note
  | P
  | Q
  | Reference
  | Seg
  | TransChange
  | W;
type AllowedAttributes = "type";
type CustomAllowedAttributes = {
  type: "alternate" | "variant" | string;
};

export class Rdg implements BaseElement {
  public attributes: Record<
    AllowedAttributes,
    CustomAllowedAttributes[keyof CustomAllowedAttributes]
  > = { type: "test" };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
