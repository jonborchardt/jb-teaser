import { ILineItem } from './line-item.interface';

export class LineItem implements ILineItem {
    id: number;
    campaign_id: number;
    campaign_name: string;
    line_item_name: string;
    booked_amount: number;
    actual_amount: number;
    adjustments: number;
    comments: string;
    reviewed: boolean;
    get billable(): number {
        return this.actual_amount + this.adjustments;
    }

    constructor(data: ILineItem) {
        this.id = data.id;
        this.campaign_id = data.campaign_id;
        this.campaign_name = data.campaign_name;
        this.line_item_name = data.line_item_name;
        this.booked_amount = data.booked_amount;
        this.actual_amount = data.actual_amount;
        this.adjustments = data.adjustments;
        this.comments = data.comments;
        this.reviewed = !data.reviewed ? false : data.reviewed;
    }
}
