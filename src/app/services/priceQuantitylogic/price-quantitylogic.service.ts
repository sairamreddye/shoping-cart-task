import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PriceQuantitylogicService {
  getTotal: any = [];
  totalProductsQuantities: any = 0;
  totalPriceQuantities:any = 0;
  constructor() { }

  increase(id, items) {
    this.getTotal = [...items];
    this.getTotal.map((m) => {
      if (m.id === id) {
        const quantities = 1 + m.counter++;
        const logic = m.RS * quantities;
        this.totalQuantity('add',1,m.RS);
        return m.QuantityPrice = logic;
      }
    });
  }
  decrease(id, items) {
    this.getTotal = [...items];
    this.getTotal.map((m) => {
      if (m.id === id) {
        if (m.counter > 0) {
          if (m.counter === 1) {
            m.counter-- - 1;
            m.QuantityPrice = m.RS;
            this.totalQuantity('minus',1,m.RS);
          }
          else {
            const quantities = m.counter-- - 1;
            const logic = m.MRF * quantities;
            this.totalQuantity('minus',1,m.RS);
            return m.QuantityPrice = logic;
          }
        }
      }
    });
  }
  totalQuantity(operand,quantity,price){
        if(operand=='add'){
         this.totalProductsQuantities=this.totalProductsQuantities+quantity;
          this.totalPriceQuantities=this.totalPriceQuantities+price;
        }
        else{
          this.totalProductsQuantities=this.totalProductsQuantities-quantity;
          this.totalPriceQuantities=this.totalPriceQuantities-price;
        }
  }
  totalCost() {
    return this.totalPriceQuantities;
  }
  totalQuantities(){
    return this.totalProductsQuantities;
  }
}
