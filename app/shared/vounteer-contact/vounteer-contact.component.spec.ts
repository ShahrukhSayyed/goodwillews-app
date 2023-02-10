import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VounteerContactComponent } from './vounteer-contact.component';

describe('VounteerContactComponent', () => {
  let component: VounteerContactComponent;
  let fixture: ComponentFixture<VounteerContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VounteerContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VounteerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
