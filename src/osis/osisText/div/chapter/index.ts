import { Verse } from "./verse";

export class Chapter {
  public readonly osisID: string = "";
  public readonly number: number = 0;
  public verses: Verse[] = [];

  constructor(osisID: string, number: number) {
    this.osisID = osisID;
    this.number = number;
  }
}
