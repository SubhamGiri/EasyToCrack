import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaIntroduction } from './java-introduction';

describe('JavaIntroduction', () => {
  let component: JavaIntroduction;
  let fixture: ComponentFixture<JavaIntroduction>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaIntroduction]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaIntroduction);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
