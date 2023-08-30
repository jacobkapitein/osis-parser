import { BaseElement } from "../baseElement";
import { Rdg } from "./rdg";

type AllowedSubElements = Rdg;
type AllowedAttributes = never;

export class RdgGroup implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = {};
  public subElements: AllowedSubElements[] = [];
}
