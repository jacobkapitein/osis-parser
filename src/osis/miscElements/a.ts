import { Index } from ".";
import { BaseElement } from "../baseElement";

type AllowedSubElements = Index;
type AllowedAttributes = "href";

export class A implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = { href: "" };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
