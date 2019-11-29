import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AwesomeService} from '../../service/awesome.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-awesome-create',
  templateUrl: './awesome-create.component.html',
  styleUrls: ['./awesome-create.component.css']
})
export class AwesomeCreateComponent implements OnInit {
  awesomeCreateFrom: FormGroup;
  constructor(private awesomeService: AwesomeService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.awesomeCreateFrom = this.fb.group({
      tag: ['', Validators.required],
      url: ['', Validators.required],
      descriptions: ['', Validators.required]
    });
  }
  Onsubmit() {
    if (this.awesomeCreateFrom.valid) {
      const value = this.awesomeCreateFrom.value;
      this.awesomeService.create(value).subscribe(data => {
        this.router.navigate(['']);
      });
    }
  }

}
