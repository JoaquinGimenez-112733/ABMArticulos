import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtBajaComponent } from './art-baja.component';

describe('ArtBajaComponent', () => {
  let component: ArtBajaComponent;
  let fixture: ComponentFixture<ArtBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtBajaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
