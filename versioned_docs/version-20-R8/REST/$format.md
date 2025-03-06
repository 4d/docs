---
id: format
title: $format 
---


 
Defines a specific format to return data of a dataclass, (*e.g.*, `$format=looker`)


## Description   

This parameter allows you to define the format to use to return data of your dataclass. 

The following formats are supported:

|Format|Description|
|---|-----|
|`json`|Standard 4D REST server format (used by default)| 
|`looker`|JSON format compliant with the [Looker Studio](https://lookerstudio.google.com/).  | 


## Example

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
