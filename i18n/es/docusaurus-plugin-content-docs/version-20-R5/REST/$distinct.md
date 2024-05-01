---
id: distinct
title: $distinct
---

Returns the distinct values for a specific attribute in a collection (_e.g._, `Company/name?$filter="name=a*"&$distinct=true`)

## Descripción

`$distinct` allows you to return a collection containing the distinct values for a query on a specific attribute. Sólo se puede especificar un atributo en la dataclass. Generalmente, el tipo String es el mejor; sin embargo, también puede utilizarlo en cualquier tipo de atributo que pueda contener múltiples valores.

You can also use `$skip` and `$top/$limit` as well, if you'd like to navigate the selection before it's placed in an array.

## Ejemplo

En nuestro ejemplo siguiente, queremos recuperar los diferentes valores de un nombre de empresa que empiece por la letra "a":

`GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

```
[
    "Adobe",
    "Apple"
]
```
