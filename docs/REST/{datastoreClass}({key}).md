---
id: {datastoreClass}({key})
title: {datastoreClass}({key}) 
---

Returns the data for the specific entity defined by the datastore class's primary key, *e.g.*, `Company(22) or Company("IT0911AB2200")`

## Description   

By passing the datastoreClass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your datastore class. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{datastoreClass}](#datastoreclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](#attribute1-attribute2-). For example:

 `GET  /rest/Company(1)/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

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
