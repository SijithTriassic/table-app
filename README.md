# TableApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

`ngx-app-table` is an Angular component for presenting table with data and its controls. This component provides following features.

### Input Properties

  @Input() list = [];
  @Input() headers = [];
  @Input() pageNumber = 1;
  @Input() totalItems = 0;
  @Input() primaryKey = 'id';
  @Input() itemsPerPage = 10;
  @Input() heading: String = null;
  
  @Input() showCSVBtn: Boolean = false;
  @Input() showDetails: Boolean = false;
  @Input() showPrintBtn: Boolean = false;
  @Input() showSearchBtn: Boolean = false;
  @Input() showEnableDisableBtn: Boolean = false;
  @Input() showAddEditDeleteBtn: Boolean = false;

### Output Events

  @Output() onAddItem = new EventEmitter();
  @Output() onEditItem = new EventEmitter();
  @Output() onSaveItems = new EventEmitter();
  @Output() onPrintItems = new EventEmitter();
  @Output() onShowDetails = new EventEmitter();
  @Output() onExportItems = new EventEmitter();
  @Output() onDeleteItems = new EventEmitter();
  @Output() onEnableItems = new EventEmitter();
  @Output() onDisableItems = new EventEmitter();
  @Output() refreshListData
  
### Usage

#### html file:

<ngx-app-table 
  		#managetable
  		[heading]="heading" 
  		[primaryKey]="primaryKey" 
  		[headers]="headers" 
  		[list]="list" 
      [totalItems] = "totalItems"
  		[pageNumber]="pageNumber"
  		[showDetails]="showDetails" 
  		[showAddEditDeleteBtn]="showAddEditDeleteBtn" 
  		[showEnableDisableBtn]="showEnableDisableBtn" 
  		[showSearchBtn]="showSearchBtn" 
  		[showCSVBtn]="showCSVBtn" 
  		[showPrintBtn]="showPrintBtn" 
  		(onAddItem)="onAddItem()"
  		(onEditItem)="onEditItem($event)"
  		(onDeleteItems)="onDeleteItems($event)"
  		(onEnableItems)="onEnableItems($event)"
  		(onDisableItems)="onDisableItems($event)"
  		(refreshListData)="reloadTableList($event)"
  		(onExportItems)="onExportItems($event)"
  		(onPrintItems)="onPrintItems($event)"
  		(onShowDetails)="showItemDetails($event)">
  		</ngx-app-table>

#### ts file:

export class TableManagementComponent implements OnInit {

  @ViewChild('managetable') managetable;

  public list: any[];
  public headers: any[];
  public pageNumber: Number = 1;
  public totalItems: Number = 0;
  public primaryKey: String = 'id';
  public heading: string = 'TABLE MANAGEMENT';

  public showCSVBtn: boolean = true;
  public showDetails: Boolean = true;
  public showPrintBtn: boolean = true;
  public showSearchBtn: boolean = true;
  public showEnableDisableBtn: boolean = true;
  public showAddEditDeleteBtn: boolean = true;

  constructor() { }

  ngOnInit() {
    this._setTableHeaders();
    this._getTableDataList();
  }

  private _setTableHeaders() {
    this.headers = [
      { key: 'name', name: 'Name' },
      { key: 'email', name: 'Email' },
      { key: 'phone', name: 'Phone Number' },
      { key: 'privilage', name: 'Privilege' },
      { key: 'status', name: 'Status' },
    ];
  }

  private _getTableDataList() {
  	this.list = [
  	  {id: 1, name: 'Sijith OS', email: 'sijith.os78@gmail.com', phone: '+91 8089551878', privilage: 'Admin', status: 'Active'},
      {id: 2, name: 'Rahul RP', email: 'rahul@gmail.com', phone: '+91 8089551878', privilage: 'Admin', status: 'Active'},
      {id: 3, name: 'Krupa', email: 'krupa@gmail.com', phone: '+91 8089551878', privilage: 'Admin', status: 'Active'},
      {id: 4, name: 'Shruthi', email: 'shruthi@gmail.com', phone: '+91 8089551878', privilage: 'Admin', status: 'Active'}
  	];
    this.totalItems = this.list.length;
  }

  public onAddItem() {
    alert('Add button clicked');
  }

  public onEditItem(selectedList) {
    alert('Edit button clicked, Item = '+selectedList[0]);
  }

  public onDeleteItems(selectedList) {
    alert('Delete button clicked, List = ' + selectedList.toString());
  }

  public onEnableItems(selectedList) {
    alert('Enable button clicked, List = ' + selectedList.toString());
  }

  public onDisableItems(selectedList) {
    alert('Disable button clicked, List = ' + selectedList.toString());
  }

  public onExportItems(selectedList) {
    alert('Export button clicked');
  }

  public onPrintItems(selectedList) {
    alert('Print button clicked');
  }

  public reloadTableList(pageNumber=1){
  	alert('Load Table with page = '+pageNumber+', search Text = '+ (this.managetable.tablecontrols.searchedText ? this.managetable.tablecontrols.searchedText : '""'));
  }

  public showItemDetails(itemId) {
  		alert('Row clicked');
  }
}

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
