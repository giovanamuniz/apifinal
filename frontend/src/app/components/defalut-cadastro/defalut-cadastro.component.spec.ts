import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefalutCadastroComponent } from './defalut-cadastro.component';

describe('DefalutCadastroComponent', () => {
  let component: DefalutCadastroComponent;
  let fixture: ComponentFixture<DefalutCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefalutCadastroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefalutCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
