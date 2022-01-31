import {Component, OnInit} from '@angular/core';
import {FormBuilder,  FormGroup, Validators} from "@angular/forms";

import {Hit} from '../../model/Hit';





@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {


  xValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3].reverse();
  rValues = [-5, -4, -3, -2, -1, 0, 1, 2, 3].reverse();
  pointForm: FormGroup;


  constructor(private fb: FormBuilder,) {

    this.pointForm = fb.group({
      x: ['', [Validators.required]],
      y: ['0', [Validators.min(-4.99999), Validators.max(2.99999)]],
      r: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
        console.log("ghbdtn");
  }
  submitHit(hit: Hit) {
    console.log(`Submitting hit with x = ${hit.x}, y = ${hit.y}, r = ${hit.r}`);

  }


}
