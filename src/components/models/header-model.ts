export interface Activity {
    sms: number;
    email: number;
    orders: number;
};

export interface CarrierStatus {
    since: Date;
    status: string
}

export interface HeaderInfo {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    birth_date: string;
    home_phone: string;
    mobile_phone: string;
    work_phone: string;
    email: string;
    activity: Activity;
    carrier_status: CarrierStatus;
}

