---
id: apiDataClass
title: Dataclass 
---


 
 
## ```{attribute1, attribute2, ...}```  		

Defines which attributes to return in the REST response after an initial request (*e.g.*, Company(1)/name,revenues/)	

#### Description   
You can apply this filter to your entities in the following ways:


|Method	|Syntax|	Example|
|---|---|---|
|Datastore class	|{datastoreClass}/{att1,att2...}	|/People/firstName,lastName|
|Collection of entities	|{datastoreClass}/{att1,att2...}/?$filter="{filter}"|	/People/firstName,lastName/?$filter="lastName='a*'"|
|Specific entity|	{datastoreClass}({ID})/{att1,att2...}	|/People(1)/firstName,lastName|
|Entity selection|	{datastoreClass}/{att1,att2...}/$entityset/{entitySetID}|	/People/firstName/$entityset/528BF90F10894915A4290158B4281E61|

The attributes must be delimited by a comma, *i.e.*, /Employee/firstName,lastName,salary.

If you want specific information from the related datastore class, you must first specify the relation attribute in the datastore class by using `$expand`. For example, you could write /Employee/firstName,lastName,employer.name,employer.city/?$expand=employer.

All types of attributes can be passed: storage, calculated, alias, inherited, or relational. For more information about attributes, refer to the **Attribute Categories** paragraph in the **Data Model Editor** chapter.

>You cannot define a property in an attribute of type Object, you can only specify the actual attribute.


#### Usage  
Here are a few examples, showing you how to specify which attributes to return depending on the technique used to retrieve entities.

You can apply this technique to:

- Datastore classes (all or a collection of entities in a datastore class)
- Specific entities
- Datastore class methods
- Entity sets

### Datastore Class Example  

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


### Entity Example  
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

### Method Example  

If you have a datastore class method, you can define which attributes to return as shown below before passing the datastore class method:

 `GET  /rest/People/firstName,lastName/getHighSalaries`

or

 `GET  /rest/People/getHighSalaries/firstName,lastName`

### Entity Set Example  

Once you have created an entity set, you can filter the information in it by defining which attributes to return:

 `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`
 
 
## ```{datastoreClass}```  		

Returns all the data (by default the first 100 entities) for a specific datastore class (*e.g.*, Company)	

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



## ```{datastoreClass}:{attribute}(value)``` 

Returns the data for one entity in which the attribute's value is defined

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



## ```{datastoreClass}({key})``` 

Returns the data for the specific entity defined by the datastore class's primary key, *e.g.*, Company(22) or Company("IT0911AB2200")

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
