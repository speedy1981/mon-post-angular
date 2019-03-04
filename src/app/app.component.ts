import { Component, Input } from '@angular/core';
import { Post } from './model/Post';
import {PostListComponent} from './post-list/post-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent {
   // initialisation des postes
    post1=new Post('mon premier post','Bonjour, je cherche un cours angular2, enfin je suis tombé sur le cours que cherchait depuis des mois',0);
    post2=new Post('mon deuxième post','Bonjour, je cherche un cours angular2, enfin je suis tombé sur le cours que cherchait depuis des mois',0);
    post3=new Post('mon troisième post','Bonjour, je cherche un cours angular2, enfin je suis tombé sur le cours que cherchait depuis des mois',0);
    post4=new Post('mon quatrième post','Bonjour, je cherche un cours angular2, enfin je suis tombé sur le cours que cherchait depuis des mois',0);

 posts:Array<Post>=[this.post1,this.post2,this.post3,this.post4];
 
 
 constructor(){
 
}
}

