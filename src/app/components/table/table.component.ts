import {Component, Input, OnInit} from '@angular/core';
import {Hit} from '../../model/Hit';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input('value') $value!: Subject<Hit[]>;
  value: Hit[] = [
     {
      x: 10,
      y: 10,
      r: 0,
      result:true
  }

  ]

  ngOnInit() {

  }
}
