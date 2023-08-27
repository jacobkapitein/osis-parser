/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-dynamic-delete */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { XMLParser } from "fast-xml-parser";
import * as fs from "fs";
import { Chapter } from "../osis/osisText/div/chapter";
import { Div } from "../osis/osisText/div";
import { Verse } from "../osis/osisText/div/chapter/verse";
import { OsisText } from "../osis/osisText";

export const parseXML = (): OsisText => {
  const xml = fs.readFileSync("SV.xml", { encoding: "utf8" });
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    preserveOrder: true,
    textNodeName: "#text",
  });

  const jsonObj = parser.parse(xml);

  const osisObject = jsonObj[1].osis[0];

  const osisText = new OsisText(osisObject[":@"].osisIDWork as string);

  osisObject.osisText.forEach((book: any, index: number) => {
    if (index === 0) return;

    const osisBook = new Div(
      book[":@"].osisID as string,
      book.div[0].title["#text"] as string
    );

    book.div.forEach((chapter: any, index: number) => {
      if (index === 0) return;

      const osisChapter = new Chapter(
        chapter[":@"].osisID as string,
        parseInt(chapter[":@"].osisID.split(".")[1] as string, 10)
      );
      osisBook.chapters.push(osisChapter);

      for (const verse of chapter.chapter) {
        osisChapter.verses.push(xmlVerseToOsisVerse(verse));
      }
    });

    osisText.divs.set(osisBook.osisID, osisBook);
  });

  return osisText;
};

const xmlVerseToOsisVerse = (xmlVerse: any): Verse => {
  const osisVerse = new Verse(
    xmlVerse[":@"].osisID as string,
    parseInt(xmlVerse[":@"].osisID.split(".")[2] as string, 10)
  );

  let plainText = "";
  xmlVerse.verse.forEach((node: any, index: number) => {
    if (node.hasOwnProperty("#text")) {
      plainText += node["#text"];
      // Else check if the node has any property that is in the allowedSubElements static array in the Verse class
    } else if (
      Object.keys(node).some((key) => {
        return Verse.allowedSubElements.includes(key);
      })
    ) {
      // If so, use that property's #text value
      Object.keys(node).forEach((key) => {
        if (Verse.allowedSubElements.includes(key)) {
          if (
            node[key] &&
            node[key][0] &&
            node[key][0].hasOwnProperty("#text")
          ) {
            plainText += node[key][0]["#text"];
          }
        }
      });
    }

    // else if (
    //   node.hasOwnProperty("w") &&
    //   node.w[0] !== undefined &&
    //   node.w[0].hasOwnProperty("#text")
    // ) {
    //   plainText += node.w[0]["#text"];
    // } else if (
    //   node.hasOwnProperty("transChange") &&
    //   node.transChange[0] !== undefined &&
    //   node.transChange[0].hasOwnProperty("#text")
    // ) {
    //   plainText += node.transChange[0]["#text"];
    // }

    if (index < xmlVerse.verse.length - 1) {
      plainText += " ";
    }
  });

  plainText = plainText.replace(/\s*([.,;:!?])\s*/g, "$1 ").trim();
  osisVerse.text = plainText;

  return osisVerse;
};
