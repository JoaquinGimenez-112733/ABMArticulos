import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtAltaComponent } from './art-alta.component';

describe('ArtAltaComponent', () => {
  let component: ArtAltaComponent;
  let fixture: ComponentFixture<ArtAltaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtAltaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtAltaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
