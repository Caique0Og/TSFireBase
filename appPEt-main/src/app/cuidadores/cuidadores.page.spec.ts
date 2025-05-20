import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CuidadoresPage } from './cuidadores.page';

describe('CuidadoresPage', () => {
  let component: CuidadoresPage;
  let fixture: ComponentFixture<CuidadoresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CuidadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
