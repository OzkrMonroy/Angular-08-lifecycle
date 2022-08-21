import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-example-component',
  templateUrl: './life-example-component.component.html',
  styles: [
  ]
})
export class LifeExampleComponentComponent implements OnInit, OnChanges {

  @Input() name!: string;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});
    
  }

  ngOnInit(): void {
  }

}
