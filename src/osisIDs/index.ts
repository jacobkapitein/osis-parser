import { TranslationKey, translations } from "./translations";

export type OsisBook = {
  id: string;
  title: string;
  chapterCount: number;
};

/***
 * Find a book by its OSIS ID or title.
 * @param query The OSIS ID or title of the book.
 * @param translation The translation to search in. This has an effect on the search query when searching by title.
 * @returns The book if found, otherwise `null`.
 */
export const findOsisBook = (
  query: string,
  translation: TranslationKey
): OsisBook | null => {
  const books = translations[translation];
  const book = books.find((book) => book.id === query || book.title === query);

  return book || null;
};
