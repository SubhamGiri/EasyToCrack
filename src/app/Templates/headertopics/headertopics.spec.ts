import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Headertopics } from './headertopics';

describe('Headertopics', () => {
  let component: Headertopics;
  let fixture: ComponentFixture<Headertopics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Headertopics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Headertopics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
