import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandartRoomComponent } from './standart-room.component';

describe('StandartRoomComponent', () => {
  let component: StandartRoomComponent;
  let fixture: ComponentFixture<StandartRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandartRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandartRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
