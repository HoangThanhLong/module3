import {Component, OnInit} from '@angular/core';
import {IAwesome} from '../../IAwesome';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AwesomeService} from '../../service/awesome.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-awesome-edit',
  templateUrl: './awesome-edit.component.html',
  styleUrls: ['./awesome-edit.component.css']
})
export class AwesomeEditComponent implements OnInit {
  awesomes: IAwesome;
  awesomeEditForm: FormGroup;

  constructor(private awesomeService: AwesomeService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.awesomeEditForm = this.fb.group({
      tag: ['', Validators.required],
      url: ['', Validators.required],
      descriptions: ['', Validators.required]
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.awesomeService.findById(id).subscribe(data => {
      this.awesomeEditForm.patchValue({
        tag: data.tag,
        url: data.url,
        descriptions: data.descriptions
      });
    });
  }

  Onsubmit() {
    if (this.awesomeEditForm.valid) {
      const id = +this.route.snapshot.paramMap.get('id');
      const value = this.awesomeEditForm.value;
      this.awesomeService.edit(id, value).subscribe(next => {
        this.router.navigate(['']);
      });
    }
  }

}
