export class W {
  public text = "";

  public static readonly allowedAttributes = [
    "gloss",
    "lemma",
    "morph",
    "POS",
    "src",
    "xlit",
  ];
  public static readonly allowedSubElements = ["a", "index", "note", "seg"];
}
