export class Post {
    title: string;
  content: string;
  loveIts: number;
  created_at: Date;
  constructor(_title:string,_content:string,_loveIts:number){
      console.log(_title);
      this.title=_title;
      this.content=_content;
      this.created_at=new Date();
      this.loveIts=_loveIts;
  }


}
