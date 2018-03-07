import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'ngx-app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {

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

  @Output() onAddItem = new EventEmitter();
  @Output() onEditItem = new EventEmitter();
  @Output() onSaveItems = new EventEmitter();
  @Output() onPrintItems = new EventEmitter();
  @Output() onShowDetails = new EventEmitter();
  @Output() onExportItems = new EventEmitter();
  @Output() onDeleteItems = new EventEmitter();
  @Output() onEnableItems = new EventEmitter();
  @Output() onDisableItems = new EventEmitter();
  @Output() refreshListData = new EventEmitter();

  @ViewChild('tablecontrols') tablecontrols;

  public selectedList: String[] = [];
  public isAllSelected: boolean = false;
  public selectedCheckboxCount: number = 0;

  constructor() { }

  ngOnInit() {
    this.getPage(1);
  }

  public refreshTable() {
    this.isAllSelected = false;
    this.selectedList = [];
    this.selectedCheckboxCount = 0;
  }

  public selectRow(isSelected, itemIndex) {
    this.list[itemIndex].isSelected = isSelected;
    if (isSelected) {
      this.selectedCheckboxCount += 1;
      this.selectedList.push(this.list[itemIndex][this.primaryKey]);
    } else {
      this.selectedCheckboxCount -= 1;
      this.selectedList.splice(this.selectedList.indexOf(this.list[itemIndex][this.primaryKey]), 1);
    }
    this.isAllSelected = (this.selectedCheckboxCount === this.list.length);
  }

  public selectAllRows(isSelected) {
    this.selectedList = [];
    this.isAllSelected = isSelected;
    this.selectedCheckboxCount = isSelected ? this.list.length : 0;
    for (let itemIndex = 0; itemIndex < this.list.length; itemIndex++) {
      this.list[itemIndex].isSelected = isSelected;
      if (isSelected) {
        this.selectedList.push(this.list[itemIndex][this.primaryKey]);
      }
    }
  }

  public onTbodyRowClick($event, seletedItemId) {
    if (this.showDetails && !$event.target.classList.contains('row-checkbox')) {
      this.onShowDetails.emit(seletedItemId);
    }
  }

  getPage(page: number) {
    this.pageNumber = page;
    this.refreshListData.emit(this.pageNumber);
  }

}
