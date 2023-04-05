import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reddit-sub-page',
  templateUrl: './reddit-sub-page.component.html',
  styleUrls: ['./reddit-sub-page.component.scss']
})
export class RedditSubPageComponent implements OnInit {
  url = '';
  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = decodeURIComponent(this.router.snapshot.params['url']);
  }
}
