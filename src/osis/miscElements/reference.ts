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
  | Seg
  | Title
  | W;
type AllowedAttributes = "type" | "osisRef";
type CustomAllowedAttributes = {
  type: "annotateRef" | "parallel" | "source" | string;
  osisRef: string;
};

export class Reference implements BaseElement {
  public attributes: Record<
    AllowedAttributes,
    CustomAllowedAttributes[keyof CustomAllowedAttributes]
  > = {
    type: "",
    osisRef: "",
  };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
