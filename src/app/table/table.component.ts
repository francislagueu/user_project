import {Component, OnInit, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {UserProject} from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input() userData;
  displayedColumns: string[] = [
    'ProjectId',
    'StartDate',
    'StartTime',
    'EndDate',
    'Credits',
    'Status',
  ];
  dataSource;
  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<UserProject>(this.userData);
  }
}
