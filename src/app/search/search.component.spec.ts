import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FarmerSearchProvider } from '../farmer-search-abstract-provider/farmer-search-abstract-provider.component';
import { FarmerSearchCardComponent } from '../farmer-search-card/farmer-search-card.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent,
      FarmerSearchCardComponent ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        HttpClientModule
      ],
      providers:[FarmerSearchProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mySelectedFarmer Works', () => {
    let search = component.myFarmerSearchProvider.searchFarmers('Rodrigo');
    expect(component.mySelectedFarmer(search)).toBeUndefined();
  });

  it('should mySelectedFarmer fail', () => {
    component.myFarmerSearchProvider.searchFarmers = (err)=>{
      return Promise.reject('error');
    }
    let search = component.myFarmerSearchProvider.searchFarmers('no-valid-value');
    expect(component.mySelectedFarmer(search)).toBeUndefined();
  });
});
