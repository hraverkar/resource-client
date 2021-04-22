import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResourcesComponent } from './new-resources.component';

describe('NewResourcesComponent', () => {
  let component: NewResourcesComponent;
  let fixture: ComponentFixture<NewResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
