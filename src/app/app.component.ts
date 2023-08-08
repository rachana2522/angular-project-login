import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

 

export interface PeriodicElement {

  action: string;

  order: number;

  topicname: string;

  theorytime: number;

  practisetime: number;

  summary: string;

  content: string;

  files: string;

  icon:string;

  icon1:string;

}

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']

})

export class AppComponent {

 

  title = 'course-page';

  ELEMENT_DATA: PeriodicElement[] = [

    { action: '', order: 3, topicname: 'Learn PHP Variables', theorytime: 2, practisetime: 2, summary: 'asdgasdgvsdg', content: 'wdsfsdfa', files: '', icon:'cloud_upload', icon1:'format_align_justify, build'},

    { action: '', order: 2, topicname: 'Session and Cookies', theorytime: 2, practisetime: 2, summary: 'asdgasdgvsdg', content: 'wdsfsdfa', files: '', icon:'cloud_upload', icon1:'format_align_justify, build' },

    { action: '', order: 5, topicname: 'Error Handling', theorytime: 2, practisetime: 2, summary: 'asdgasdgvsdg', content: 'wdsfsdfa', files: '', icon:'cloud_upload', icon1:'format_align_justify, build'}

  ];

 

  displayedColumns: string[] = ['action','order', 'topicname', 'theorytime','practisetime','summary','content','files'];

  dataSource = new MatTableDataSource(this.ELEMENT_DATA);

 

}