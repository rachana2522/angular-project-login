import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatSortModule } from '@angular/material/sort';

export interface PeriodicElement {

  topicname: string;

  action: string;

  topiccompleted: number;

}

const ELEMENT_DATA: PeriodicElement[] = [

  { action: 'edit/delete', topicname: 'Hydrogen', topiccompleted: 25},

  { action: 'edit/delete', topicname: 'Helium', topiccompleted: 25},

  { action: 'edit/delete', topicname: 'Lithium', topiccompleted: 25},

];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  form1=true; form2=false; form3=false; form4=false; form5=false;

  clicked = '';

  Click(value:string): void {

    this.clicked = value;

    this.form2=true;

  }

  Click1(value:string): void {

    this.clicked=value;

    this.form2=true;

    this.form3=true;

  }

  Click2(value:string): void {

    this.clicked=value;

    this.form2=true;

    this.form3=true;

    this.form4=true;

  }

  Click3(value:string): void {

    this.clicked=value;

    this.form2=true;

    this.form3=true;

    this.form4=true;

    this.form5=true;

  }


  // uploadFile() {

  //   if (this.selectedFile && this.currentRowIndex !== -1) {

  //     const id = this.tableData[this.currentRowIndex].id;

 

  //     if (!this.uploadedFiles[id]) {

  //       this.uploadedFiles[id] = [];

  //     }

  //     this.uploadedFiles[id].push(this.selectedFile);

  //     console.log('File uploaded for ID:', id);

 

  //     this.closeUploadModal();

  //   }

  // }

  displayedColumns: string[] = ['action', 'topicname', 'topiccompleted'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

 

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

 

  @ViewChild(MatSort)

  sort!: MatSort;

 

  ngAfterViewInit(): void {

    this.dataSource.sort = this.sort;

  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {

      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);

    } else {

      this._liveAnnouncer.announce('Sorting cleared');

    }

 
    

  }
}