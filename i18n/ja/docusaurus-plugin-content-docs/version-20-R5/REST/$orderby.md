---
id: orderby
title: $orderby
---

Sorts the data returned by the attribute and sorting order defined (_e.g._, `$orderby="lastName desc, salary asc"`)

## 説明

`$orderby` orders the entities returned by the REST request. For each attribute, you specify the order as `ASC` (or `asc`) for ascending order and `DESC` (`desc`) for descending order. デフォルトでは、データは昇順に並べ替えられます。 If you want to specify multiple attributes, you can delimit them with a comma, _e.g._, `$orderby="lastName desc, firstName asc"`.

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
