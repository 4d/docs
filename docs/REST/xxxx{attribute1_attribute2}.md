---
id: {attribute1_attribute2}
title: {attribute1,attribute2} 
---

Defines which attributes to return in the REST response after an initial request (*e.g.*, `Company(1)/name,revenues/`)	

## Description   
You can apply this filter to your entities in the following ways:


|Method	|Syntax|	Example|
|---|---|---|
|Datastore class	|{datastoreClass}/{att1,att2...}	|/People/firstName,lastName|
|Collection of entities	|{datastoreClass}/{att1,att2...}/?$filter="{filter}"|	/People/firstName,lastName/?$filter="lastName='a*'"|
|Specific entity|	{datastoreClass}({ID})/{att1,att2...}	|/People(1)/firstName,lastName|  
||{dataClass}:{attribute}(value)/{att1,att2...}/|/People:firstName(Larry)/firstName,lastName/|
|Entity selection|	{datastoreClass}/{att1,att2...}/$entityset/{entitySetID}|	/People/firstName/$entityset/528BF90F10894915A4290158B4281E61|

The attributes must be delimited by a comma, *i.e.*, `/Employee/firstName,lastName,salary`.

If you want specific information from the related datastore class, you must first specify the relation attribute in the datastore class by using `$expand`. For example, you could write `/Employee/firstName,lastName,employer.name,employer.city/?$expand=employer`.

All types of attributes can be passed: storage, calculated, alias, inherited, or relational. For more information about attributes, refer to the **Attribute Categories** paragraph in the **Data Model Editor** chapter.

>You cannot define a property in an attribute of type Object, you can only specify the actual attribute.


## Examples  
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
 