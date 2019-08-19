import { Farmer } from '../model/farmer/farmer.component';
import { FarmerSearchAbstractProvider } from '../abstract/farmer-search-abstract.component';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FarmerSearchProvider  implements FarmerSearchAbstractProvider {
  
  searchFarmers(params: string): Promise<Farmer[]> { 
    return this.httpSearch(params);
  }


  constructor() { 
  }

  private httpSearch(value:string): Promise<Farmer[]>{
    return new Observable<Farmer[]>((obs) =>
    {
      const f1:Farmer = new Farmer();
      f1.id = '1';
      f1.name = 'Rodrigo Reis';
      f1.document = {
        documentNumber: '123.456.789-89',
        documentType: 'CPF'
      };
      f1.address = {
        street: 'Joker Street, 0',
        state: 'São Paulo',
        address: '41180390',
        country: 'Brazil',
      };
      const f2:Farmer = new Farmer();
      f2.id = '1';
      f2.name = 'Raquel Giovanini';
      f2.document = {
        documentNumber: '123.456.789-89',
        documentType: 'CPF'
      };
      f2.address = {
        street: 'Joker Street, 0',
        state: 'São Paulo',
        address: '41180390',
        country: 'Brazil',
      }
      let arr = [f1,f2].filter( (element: Farmer)=>{
        return (element.name.includes(value) || element.document.documentNumber === value);
      });

      const httpRespone = new HttpResponse<Farmer[]>({
        body: arr,
        status: 200,
        statusText:'OK',
        headers: new HttpHeaders({

        })
      })
      obs.next(httpRespone.body);
      obs.complete();
    }).toPromise();
  }
}
