import { Index } from ".";
import { BaseElement } from "../baseElement";
import { Text } from "../helperElements/text";

type AllowedSubElements = Index | Text;
type AllowedAttributes = "href";

export class A implements BaseElement {
  public attributes: Record<AllowedAttributes, string> = { href: "" };
  public subElements: AllowedSubElements[] = [];
}
