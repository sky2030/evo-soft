export interface Order {
    orders_A: [];
    orders_AA: [];
    orders_AAA: {
        sent: Sent[];
    };
    orders_B: [];
    orders_C: []
}

export interface Sent {
    id: Number;
    order_id: Number;
    sent_dt: Date;
    sent_tm: string;
    subject: {
        title: string;
        email: string
    }
    type: string;
}

export enum ORDER_TYPE {
    ORDER_A = "ORDER_A",
    ORDER_AA = "ORDER_AA",
    ORDER_AAA = "ORDER_AAA",
    ORDER_B = "ORDER_B",
    ORDER_C = "ORDER_C",

}