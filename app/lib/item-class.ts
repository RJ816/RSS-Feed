export default class Item {
    title: string;
    link: string;
    pubDate?: string;
    creator?: string;
  
    constructor(title: string, link: string, pubDate?: string, creator?: string) {
      this.title = title;
      this.link = link;
      this.pubDate = pubDate;
      this.creator = creator;
    }
  }