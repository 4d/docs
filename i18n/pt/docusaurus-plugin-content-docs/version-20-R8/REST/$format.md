---
id: format
title: $format
---

Defines a specific format to return data of a dataclass, (*e.g.*, `$format=looker`)

## Descrição

This parameter allows you to define the format to use to return data of your dataclass.

São suportados os seguintes formatos:

| Formato  | Descrição                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------ |
| `json`   | Formato padrão do servidor 4D REST (usado por padrão)                         |
| `looker` | Formato JSON compatível com o [Looker Studio](https://lookerstudio.google.com/). |

## Exemplo

`GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker`

The REST server returns a JSON object that contains the schema and data for the request:

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
