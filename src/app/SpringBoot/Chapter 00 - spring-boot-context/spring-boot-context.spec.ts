import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootContext } from './spring-boot-context';

describe('SpringBootContext', () => {
  let component: SpringBootContext;
  let fixture: ComponentFixture<SpringBootContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpringBootContext]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringBootContext);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
