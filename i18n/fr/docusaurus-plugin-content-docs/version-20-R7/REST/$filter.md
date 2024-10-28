---
id: filter
title: $filter
---

Permet de rechercher les données d'une dataclass ou d'une méthode (par exemple, `$filter="firstName!='' AND salary>30000"`)

## Description

Ce paramètre vous permet de définir le filtre de votre dataclass ou de votre méthode.

### Utiliser un filtre simple

Un filtre est composé des éléments suivants :

**\{attribute\} {comparator} {value}**

Par exemple : `$filter="firstName=john"` où `firstName` est l'**attribut**, `=` est le **comparateur** et `john` est la **valeur**.

### Utiliser un filtre complexe

Un filtre plus complexe est composé des éléments suivants, qui joint deux requêtes:

**\{attribute\} {comparator} {value} {AND/OR/EXCEPT} \{attribute\} {comparator} {value}**

Par exemple : `$filter="firstName=john AND salary>20000"` où `firstName` et `salary` sont les attributs de la dataclass "Employee".

### Utiliser la propriété params

Vous pouvez également utiliser la propriété params de 4D.

**\{attribute\} {comparator} {placeholder} {AND/OR/EXCEPT} \{attribute\} {comparator} {placeholder}&$params='["{value1}","{value2}"]"'**

Par exemple : `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'"` où firstName et salary sont les attributs de la dataclass "Employee".

Pour plus d'informations sur la façon de rechercher des données dans 4D, reportez-vous à la [documentation de dataClass.query()](../API/DataClassClass.md#query).

> Lorsque vous insérez des guillemets (') ou des guillemets doubles ("), vous devez les échapper en utilisant leur code de caractère :
>
> <li>Quotes ('): \u0027</li>
> <li>Guillemets doubles ("): \u0022</li>
>
> Par exemple, vous pouvez écrire ce qui suit lors du passage d'une valeur avec un guillemet lors de l'utilisation de la propriété _params_ :\
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
>
> Si vous passez la valeur directement, vous pouvez écrire ce qui suit:
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Attribut

Si l'attribut se trouve dans la même dataclass, vous pouvez simplement le passer directement (par exemple, `firstName`). Cependant, si vous souhaitez lancer une requête dans une autre dataclass, vous devez inclure le nom de l'attribut relationnel et le nom d'attribut, c'est-à-dire le chemin d'accès (par exemple, employeur.nom). Le nom d'attribut est sensible à la casse (`firstName` n'est pas égal à `FirstName`).

Vous pouvez également rechercher des attributs de type Objet en utilisant la notation par points. Par exemple, si vous avez un attribut dont le nom est "objAttribute" avec la structure suivante :

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

Vous pouvez rechercher dans l'objet en écrivant ce qui suit :

` GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparateur

Le comparateur doit être l'une des valeurs suivantes :

| Comparateur                 | Description         |
| --------------------------- | ------------------- |
| =                           | est égal à          |
| !=                          | différent de        |
| >                           | supérieur à         |
| > =                         | supérieur ou égal à |
| <  | inférieur à         |
| <= | inférieur ou égal à |
| begin                       | commence avec       |

## Exemples

Dans l'exemple suivant, nous recherchons tous les employés dont le nom de famille commence par un "j" :

```
 GET  /rest/Employee?$filter="lastName begin j"
```

Dans cet exemple, nous recherchons dans la dataclass "Employee" tous les employés d'une entreprise autre que Acmedont et dont le salaire est supérieur à 20 000 :

```
 GET  /rest/Employee?$filter="salary>20000 AND  
 employer.name!=acme"&$orderby="lastName,firstName"
```

Dans cet exemple, nous recherchons dans la dataclass "Person" toutes les personnes dont la propriété numérique, de l'attribut anotherobj de type Objet, est supérieure à 50 :

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```
