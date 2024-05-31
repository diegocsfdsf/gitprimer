import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilesListPage } from './utiles-list.page';

describe('UtilesListPage', () => {
  let component: UtilesListPage;
  let fixture: ComponentFixture<UtilesListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
