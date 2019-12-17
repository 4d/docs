---
id: {datastoreClass}
title: {datastoreClass} 
---



Returns all the data (by default the first 100 entities) for a specific datastore class (*e.g.*, `Company`)	

## Description   

When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value in the **Default Top Size** property (see **Datastore Class Properties**). You can also modify the number of entities by passing another value to `$top/$limit`.

Here is a description of the data returned:

|Property|	Type|	Description|
|---|---|---|
|__entityModel|	String|	Name of the datastore class.|
|__COUNT|	Number	|Number of entities in the datastore class.|
|__SENT|	Number|	Number of entities sent by the REST request.This number can be the total number of entities if it is less than the value defined in the Default Top Size property (in the Properties for the datastore class) or `$top/$limit` or the value in `$top/$limit`.|
|__FIRST|	Number|	Entity number that the selection starts at. Either 0 by default or the value defined by `$skip`.|
|__ENTITIES	|Array|	This array of objects contains an object for each entity with all the Public attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent.|

For each entity, there is a **__KEY** and a **__STAMP** property. The **__KEY** property contains the value of the primary key defined for the datastore class. The **__STAMP** is an internal stamp that is needed when you modify any of the values in the entity when using `$method=update`.


### Usage  

Return all the data for a specific datastore class.

 `GET  /rest/Employee`

**Result**:

````
{
    "__entityModel": "Company",
    "__COUNT": 250,
    "__SENT": 100,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__STAMP": 1,
            "ID": 1,
            "name": "Adobe",
            "address": null,
            "city": "San Jose",
            "country": "USA",
            "revenues": 500000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "2",
            "__STAMP": 1,
            "ID": 2,
            "name": "Apple",
            "address": null,
            "city": "Cupertino",
            "country": "USA",
            "revenues": 890000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(2)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "3",
            "__STAMP": 2,
            "ID": 3,
            "name": "4D",
            "address": null,
            "city": "Clichy",
            "country": "France",
            "revenues": 700000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(3)/staff?$expand=staff"
                }
            }
        },
        {
            "__KEY": "4",
            "__STAMP": 1,
            "ID": 4,
            "name": "Microsoft",
            "address": null,
            "city": "Seattle",
            "country": "USA",
            "revenues": 650000,
            "staff": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(4)/staff?$expand=staff"
                }
            }
        }
.....//more entities here 
    ]
}
````
