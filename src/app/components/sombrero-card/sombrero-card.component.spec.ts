import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SombreroCardComponent } from './sombrero-card.component';

describe('SombreroCardComponent', () => {
  let component: SombreroCardComponent;
  let fixture: ComponentFixture<SombreroCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SombreroCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SombreroCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
