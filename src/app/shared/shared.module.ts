import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoxComponent } from './components/box/box.component';
import { DefinitionComponent } from './components/definition/definition.component';
import { FigureComponent } from './components/figure/figure.component';
import { RemarkComponent } from './components/remark/remark.component';

@NgModule({
  declarations: [
    RemarkComponent,
    BoxComponent,
    FigureComponent,
    DefinitionComponent,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    RemarkComponent,
    BoxComponent,
    FigureComponent,
    DefinitionComponent,
  ],
})
export class SharedModule {}
