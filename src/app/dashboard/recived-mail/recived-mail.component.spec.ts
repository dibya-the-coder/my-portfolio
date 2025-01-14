import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivedMailComponent } from './recived-mail.component';

describe('RecivedMailComponent', () => {
  let component: RecivedMailComponent;
  let fixture: ComponentFixture<RecivedMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecivedMailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecivedMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
