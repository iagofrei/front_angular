import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonConvertComponent } from './json-convert.component';

describe('JsonConvertComponent', () => {
  let component: JsonConvertComponent;
  let fixture: ComponentFixture<JsonConvertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonConvertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JsonConvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
