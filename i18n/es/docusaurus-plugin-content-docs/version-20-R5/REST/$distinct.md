---
id: distinct
title: $distinct
---

Devuelve los diferentes valores de un atributo específico en una colección (_por ejemplo_, `Company/name?$filter="name=a*"&$distinct=true`)

## Descripción

`$distinct` permite devolver una colección que contiene los diferente valores de una petición sobre un atributo específico. Sólo se puede especificar un atributo en la dataclass. Generalmente, el tipo String es el mejor; sin embargo, también puede utilizarlo en cualquier tipo de atributo que pueda contener múltiples valores.

También puede utilizar `$skip` y `$top/$limit`, si desea navegar por la selección antes de colocarla en un array.

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
