var array = [
  {
    "_id": "60dd1b2f4e7d43aa5ce04080",
    "index": 0,
    "guid": "c9da2377-84c3-43d0-ad65-d09f097c88e7",
    "isActive": true,
    "balance": "$3,691.95",
    "picture": "http://placehold.it/32x32",
    "age": 25,
    "eyeColor": "blue",
    "name": "Lancaster Butler",
    "gender": "male",
    "company": "ELECTONIC",
    "email": "lancasterbutler@electonic.com",
    "phone": "+1 (868) 424-3857",
    "friends": [
      {
        "id": 0,
        "name": "Woodward Juarez"
      },
      {
        "id": 1,
        "name": "Juarez Buckley"
      },
      {
        "id": 2,
        "name": "Ware Potter"
      }
    ]
  },
  {
    "_id": "60dd1b2f03d81277aef2634f",
    "index": 1,
    "guid": "2d926c1b-ed30-402f-839e-769c33eeec5d",
    "isActive": false,
    "balance": "$3,892.89",
    "picture": "http://placehold.it/32x32",
    "age": 40,
    "eyeColor": "green",
    "name": "Sally Peck",
    "gender": "female",
    "company": "GEOFORM",
    "email": "sallypeck@geoform.com",
    "phone": "+1 (992) 445-2845",
    "friends": [
      {
        "id": 0,
        "name": "Grace Nichols"
      },
      {
        "id": 1,
        "name": "Sampson Cox"
      },
      {
        "id": 2,
        "name": "Allie Dodson"
      }
    ]
  },
  {
    "_id": "60dd1b2f80445b2e6c58e1fc",
    "index": 2,
    "guid": "16f4bf0d-9300-4ab1-8da2-7595a4dd5c75",
    "isActive": false,
    "balance": "$3,563.99",
    "picture": "http://placehold.it/32x32",
    "age": 21,
    "eyeColor": "blue",
    "name": "Leila Mckenzie",
    "gender": "female",
    "company": "FUELWORKS",
    "email": "leilamckenzie@fuelworks.com",
    "phone": "+1 (924) 519-2495",
    "friends": [
      {
        "id": 0,
        "name": "Nunez Ayers"
      },
      {
        "id": 1,
        "name": "Aguilar Rose"
      },
      {
        "id": 2,
        "name": "Claudine Dawson"
      }
    ]
  },
  {
    "_id": "60dd1b2f6a2686d1a7efc99d",
    "index": 3,
    "guid": "35c880da-19c9-4def-befb-38456c32ba86",
    "isActive": false,
    "balance": "$2,666.96",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "brown",
    "name": "Porter Terrell",
    "gender": "male",
    "company": "CUBIX",
    "email": "porterterrell@cubix.com",
    "phone": "+1 (839) 588-2993",
    "friends": [
      {
        "id": 0,
        "name": "Candy Santiago"
      },
      {
        "id": 1,
        "name": "Garrison Houston"
      },
      {
        "id": 2,
        "name": "Helen Santos"
      }
    ]
  },
  {
    "_id": "60dd1b2f8a0b09267d5435e1",
    "index": 4,
    "guid": "2ea81f54-f47c-4abe-a434-b823fd9f086a",
    "isActive": true,
    "balance": "$3,643.92",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "brown",
    "name": "Georgina Stafford",
    "gender": "female",
    "company": "EMTRAK",
    "email": "georginastafford@emtrak.com",
    "phone": "+1 (931) 498-2229",
    "friends": [
      {
        "id": 0,
        "name": "Osborne Steele"
      },
      {
        "id": 1,
        "name": "Shelley Watkins"
      },
      {
        "id": 2,
        "name": "Rena Owen"
      }
    ]
  }
];

var arrayTransformed = [
  {
    "id": "60dd1b2f4e7d43aa5ce04080",
    "age": 25,
    "eyeColor": "blue",
    "name": "Lancaster Butler",
    "gender": "male",
    "company": "ELECTONIC",
    "e-mail": "lancasterbutler@electonic.com",
    "phone": "+1 (868) 424-3857",
    "friends": [
      {
        "name": "Woodward Juarez"
      },
      {
        "name": "Juarez Buckley"
      },
      {
        "name": "Ware Potter"
      }
    ]
  },
  {
    "id": "60dd1b2f03d81277aef2634f",
    "age": 40,
    "eyeColor": "green",
    "name": "Sally Peck",
    "gender": "female",
    "company": "GEOFORM",
    "e-mail": "sallypeck@geoform.com",
    "phone": "+1 (992) 445-2845",
    "friends": [
      {
        "name": "Grace Nichols"
      },
      {
        "name": "Sampson Cox"
      },
      {
        "name": "Allie Dodson"
      }
    ]
  },
  {
    "id": "60dd1b2f80445b2e6c58e1fc",
    "age": 21,
    "eyeColor": "blue",
    "name": "Leila Mckenzie",
    "gender": "female",
    "company": "FUELWORKS",
    "e-mail": "leilamckenzie@fuelworks.com",
    "phone": "+1 (924) 519-2495",
    "friends": [
      {
        "name": "Nunez Ayers"
      },
      {
        "name": "Aguilar Rose"
      },
      {
        "name": "Claudine Dawson"
      }
    ]
  },
  {
    "id": "60dd1b2f6a2686d1a7efc99d",
    "age": 36,
    "eyeColor": "brown",
    "name": "Porter Terrell",
    "gender": "male",
    "company": "CUBIX",
    "e-mail": "porterterrell@cubix.com",
    "phone": "+1 (839) 588-2993",
    "friends": [
      {
        "name": "Candy Santiago"
      },
      {
        "name": "Garrison Houston"
      },
      {
        "name": "Helen Santos"
      }
    ]
  },
  {
    "id": "60dd1b2f8a0b09267d5435e1",
    "age": 27,
    "eyeColor": "brown",
    "name": "Georgina Stafford",
    "gender": "female",
    "company": "EMTRAK",
    "e-mail": "georginastafford@emtrak.com",
    "phone": "+1 (931) 498-2229",
    "friends": [
      {
        "name": "Osborne Steele"
      },
      {
        "name": "Shelley Watkins"
      },
      {
        "name": "Rena Owen"
      }
    ]
  }
];
