import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ControloTemperaturaPage } from './controlo-temperatura.page';

describe('ControloTemperaturaPage', () => {
  let component: ControloTemperaturaPage;
  let fixture: ComponentFixture<ControloTemperaturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ControloTemperaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
