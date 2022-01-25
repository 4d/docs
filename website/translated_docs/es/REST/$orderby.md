---
id: orderby
title: '$orderby'
---


Sorts the data returned by the attribute and sorting order defined (*e.g.*, `$orderby="lastName desc, salary asc"`)

## Descripción

`$orderby` ordena las entidades devueltas por la petición REST. For each attribute, you specify the order as `ASC` (or `asc`) for ascending order and `DESC` (`desc`) for descending order. Por defecto, los datos se clasifican en orden ascendente. By default, the data is sorted in ascending order.


## Ejemplo

In this example, we retrieve entities and sort them at the same time:

 `GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"`

The example below sorts the entity set by lastName attribute in ascending order:

 `GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"`

**Resultado**:

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

