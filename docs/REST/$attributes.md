---
id: attributes
title: $attributes 
---

Allows selecting the related attribute(s) to get from the dataclass (*e.g.*, `Company(1)?$attributes=employees.lastname` or `Employee?$attributes=employer.name`).


## Description   

Use the `$attributes` to define the path of attributes whose values you want to get from a dataclass. 

When you have relation attributes in a dataclass, use `$attributes` to define the path of attributes whose values you want to get for the related entity or entities.

You can apply `$attributes` to an entity (*e.g.*, People(1)) or an entity selection.


### Available syntaxes

If `$attributes` is not specified in the query or "*", all the attributes are extracted. Attributes with "kind" property as "relatedEntity" are extracted with the simple form: an object with property __KEY (primary key). Attributes with "kind" property as "relatedEntities" are not extracted.

If `$attributes` is specified for attributes of the relatedEntity kind:

`$attributes=relatedEntity`: the related entity is returned with simple form (deferred __KEY property (primary key)).
`$attributes=relatedEntity.*`: all the attributes of the related entity are returned`$attributes=relatedEntity.attributePath1, relatedEntity.attributePath2, ...`: only those attributes of the related entity are returned.


If `$attributes` is specified for attributes of the relatedEntities kind:

`$attributes=relatedEntities.*`: all the properties of all the related entities are returned
`$attributes=relatedEntities.attributePath1, relatedEntities.attributePath2, ...`: only those attributes of the related entities are returned.



### Displaying data from the relation attribute  

If you want to expand a relation attribute that is in an entity set, you can use the following syntax:

` GET  /rest/Employee/$entityset/99B09793950D414A864E6E1F03F0B293?$expand=employer`

*employer* is the relation attribute that links the Company and Employee datastore classes.
  
  
## Example  

If we pass the following REST request for our Company datastore class (which has a relation attribute "staff"):

 `GET  /rest/Company(1)`

**Response**:

````
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__STAMP": 2,
    "ID": 1,
    "name": "Adobe",
    "address": null,
    "city": "San Jose",
    "country": "USA",
    "url": "http://www.adobe.com",
    "revenues": 500000,
    "staff": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
        }
    }
}
````

If we add the `$expand` to our request and specify the "staff" relation attribute:

 `GET  /rest/Company(1)/?$expand=staff`

**Response**:

````
{
    "__entityModel": "Company",
    "__KEY": "1",

    "__STAMP": 2,
    "ID": 1,
    "name": "Adobe",
    "address": null,
    "city": "San Jose",
    "country": "USA",
    "url": "http://www.adobe.com",
    "revenues": 500000,
    "staff": {
        "__COUNT": 2,
        "__SENT": 2,
        "__FIRST": 0,
        "__ENTITIES": [
            {
                "__KEY": "1",
                "__STAMP": 5,
                "ID": 1,
                "firstName": "John",
                "lastName": "Smith",
                "fullName": "John Smith",
                "telephone": "4085551111",
                "salary": 34000,
                "employer": {
                    "__deferred": {
                        "uri": "http://127.0.0.1:8081/rest/Company(1)",
                        "__KEY": "1"
                    }
                },
                "employerName": "Adobe"
            },
            {
                "__KEY": "2",
                "__STAMP": 2,
                "ID": 2,
                "firstName": "Paula",
                "lastName": "Miller",
                "fullName": "Paula Miller",
                "telephone": "4085559999",
                "salary": 36000,
                "employer": {
                    "__deferred": {
                        "uri": "http://127.0.0.1:8081/rest/Company(1)",
                        "__KEY": "1"
                    }
                },
                "employerName": "Adobe"
            }
        ]
    }
}
````
