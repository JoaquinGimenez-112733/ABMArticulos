import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtModComponent } from './art-mod.component';

describe('ArtModComponent', () => {
  let component: ArtModComponent;
  let fixture: ComponentFixture<ArtModComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtModComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
