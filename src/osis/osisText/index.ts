import { Div } from "./div";

export class OsisText {
  public readonly osisIDWork: string = "";
  public divs = new Map<string, Div>();

  constructor(osisIDWork: string) {
    this.osisIDWork = osisIDWork;
  }
}
