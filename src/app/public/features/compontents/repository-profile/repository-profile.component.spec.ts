import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryProfileComponent } from './repository-profile.component';

describe('RepositoryProfileComponent', () => {
  let component: RepositoryProfileComponent;
  let fixture: ComponentFixture<RepositoryProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepositoryProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
