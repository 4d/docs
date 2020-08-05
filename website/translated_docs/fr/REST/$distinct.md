---
id: distinct
title: '$distinct'
---


Returns the distinct values for a specific attribute in a collection (*e.g.*, `Company/name?$filter="name=a*"&$distinct=true`)


## Description

`$distinct` vous permet de retourner une collection contenant les différentes valeurs d'une requête sur un attribut spécifique. Un seul attribut dans la dataclass peut être spécifié. Généralement, le type Chaîne est idéal; cependant, vous pouvez également l'utiliser sur n'importe quel type d'attribut pouvant contenir plusieurs valeurs.

Vous pouvez également utiliser `$skip` et `$top/$limit` si vous souhaitez parcourir la sélection avant qu'elle ne soit placée dans un tableau.

## Exemple
Dans l'exemple ci-dessous, nous souhaitons récupérer les différentes valeurs d'un nom de société commençant par la lettre "a" :

 `GET  /rest/Company/name?$filter="name=a*"&$distinct=true`

**Response**:

````
[
    "Adobe",
    "Apple"
]
````

