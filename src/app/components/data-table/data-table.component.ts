import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { config } from '../../config';
declare const $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {


  data: any;

  constructor(private http: HttpClient) { }
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true
    };


    this.fetchData2()
  }

  async fetchData2() {
    const res: any = await this.http.get(config.DATA_TABLE_API).toPromise();
    this.data = res
  }



}
