import { Component, OnInit, Input,Output, EventEmitter, Inject  } from '@angular/core';
import { PriceQuantitylogicService } from '../../../services/priceQuantitylogic/price-quantitylogic.service';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-items-stateless',
  templateUrl: './items-stateless.component.html',
  styleUrls: ['./items-stateless.component.css']
})
export class ItemsStatelessComponent implements OnInit {

@Input() items:any;
  id: any;
  UpdatedPrice: any=[];
  constructor(private Businesslogic:PriceQuantitylogicService, @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
  }

  increase(id) {
   return this.Businesslogic.increase(id,this.items);  
  }
  decrease(id){
   return this.Businesslogic.decrease(id,this.items)
  }
  totalCost(){
    return this.Businesslogic.totalCost();
  }
  totalQuantities(){
    return this.Businesslogic.totalQuantities();
  }
  alertShow(){
    alert(`Your Total Price is ${this.totalCost()} and Your Transaction is successful .`);
    this._document.defaultView.location.reload();
  }
}





