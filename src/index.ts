/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { OsisText } from "./osis/osisText";
import { parseXML } from "./parser/index-old";
import * as readline from "readline";

const bible: OsisText = parseXML();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function promptForArgument() {
  rl.question("Enter a verse: ", (answer) => {
    const { book, chapter, verse } = {
      book: answer.split(".")[0] ?? undefined,
      chapter: answer.split(".")[1] ?? undefined,
      verse: answer.split(".")[2] ?? undefined,
    };

    if (book === undefined) {
      console.log("Book not found");
    }

    const osisBook = bible.divs.get(book);
    if (osisBook === undefined) {
      console.log("Book not found");
    }

    if (chapter === undefined) {
      console.log("Chapter not found");
    }

    if (chapter !== undefined) {
      const osisChapter = osisBook!.chapters.find((value) => {
        return value.number === parseInt(chapter, 10);
      });
      if (osisChapter === undefined) {
        console.log("Chapter not found");
      }

      if (verse === undefined && osisChapter !== undefined) {
        // Print entire chapter
        osisChapter.verses.forEach((value) => {
          console.log(`${value.number}. ${value.text}`);
        });
      }

      if (verse !== undefined && osisChapter !== undefined) {
        const osisVerse = osisChapter.verses.find((value) => {
          return value.number === parseInt(verse, 10);
        });
        if (osisVerse === undefined) {
          console.log("Verse not found");
        }
      }
    }

    promptForArgument();
  });
}

promptForArgument();
