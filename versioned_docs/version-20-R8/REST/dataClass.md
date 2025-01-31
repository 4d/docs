---
id: dataClass
title: dataClass
---

Dataclass names can be used directly in the REST requests to work with entities and entity selections, or class functions of the dataclass.

## Available syntaxes

|Syntax|Example|Description|
|---|---|---|
|[**\{dataClass\}**](#dataClass)|`/Employee`|Returns all the data (by default the first 100 entities) for the dataclass|
|[**\{dataClass\}[{key}]**](#dataclasskey)|`/Employee[22]`|Returns the data for the specific entity defined by the dataclass's primary key|
|[**\{dataClass\}:\{attribute\}(value)**](#dataclassattributevalue)|`/Employee:firstName(John)`|Returns the data for one entity in which the attribute's value is defined|
|[**\{dataClass\}/{DataClassClassFunction}**](ClassFunctions.md#function-calls)|`/City/getCity`|Executes a dataclass class function |
|[**\{dataClass\}/{EntitySelectionClassFunction}**](ClassFunctions.md#function-calls)|`/City/getPopulation/?$filter="ID<3"`|Executes an entity selection class function|
|[**\{dataClass\}[{key}]/{EntityClassFunction}**](ClassFunctions.md#function-calls)|`City[2]/getPopulation`|Executes an entity class function|

> Function calls are detailed in the [Calling ORDA class functions](ClassFunctions.md) section.



## \{dataClass\}

Returns all the data (by default the first 100 entities) for a specific dataclass (*e.g.*, `Company`)	

### Description   

When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using [`$top/$limit`]($top_$limit.md).

Here is a description of the data returned:

|Property|	Type|	Description|
|---|---|---|
|__entityModel|	Text|	Name of the dataclass.|
|__COUNT|	Number	|Number of entities in the dataclass.|
|__SENT|	Number|	Number of entities sent by the REST request. This number can be the total number of entities if it is less than the value defined by `$top/$limit`.|
|__FIRST|	Number|	Entity number that the selection starts at. Either 0 by default or the value defined by `$skip`.|
|__ENTITIES	|Collection|	This collection of objects contains an object for each entity with all its attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent.|

Each entity contains the following properties:

|Property|	Type|	Description|
|---|---|---|
|__KEY|Text|Value of the primary key defined for the dataclass.|
|__TIMESTAMP|Date|Timestamp of the last modification of the entity|
|__STAMP|Number|Internal stamp that is needed when you modify any of the values in the entity when using `$method=update`.|

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). For example:

 `GET  /rest/Company/name,address`



### Example  

Return all the data for a specific dataclass.

 `GET  /rest/Company`

**Result**:

```json
{
    "__entityModel": "Company",
    "__GlobalStamp": 51,
    "__COUNT": 250,
    "__SENT": 100,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "1",
            "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
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
            "__TIMESTAMP": "2018-04-25T14:42:18.351Z",
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
            "__TIMESTAMP": "2018-04-23T09:03:49.021Z",
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
            "__TIMESTAMP": "2018-03-28T14:38:07.430Z",
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
```


## \{dataClass\}\[{key}]

Returns the data for the specific entity defined by the dataclass's primary key, *e.g.*, `Company[22]` or `Company[IT0911AB2200]`

### Description   

By passing the dataclass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your dataclass. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [\{dataClass\}](#dataclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). For example:

 `GET  /rest/Company[1]/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

 `GET  /rest/Company[1]/name,address,staff?$expand=staff`

### Example  

The following request returns all the public data in the Company dataclass whose key is 1.

 `GET  /rest/Company[1]`

**Result**:

```json
{
    "__entityModel": "Company",
    "__KEY": "1",
    "__TIMESTAMP": "2020-04-10T10:44:49.927Z",
    "__STAMP": 2,
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
```



## \{dataClass\}:\{attribute\}(value)

Returns the data for one entity in which the attribute's value is defined

### Description

By passing the *dataClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key.

 `GET  /rest/Company:companyCode(Acme001)`

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md#selecting-attributes-to-get). For example:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Example  

The following request returns all the public data of the employee named "Jones".

 `GET  /rest/Employee:lastname(Jones)`

