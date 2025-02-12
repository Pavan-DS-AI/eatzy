import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsearchComponent } from './restaurantsearch.component';

describe('RestaurantsearchComponent', () => {
  let component: RestaurantsearchComponent;
  let fixture: ComponentFixture<RestaurantsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantsearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
