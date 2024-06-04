---
id: orderby
title: $orderby
---

Trie les données retournées par l'attribut et l'ordre de tri définis (par exemple,`$orderby="lastName desc, salaire asc"`)

## Description

`$orderby` ordonne les entités retournées par la requête REST. Pour chaque attribut, définissez l'ordre sur `ASC` (ou `asc`) pour l'ordre croissant et sur `DESC` (`desc`) pour l'ordre décroissant. Par défaut, les données sont triées par ordre croissant. Si vous souhaitez spécifier plusieurs attributs, vous pouvez les délimiter avec une virgule, _par exemple_, `$orderby="lastName desc, firstName asc"`.

## Exemple

Dans cet exemple, nous récupérons les entités et les trions en même temps :

`GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"`

L'exemple ci-dessous trie l'entité définie par l'attribut lastName dans l'ordre croissant :

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"`

**Résultat** :

```
{
    __entityModel: "Employee",
    __COUNT: 10,
    __SENT: 10,
    __FIRST: 0,
    __ENTITIES: [
        {
            __KEY: "1",
            __STAMP: 1,
            firstName: "John",
            lastName: "Smith",
            salary: 90000
        },
        {
            __KEY: "2",
            __STAMP: 2,
            firstName: "Susan",
            lastName: "O'Leary",
            salary: 80000
        },
// plus d'entités
    ]
}
```
