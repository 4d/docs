---
id: manData
title: Manipulating Data 
---

All [exposed dataclasses, attributes](configuration.md#exposing-tables-and-fields) and [functions](ClassFunctions.md) can be accessed through REST. Dataclass, attribute, and function names are case-sensitive; however, the data for queries is not.

## Querying data  

To query data directly, you can do so using the [`$filter`]($filter.md) function. For example, to find a person named "Smith", you could write:

`http://127.0.0.1:8081/rest/Person/?$filter="lastName=Smith"`




## Adding, modifying, and deleting entities  

With the REST API, you can perform all the manipulations to data as you can in 4D.

To add and modify entities, you can call [`$method=update`]($method.md#methodupdate). If you want to delete one or more entities, you can use [`$method=delete`]($method.md#methoddelete).

Besides retrieving a single entity in a dataclass using [\{dataClass\}({key})](dataClass.md#dataclasskey), you can also write a [class function](ClassFunctions.md#function-calls) that returns an entity selection (or a collection).

Before returning a selection, you can also sort it by using [`$orderby`]($orderby.md) one one or more attributes (even relation attributes).


## Navigating data  

Add the [`$skip`]($skip.md) (to define with which entity to start) and [`$top/$limit`]($top_$limit.md) (to define how many entities to return) REST requests to your queries or entity selections to navigate the collection of entities.



## Creating and managing entity set  

An entity set (aka *entity selection*) is a collection of entities obtained through a REST request that is stored in 4D Server's cache. Using an entity set prevents you from continually querying your application for the same results. Accessing an entity set is much quicker and can improve the speed of your application.

To create an entity set, call [`$method=entityset`]($method.md#methodentityset) in your REST request. As a measure of security, you can also use [`$savedfilter`]($savedfilter.md) and/or [`$savedorderby`]($savedorderby.md) when you call [`$filter`]($filter.md) and/or [`$orderby`]($orderby.md) so that if ever the entity set timed out or was removed from the server, it can be quickly retrieved with the same ID as before.

To access the entity set, you must use `$entityset/\{entitySetID\}`, for example:

`/rest/People/$entityset/0AF4679A5C394746BFEB68D2162A19FF`


By default, an entity set is stored for two hours; however, you can change the timeout by passing a new value to [`$timeout`]($timeout.md). The timeout is continually being reset to the value defined for its timeout (either the default one or the one you define) each time you use it.

If you want to remove an entity set from 4D Server's cache, you can use [`$method=release`]($method.md#methodrelease).

If you modify any of the entity's attributes in the entity set, the values will be updated. However, if you modify a value that was a part of the query executed to create the entity set, it will not be removed from the entity set even if it no longer fits the search criteria. 

Any entities you delete will, of course, no longer be a part of the entity set. However, by default their reference will remain in the entity set with an *undefined* value, and they will still be included in the entity set count. Call [`$clean`]($clean.md) on the entity set to create a new, up-to-date entity set without *undefined* entity references. 

If the entity set no longer exists in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it.

Using [`$entityset/\{entitySetID\}?$logicOperator... &$otherCollection`]($entityset.md#entitysetentitysetidoperatorothercollection), you can combine two entity sets that you previously created. You can either combine the results in both, return only what is common between the two, or return what is not common between the two.

A new selection of entities is returned; however, you can also create a new entity set by calling [`$method=entityset`]($method.md#methodentityset) at the end of the REST request.



## Calculating data  

By using [`$compute`]($compute.md), you can compute the **average**, **count**, **min**, **max**, or **sum** for a specific attribute in a dataclass. You can also compute all values with the $all keyword. 

For example, to get the highest salary:

`/rest/Employee/salary/?$compute=max`

To compute all values and return a JSON object:

`/rest/Employee/salary/?$compute=$all`


## Calling Data model class functions

You can call ORDA Data Model [user class functions](ClassFunctions.md) through POST requests, so that you can benefit from the exposed API of the targeted application. For example, if you have defined a `getCity()` function in the City dataclass class, you could call it using the following request:

`/rest/City/getCity`

with data in the body of the request: `["Paris"]`


> Calls to 4D project methods that are exposed as REST Service are still supported but are deprecated. 


## Selecting Attributes to get

You can always define which attributes to return in the REST response after an initial request by passing their path in the request (*e.g.*, `Company(1)/name,revenues/`)

You can apply this filter in the following ways:

|Object	|Syntax|	Example|
|---|---|---|
|Dataclass	|\{dataClass\}/{att1,att2...}	|/People/firstName,lastName|
|Collection of entities	|\{dataClass\}/{att1,att2...}/?$filter="{filter}"|	/People/firstName,lastName/?$filter="lastName='a@'"|
|Specific entity|	\{dataClass\}({ID})/{att1,att2...}	|/People(1)/firstName,lastName|  
||\{dataClass\}:\{attribute\}(value)/{att1,att2...}/|/People:firstName(Larry)/firstName,lastName/|
|Entity selection|	\{dataClass\}/{att1,att2...}/$entityset/\{entitySetID\}|	/People/firstName/$entityset/528BF90F10894915A4290158B4281E61|

The attributes must be delimited by a comma, *i.e.*, `/Employee/firstName,lastName,salary`. Storage or relation attributes can be passed. 


### Examples
Here are a few examples, showing you how to specify which attributes to return depending on the technique used to retrieve entities.

You can apply this technique to:

- Dataclasses (all or a collection of entities in a dataclass)
- Specific entities
- Entity sets

#### Dataclass Example  

The following requests returns only the first name and last name from the People dataclass (either the entire dataclass or a selection of entities based on the search defined in `$filter`).

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


`GET  /rest/People/firstName,lastName/?$filter="lastName='A@'"/`

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

The following request returns only the first name and last name attributes from a specific entity in the People dataclass:

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

#### Entity Set Example  

Once you have [created an entity set](#creating-and-managing-entity-set), you can filter the information in it by defining which attributes to return:

 `GET  /rest/People/firstName,employer.name/$entityset/BDCD8AABE13144118A4CF8641D5883F5?$expand=employer`
 

## Viewing an image attribute  

If you want to view an image attribute in its entirety, write the following:

 `GET  /rest/Employee(1)/photo?$imageformat=best&$version=1&$expand=photo`

For more information about the image formats, refer to [`$imageformat`]($imageformat.md). For more information about the version parameter, refer to [`$version`]($version.md).

## Saving a BLOB attribute to disk  

If you want to save a BLOB stored in your dataclass, you can write the following:

  `GET  /rest/Company(11)/blobAtt?$binary=true&$expand=blobAtt`
  

## Retrieving only one entity  

You can use the [`\{dataClass\}:\{attribute\}(value)`](%7BdataClass%7D.html#dataclassattributevalue) syntax when you want to retrieve only one entity. It's especially useful when you want to do a related search that isn't created on the dataclass's primary key. For example, you can write:

 `GET  /rest/Company:companyCode("Acme001")`
 
 
