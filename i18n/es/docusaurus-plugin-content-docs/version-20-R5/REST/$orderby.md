---
id: orderby
title: $orderby
---

Sorts the data returned by the attribute and sorting order defined (_e.g._, `$orderby="lastName desc, salary asc"`)

## Descripción

`$orderby` orders the entities returned by the REST request. For each attribute, you specify the order as `ASC` (or `asc`) for ascending order and `DESC` (`desc`) for descending order. Por defecto, los datos se clasifican en orden ascendente. If you want to specify multiple attributes, you can delimit them with a comma, _e.g._, `$orderby="lastName desc, firstName asc"`.

## Ejemplo

En este ejemplo, recuperamos las entidades y las ordenamos al mismo tiempo:

`GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"`

El ejemplo siguiente ordena el conjunto de entidades por el atributo lastName en orden ascendente:

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
