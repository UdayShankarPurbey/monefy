import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddincomeandexpenseComponent } from './addincomeandexpense.component';

describe('AddincomeandexpenseComponent', () => {
  let component: AddincomeandexpenseComponent;
  let fixture: ComponentFixture<AddincomeandexpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddincomeandexpenseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddincomeandexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
