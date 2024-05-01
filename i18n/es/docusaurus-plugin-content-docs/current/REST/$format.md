---
id: format
title: $format
---

Define un formato específico para devolver datos de una clase de datos, (_e.g._, `$format=looker`)

## Descripción

Este parámetro permite definir el formato que se utilizará para devolver los datos de la clase de datos.

Se soportan los siguientes formatos:

| Formato  | Descripción                                                                                    |
| -------- | ---------------------------------------------------------------------------------------------- |
| `json`   | Formato estándar del servidor 4D REST (utilizado por defecto)               |
| `looker` | Formato JSON compatible con [Looker Studio](https://lookerstudio.google.com/). |

## Ejemplo

`GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker`

El servidor REST devuelve un objeto JSON que contiene el esquema y los datos de la petición:

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
