export class Name implements BaseElement {
  readonly allowedAttributes = ["type", "regular"];
  readonly allowedSubElements = [
    "a",
    "abbr",
    "foreign",
    "index",
    "note",
    "reference",
    "seg",
    "w",
  ];
}
