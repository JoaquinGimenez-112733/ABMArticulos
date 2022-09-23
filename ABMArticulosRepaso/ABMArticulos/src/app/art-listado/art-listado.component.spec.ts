import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtListadoComponent } from './art-listado.component';

describe('ArtListadoComponent', () => {
  let component: ArtListadoComponent;
  let fixture: ComponentFixture<ArtListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
