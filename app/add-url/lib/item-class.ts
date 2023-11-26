export default class Item {
    title: string;
    link: string;
    pubDate?: string;
  
    constructor(title: string, link: string, pubDate?: string) {
      this.title = title;
      this.link = link;
      this.pubDate = pubDate;
    }
  }