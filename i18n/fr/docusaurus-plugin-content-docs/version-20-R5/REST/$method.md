---
id: method
title: $method
---

Ce paramètre vous permet de définir l'opération à exécuter avec l'entité ou la sélection d'entité (entity selection) retournée.

## Syntaxe

| Syntaxe                                         | Exemple                                                                                 | Description                                                                                                          |
| ----------------------------------------------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| [**$method=delete**](#methoddelete)             | `POST /Employee?$filter="ID=11"& $method=delete`                                        | Supprime l'entité, collection d'entités ou sélection d'entité courante                                               |
| [**$method=entityset**](#methodentityset)       | `GET /People/?$filter="ID>320"& $method=entityset& $timeout=600`                        | Crée un ensemble d'entités dans le cache de 4D Server basé sur la collection d'entités définies dans la requête REST |
| [**$method=release**](#methodrelease)           | `GET /Employee/$entityset/<entitySetID>?$method=release`                                | Affiche un ensemble d'entités existant stocké dans le cache de 4D Server                                             |
| [**$method=subentityset**](#methodsubentityset) | `GET /Company(1)/staff?$expand=staff& $method=subentityset&   $subOrderby=lastName ASC` | Crée un ensemble d'entités basé sur la collection d'entités relatives définies dans la requête REST                  |
| [**$method=update**](#methodupdate)             | `POST /Person/?$method=update`                                                          | Met à jour et/ou crée une ou plusieurs entités                                                                       |

## $method=delete

Supprime l'entité, collection d'entités ou sélection d'entité courante (créée via REST)

### Description

With `$method=delete`, you can delete an entity or an entire entity collection. You can define the collection of entities by using, for example, [`$filter`]($filter.md) or specifying one directly using [`{dataClass}({key})`](%7BdataClass%7D.html#dataclasskey) _(e.g._, /Employee(22)).

You can also delete the entities in an entity set, by calling [`$entityset/{entitySetID}`]($entityset.md#entitysetentitysetid).

### Exemple

Vous pouvez ensuite saisir la requête REST suivante pour supprimer l'entité dont la clé porte le numéro 22 :

`POST  /rest/Employee(22)/?$method=delete`

Vous pouvez également faire une requête en utilisant $ filter :

`POST  /rest/Employee?$filter="ID=11"&$method=delete`

Vous pouvez également supprimer un ensemble d'entités utilisant $entityset/{entitySetID} :

`POST  /rest/Employee/$entityset/73F46BE3A0734EAA9A33CA8B14433570?$method=delete`

Réponse :

```json
{
    "ok": true
}
```

## $method=entityset

Crée un ensemble d'entités dans le cache de 4D Server basé sur la collection d'entités définies dans la requête REST

### Description

Lorsque vous créez une collection d'entités dans REST, vous pouvez également créer un ensemble d'entités qui sera enregistré dans le cache de 4D Server. The entity set will have a reference number that you can pass to `$entityset/{entitySetID}` to access it. Par défaut, il est valable deux heures; vous pouvez toutefois modifier cette durée en passant une valeur (en secondes) à $timeout.

If you have used `$savedfilter` and/or `$savedorderby` (in conjunction with `$filter` and/or `$orderby`) when you created your entity set, you can recreate it with the same reference ID even if it has been removed from 4D Server's cache.

### Exemple

To create an entity set, which will be saved in 4D Server's cache for two hours, add `$method=entityset` at the end of your REST request:

`GET  /rest/People/?$filter="ID>320"&$method=entityset`

You can create an entity set that will be stored in 4D Server's cache for only ten minutes by passing a new timeout to `$timeout`:

`GET  /rest/People/?$filter="ID>320"&$method=entityset&$timeout=600`

You can also save the filter and order by, by passing true to `$savedfilter` and `$savedorderby`.

> `$skip` and `$top/$limit` are not taken into consideration when saving an entity set.

After you create an entity set, the first element, `__ENTITYSET`, is added to the object returned and indicates the URI to use to access the entity set:

```json
__ENTITYSET: "http://127.0.0.1:8081/rest/Employee/$entityset/9718A30BF61343C796345F3BE5B01CE7"`
```

## $method=release

Affiche un ensemble d'entités existant stocké dans le cache de 4D Server.

### Description

You can release an entity set, which you created using [`$method=entityset`](#methodentityset), from 4D Server's cache.

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

`$method=subentityset` allows you to sort the data returned by the relation attribute defined in the REST request.

To sort the data, you use the `$subOrderby` property. Pour chaque attribut, définissez l'ordre sur ASC (ou asc) pour l'ordre croissant et sur DESC (desc) pour l'ordre décroissant. Par défaut, les données sont triées par ordre croissant.

If you want to specify multiple attributes, you can delimit them with a comma, µ, `$subOrderby="lastName desc, firstName asc"`.

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

`$method=update` allows you to update and/or create one or more entities in a single **POST**. If you update and/or create one entity, it is done in an object with each property an attribute with its value, _e.g._, `{ lastName: "Smith" }`. Si vous mettez à jour et/ou créez plusieurs entités, vous devez créer une collection d'objets.

In any cases, you must set the **POST** data in the **body** of the request.

To update an entity, you must pass the `__KEY` and `__STAMP` parameters in the object along with any modified attributes. If both of these parameters are missing, an entity will be added with the values in the object you send in the body of your **POST**.

Les triggers sont exécutés immédiatement lors de l'enregistrement de l'entité sur le serveur. La réponse contient toutes les données telles qu'elles existent sur le serveur.

You can also put these requests to create or update entities in a transaction by calling `$atomic/$atOnce`. Si des erreurs se produisent lors de la validation des données, aucune des entités n'est sauvegardée. You can also use `$method=validate` to validate the entities before creating or updating them.

Si un problème survient lors de l'ajout ou de la modification d'une entité, une erreur vous sera retournée avec ces informations.

:::note

- **Dates** must be expressed in JS format: YYYY-MM-DDTHH:MM:SSZ (e.g., "2010-10-05T23:00:00Z"). Si vous avez sélectionné la propriété Date uniquement pour votre attribut Date, le fuseau horaire et l'heure (heure, minutes et secondes) seront supprimés. Dans ce cas, vous pouvez également envoyer la date au format qui vous est retourné dd!mm!yyyy (par exemple, 05!10!2013).
- **Booleans** are either true or false.
- Uploaded files using `$upload` can be applied to an attribute of type Image or BLOB by passing the object returned in the following format `{ "ID": "D507BC03E613487E9B4C2F6A0512FE50"}`
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

**Response:**

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
