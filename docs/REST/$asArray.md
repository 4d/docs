---
id: asArray
title: $asArray 
---


Returns the result of a query in an array instead of JSON (*e.g.*, `$asArray=true`)

## Description   

If you want to receive the response in an array, you just have to add `$asArray` to your REST request.

## Example  
Here is an example or how to receive the response in an array.

 `GET  /rest/Company/?$filter="name!=Acme"&$top=3&$asArray=true`

**Response**:

````
[
    {
        __KEY: {
            ID: 1,
            __STAMP: 3
        },
        ID: 1,
        name: "Apple",
        revenues: 500000,
        staff: {
            __COUNT: 1
        },
        country: "US"
    },
    {
        __KEY: {
            ID: 2,
            __STAMP: 3
        },
        ID: 2,
        name: "4D",
        revenues: 300000,
        staff: {
            __COUNT: 2
        },
        country: "France"
    },
    {
        __KEY: {
            ID: 3,
            __STAMP: 3
        },
        ID: 3,
        name: "Microsoft",
        revenues: 400000,
        staff: {
            __COUNT: 0
        },
        country: "US"
    }
]
````

The same data in its default JSON format:

````
{
    __entityModel: "Company",
    __COUNT: 7,
    __SENT: 3,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 3,
            ID: 1,
            name: "Apple",
            revenues: 500000,
            staff: {
                __deferred: {
                    uri: "http://127.0.0.1:8082/rest/Company(1)/staff?$expand=staff"
                }
            },
            country: "US"
        },
        {
            __KEY: "2",
            __STAMP: 3,
            ID: 2,
            name: "4D",
            revenues: 300000,
            staff: {
                __deferred: {
                    uri: "http://127.0.0.1:8082/rest/Company(2)/staff?$expand=staff"
                }
            },
            country: "France"
        },

        {
            __KEY: "3",
            __STAMP: 3,
            ID: 3,
            name: "Microsoft",
            revenues: 400000,
            staff: {
                __deferred: {
                    uri: "http://127.0.0.1:8082/rest/Company(3)/staff?$expand=staff"
                }
            },
            country: "US"
        }
    ]
}
````


