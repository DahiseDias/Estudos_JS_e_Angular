//input de exemplo : 
/* var array = [
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
    "guid": "2ea81f54-f47c-4abe-a434-b823fd9f086a",
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
    "guid": "2ea81f54-f47c-4abe-a434-b823fd9f086a",
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
]; */

//essa função retorna um array com todos os objetos que tem o mesmo guid;

function getSameDate(jsonArray) {
  var guid = '2ea81f54-f47c-4abe-a434-b823fd9f086a';
  var arrayWithSameDate.find(element => { 
    if (element._id === guid) {
      return element;
    }
  });
}
