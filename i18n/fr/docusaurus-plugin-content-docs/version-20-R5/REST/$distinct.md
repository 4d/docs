---
id: distinct
title: $distinct
---

Returns the distinct values for a specific attribute in a collection (_e.g._, `Company/name?$filter="name=a*"&$distinct=true`)

## Description

`$distinct` allows you to return a collection containing the distinct values for a query on a specific attribute. Un seul attribut dans la dataclass peut être spécifié. Généralement, le type Chaîne est idéal; cependant, vous pouvez également l'utiliser sur n'importe quel type d'attribut pouvant contenir plusieurs valeurs.

You can also use `$skip` and `$top/$limit` as well, if you'd like to navigate the selection before it's placed in an array.

## Exemple

Dans l'exemple ci-dessous, nous souhaitons récupérer les différentes valeurs d'un nom de société commençant par la lettre "a" :

`GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

```
[
    "Adobe",
    "Apple"
]
```
