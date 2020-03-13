import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarCentroDeCustoPage } from './listar-centro-de-custo.page';

describe('ListarCentroDeCustoPage', () => {
  let component: ListarCentroDeCustoPage;
  let fixture: ComponentFixture<ListarCentroDeCustoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCentroDeCustoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCentroDeCustoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
