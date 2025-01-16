---
id: format
title: $format
---

データクラスのデータを返すための特定のフォーマットを指定します (_例:_ `$format=looker`)。

## 説明

このパラメーターを使って、データクラスがデータを返す形式を定義できます。

以下のフォーマットがサポートされています:

| 形式       | 説明                                                              |
| -------- | --------------------------------------------------------------- |
| `json`   | 標準の 4D REST サーバーフォーマット (デフォルト)               |
| `looker` | [Looker Studio](https://lookerstudio.google.com/) に準拠した JSON形式。 |

## 例題

`GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker`

RESTサーバーは、リクエストのスキーマとデータを含む JSONオブジェクトを返します:

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
