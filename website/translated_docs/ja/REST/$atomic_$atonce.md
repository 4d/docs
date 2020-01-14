---
id: atomic_$atonce
title: '$atomic/$atonce'
---


Allows the actions in the REST request to be in a transaction. If there are no errors, the transaction is validated. Otherwise, the transaction is cancelled.


## 説明
When you have multiple actions together, you can use `$atomic/$atonce` to make sure that none of the actions are completed if one of them fails. You can use either `$atomic` or `$atonce`.


## 例題
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
> Even though the salary for the first entity has a value of 45000, this value was not saved to the server and the *timestamp (__STAMP)* was not modified either. If we reload the entity, we will see the previous value.
