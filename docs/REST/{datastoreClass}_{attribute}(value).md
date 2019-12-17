---
id: {datastoreClass}_{attribute}(value)
title: {datastoreClass}:{attribute}(value) 
---

Returns the data for one entity in which the attribute's value is defined

## Description   
By passing the *datastoreClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute.

 `GET  /rest/Company:companyCode(Acme001)`

For more information about the data returned, refer to [{datastoreClass}](#datastoreclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](#attribute1-attribute2-). For example:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to expand a relation attribute using $expand, you do so by specifying it as shown below:

 `GET  /rest/Company:companyCode(Acme001)/name,address,staff?$expand=staff`

## Example  

The following request returns all the public data in the Company datastore class whose key is 1.

 `GET  /rest/Company(1)`

**Result**:

````
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__STAMP": 1,
    "ID": 1,
    "companyCode": "Apple001",
    "name": "Apple",
    "address": Infinite Loop,
    "city": "Cupertino",
    "country": "USA",
    "url": http://www.apple.com,
    "revenues": 500000,
    "staff": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)/staff?$expand=staff"
        }
    }
}
````
