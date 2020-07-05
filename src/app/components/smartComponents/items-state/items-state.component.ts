import { Component, OnInit } from '@angular/core';
import { ItemsDataService } from '../../../services/itemsData/items-data.service';
import { catchError,map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { of } from 'rxjs';



@Component({
  selector: 'app-items-state',
  templateUrl: './items-state.component.html',
  styleUrls: ['./items-state.component.css']
})
export class ItemsStateComponent implements OnInit {
  items: any[];
    
  constructor(private itemsData:ItemsDataService) { }

  ngOnInit() {
    this.itemsData.getItems().pipe(
      map((res:any []) => this.items = res),
      catchError(err => {
          console.log('caught mapping error and rethrowing', err);
          return throwError(err);
      }),
      catchError(err => {
          console.log('caught rethrown error, providing fallback value',err);
          return of([]);
      })
  )
  .subscribe(
      res => console.log('HTTP response',res),
      err => console.log('HTTP Error', err),
      () => console.log('HTTP request completed.')
  );
  }

}
