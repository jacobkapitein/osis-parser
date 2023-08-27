import { Chapter } from "./chapter";

export class Div {
  public readonly osisID: string = "";
  public readonly title: string = "";
  public chapters: Chapter[] = [];

  constructor(osisID: string, title: string) {
    this.osisID = osisID;
    this.title = title;
  }
}
