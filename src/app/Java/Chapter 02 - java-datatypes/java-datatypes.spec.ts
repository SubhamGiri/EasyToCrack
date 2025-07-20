import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaDatatypes } from './java-datatypes';

describe('JavaDatatypes', () => {
  let component: JavaDatatypes;
  let fixture: ComponentFixture<JavaDatatypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JavaDatatypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaDatatypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
