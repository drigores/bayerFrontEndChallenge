import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSearchCardComponent } from './farmer-search-card.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { FarmerSearchProvider } from '../farmer-search-abstract-provider/farmer-search-abstract-provider.component';

describe('FarmerSearchCardComponent', () => {
  let component: FarmerSearchCardComponent;
  let fixture: ComponentFixture<FarmerSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerSearchCardComponent ],
      imports:[
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        HttpClientModule,
      ],
      providers:[FarmerSearchProvider]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search works', () => {
    component.farmerSearchAbstractProvider = TestBed.get(FarmerSearchProvider);
    expect(component.search('Rodrigo')).toBeUndefined();
  });

});
