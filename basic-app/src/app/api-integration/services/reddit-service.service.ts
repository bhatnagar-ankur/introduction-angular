import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RedditService {

  constructor(private http: HttpClient) { }

  public getRedditPageInfo(url: string = 'https://www.reddit.com/r/india.json') {
    return this.http.get(url).pipe((args) => { return args });
  }
}
