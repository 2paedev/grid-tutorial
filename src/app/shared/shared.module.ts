import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoxComponent } from './components/box/box.component';
import { FigureComponent } from './components/figure/figure.component';
import { RemarkComponent } from './components/remark/remark.component';

@NgModule({
  declarations: [RemarkComponent, BoxComponent, FigureComponent],
  imports: [CommonModule],
  exports: [CommonModule, RemarkComponent, BoxComponent, FigureComponent],
})
export class SharedModule {}
