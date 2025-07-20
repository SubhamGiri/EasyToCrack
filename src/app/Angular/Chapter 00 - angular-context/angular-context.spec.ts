import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularContext } from './angular-context';

describe('AngularContext', () => {
  let component: AngularContext;
  let fixture: ComponentFixture<AngularContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularContext);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
