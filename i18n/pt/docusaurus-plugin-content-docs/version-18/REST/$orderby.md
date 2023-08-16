---
id: orderby
title: "$orderby"
---


Ordena os dados devolvidos pelo atributo e pela ordem de ordenação definidos (*e.g.*, `$orderby="lastName desc, salary asc"`)

## Descrição

`$orderby` ordena as entidades devolvidas pelo pedido REST. For each attribute, you specify the order as `ASC` (or `asc`) for ascending order and `DESC` (`desc`) for descending order. Por defeito, os dados são ordenados por ordem ascendente. By default, the data is sorted in ascending order.


## Exemplo

Neste exemplo, recuperamos entidades e ordenamo-las em simultâneo:

 `GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"`

The example below sorts the entity set by lastName attribute in ascending order:

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"`

**Resultadoi**:

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
// more entities
    ]
}
```

