import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarpperComponent } from './warpper.component';

describe('WarpperComponent', () => {
  let component: WarpperComponent;
  let fixture: ComponentFixture<WarpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarpperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
