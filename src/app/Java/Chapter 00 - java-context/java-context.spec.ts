import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaContext } from './java-context';

describe('JavaContext', () => {
  let component: JavaContext;
  let fixture: ComponentFixture<JavaContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaContext);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
