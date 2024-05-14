---
id: orderby
title: $orderby
---

指定した属性と並べ替え順に基づいて、返されたデータを並べ替えます (_例_: `$orderby="lastName desc, salary asc"`)

## 説明

`$orderby` は RESTリクエストによって返されるエンティティを並べ替えます。 並べ替えの基準とする各属性について、並べ替え順を指定します。`ASC` ( `asc`) が昇順、`DESC` (`desc`) が降順です。 デフォルトでは、データは昇順に並べ替えられます。 属性を複数指定するには、カンマ区切りにします。_例_: `$orderby="lastName desc, firstName asc"`。

## 例題

取得と同時にエンティティを並べ替えます:

`GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"`

下の例では、lastName属性を基準にしてエンティティセットを昇順に並べ替えます:

`GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"`

**結果**:

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
// エンティティが続きます
    ]
}
```
