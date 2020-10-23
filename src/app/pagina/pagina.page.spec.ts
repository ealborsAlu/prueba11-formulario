import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaginaPage } from './pagina.page';

describe('PaginaPage', () => {
  let component: PaginaPage;
  let fixture: ComponentFixture<PaginaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
