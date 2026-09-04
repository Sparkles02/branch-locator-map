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
    contact : Contact;
    amenities : Amenities;
    operating_hours : OperatingHours;
}

export const branchData: Branch []= [
    {
        "id": "ZA-SB-001",
        "name": "Sandton City Branch",
        "code": "051001",
        "type": "Full Service Branch", 
        "status": "active", 
        "location": {
        "latitude": -26.1076,
        "longitude": 28.0567,
        "address": "Shop L332, Sandton City Mall, Rivonia Rd",
        "suburb": "Sandton",
        "city": "Johannesburg",
        "postal_code": "2196"
        },
        "contact": {
        "phone": "+27117840000",
        "email": "sandton@banklocal.co.za"
        },
        "amenities": {
        "has_atm": true,
        "has_forex": true,
        "wheelchair_accessible": true,
        "has_parking": true,
        "instant_card_printing": true
        },
        "operating_hours": {
        "weekday": { "open": "08:30", "close": "16:00" },
        "saturday": { "open": "08:30", "close": "12:00" },
        "sunday": null
        }
    },
    {
        "id": "ZA-SB-002",
        "name": "Rosebank Zone Express",
        "code": "051002",
        "type": "Digital Hub",
        "status": "active",
        "location": {
        "latitude": -26.1458,
        "longitude": 28.0431,
        "address": "The Zone @ Rosebank, Cnr Oxford Rd & Tyrwhitt Ave",
        "suburb": "Rosebank",
        "city": "Johannesburg",
        "postal_code": "2196"
        },
        "contact": {
        "phone": "+27114470000",
        "email": "rosebank@banklocal.co.za"
        },
        "amenities": {
        "has_atm": true,
        "has_forex": false,
        "wheelchair_accessible": true,
        "has_parking": true,
        "instant_card_printing": false
        },
        "operating_hours": {
        "weekday": { "open": "09:00", "close": "17:00" },
        "saturday": { "open": "09:00", "close": "13:00" },
        "sunday": null
        }
    },
    {
    "id": "ZA-DBN-003",
    "name": "Gateway Theatre of Shopping Branch",
    "code": "051003",
    "type": "Full Service Branch",
    "status": "active",
    "location": {
      "latitude": -29.7258,
      "longitude": 31.0652,
      "address": "Shop G340, Gateway Theatre of Shopping, 1 Palm Blvd",
      "suburb": "Umhlanga Ridge",
      "city": "Durban",
      "postal_code": "4319"
    },
    "contact": {
      "phone": "+27315660000",
      "email": "gateway@banklocal.co.za"
    },
    "amenities": {
      "has_atm": true,
      "has_forex": true,
      "wheelchair_accessible": true,
      "has_parking": true,
      "instant_card_printing": true
    },
    "operating_hours": {
      "weekday": { "open": "09:00", "close": "17:00" },
      "saturday": { "open": "08:30", "close": "13:00" },
      "sunday": null
    }
  },
  {
    "id": "ZA-CPT-004",
    "name": "V&A Waterfront Digital Hub",
    "code": "051004",
    "type": "Digital Hub",
    "status": "active",
    "location": {
      "latitude": -33.9036,
      "longitude": 18.4201,
      "address": "Breakwater Blvd, Victoria & Alfred Waterfront",
      "suburb": "Green Point",
      "city": "Cape Town",
      "postal_code": "8001"
    },
    "contact": {
      "phone": "+27214180000",
      "email": "waterfront@banklocal.co.za"
    },
    "amenities": {
      "has_atm": true,
      "has_forex": false,
      "wheelchair_accessible": true,
      "has_parking": true,
      "instant_card_printing": true
    },
    "operating_hours": {
      "weekday": { "open": "09:00", "close": "18:00" },
      "saturday": { "open": "09:00", "close": "15:00" },
      "sunday": null
    }
  },
  {
    "id": "ZA-PRY-005",
    "name": "Menlyn Maine Central",
    "code": "051005",
    "type": "Full Service Branch",
    "status": "active",
    "location": {
      "latitude": -25.7821,
      "longitude": 28.2764,
      "address": "Cnr Aramist Ave & Corobay Ave, Menlyn Maine",
      "suburb": "Waterkloof Glen",
      "city": "Pretoria",
      "postal_code": "0181"
    },
    "contact": {
      "phone": "+27123480000",
      "email": "menlyn@banklocal.co.za"
    },
    "amenities": {
      "has_atm": true,
      "has_forex": true,
      "wheelchair_accessible": true,
      "has_parking": true,
      "instant_card_printing": false
    },
    "operating_hours": {
      "weekday": { "open": "08:30", "close": "16:00" },
      "saturday": { "open": "08:30", "close": "12:00" },
      "sunday": null
    }
  }
]