---
id: method=update
title: $method=update 
---

Updates and/or creates one or more entities	

## Description   

`$method=update` allows you to update and/or create one or more entities in a single **POST**. If you update and/or create one entity, it is done in an object with each property an attribute with its value, *e.g.*, `{ lastName: "Smith" }`. If you update and/or create multiple entities, you must create an array of objects.

To update an entity, you must pass the `__KEY` and `__STAMP` parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your **POST**.

All triggers, calculated attributes, and events are executed immediately when saving the entity to the server. The response contains all the data as it exists on the server.

You can also put these requests to create or update entities in a transaction by calling `$atomic/$atonce`. If any errors occur during data validation, none of the entities are saved. You can also use $method=validate to validate the entities before creating or updating them.

If a problem arises while adding or modifying an entity, an error will be returned to you with that information.

>Notes for specific attribute types:
>
>	*	**Dates** must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). If you have selected the Date only property for your Date attribute, the time zone and time (hour, minutes, and seconds) will be removed. In this case, you can also send the date in the format that it is returned to you dd!mm!yyyy (e.g., 05!10!2013).
>	*	**Booleans** are either true or false.
>	*	Uploaded files using $upload can be applied to an attribute of type Image or BLOB by passing the object returned in the following format { "ID": "D507BC03E613487E9B4C2F6A0512FE50"}

## Example  

To update a specific entity, you use the following URL:

 `POST  /rest/Person/?$method=update`

POST data:

```
{
    __KEY: "340",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Miller"
}
```

The firstName and lastName attributes in the entity indicated above will be modified leaving all other attributes (except calculated ones based on these attributes) unchanged.

If you want to create an entity, you can POST the attributes using this URL:

 `POST  /rest/Person/?$method=update`

POST data:

```
{ 
    firstName: "John",
    lastName: "Smith"
}
```

You can also create and update multiple entities at the same time using the same URL above by passing multiple objects in an array to the POST:

 `POST  /rest/Person/?$method=update`

POST data:

```
[{ 
    "__KEY": "309",
    "__STAMP": 5,
    "ID": "309",
    "firstName": "Penelope",
    "lastName": "Miller"
}, { 
    "firstName": "Ann",
    "lastName": "Jones"
}]
```

Response:

When you add or modify an entity, it is returned to you with the attributes that were modified. For example, if you create the new employee above, the following will be returned:

```
{
    "__KEY": "622", 
    "__STAMP": 1, 
    "uri": "http://127.0.0.1:8081/rest/Employee(622)", 
    "ID": 622, 
    "firstName": "John", 
    "firstName": "Smith",
    "fullName": "John Smith"
}
```

>The only reason the fullName attribute is returned is because it is a calculated attribute based on both firstName and lastName.

If, for example, the stamp is not correct, the following error is returned:

```
{
    "__ENTITIES": [
        {
            "__KEY": "309", 
            "__STAMP": 1, 
            "ID": 309, 
            "firstName": "Betty", 
            "lastName": "Smith", 
            "fullName": "Betty Smith", 
            "__ERROR": [
                {
                    "message": "Given stamp does not match current one for record# 308 of table Employee", 
                    "componentSignature": "dbmg", 
                    "errCode": 1263
                }, 
                {
                    "message": "Cannot save record 308 in table Employee of database Widgets", 
                    "componentSignature": "dbmg", 
                    "errCode": 1046
                }, 
                {
                    "message": "The entity# 308 of the datastore class \"Employee\" cannot be saved", 
                    "componentSignature": "dbmg", 
                    "errCode": 1517
                }
            ]
        }, 
        {
            "__KEY": "612", 
            "__STAMP": 4, 
            "uri": "http://127.0.0.1:8081/rest/Employee(612)", 
            "ID": 612, 
            "firstName": "Ann", 
            "lastName": "Jones", 
            "fullName": "Ann Jones"
        }
    ]
}
```

If, for example, the user does not have the appropriate permissions to update an entity, the following error is returned:

```
{
    "__KEY": "2", 
    "__STAMP": 4, 
    "ID": 2, 
    "firstName": "Paula", 
    "lastName": "Miller", 
    "fullName": "Paula Miller", 
    "telephone": "408-555-5555", 
    "salary": 56000, 
    "employerName": "Adobe", 
    "employer": {
        "__deferred": {
            "uri": "http://127.0.0.1:8081/rest/Company(1)", 
            "__KEY": "1"
        }
    }, 
    "__ERROR": [
        {
            "message": "No permission to update for dataClass Employee", 
            "componentSignature": "dbmg", 
            "errCode": 1558
        }, 
        {
            "message": "The entity# 1 of the datastore class \"Employee\" cannot be saved", 
            "componentSignature": "dbmg", 
            "errCode": 1517
        }
    ]
}
```
