export class Gist {
  gistName: string;
  rawUrl: string;
  comments?: string[]

  constructor(gistNamez: string,
              rawUrlz: string,
              commentsZ?: string[]
              )
  {
    this.gistName = gistNamez;
    this.rawUrl = rawUrlz;
    this.comments = commentsZ;

  }
}
