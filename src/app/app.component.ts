import { Component, OnInit } from '@angular/core';
import { LineItem } from './line-item.model';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lineItems: LineItem[];
  cols: any[]; // TODO: cols should be typed
  selectedColumns: any[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getLineItems().then(lineItems => this.lineItems = lineItems);

    // TODO: making assumption that we can round in the ui...
    // if the system needs to view with precision, we should alter how the ui handles it
    let displayOrder = 0;
    this.cols = [
      {
        displayOrder: displayOrder++, visible: true, field: 'reviewed', header: 'Reviewed',
        template: 'boolean', isEditable: true
      },
      {
        displayOrder: displayOrder++, visible: false, field: 'id', header: 'Id',
        template: 'int', isEditable: false
      },
      {
        displayOrder: displayOrder++, visible: false, field: 'campaign_id', header: 'Campaign Id',
        template: 'int', isEditable: false
      },
      {
        displayOrder: displayOrder++, visible: true, field: 'campaign_name', header: 'Campaign',
        template: 'string', isEditable: false
      },
      {
        displayOrder: displayOrder++, visible: true, field: 'line_item_name', header: 'Title',
        template: 'string', isEditable: false
      },
      {
        displayOrder: displayOrder++, visible: true, field: 'booked_amount', header: 'Booked Amount',
        template: 'dollar-and-cents', isEditable: false
      },
      {
        displayOrder: displayOrder++, visible: true, field: 'actual_amount', header: 'Actual Amount',
        template: 'dollar-and-cents', isEditable: false
      },
      {
        displayOrder: displayOrder++, visible: true, field: 'adjustments', header: 'Adjustments',
        template: 'dollar-and-cents', isEditable: true
      },
      {
        displayOrder: displayOrder++, visible: true, field: 'billable', header: 'Billable',
        template: 'dollar-and-cents', isEditable: false
      },
      {
        displayOrder: displayOrder++, visible: true, field: 'comments', header: 'Comments',
        template: 'string', isEditable: true
      },
    ];

    this.selectedColumns = this.cols.filter(c => c.visible);
  }
}
