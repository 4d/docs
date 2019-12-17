---
id: expand
title: $expand 
---

Expands the relational attribute specified (*e.g.*, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`)<br>
or<br>
Expands an image stored in an Image attribute (*e.g.*, `Employee(1)/photo?$imageformat=best&$expand=photo`)


## Description   

When you have relation attributes in a datastore class, you can use `$expand` to retrieve all the attributes for the related entity or entities.

You can apply `$expand` to an entity (*e.g.*, People(1)), an entity collection, or an entity set.

If you wan to sort the data retrieved for the relation attribute, you can use [#cmd id="900837"/].

### Displaying data from the relation attribute  

If you want to expand a relation attribute that is in an entity set, you can use the following syntax:

` GET  /rest/Employee/$entityset/99B09793950D414A864E6E1F03F0B293?$expand=employer`

*employer* is the relation attribute that links the Company and Employee datastore classes.

### Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to `$imageformat`. For more information about the version parameter, refer to `$version`.

### Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your datastore class, you can write the following by also passing "true" to $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
  
  
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
