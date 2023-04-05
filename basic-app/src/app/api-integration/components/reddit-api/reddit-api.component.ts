import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ParseAPIData } from '../../models/parse-api';
import { RedditService } from '../../services/reddit-service.service';

@Component({
  selector: 'app-reddit-api',
  templateUrl: './reddit-api.component.html',
  styleUrls: ['./reddit-api.component.scss']
})
export class RedditComponent implements OnInit {

  @Input() url = 'https://www.reddit.com/r/india.json';

  infoData: ParseAPIData[] = [];
  showLoader = true;
  filterCollection: any[] = [];
  copyOfInfoData: ParseAPIData[] = [];
  constructor(private pageService: RedditService, private router: Router) { }

  ngOnInit(): void {
    this.pageService.getRedditPageInfo(this.url).subscribe((args: any) => {
      let _data: any = {};
      if (Array.isArray(args)) {
        _data = args[0].data;
      } else {
        _data = args.data
      }
      _data.children.forEach((arrItem: any) => {
        this.infoData.push(new ParseAPIData(arrItem.data));
        this.copyOfInfoData.push(new ParseAPIData(arrItem.data));
      });

      this.filterCollection = [];
      this.infoData.forEach(element => {
        if (this.filterCollection.findIndex((args) => { return args?.displayName === element.tag }) === -1) {
          this.filterCollection.push({
            id: this.filterCollection.length + 1,
            displayName: element.tag,
            backgroundColor: element.backgroundColor,
            textColor: element.textColor
          })
        }
      });
      this.showLoader = false;
    })
  }

  public filterItemClicked(filterId: number): void {
    const filterKeyword = this.filterCollection.filter(args => args.id === filterId)[0]?.displayName;
    if (filterKeyword) {
      this.infoData = this.copyOfInfoData.filter(item => item.tag === filterKeyword);
    } else {
      this.infoData = JSON.parse(JSON.stringify(this.copyOfInfoData));
    }
  }

  public openSubPage(url: string): void {
    url = encodeURIComponent(`${url}.json`);
    this.router.navigate(['/sub-page', url]);
  }

}

