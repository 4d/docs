---
id: orderby
title: '$orderby'
---


Sorts the data returned by the attribute and sorting order defined (*e.g.*, `$orderby="lastName desc, salary asc"`)

## Description

`$orderby` ordonne les entités retournées par la requête REST. Pour chaque attribut, définissez l'ordre sur `ASC` (ou `asc`) pour l'ordre croissant et sur `DESC` (`desc`) pour l'ordre décroissant. Par défaut, les données sont triées par ordre croissant. If you want to specify multiple attributes, you can delimit them with a comma, *e.g.*, `$orderby="lastName desc, firstName asc"`.


## Exemple

Dans cet exemple, nous récupérons les entités et les trions en même temps :

 `GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"`

L'exemple ci-dessous trie l'entité définie par l'attribut lastName dans l'ordre croissant :

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"`

**Result**:

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

