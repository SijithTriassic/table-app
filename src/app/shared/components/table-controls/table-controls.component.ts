import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-table-controls',
  templateUrl: './table-controls.component.html',
  styleUrls: ['./table-controls.component.scss'],
})
export class TableControlsComponent implements OnInit {
  public searchedText: string;
  public searchText$ = new Subject<string>();

  @Input() selectedCheckboxCount: number;
  @Input() showEnableDisableBtn: Boolean;
  @Input() showAddEditDeleteBtn: Boolean;
  @Input() showBackArrow: Boolean;

  @Input() showCSVPrintBtn: Boolean;
  @Input() showPrintBtn: Boolean;
  @Input() showCSVBtn: Boolean;
  @Input() showSearchBtn: Boolean;
  @Input() showSaveBtn: Boolean;
  @Input() template: string;
  @Input() self: any;
  @Input() featureName: string;
  @Input() backwardPath: string;
  @Input() headers: any[];
  @Input() canEdit: Boolean = true;
  @Output() onAdd = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onInlineEditItem = new EventEmitter();
  @Output() onInlineAddItem = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onEnable = new EventEmitter();
  @Output() onDisable = new EventEmitter();
  @Output() onExport = new EventEmitter();
  @Output() onPrint = new EventEmitter();
  @Output() onSave = new EventEmitter();
  @Output() refreshList = new EventEmitter();

  constructor(private router: Router) {
    this.searchText$
    .debounceTime(1000)
    .subscribe(newValue => this.refreshListData(newValue));

  }

  public refreshListData(searchText) {
    return this.refreshList.emit();
  }

  public isOneSelected() {
    return (1 === this.selectedCheckboxCount);
  }

  public isNoneSelected() {
    return (0 === this.selectedCheckboxCount);
  }

  navigateBack() {
    this.router.navigate([this.backwardPath]);
  }

  ngOnInit() {
  }

}
