import { Component, Output, Input, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractProvider } from '../abstract/farmer-search-abstract.component';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent{

  
  constructor() {
  }

  @Input() farmerSearchAbstractProvider: FarmerSearchAbstractProvider;

  @Output() onFarmerSelectedEvent =  new EventEmitter();

  public search(value:string){
    this.onFarmerSelectedEvent.emit(this.farmerSearchAbstractProvider.searchFarmers(value));
  }

}

