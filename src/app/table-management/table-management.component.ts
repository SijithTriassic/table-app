import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-table-management',
  templateUrl: './table-management.component.html',
  styleUrls: ['./table-management.component.scss']
})
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
