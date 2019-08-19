import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSearchProvider } from './farmer-search-abstract-provider.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('FarmerSearchAbstractProviderComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule],
      providers:[HttpClient]
    })
  });


  it('should create', () => {
    const service = TestBed.get(FarmerSearchProvider);
    expect(service).toBeTruthy();
  });

  it('should searchFarmers works', () => {
    const service = TestBed.get(FarmerSearchProvider);
    expect(service.searchFarmers('Rodrigo')).toBeDefined();
  });
});
