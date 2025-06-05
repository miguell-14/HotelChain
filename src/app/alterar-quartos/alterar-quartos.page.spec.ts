import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlterarQuartosPage } from './alterar-quartos.page';

describe('AlterarQuartosPage', () => {
  let component: AlterarQuartosPage;
  let fixture: ComponentFixture<AlterarQuartosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarQuartosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
