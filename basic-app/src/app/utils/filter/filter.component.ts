import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input() filterData: any = [];
  @Output() filterItemClicked = new EventEmitter<number>();
  selectedButtonId = -1;
  hoverItem = {
    backgroundColor: '',
    textColor: '',
    id: -1
  };

  constructor() { }

  public itemClicked(item: any) {
    if (this.selectedButtonId !== item.id) {
      this.selectedButtonId = item.id;
    } else {
      this.selectedButtonId = -1;
    }
    this.filterItemClicked.emit(this.selectedButtonId);
  }

  public mouseHoverOver(item: any): void {
    this.hoverItem = {
      backgroundColor: '',
      textColor: '',
      id: -1

    };
  }

  public mouseHover(item: any): void {
    this.hoverItem = item;
  }
}
