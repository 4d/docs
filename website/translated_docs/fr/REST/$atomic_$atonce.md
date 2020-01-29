---
id: atomic_$atonce
title: '$atomic/$atonce'
---


Autorise les actions d'une requête REST à faire partie d'une transaction. Si aucune erreur n'est générée, la transaction est validée. Sinon, la transaction est annulée.


## Description
Lorsque plusieurs actions sont réunies, vous pouvez utiliser `$atomic/$atonce` pour vous assurer qu'aucune action ne se réalise si l'une d'elle échoue. Vous pouvez utiliser `$atomic` ou `$atonce`.


## Exemple
Nous appelons la requête REST suivante dans une transaction.

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

Nous obtenons l'erreur suivante dans la deuxième entité ; la première entité n'est donc pas sauvegardée :

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
> Même si le salaire de la première entité porte la valeur 45000, cette valeur n'a pas été sauvegardée sur le serveur et le timestamp (__STAMP)* n'a pas été modifié. Si nous rechargeons l'entité, la valeur précédente s'affichera.
