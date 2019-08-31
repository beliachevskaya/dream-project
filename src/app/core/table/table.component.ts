import { Component, OnInit, Input, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() tableColumn: any;
  @Input() tableData: any;
  @Input() filter: any;
  displayedColumns: string[];
  columnsToDisplay: string[];
  dataSource: any;
  value = '';

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  constructor() {
  }

  ngOnInit() {
    this.displayedColumns = this.tableColumn;
    this.columnsToDisplay = this.displayedColumns.slice();
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.Name.toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    }
  }

  ngOnChanges() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter) => {
      const dataStr = data.Name.toLowerCase();
      return dataStr.indexOf(filter) !== -1;
    }
    this.value = '';
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
