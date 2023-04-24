---
id: atomic_$atonce
title: $atomic/$atOnce 
---


Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled.


## Description 

When you have multiple actions together, you can use `$atomic/$atOnce` to make sure that none of the actions are completed if one of them fails. You can use either `$atomic` or `$atOnce`.


## Example

We call the following REST request in a transaction.

 `POST  /rest/Employee?$method=update&$atomic=true`

**POST data**:

```json
[
{
    "__KEY": "200",
    "firstname": "John"
},
{
    "__KEY": "201",
    "firstname": "Harry"
}
]
```

We get the following error in the second entity and therefore the first entity is not saved either:

```json
{
    "__STATUS": {
        "success": true
    },
    "__KEY": "200",
    "__STAMP": 1,
    "uri": "/rest/Employee(200)",
    "__TIMESTAMP": "!!2020-04-03!!",
    "ID": 200,
    "firstname": "John",
    "lastname": "Keeling",
    "isWoman": false,
    "numberOfKids": 2,
    "addressID": 200,
    "gender": false,
    "address": {
        "__deferred": {
            "uri": "/rest/Address(200)",
            "__KEY": "200"
        }
    },
    "__ERROR": [
        {
            "message": "Cannot find entity with \"201\" key in the \"Employee\" dataclass",
            "componentSignature": "dbmg",
            "errCode": 1542
        }
    ]
}
```


>Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the *timestamp (__STAMP)* was not modified either. If we reload the entity, we will see the previous value.
