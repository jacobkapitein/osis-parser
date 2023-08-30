/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
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
type AllowedAttributes = "type" | "regular";
type CustomAllowedAttributes = {
  type: "geographic" | "holiday" | "nonhuman" | "person" | "ritual" | string;
  regular: string;
};

export class Name implements BaseElement {
  public attributes: Record<
    AllowedAttributes,
    CustomAllowedAttributes[keyof CustomAllowedAttributes]
  > = {
    type: "",
    regular: "",
  };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
