import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableControlsComponent } from './table-controls.component';
import { TableComponent } from '../table/table.component';
import { FormsModule } from '@angular/forms';
describe('TableControlsComponent', () => {
  let component: TableControlsComponent;
  let fixture: ComponentFixture<TableControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableControlsComponent, TableComponent ],
      imports: [FormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
