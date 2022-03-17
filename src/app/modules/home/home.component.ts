import { Component } from '@angular/core';
import { REMARKS_TEXT } from 'src/app/shared/const/remarks.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public readonly REMARKS_TEXT = REMARKS_TEXT;

  public basicTerminology = '';
  public isGridCell = false;
  public isGridArea = false;
  public isGridTrack = false;
  public isGridLine = false;

  public numSequence(n: number): Array<number> {
    return Array(n);
  }

  public setGridTrack(): void {
    this.basicTerminology = '';
    this.isGridCell = false;
    this.isGridArea = false;
    this.isGridTrack = true;
    this.isGridLine = false;
  }

  public setGridLine(): void {
    this.basicTerminology = '';
    this.isGridCell = false;
    this.isGridArea = false;
    this.isGridTrack = false;
    this.isGridLine = true;
  }

  public setGridArea(): void {
    this.basicTerminology = '';
    this.isGridCell = false;
    this.isGridArea = true;
    this.isGridTrack = false;
    this.isGridLine = false;
  }

  public setGridCell(): void {
    this.basicTerminology = '';
    this.isGridCell = true;
    this.isGridArea = false;
    this.isGridTrack = false;
    this.isGridLine = false;
  }
}
