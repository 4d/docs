---
id: method
title: $method
---

Ce paramètre vous permet de définir l'opération à exécuter avec l'entité ou la sélection d'entité (entity selection) retournée.

## Syntaxe

| Syntaxe                                         | Exemple                                                                                 | Description                                                                                                  |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| [**$method=delete**](#methoddelete)             | `POST /Employee?$filter="ID=11"& $method=delete`                                        | Supprime l'entité, la collection d'entités ou la sélection d'entité courante                                 |
| [**$method=entityset**](#methodentityset)       | `GET /People/?$filter="ID>320"& $method=entityset& $timeout=600`                        | Crée un entity set dans le cache de 4D Server basé sur la collection d'entités définies dans la requête REST |
| [**$method=release**](#methodrelease)           | `GET /Employee/$entityset/<entitySetID>?$method=release`                                | Affiche un entity set existant stocké dans le cache de 4D Server                                             |
| [**$method=subentityset**](#methodsubentityset) | `GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC` | Crée un entity set basé sur la collection d'entités liées définies dans la requête REST                      |
| [**$method=update**](#methodupdate)             | `POST /Person/?$method=update`                                                          | Met à jour et/ou crée une ou plusieurs entités                                                               |

## $method=delete

Supprime l'entité, la collection d'entités ou l'entity selection courante (créée via REST)

### Description

Avec `$method=delete`, vous pouvez supprimer une entité ou une collection d'entités entière. Vous pouvez définir la collection d'entités en utilisant, par exemple, [`$filter`]($filter.md) ou en en spécifiant une directement à l'aide de [`\{dataClass\}(\{key\})`](dataClass.md#dataclasskey) (par exemple, /Employee(22)).

Vous pouvez également supprimer les entités d'un entity set en appelant [`$entityset/\{entitySetID\}`]($entityset.md#entitysetentitysetid).

### Exemple

Vous pouvez ensuite saisir la requête REST suivante pour supprimer l'entité dont la clé porte le numéro 22 :

`POST  /rest/Employee(22)/?$method=delete`

Vous pouvez également faire une requête en utilisant $ filter :

`POST  /rest/Employee?$filter="ID=11"&$method=delete`

Vous pouvez également supprimer un entity set en utilisant $entityset/\{entitySetID\} :

`POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete`

Réponse :

```json
{
    "ok": true
}
```

## $method=entityset

Crée un entity set dans le cache de 4D Server basé sur la collection d'entités définies dans la requête REST

### Description

Lorsque vous créez une collection d'entités en REST, vous pouvez également créer un entity set qui sera enregistré dans le cache de 4D Server. L'entity set aura un numéro de référence que vous pouvez passer à `$entityset/\{entitySetID\}` pour y accéder. Par défaut, il est valable deux heures; vous pouvez toutefois modifier cette durée en passant une valeur (en secondes) à $timeout.

Si vous avez utilisé `$savedfilter` et/ou `$savedorderby` (avec `$filter` et/ou `$orderby`) lors de la création de votre entity set, vous pouvez le recréer avec le même ID de référence même s'il a été supprimé du cache de 4D Server.

### Exemple

Pour créer un entity set, qui sera enregistré dans le cache de 4D Server pendant deux heures, ajoutez `$method=entityset` à la fin de votre requête REST :

`GET  /rest/People/?$filter="ID>320"&$method=entityset`

Vous pouvez créer un entity set qui sera stocké dans le cache de 4D Server pendant seulement dix minutes en passant un nouveau timeout à `$timeout` :

`GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

Vous pouvez également enregistrer le filtre et le tri, en passant true à `$savedfilter` et `$savedorderby`.

> `$skip` et `$top/$limit` ne sont pas pris en compte lors de l'enregistrement d'un entity set.

Après avoir créé un entity set, le premier élément, `__ENTITYSET` est ajouté à l'objet retourné et indique l'URI à utiliser pour accéder à l'entity set :

```json
__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`
```

## $method=release

Affiche un entity set existant stocké dans le cache de 4D Server.

### Description

Vous pouvez libérer un entity set, que vous avez créé en utilisant [`$method=entityset`](#methodentityset), du cache du serveur 4D.

### Exemple

Affiche un ensemble d'entités existant :

`GET  /rest/Employee/$entityset/4C51204DD8184B65AC7D79F09A077F24?$method=release`

#### Réponse :

Si la requête a abouti, la réponse suivante est retournée :

```json
{
    "ok": true
}
If the entity set wasn't found, an error is returned:

{
    "__ERROR": [
        {
            "message": "Error code: 1802\nEntitySet  \"4C51204DD8184B65AC7D79F09A077F24\" cannot be found\ncomponent:  'dbmg'\ntask 22, name: 'HTTP connection handler'\n",
            "componentSignature": "dbmg",
            "errCode": 1802
        }
    ]
}
```

## $method=subentityset

Crée un ensemble d'entités dans le cache de 4D Server basé sur la collection d'entités relatives définies dans la requête REST

### Description

`$method=subentityset` vous permet de trier les données retournées par l'attribut relationnel défini dans la requête REST.

Pour trier les données, utilisez la propriété `$subOrderby`. Pour chaque attribut, définissez l'ordre sur ASC (ou asc) pour l'ordre croissant et sur DESC (desc) pour l'ordre décroissant. Par défaut, les données sont triées par ordre croissant.

Si vous souhaitez spécifier plusieurs attributs, vous pouvez les délimiter avec une virgule, µ, `$subOrderby="lastName desc, firstName asc"`.

### Exemple

Si vous souhaitez récupérer uniquement les entités relatives pour une entité spécifique, vous pouvez lancer la requête REST suivante, dans laquelle "staff" est l'attribut relationnel dans la dataclass "Company" liée à la dataclass "Employee":

` GET  /rest/Company(1)/staff?$expand=staff&$method=subentityset&$subOrderby=lastName ASC`

#### Réponse :

```json
{

    "__ENTITYSET": "/rest/Employee/$entityset/FF625844008E430B9862E5FD41C741AB",
    "__entityModel": "Employee",
    "__COUNT": 2,
    "__SENT": 2,
    "__FIRST": 0,
    "__ENTITIES": [
        {
            "__KEY": "4",
            "__STAMP": 1,
            "ID": 4,
            "firstName": "Linda",
            "lastName": "Jones",
            "birthday": "1970-10-05T14:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        },
        {
            "__KEY": "1",
            "__STAMP": 3,
            "ID": 1,
            "firstName": "John",
            "lastName": "Smith",
            "birthday": "1985-11-01T15:23:00Z",
            "employer": {
                "__deferred": {
                    "uri": "/rest/Company(1)",
                    "__KEY": "1"
                }
            }
        }
    ]

}
```

## $method=update

Met à jour et/ou crée une ou plusieurs entités

### Description

`$method=update` vous permet de mettre à jour et/ou de créer une ou plusieurs entités dans un seul **POST**. Si vous mettez à jour et/ou créez une entité, cela s'effectue dans un objet avec, pour chaque propriété, un attribut et sa valeur, par exemple `{lastName: "Smith"}`. Si vous mettez à jour et/ou créez plusieurs entités, vous devez créer une collection d'objets.

Dans tous les cas, vous devez définir les données **POST** dans le **body** de la requête.

Pour mettre à jour une entité, vous devez passer les paramètres `__KEY` et `__STAMP` dans l'objet avec tous les attributs modifiés. Si ces deux paramètres sont manquants, une entité sera ajoutée avec les valeurs de l'objet que vous envoyez dans le corps de votre **POST**.

Les triggers sont exécutés immédiatement lors de l'enregistrement de l'entité sur le serveur. La réponse contient toutes les données telles qu'elles existent sur le serveur.

Vous pouvez également placer ces requêtes de création ou de mise à jour d'entités dans une transaction en appelant `$atomic/$atOnce`. Si des erreurs se produisent lors de la validation des données, aucune des entités n'est sauvegardée. Vous pouvez également utiliser `$method=validate` pour valider les entités avant de les créer ou de les mettre à jour.

Si un problème survient lors de l'ajout ou de la modification d'une entité, une erreur vous sera retournée avec ces informations.

:::note

- **Les dates** doivent être exprimées au format JS : YYYY-MM-DDTHH:MM:SSZ (par exemple, "2010-10-05T23:00:00Z"). Si vous avez sélectionné la propriété Date uniquement pour votre attribut Date, le fuseau horaire et l'heure (heure, minutes et secondes) seront supprimés. Dans ce cas, vous pouvez également envoyer la date au format qui vous est retourné dd!mm!yyyy (par exemple, 05!10!2013).
- Les valeurs des **booléens** sont vrai ou faux.
- Les fichiers téléchargés à l'aide de `$upload` peuvent être appliqués à un attribut de type Image ou BLOB en transmettant l'objet renvoyé dans le format suivant `{ "ID" : "D507BC03E613487E9B4C2F6A0512FE50"}`
  :::

### Exemple

Pour mettre à jour une entité spécifique, utilisez l'URL suivante :

`POST  /rest/Person/?$method=update`

**POST data:**

```json
{
    __KEY: "340",
    __STAMP: 2,
    firstName: "Pete",
    lastName: "Miller"
}
```

Les attributs firstName et lastName de l'entité indiquée ci-dessus seront modifiés en laissant inchangés tous les autres attributs (sauf ceux calculés sur la base de ces attributs).

Si vous souhaitez créer une entité, vous pouvez envoyer, via POST, les attributs à l'aide de cette URL :

`POST  /rest/Person/?$method=update`

**POST data:**

```json
{
    firstName: "John",
    lastName: "Smith"
}
```

Vous pouvez également créer et mettre à jour plusieurs entités en même temps en utilisant la même URL ci-dessus en passant plusieurs objets d'un tableau au POST :

`POST  /rest/Person/?$method=update`

**POST data:**

```json
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

**Réponse :**

Lorsque vous ajoutez ou modifiez une entité, elle vous est retournée avec les attributs qui ont été modifiés. Par exemple, si vous créez le nouvel employé ci-dessus, les informations suivantes seront renvoyées :

```json
{
    "__KEY": "622",
    "__STAMP": 1,
    "uri": "http://127.0.0.1:8081/rest/Employee(622)",
    "__TIMESTAMP": "!!2020-04-03!!",
    "ID": 622,
    "firstName": "John",
    "firstName": "Smith"
}
```

Si, par exemple, le stamp n'est pas correct, l'erreur suivante est retournée :

```json
{
    "__STATUS": {
        "status": 2,
        "statusText": "Stamp has changed",
        "success": false
    },
    "__KEY": "1",
    "__STAMP": 12,
    "__TIMESTAMP": "!!2020-03-31!!",
    "ID": 1,
    "firstname": "Denise",
    "lastname": "O'Peters",
    "isWoman": true,
    "numberOfKids": 1,
    "addressID": 1,
    "gender": true,
    "imageAtt": {
        "__deferred": {
            "uri": "/rest/Persons(1)/imageAtt?$imageformat=best&$version=12&$expand=imageAtt",
            "image": true
        }
    },
    "extra": {
        "num": 1,
        "alpha": "I am 1"
    },
    "address": {
        "__deferred": {
            "uri": "/rest/Address(1)",
            "__KEY": "1"
        }
    },
    "__ERROR": [
        {
            "message": "Given stamp does not match current one for record# 0 of table Persons",
            "componentSignature": "dbmg",
            "errCode": 1263
        },
        {
            "message": "Cannot save record 0 in table Persons of database remote_dataStore",
            "componentSignature": "dbmg",
            "errCode": 1046
        },
        {
            "message": "The entity# 1 in the \"Persons\" dataclass cannot be saved",
            "componentSignature": "dbmg",
            "errCode": 1517
        }
    ]
}{}

```
