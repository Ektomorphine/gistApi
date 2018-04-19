export class Gist {
  gistName: string;
  rawUrl: string;
  comments?: string[]

  constructor(setGistName: string,
              setRawUrl: string,
              setComments?: string[]
              )
  {
    this.gistName = setGistName;
    this.rawUrl = setRawUrl;
    this.comments = setComments;

  }
}
