import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelContentComponent } from './label-content.component';

describe('LabelContentComponent', () => {
  let component: LabelContentComponent;
  let fixture: ComponentFixture<LabelContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabelContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
