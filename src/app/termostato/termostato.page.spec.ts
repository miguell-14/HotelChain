import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermostatoPage } from './termostato.page';

describe('TermostatoPage', () => {
  let component: TermostatoPage;
  let fixture: ComponentFixture<TermostatoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TermostatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
