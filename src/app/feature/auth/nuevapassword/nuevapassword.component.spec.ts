import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevapasswordComponent } from './nuevapassword.component';

describe('NuevapasswordComponent', () => {
  let component: NuevapasswordComponent;
  let fixture: ComponentFixture<NuevapasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevapasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevapasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
