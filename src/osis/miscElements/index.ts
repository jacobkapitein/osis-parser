import { BaseElement } from "../baseElement";

type AllowedSubElements = [];
type AllowedAttributes =
  | "level1"
  | "level2"
  | "level3"
  | "level4"
  | "index"
  | "see"
  | "name";

export class Index implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = {
    level1: "",
    level2: "",
    level3: "",
    level4: "",
    index: "",
    see: "",
    name: "",
  };
  public subElements: AllowedSubElements[] = [];
}
