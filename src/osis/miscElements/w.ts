import { Index } from ".";
import { A } from "./a";
import { Note } from "./note";
import { Seg } from "./seg";

type AllowedSubElements = A | Index | Note | Seg;
type AllowedAttributes = "gloss" | "lemma" | "morph" | "POS" | "src" | "xlit";

export class W {
  public attributes: Record<AllowedAttributes, string> = {
    gloss: "",
    lemma: "",
    morph: "",
    POS: "",
    src: "",
    xlit: "",
  };
  public subElements: AllowedSubElements[] = [];
  public text = "";
}
