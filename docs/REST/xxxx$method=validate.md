---
id: method=validate
title: $method=validate 
---

Validates the request when adding and/or modifying entities	

## Description   

Before actually saving a new or modified entity with `$method=update`, you can first try to validate the actions first with `$method=validate`.

## Example  

In this example, we **POST** the following request to $method=validate:

 `POST  /rest/Employee/?$method=validate`

**POST data**:

```
[{
    "__KEY": "1",
    "__STAMP": 8,
    "firstName": "Pete",
    "lastName": "Jones",
    "salary": 75000
}, {
    "firstName": "Betty",
    "lastName": "Miller",
}]
```

**Response**:

If the request is successful, the following response is returned:

```
{
    "ok": true
}
```

Otherwise, you receive an error. In our case, we got an error because our salary field must be inferior to 60000:

```
{
    "__ENTITIES": [
        {
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
                    "message": "The new entity of the datastore class \"Employee\" cannot be saved", 
                    "componentSignature": "dbmg", 
                    "errCode": 1534
                }
            ]
        }
    ]
}
```
