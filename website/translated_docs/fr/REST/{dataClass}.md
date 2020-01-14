---
id:
  - dataClass
title:
  - dataClass
---



Dataclass names can be used directly in the REST requests to work with entities, entity selections, or methods of the dataclass.

## Available syntaxes

| Syntaxe                                                        | Exemple                                                | Description                                                                     |
| -------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------- |
| [**{dataClass}**](#dataClass)                                  | `/Employee`                                            | Returns all the data (by default the first 100 entities) for the dataclass      |
| [**{dataClass}({key})**](#dataclasskey)                        | `/Employee(22)`                                        | Returns the data for the specific entity defined by the dataclass's primary key |
| [**{dataClass}:{attribute}(value)**](#dataclassattributevalue) | `/Employee:firstName(John)`                            | Returns the data for one entity in which the attribute's value is defined       |
| [**{dataClass}/{method}**](#dataclassmethod)                   | `/Employee/getHighSalaries` or `/Employee/name/getAge` | Returns an entity selection or a collection based on a dataclass method         |



## {dataClass}

Returns all the data (by default the first 100 entities) for a specific dataclass (*e.g.*, `Company`)

### Description

When you call this parameter in your REST request, the first 100 entities are returned unless you have specified a value using [`$top/$limit`]($top_$limit.md).

Here is a description of the data returned:

| Property      | Type    | Description                                                                                                                                                                                                                                                   |
| ------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| __entityModel | Chaine  | Name of the datastore class.                                                                                                                                                                                                                                  |
| __COUNT       | Nombre  | Number of entities in the datastore class.                                                                                                                                                                                                                    |
| __SENT        | Nombre  | Number of entities sent by the REST request.This number can be the total number of entities if it is less than the value defined in the Default Top Size property (in the Properties for the datastore class) or `$top/$limit` or the value in `$top/$limit`. |
| __FIRST       | Nombre  | Entity number that the selection starts at. Either 0 by default or the value defined by `$skip`.                                                                                                                                                              |
| __ENTITIES    | Tableau | This array of objects contains an object for each entity with all the Public attributes. All relational attributes are returned as objects with a URI to obtain information regarding the parent.                                                             |

For each entity, there is a **__KEY** and a **__STAMP** property. The **__KEY** property contains the value of the primary key defined for the datastore class. The **__STAMP** is an internal stamp that is needed when you modify any of the values in the entity when using `$method=update`.

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company/name,address`



### Exemple

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


## {dataClass}({key})

Returns the data for the specific entity defined by the dataclass's primary key, *e.g.*, `Company(22) or Company("IT0911AB2200")`

### Description

By passing the dataclass and a key, you can retrieve all the public information for that entity. The key is the value in the attribute defined as the Primary Key for your datastore class. For more information about defining a primary key, refer to the **Modifying the Primary Key** section in the **Data Model Editor**.

For more information about the data returned, refer to [{datastoreClass}](#datastoreclass).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company(1)/name,address`

If you want to expand a relation attribute using `$expand`, you do so by specifying it as shown below:

 `GET  /rest/Company(1)/name,address,staff?$expand=staff`

### Exemple

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



## {dataClass}:{attribute}(value)

Returns the data for one entity in which the attribute's value is defined

### Description

By passing the *dataClass* and an *attribute* along with a value, you can retrieve all the public information for that entity. The value is a unique value for attribute, but is not the primary key.

 `GET  /rest/Company:companyCode(Acme001)`

For more information about the data returned, refer to [{dataClass}](dataClass.md).

If you want to specify which attributes you want to return, define them using the following syntax [{attribute1, attribute2, ...}](manData.md##selecting-attributes-to-get). Par exemple:

 `GET  /rest/Company:companyCode(Acme001)/name,address`

If you want to use a relation attribute using [$attributes]($attributes.md), you do so by specifying it as shown below:

 `GET  /rest/Company:companyCode(Acme001)?$attributes=name,address,staff.name`

### Exemple

The following request returns all the public data of the employee named "Jones".

 `GET  /rest/Employee:lastname(Jones)`


## {dataClass}/{method}

Returns an entity selection or a collection based on a dataclass method

### Description

Dataclass methods must be applied to either a dataclass or an entity selection, and must return either an entity selection or a collection. When returning a collection, however, you cannot define which attributes are returned.

The method must has been declared as "Available through REST server" in 4D for you to be able to call it in a REST request:

`GET  /rest/Employee/getHighSalaries` or `GET  /rest/Employee/firstName/getHighSalaries`

If you do not have the permissions to execute the method, you will receive the following error:

```
{
    "__ERROR": [
        {
            "message": "No permission to execute method getHighSalaries in dataClass Employee",
            "componentSignature": "dbmg",
            "errCode": 1561
        }
    ]
}
```

### Passing Parameters to a Method
You can also pass parameters to a method either in a GET or in a POST.

In a GET, you write the following:

`GET  /rest/Employee/addEmployee(John,Smith)`

In a POST, you write the following :

`POST  /rest/Employee/addEmployee`

**POST data:** ["John","Smith"]

### Manipulating the Data Returned by a Method
You can define which attributes you want to return, by passing the following:

`GET  /rest/Employee/firstName/getEmployees` Or `GET  /rest/Employee/getEmployees/firstName`

You can also apply any of the following functions to a method: [$filter]($filter.md), [$orderby]($orderby.md), [$skip]($skip.md), [$expand]($expand.md), and [$top/$limit]($top_$limit.md).


### Exemple

In the example below, we call our method, but also browse through the collection by returning the next ten entities from the sixth one:

`GET  /rest/Employee?$attributes=lastName,employer.name&$top=10&$skip=1/getHighSalaries` or `GET  /rest/Employee/getHighSalaries?$attributes=lastName,employer.name&$top=10&$skip=1`

If you want to retrieve an attribute and an extended relation attribute, you can write the following REST request:

`GET  /rest/Employee/firstName,employer/getHighSalaries?$expand=employer`

In the example below, the getCities dataclass method returns a collection of cities:

`GET  /rest/Employee/getCities`

Result:

```
{
    "result": [
        "Paris",
        "Florence",
        "New York"
    ]
}
```
