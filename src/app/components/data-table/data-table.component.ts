
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
import { DataTableDirective } from 'angular-datatables';
import {Subject } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, OnDestroy {


  data: any = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  isLoading = false


  constructor(private _appService: AppServiceService) { }


  ngOnInit(): void {
    this.fetchData()
  }


  ngOnDestroy() {
    this.dtTrigger.unsubscribe();
  }



  fetchData() {
    this.isLoading = true;
    this._appService.fetchDataWithObservable().subscribe((res) => {
      this.data = res
      this.isLoading = false;
      this.dtTrigger.next(this.data);
    })
  }

  fetchData2() {
    this.dtTrigger.next(this.data)
    this.data = this._appService.fetchDataWithObservable()
    
  }
}
