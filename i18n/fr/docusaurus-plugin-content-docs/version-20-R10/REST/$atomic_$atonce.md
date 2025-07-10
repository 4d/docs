---
id: atomic_$atonce
title: $atomic/$atOnce
---

Autorise les actions d'une requête REST à faire partie d'une transaction. Si aucune erreur n'est générée, la transaction est validée. Sinon, la transaction est annulée.

## Description

Lorsque plusieurs actions sont réunies, vous pouvez utiliser `$atomic/$atOnce` pour vous assurer qu'aucune action ne se réalise si l'une d'elle échoue. Vous pouvez utiliser soit `$atomic` soit `$atOnce`.

## Exemple

Nous appelons la requête REST suivante dans une transaction.

`POST  /rest/Employee?$method=update&$atomic=true`

**Données POST** :

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

Nous obtenons l'erreur suivante dans la deuxième entité ; la première entité n'est donc pas sauvegardée :

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

> Même si le salaire de la première entité porte la valeur 45000, cette valeur n'a pas été sauvegardée sur le serveur et le timestamp (__STAMP)\* n'a pas été modifié. Si nous rechargeons l'entité, la valeur précédente s'affichera.
