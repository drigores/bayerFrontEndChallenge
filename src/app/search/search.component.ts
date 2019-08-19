import { Component, OnInit } from '@angular/core';
import { Farmer } from '../model/farmer/farmer.component';
import { FarmerSearchProvider } from '../farmer-search-abstract-provider/farmer-search-abstract-provider.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private readonly lblTo = 'Destinatário';

  private farmer: Farmer;
  
  mySelectedFarmer = ($evt : Promise<Farmer[]>)=>{
    $evt.then( (res: Farmer[])=>{
      this.farmer = res.pop();
      console.log(this.farmer);
    });
    $evt.catch((err)=> console.log(err));
  }

  constructor(public myFarmerSearchProvider:FarmerSearchProvider) { }

  ngOnInit() {
  }

}
