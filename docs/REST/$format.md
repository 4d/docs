---
id: format
title: $format 
---


 
Defines a specific format to return data of a dataclass, *(e.g.*, `$format=looker`)


## Description   

This parameter allows you to define the format to use to return data of your dataclass. 

The following formats are supported:

|Format|Description|
|---|-----|
|`json`|Standard 4D REST server format (used by default)| 
|`looker`|Allows you to connect the 4D datastore to [Looker Studio](https://lookerstudio.google.com/). The returned JSON object is compliant with the looker connector. | 


## Example

`GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker`

The REST server returns a JSON object that contains the schema and data for the request:


```json
{"__COUNT":1000,
"__FIRST":10,
"schema": [
  {
    'name': 'Income',
    'dataType': 'NUMBER',
    'semantics': {
      'conceptType': 'METRIC',
      'semanticGroup': 'CURRENCY',
      'semanticType': 'CURRENCY_USD'
    }
  }, {
    'name': 'Filing Year',
    'dataType': 'STRING',
    'semantics': {
      'conceptType': 'METRIC',
      'semanticGroup': 'DATETIME',
      'semanticType': 'YEAR_MONTH_DAY'
    }
  }
],"rows": [
    {
      "values": [ "120453.65","20170523"]
    },
    {
      "values": ["362705286.92","20170303" ]
    },
    {
      "values": [ "870.12", "20170421"]
    }
  ],
  "filtersApplied": false
}
```
