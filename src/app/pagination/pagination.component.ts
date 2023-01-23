import { Component, OnInit, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor(private dataservice: DataService) { }

  ngOnInit(): void {
  }

  @Input() movieData: any
  @Input() current: number=0;
  @Input() total: number=0;

  @Output() goTo: EventEmitter<number> = new EventEmitter<number>()
  @Output() next: EventEmitter<number> = new EventEmitter<number>()
  @Output() previous: EventEmitter<number> = new EventEmitter<number>()

  public pages: number[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(
      (changes.current && changes.current.currentValue) || (changes.total && changes.total.currentValue)
    ) {
      this.pages = this.getPages(this.current, this.total)
    }
  }


  public onGoto(page: number): void {
    this.goTo.emit(page)
  }

  public onNext(): void {
    this.next.emit(this.current)
  }

  public onPrevious(): void {
    this.previous.emit(this.current)
  }

  private getPages(current: number, total: number): number[] {
    if (total <= this.movieData.totalResults) {
      return [...Array(total).keys()].map(x => ++x)
    }

    if (current > 5) {
      if (current >= total - 4) {
        return [1, -1, total - 4, total - 3, total - 2, total - 1, total]
      } else {
        return [1, -1, current - 1, current, current + 1, -1, total]
      }
    }

    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  }
}
