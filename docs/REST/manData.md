---
id: manData
title: Manipulating Data 
---

## REST Requests

The structure for a REST request is as follows:

|URI	|Resource	|{Subresource}|	Querystring|
|---|---|---|---|
|http://{servername}:{port}/rest/	|[{datastoreClass}](#datastoreclass)/|	[{attribute1, attribute2, ...}](#attribute1-attribute2-)/	| | 
| |[{datastoreClass}({key})](#datastoreclass-key)/|	[{attribute1, attribute2, ...}](#attribute1-attribute2-)/	| |  
| |[{datastoreClass}](#datastoreclass)/|	[{attribute1, attribute2, ...}](#attribute1-attribute2-)/|	[{method}](#datastoreclass-method)|
| | | |[$entityset/{entitySetID}](#entityset-entitysetid)|
| | | |[?$filter](#filter)|
| |[{datastoreClass}:{attribute}(value)](#datastoreclass-attribute-value)| | |

While all REST requests must contain the URI and Resource parameters, the Subresource (which filters the data returned) is optional.

As with all URIs, the first parameter is delimited by a “?” and all subsequent parameters by a “&”. For example:

 `GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600`

>You can place all values in quotes in case of ambiguity. For example, in our above example, we could've put the value for the last name in quotes "Jones".

The parameters in this chapter allow you to manipulate data in datastore classes in your Wakanda project. Besides retrieving data, you can also add, update, and delete entities in a datastore class.

If you want the data to be returned in an array instead of JSON, use the `$asArray` parameter.

### Querying data  

To query data directly, you can do so using the `$filter` function. For more information regarding how to query data in 4D, refer to **Defining Queries** (Client-side).

### Accessing Data  

All datastore classes, datastore class methods, and attributes having a scope of **Public** can be accessed through REST. For more information regarding scope, refer to **Datastore Classes**, **Datastore Class Methods**, and **Attributes** sections of the **Data Model Editor** chapter.

All datastore class, datastore class method, and attribute names are case-sensitive; however, the data for queries is not.

If you have created a directory for your 4D project, you must also have proper permissions to access the datastore classes, datastore class methods, and attributes. For example, if you don't have permission to update data in a datastore class, you will not be able to modify any of the entities, however, you will be able to add new entities. To log into your 4D application, refer to the parameters described in Authenticating Users. For more information about creating a directory for your 4D project, refer to the section in the **Solution Explorer** chapter.

### Adding, Modifying, and Deleting Entities  

With the REST API, you can perform all the manipulations to data as you can in 4D.

To add and modify entities, you can call `$method=update`. Before saving data, you can also validate it beforehand by calling `$method=validate`. If you want to delete one or more entities, you can use `$method=delete`.

Besides retrieving one attribute in a datastore class using {datastoreClass}({key}), you can also write a method in your datastore class and call it to return a collection of entities (or an array) by using {datastoreClass}/{method}.

Before returning the collection, you can also sort it by using `$orderby` one one or more attributes (even relation attributes).

### Navigating Data  

Add the `$skip` (to define with which entity to start) and `$top/$limit` (to define how many entities to return) REST requests to your queries or entity sets to navigate the collection of entities.



### Creating and Managing Entity Sets  

An entity set is a collection of entities obtained through a REST request that is stored in 4D Server's cache. Using an entity set prevents you from continually querying your application for the same results. Accessing an entity set is much quicker and can improve the speed of your application.

To create an entity set, call `$method=entityset` in your REST request. As a measure of security, you can also use `$savedfilter` and/or `$savedorderby` when you call $filter` and/or `$orderby` so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.

By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to `$timeout`. The timeout is continually being reset to the value defined for its timeout (either the default one or the one you define) each time you use it.

If you want to remove an entity set from 4D Server's cache, you can use `$method=release`.

If you modify any of the entity's attributes in the entity set, the values will be updated. However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. Any entities you delete will, of course, no longer be a part of the entity set.

If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.

### Calculating Data  

By using `$compute`, you can compute the following items for a specific attribute in a datastore class:

|Keyword|	Description|
|---|---|
|$all|	A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String|
|average|	Get the average on a numerical attribute
|count|	Get the total number in the collection or datastore class (in both cases you must specify an attribute)|
|min|	Get the minimum value on a numerical attribute or the lowest value in an attribute of type String|
|max|	Get the maximum value on a numerical attribute or the highest value in an attribute of type String|
|sum	|Get the sum on a numerical attribute|


### Datastore class and attribute permissions  

To manipulate data using REST, the user must have the correct permissions not only for the datastore class, but also the individual attributes. For more information, refer to **Datastore Class Permissions** and **Attribute** permissions.

If the user does not have permission to read an attribute, there is no error, but the value will be null. If the user tries to update a value in an attribute without being in the group that has permission to update, an error is generated and the entire entity is not saved.


### Working with Entity Sets  

Using the `$entityset/{entitySetID}?$logicOperator... &$otherCollection`, you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two.

A new collection of entities is returned; however, you can also create a new entity set by calling `$method=entityset` at the end of the REST request.

### Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to `$imageformat`. For more information about the version parameter, refer to `$version`.


### Retrieving Date attributes  

When accessing a Date, it normally is returned in this format:

`2014-07-03T21:25:05Z`

If the **Date only** property has been selected, it will be returned as:

`3!7!2014`

For more information about the Date only property, refer to **Properties for Date Attributes**.


### Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your datastore class, you can write the following by also passing "true" to $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
  
  
 

### Retrieving only one entity  

You can use the `{datastoreClass}:{attribute}(value)` syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the class's primary key. For example, you can write:

 `GET  /rest/Company:companyCode("Acme001")`
 
 
## Resources, Subresources and Querystrings
 
 
### {attribute1, attribute2, ...}  		

>Defines which attributes to return in the REST response after an initial request (*e.g.*, Company(1)/name,revenues/)	

#### Description   
You can apply this filter to your entities in the following ways:


|Method	|Syntax|	Example|
|---|---|---|
|Datastore class	|{datastoreClass}/{att1,att2...}	|/People/firstName,lastName|
|Collection of entities	|{datastoreClass}/{att1,att2...}/?$filter="{filter}"|	/People/firstName,lastName/?$filter="lastName='a*'"|
|Specific entity|	{datastoreClass}({ID})/{att1,att2...}	|/People(1)/firstName,lastName|
|Entity set|	{datastoreClass}/{att1,att2...}/$entityset/{entitySetID}|	/People/firstName/$entityset/528BF90F10894915A4290158B4281E61|
|Datastore class method	|{datastoreClass}/{att1,att2...}/{method} or|	/People/firstName,lastName/getHighSalaries or|
| |{datastoreClass}/{method}/{att1,att2...}	|/People/getHighSalaries/firstName,lastName|

The attributes must be delimited by a comma, *i.e.*, /Employee/firstName,lastName,salary.

If you want specific information from the related datastore class, you must first specify the relation attribute in the datastore class by using `$expand`. For example, you could write /Employee/firstName,lastName,employer.name,employer.city/?$expand=employer.

All types of attributes can be passed: storage, calculated, alias, inherited, or relational. For more information about attributes, refer to the **Attribute Categories** paragraph in the **Data Model Editor** chapter.

>You cannot define a property in an attribute of type Object, you can only specify the actual attribute.


#### Usage  
Here are a few examples, showing you how to specify which attributes to return depending on the technique used to retrieve entities.

You can apply this technique to:

Datastore classes (all or a collection of entities in a datastore class)
Specific entities
Datastore class methods
Entity sets

#### Datastore Class Example  

The following requests returns only the first name and last name from the People datastore class (either the entire datastore class or a selection of entities based on the search defined in `$filter`).

 `GET  /rest/People/firstName,lastName/`

**Result**:

````
{
    __entityModel: "People",
    __COUNT: 4,
    __SENT: 4,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith"
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary"
        },
        {
            __KEY: "3",
            __STAMP: 2,
            firstName: "Pete",
            lastName: "Marley"
        },
        {
            __KEY: "4",
            __STAMP: 1,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````


`GET  /rest/People/firstName,lastName/?$filter="lastName='A*'"/`

**Result**:

````
{
    __entityModel: "People",
    __COUNT: 1,
    __SENT: 1,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "4",
            __STAMP: 4,
            firstName: "Beth",
            lastName: "Adams"
        }
    ]
}
````


#### Entity Example  
The following request returns only the first name and last name attributes from a specific entity in the People datastore class:

 `GET  /rest/People(3)/firstName,lastName/`

**Result**:

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Marley"
}
````


 `GET  /rest/People(3)/`

**Result**:

````
{
    __entityModel: "People",
    __KEY: "3",
    __STAMP: 2,
    ID: 3,
    firstName: "Pete",
    lastName: "Marley",
    salary: 30000,
    employer: {
        __deferred: {
            uri: "http://127.0.0.1:8081/rest/Company(3)",
            __KEY: "3"
        }
    },
    fullName: "Pete Marley",
    employerName: "microsoft"
 
}
````

#### Method Example  

If you have a datastore class method, you can define which attributes to return as shown below before passing the datastore class method:

 `GET  /rest/People/firstName,lastName/getHighSalaries`

or

 `GET  /rest/People/getHighSalaries/firstName,lastName`

#### Entity Set Example  

Once you have created an entity set, you can filter the information in it by defining which attributes to return:

 `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`
 
 
### {datastoreClass}  		

>Returns all the data (by default the first 100 entities) for a specific datastore class (*e.g.*, Company)	

#### Description   

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


#### Usage  

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



### {datastoreClass}:{attribute}(value) 

>Returns the data for one entity in which the attribute's value is defined

#### Description   
By passing the *datastoreClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute.

 `GET  /rest/Company:companyCode(Acme001)`

For more information about the data returned, refer to [{datastoreClass}](#datastoreclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](#attribute1-attribute2-). For example:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to expand a relation attribute using $expand, you do so by specifying it as shown below:

 `GET  /rest/Company:companyCode(Acme001)/name,address,staff?$expand=staff`

#### Usage  

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



### {datastoreClass}({key}) 

>Returns the data for the specific entity defined by the datastore class's primary key, *e.g.*, Company(22) or Company("IT0911AB2200")

#### Description   

By passing the datastoreClass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your datastore class. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{datastoreClass}](#datastoreclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](#attribute1-attribute2-). For example:

 `GET  /rest/Company(1)/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

#### Usage  
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




### {datastoreClass}/{method}

>Returns an entity collection or an array based on a datastore class method

#### Description   

**Datastore class methods** must be applied to either a **Class** or **Collection**, and must return either an entity collection or array. When returning an array, however, you cannot define which attributes are returned.

The scope for a datastore class method must be **Public** for you to be able to call it in a REST request:

 `GET  /rest/Employee/getHighSalaries`

or

 `GET  /rest/Employee/firstName/getHighSalaries`

If you do not have the permissions to execute the datastore class method, you will receive the following error:

````
{
    "__ERROR": [
        {
            "message": "No permission to execute method getHighSalaries in dataClass Employee",
            "componentSignature": "dbmg",
            "errCode": 1561
        }
    ]
}
````

#### Passing Parameters to a Method  
You can also pass parameters to a method either in a **GET** or in a **POST**.

In a GET, you write the following:

 `GET  /rest/Employee/addEmployee(John,Smith)`

In a POST, you write the following :

 `POST  /rest/Employee/addEmployee`

POST data:

`["John","Smith"]`

#### Manipulating the Data Returned by a Method  

You can define which attributes you want to return, by passing the following:

 `GET  /rest/Employee/firstName/getEmployees`

Or

 `GET  /rest/Employee/getEmployees/firstName`

You can also apply any of the following functions to a method: $expand, `$filter`, `$orderby`, `$skip`, and `$top/$limit`.

#### Usage  

In the example below, we call our method, but also browse through the collection by returning the next ten entities from the sixth one:

 `GET  /rest/Employee/lastName,employer?$expand=employer&$top=10&$skip=1/getHighSalaries`

or

 `GET  /rest/Employee/getHighSalaries/lastName,employer?$expand=employer&$top=10&$skip=1`

If you want to retrieve an attribute and an extended relation attribute, you can write the following REST request:

 `GET  /rest/Employee/firstName,employer/getHighSalaries?$expand=employer`

In the example below, the getCities datastore class method returns an array of cities:

 `GET  /rest/Employee/getCities`

**Result**:

````
{
    "result": [
        "Paris",
        "Florence",
        "New York"
    ]
}
````

### $asArray  		

>Returns the result in an array instead of JSON (*e.g.*, `$asArray=true`)

#### Description   

If you want to receive the response in an array, you just have to add `$asArray` to your REST request.

#### Usage  
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


### $atomic/$atonce 

>Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled. (*e.g.* `$atomic=true`)


#### Description   
When you have multiple actions together, you can use `$atomic/$atonce` to make sure that none of the actions are completed if one of them fails. You can use either `$atomic` or `$atonce`.

#### Example  
We call the following REST request in a transaction.

 `POST  /rest/Employee?$method=update&$atomic=true`

**POST data**:

````
[
{
    "__KEY": "1",
    "__STAMP": 5,
    "salary": 45000
},
{
    "__KEY": "2",
    "__STAMP": 10,
    "salary": 99000
}
]
````

We get the following error in the second entity and therefore the first entity is not saved either:

````
{
    "__ENTITIES": [
        {
            "__KEY": "1", 
            "__STAMP": 5, 
            "uri": "http://127.0.0.1:8081/rest/Employee(1)", 
            "ID": 1, 
            "firstName": "John", 
            "lastName": "Smith", 
            "fullName": "John Smith", 
            "gender": false, 
            "telephone": "4085551111", 
            "salary": 45000, 
            "employerName": "Adobe", 
            "employer": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)", 
                    "__KEY": "1"
                }
            }
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
            "employerName": "Adobe", 
            "employer": {
                "__deferred": {
                    "uri": "http://127.0.0.1:8081/rest/Company(1)", 
                    "__KEY": "1"
                }
            }, 
            "__ERROR": [
                {
                    "message": "Value cannot be greater than 60000", 
                    "componentSignature": "dbmg", 
                    "errCode": 1569
                }, 
                {
                    "message": "Entity fails validation", 
                    "componentSignature": "dbmg", 
                    "errCode": 1570
                }, 
                {
                    "message": "The entity# 1 of the datastore class \"Employee\" cannot be saved", 
                    "componentSignature": "dbmg", 
                    "errCode": 1517
                }
            ]
        }
    ]
}
````


>Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the *timestamp (__STAMP)* was not modified either. If we reload the entity, we will see the previous value.



### $binary 

>Pass "true" to save the BLOB as a document (must also pass `$expand={blobAttributeName}`)

#### Description   

`$binary` allows you to save the BLOB as a document.  You must also use the `$expand` in conjunction with it.

When you make the following request:

 GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt

You will be asked where to save the BLOB to disk:

![](assets/en/REST/binary.png)



### $compute 

>Calculate on specific attributes (*e.g.*, `Employee/salary/?$compute=sum)` or in the case of an Object attribute (*e.g.*, Employee/objectAtt.property1/?$compute=sum)


 
#### Description   

This parameter allows you to do calculations on your data. 

If you want to perform a calculation on an attribute, you write the following:

 `GET  /rest/Employee/salary/?$compute=$all`

If you want to pass an Object attribute, you must pass one of its property. For example:

 `GET  /rest/Employee/objectAtt.property1/?$compute=$all`

You can use any of the following keywords:


|Keyword|	Description|
|---|---|
|$all|	A JSON object that defines all the functions for the attribute (average, count, min, max, and sum for attributes of type Number and count, min, and max for attributes of type String|
|average|	Get the average on a numerical attribute|
|count|	Get the total number in the collection or datastore class (in both cases you must specify an attribute)|
|min	|Get the minimum value on a numerical attribute or the lowest value in an attribute of type String|
|max|	Get the maximum value on a numerical attribute or the highest value in an attribute of type String|
|sum|	Get the sum on a numerical attribute|


#### Example  

If you want to get all the computations for an attribute of type Number, you can write:

 `GET  /rest/Employee/salary/?$compute=$all`

**Response**:

````
{
    "salary": {
        "count": 4,
        "sum": 335000,
        "average": 83750,
        "min": 70000,
        "max": 99000
    }
}
````

If you want to get all the computations for an attribute of type String, you can write:

 `GET  /rest/Employee/firstName/?$compute=$all`

**Response**:

````
{
    "salary": {
        "count": 4,
        "min": Anne,
        "max": Victor
    }
}
````

If you want to just get one calculation on an attribute, you can write the following:

 `GET  /rest/Employee/salary/?$compute=sum`

**Response**:

`235000`

If you want to perform a calculation on an Object attribute, you can write the following:

 `GET  /rest/Employee/objectAttribute.property1/?$compute=sum`

Response:

`45`  


### $distinct

>Returns the distinct values for a specific attribute in an array (*e.g.*, `Company/name?$filter="name=a*"&$distinct=true`)


#### Description   

`$distinct` allows you to return an array containing the distinct values for a query on a specific attribute. Only one attribute in the datastore class can be specified. Generally, the String type is best; however, you can also use it on any attribute type that could contain multiple values.

You can also use `$skip` and `$top/$limit` as well, if you'd like to navigate the selection before it's placed in an array.

#### Example  
In our example below, we want to retrieve the distinct values for a company name starting with the letter "a":

 `GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

````
[
    "Adobe",
    "Apple"
]
````


### $entityset/{entitySetID} 

>Retrieves an existing entity set (*e.g.*, `People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`)


#### Description   

After creating an entity set by using `$method=entityset`, you can then use it subsequently.

Because entity sets have a time limit on them (either by default or after calling `$timeout` with your own limit), you can call `$savedfilter` and `$savedorderby` to save the filter and order by statements when you create an entity set.

When you retrieve an existing entity set stored in 4D Server's cache, you can also apply any of the following to the entity set: `$expand`, `$filter`, `$orderby`, `$skip`, and `$top/$limit`.

#### Example  

After you create an entity set, the entity set ID is returned along with the data. You call this ID in the following manner:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7`
 
 
 
### $entityset/{entitySetID}?$logicOperator... &$otherCollection

|Parameter|		Type|		Description	|
|---|---|---|
|$logicOperator |		String	|	One of the logical operators to test with the other entity set|	
|$otherCollection |		String	|	Entity set ID	|
|$entityset/{entitySetID}?$logicOperator... &$otherCollection ||Create another entity set based on previously created entity set|


#### Description   

After creating an entity set (entity set #1) by using `$method=entityset`, you can then create another entity set by using the `$entityset/{entitySetID}?$logicOperator... &$otherCollection` syntax, the `$logicOperator` property (whose values are shown below), and another entity set (entity set #2) defined by calling the `$otherCollection` property. The two entity sets must be in the same datastore class.

You can also create another entity set containing the results from this call by using the `$method=entityset` at the end of the REST request.

Here are the logical operators:

|Operator	|Description|
|---|---|
|AND|	Returns the entities in common to both entity sets|
|OR|	Returns the entities in both entity sets|
|EXCEPT	|Returns the entities in entity set #1 minus those in entity set #2|
|INTERSECT|	Returns either true or false if there is an intersection of the entities in both entity sets (meaning that least one entity is common in both entity sets)|

>The logical operators are not case-sensitive, so you can write "AND" or "and".

Below is a representation of the logical operators based on two entity sets. The red section is what is returned.

**AND**

![](assets/en/REST/and.png)

**OR**

![](assets/en/REST/or.png)

**EXCEPT**

![](assets/en/REST/except.png)


The syntax is as follows:

 `GET  /rest/datastoreClass/$entityset/entitySetID?$logicOperator=AND&$otherCollection=entitySetID`

#### Example  
In the example below, we return the entities that are in both entity sets since we are using the AND logical operator:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=AND&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If we want to know if the two entity sets intersect, we can write the following:

 `GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=intersect&$otherCollection=C05A0D887C664D4DA1B38366DD21629B`

If there is an intersection, this query returns true. Otherwise, it returns false.

In the following example we create a new entity set that combines all the entities in both entity sets:

` GET  /rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7?$logicOperator=OR&$otherCollection=C05A0D887C664D4DA1B38366DD21629B&$method=entityset`


### $expand 

>Expands the relational attribute specified (*e.g.*, `Company(1)?$expand=staff` or `Employee/?$filter="firstName BEGIN a"&$expand=employer`)<br>
or<br>
Expands an image stored in an Image attribute (*e.g.*, `Employee(1)/photo?$imageformat=best&$expand=photo`)


#### Description   

When you have relation attributes in a datastore class, you can use `$expand` to retrieve all the attributes for the related entity or entities.

You can apply `$expand` to an entity (*e.g.*, People(1)), an entity collection, or an entity set.

If you wan to sort the data retrieved for the relation attribute, you can use [#cmd id="900837"/].

#### Displaying data from the relation attribute  

If you want to expand a relation attribute that is in an entity set, you can use the following syntax:

` GET  /rest/Employee/$entityset/99B09793950D414A864E6E1F03F0B293?$expand=employer`

*employer* is the relation attribute that links the Company and Employee datastore classes.

#### Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to `$imageformat`. For more information about the version parameter, refer to `$version`.

#### Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your datastore class, you can write the following by also passing "true" to $binary:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
  
  
##### Example  

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


### $filter 

>Filters the data in a datastore class or method *(e.g.*, `$filter="firstName!='' AND salary>30000"`)


#### Description   

This parameter allows you to define the filter for your datastore class or method.

#### Using a simple filter

A filter is composed of the following elements:

`{attribute} {comparator =, !=, >, <...} {value}`

For example: `$filter="firstName=john AND salary>20000"` where firstName and salary are attributes in the Employee datastore class.

#### Using a complex filter

A more compex filter is composed of the following elements, which joins two queries:

`{attribute} {comparator =, !=, >, <...} {value} {conjunction AND/OR/EXCEPT} {attribute} {comparator =, !=, >, <...} {value}`


For example: `$filter="firstName=john AND salary>20000"` where firstName and salary are attributes in the Employee datastore class.

#### Using the params property

You can also use 4D's params property.

`{attribute} {comparator =, !=, >, <...} {placeholder} {conjunction AND/OR/EXCEPT} {attribute} {comparator =, !=, >, <...} {placeholder}&$params='["{value1}","{value2}"]"'`

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'"` where firstName and salary are attributes in the Employee datastore class.

For more information regarding how to query data in 4D, refer to **Defining Queries** (Client-side).


>When inserting quotes (') or double quotes ("), you must escape them using using their character code:
>
><li>Quotes ('):	\u0027
><li>Double quotes ("):	\u0022
  
For example, you can write the following when passing a value with a quote when using the params property:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`

If you pass the value directly, you can write the following:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`