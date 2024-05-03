---
id: distinct
title: $distinct
---

Returns the distinct values for a specific attribute in a collection (_e.g._, `Company/name?$filter="name=a*"&$distinct=true`)

## 説明

`$distinct` allows you to return a collection containing the distinct values for a query on a specific attribute. その際、データクラスの属性を一つのみを指定することができます。 通常は文字列型の属性を対象に使用しますが、複数の値を持つ属性であれば、その型に制限はありません。

You can also use `$skip` and `$top/$limit` as well, if you'd like to navigate the selection before it's placed in an array.

## 例題

"a" で始まる会社名について、重複しない値のコレクションを取得するには、次のように書きます:

`GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

```
[
    "Adobe",
    "Apple"
]
```
