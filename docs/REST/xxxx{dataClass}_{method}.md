---
id: {dataClass}_{method}
title: {dataClass}/{method} 
---



Returns an entity selection or a collection based on a dataclass method	

## Description   

Dataclass methods must be applied to either a dataclass or an entity selection, and must return either an entity selection or a collection. When returning a collection, however, you cannot define which attributes are returned.

The method must has been declared as "Available through REST server" in 4D for you to be able to call it in a REST request:

`GET  /rest/Employee/getHighSalaries`
or
`GET  /rest/Employee/firstName/getHighSalaries`

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

## Passing Parameters to a Method  
You can also pass parameters to a method either in a GET or in a POST.

In a GET, you write the following:

`GET  /rest/Employee/addEmployee(John,Smith)`

In a POST, you write the following :

`POST  /rest/Employee/addEmployee`

**POST data:**
["John","Smith"]

## Manipulating the Data Returned by a Method  
You can define which attributes you want to return, by passing the following:

`GET  /rest/Employee/firstName/getEmployees`
Or
`GET  /rest/Employee/getEmployees/firstName`

You can also apply any of the following functions to a method: [$filter]($filter.md), [$orderby]($orderby.md), [$skip]($skip.md), [$expand]($expand.md), and [$top/$limit]($top_$limit.md).


### Usage  
In the example below, we call our method, but also browse through the collection by returning the next ten entities from the sixth one:

`GET  /rest/Employee?$attributes=lastName,employer.name&$top=10&$skip=1/getHighSalaries`
or
`GET  /rest/Employee/getHighSalaries?$attributes=lastName,employer.name&$top=10&$skip=1`

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
