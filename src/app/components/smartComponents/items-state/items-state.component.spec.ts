import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsStateComponent } from './items-state.component';

describe('ItemsStateComponent', () => {
  let component: ItemsStateComponent;
  let fixture: ComponentFixture<ItemsStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
