import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {DbService} from './services/db.service';

import * as moment from 'moment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnChanges {
  title = 'project Management';
  show = false;
  public dataSource;
  users: any = [];
  userData;
  selected: number;
  user_projects = [];
  constructor(public db: DbService) {}

  ngOnInit() {
    this.db
      .getAllUsers()
      .then(res => {
        res.subscribe(data => {
          this.users = data;
        });
      })
      .catch(err => console.log(err));
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource<UserProject>(this.user_projects);
    console.log(this.dataSource);
  }

  listProject(event) {
    let userProjects;
    this.db
      .getUserProject(event.value)
      .then(res => {
        res.subscribe(data => {
          userProjects = data;
          userProjects.forEach(element => {
            this.db
              .getProject(element.ProjectId)
              .then(r => {
                r.subscribe(dt => {
                  // tslint:disable-next-line:prefer-const
                  let proj: UserProject = {};
                  proj.ProjectId = element.ProjectId;
                  proj.Credits = dt[0].Credits;
                  proj.StartDate = moment(dt[0].StartDate).format(
                    'MMM Do YYYY'
                  );

                  proj.EndDate = moment(dt[0].EndDate).format('MMM Do YYYY');

                  proj.Status =
                    element.IsActive.data[0] === 1 ? 'Active' : 'Inactive';
                  const time =
                    moment(dt[0].StartDate).valueOf() -
                    moment(element.AssignedDate).valueOf();
                  proj.StartTime =
                    time < 0 ? 'Started' : moment(dt[0].StartDate).fromNow();
                  this.user_projects.push(proj);
                });
              })
              .catch(err => console.error(err));
          });
        });
      })
      .then(() => {
        this.dataSource = new MatTableDataSource<UserProject>(
          this.user_projects
        );
        this.userData = this.user_projects;
        this.show = this.userData ? true : false;
      })
      .catch(err => console.error(err));
    this.user_projects = [];
  }
}

export interface UserProject {
  ProjectId?: number;
  StartDate?: string;
  StartTime?: string;
  EndDate?: string;
  Credits?: number;
  Status?: string;
}
