import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsStatelessComponent } from './items-stateless.component';

describe('ItemsStatelessComponent', () => {
  let component: ItemsStatelessComponent;
  let fixture: ComponentFixture<ItemsStatelessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsStatelessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsStatelessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
