import { Component, OnInit } from '@angular/core';
import {IAwesome} from '../../IAwesome';
import {AwesomeService} from '../../service/awesome.service';

@Component({
  selector: 'app-awesome-list',
  templateUrl: './awesome-list.component.html',
  styleUrls: ['./awesome-list.component.css']
})
export class AwesomeListComponent implements OnInit {
  awesomeList: IAwesome[] = [];
  constructor(private awesomeService: AwesomeService) { }
  getAll() {
    this.awesomeService.getAll().subscribe(data => {
      this.awesomeList = data;
    });
  }
  ngOnInit() {
    this.getAll();
  }
  delete(i) {
    const check = confirm('Are you sure?');
    if (check === true) {
      this.awesomeService.delete(i).subscribe(() => {
        this.getAll();
      });
    }
  }
}
