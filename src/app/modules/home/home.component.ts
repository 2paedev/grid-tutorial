import { Component } from '@angular/core';
import { DEFINITIONS } from 'src/app/shared/const/definitions.const';
import { REMARKS_TEXT } from 'src/app/shared/const/remarks.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public readonly REMARKS_TEXT = REMARKS_TEXT;
  public readonly DEFINITIONS = DEFINITIONS;

  public gridComponentType = '';

  public isGridCell = false;
  public isGridArea = false;
  public isGridTrack = false;
  public isGridLine = false;

  public numSequence(n: number): Array<number> {
    return Array(n);
  }

  public scrollTo(el: HTMLElement): void {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  public setGridTrack(): void {
    this.gridComponentType = 'track';
  }

  public setGridLine(): void {
    this.gridComponentType = 'line';
  }

  public setGridArea(): void {
    this.gridComponentType = 'area';
  }

  public setGridCell(): void {
    this.gridComponentType = 'cell';
  }
}
