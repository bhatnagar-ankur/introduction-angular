import { Component, OnInit } from '@angular/core';
import { ParseAPIData } from '../../models/parse-api';
import { RedditService } from '../../services/reddit-service.service';

@Component({
  selector: 'app-reddit-api',
  templateUrl: './reddit-api.component.html',
  styleUrls: ['./reddit-api.component.scss']
})
export class ApiComponent implements OnInit {

  infoData: ParseAPIData[] = [];
  showLoader = true;
  filterCollection: any[] = [];
  copyOfInfoData: ParseAPIData[] = [];
  constructor(private pageService: RedditService) { }

  ngOnInit(): void {

    this.pageService.getRedditPageInfo().subscribe((args: any) => {
      args.data.children.forEach((arrItem: any) => {
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

}

