import { Component } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicElement } from '../data/interfaces';
import { ELEMENT_DATA } from '../data/objects';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.css'],

})
export class GenericTableComponent implements AfterViewInit{
   ELEMENT_DATA: PeriodicElement[] = ELEMENT_DATA

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction)
      console.log(`Sorted ${sortState.direction}ending`)

    else
      console.log('Sorting cleared');

  }
}
