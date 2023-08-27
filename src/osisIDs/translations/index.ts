import { OsisBook } from "..";
import { bible as SV } from "./SV/index";

export type TranslationKey = keyof typeof translations;

// You can add more translations here. Set the key to `"SV" | "KJV"` etc.
export const translations: Record<"SV", OsisBook[]> = {
  SV,
};
