export interface OperatingHoursSlot {
    open : string;
    close : string;
}

export interface OperatingHours {
    weekday : OperatingHoursSlot | null;
    saturday : OperatingHoursSlot | null;
    sunday :  OperatingHoursSlot | null;
}

export interface Location {
    latitude : number;
    longitude : number;
    address : string;
    suburb : string;
    city : string;
    postal_code : string;
}

export interface Contact {
    phone : string;
    email : string;
}

export interface Amenities {
    has_atm : boolean;
    has_forex : boolean;
    wheelchair_accessible : boolean;
    has_parking : boolean;
    instant_card_printing : boolean;
}

export interface Branch { 
    id : string;
    name : string;
    code : string;
    type : string;
    status : string;
    location : Location;
    distance? : number;
    contact : Contact;
    amenities : Amenities;
    operating_hours : OperatingHours;
}