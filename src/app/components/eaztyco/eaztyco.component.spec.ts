import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaztycoComponent } from './eaztyco.component';

describe('EaztycoComponent', () => {
  let component: EaztycoComponent;
  let fixture: ComponentFixture<EaztycoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EaztycoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EaztycoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
