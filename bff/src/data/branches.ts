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
  },
  {
    "id": "ZA-BFN-006",
    "name": "Westdene Mall Branch",
    "code": "051006",
    "type": "Full Service Branch",
    "status": "active",
    "location": {
      "latitude": -29.1219,
      "longitude": 26.2140,
      "address": "Westdene Mall, Nelson Mandela Dr",
      "suburb": "Westdene",
      "city": "Bloemfontein",
      "postal_code": "9301"
    },
    "contact": {
      "phone": "+27515300000",
      "email": "westdene@banklocal.co.za"
    },
    "amenities": {
      "has_atm": true,
      "has_forex": false,
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
    "id": "ZA-ELN-007",
    "name": "Berea Mall Branch",
    "code": "051007",
    "type": "Digital Hub",
    "status": "active",
    "location": {
      "latitude": -32.9858,
      "longitude": 27.8915,
      "address": "Berea Mall, Western Ave",
      "suburb": "Berea",
      "city": "East London",
      "postal_code": "5241"
    },
    "contact": {
      "phone": "+27437210000",
      "email": "berea@banklocal.co.za"
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
    "id": "ZA-PLK-008",
    "name": "Mall of the North Branch",
    "code": "051008",
    "type": "Full Service Branch",
    "status": "active",
    "location": {
      "latitude": -23.8962,
      "longitude": 29.4486,
      "address": "Mall of the North, Hans van Rensburg St",
      "suburb": "Polokwane Central",
      "city": "Polokwane",
      "postal_code": "0699"
    },
    "contact": {
      "phone": "+27152910000",
      "email": "mallnorth@banklocal.co.za"
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
      "sunday": { "open": "09:00", "close": "12:00" }
    }
},
{
    "id": "ZA-NBM-009",
    "name": "The Crossing Branch",
    "code": "051009",
    "type": "Full Service Branch",
    "status": "active",
    "location": {
      "latitude": -25.4753,
      "longitude": 30.9694,
      "address": "Crossing Shopping Centre, Madiba Drive",
      "suburb": "Mbombela Central",
      "city": "Mbombela",
      "postal_code": "1200"
    },
    "contact": {
      "phone": "+27137520000",
      "email": "crossing@banklocal.co.za"
    },
    "amenities": {
      "has_atm": true,
      "has_forex": false,
      "wheelchair_accessible": true,
      "has_parking": true,
      "instant_card_printing": true
    },
    "operating_hours": {
      "weekday": { "open": "08:30", "close": "17:00" },
      "saturday": { "open": "09:00", "close": "13:00" },
      "sunday": null
    }
},
{
    "id": "ZA-KIM-010",
    "name": "Diamond Pavilion Branch",
    "code": "051010",
    "type": "Digital Hub",
    "status": "active",
    "location": {
      "latitude": -28.7282,
      "longitude": 24.7499,
      "address": "Diamond Pavilion Mall, Transvaal Rd",
      "suburb": "Kimberley Central",
      "city": "Kimberley",
      "postal_code": "8301"
    },
    "contact": {
      "phone": "+27538310000",
      "email": "diamond@banklocal.co.za"
    },
    "amenities": {
      "has_atm": true,
      "has_forex": false,
      "wheelchair_accessible": false,
      "has_parking": true,
      "instant_card_printing": false
    },
    "operating_hours": {
      "weekday": { "open": "09:00", "close": "16:00" },
      "saturday": { "open": "09:00", "close": "12:00" },
      "sunday": null
    }
},
{
    "id": "ZA-MHK-011",
    "name": "Mega City Branch",
    "code": "051011",
    "type": "Full Service Branch",
    "status": "active",
    "location": {
      "latitude": -25.8553,
      "longitude": 25.6441,
      "address": "Mega City Shopping Centre, University Dr",
      "suburb": "Mahikeng Central",
      "city": "Mahikeng",
      "postal_code": "2745"
    },
    "contact": {
      "phone": "+27184810000",
      "email": "megacity@banklocal.co.za"
    },
    "amenities": {
      "has_atm": true,
      "has_forex": false,
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