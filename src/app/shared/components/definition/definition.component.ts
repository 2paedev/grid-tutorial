import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.component.html',
  styleUrls: ['./definition.component.css'],
})
export class DefinitionComponent {
  @Input() data: any;
}
