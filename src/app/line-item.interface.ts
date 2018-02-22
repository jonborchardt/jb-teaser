export interface ILineItem {
    id: number;
    campaign_id: number;
    campaign_name: string;
    line_item_name: string;
    booked_amount: number;
    actual_amount: number;
    adjustments: number;
    reviewed?: boolean;
    comments?: string;
}
