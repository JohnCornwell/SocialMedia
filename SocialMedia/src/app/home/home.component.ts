import { Component } from '@angular/core';
import { Post } from '../../Models/Post';

@Component({
  selector: 'home-component',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  posts: Array<Post> = [];
}
