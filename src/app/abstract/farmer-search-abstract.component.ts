import { Farmer } from '../model/farmer/farmer.component';

export  abstract class FarmerSearchAbstractProvider {
  abstract searchFarmers(params: string): Promise<Farmer[]>;
  constructor(){
  };
}
