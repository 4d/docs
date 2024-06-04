---
id: format
title: $format
---

Définit un format spécifique pour retourner les données d'une dataclass, (_par exemple_, `$format=looker`)

## Description

Ce paramètre vous permet de définir le format à utiliser pour retourner les données de votre dataclass.

Les formats suivants sont pris en charge:

| Format   | Description                                                                                |
| -------- | ------------------------------------------------------------------------------------------ |
| `json`   | Format standard du serveur REST 4D (utilisé par défaut)                 |
| `looker` | Format JSON conforme au [Looker Studio](https://lookerstudio.google.com/). |

## Exemple

`GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker`

Le serveur REST renvoie un objet JSON qui contient le schéma et les données pour la requête :

```json
{"__COUNT":1000,
"__FIRST":10,
"schema": [
  {
    "name": "ID",
    "dataType": "NUMBER",
    "semantics": {
      "conceptType": "METRIC",
      "semanticGroup": "NUMERIC",
      "semanticType": "NUMBER"
    }
  }, {
    "name": "name",
    "dataType": "STRING",
    "semantics": {
      "conceptType": "DIMENSION",
      "semanticGroup": "TEXT",
      "semanticType": "TEXT"
    }, {
    "name": "address",
    "dataType": "STRING",
    "semantics": {
      "conceptType": "DIMENSION",
      "semanticGroup": "TEXT",
      "semanticType": "TEXT"
    }
  }
],"rows": [
    {
      "values": [ 
      	1,
      	"Alpha Astral Animations",
        "Ullman Drive (82)"]
    },
    {
      "values": [ 
      	2,
      	"Alpha Bart Computing",
        "Lehigh Square (110)"]
    },
    {
      "values": [ 
      	3,
      	"Alpha Business Clock-making",
        "Larchmont Terrace (90)"]
    }
  ],
  "filtersApplied": false
}
```
