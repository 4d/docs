---
id: filter
title: '$filter'
---


 
Allows to query the data in a dataclass or method *(e.g.*, `$filter="firstName!='' AND salary>30000"`)


## Description

Ce paramètre vous permet de définir le filtre de votre dataclass ou de votre méthode.

### Utiliser un filtre simple

Un filtre est composé des éléments suivants :

**{attribut} {comparateur} {valeur}**

For example: `$filter="firstName=john"` where `firstName` is the **attribute**, `=` is the **comparator** and `john` is the **value**.

### Utiliser un filtre complexe

Un filtre plus complexe est composé des éléments suivants, qui joint deux requêtes :

**{attribut} {comparateur} {valeur} {AND/OR/EXCEPT} {attribut} {comparateur} {valeur}**


Par exemple : `$filter="firstName=john AND salary>20000"` où `firstName` et `salary` sont les attributs de la classe de datastore "Employee".

### Utiliser la propriété params

Vous pouvez également utiliser la propriété params de 4D.

**{attribut} {comparateur} {placeholder} {AND/OR/EXCEPT} {attribut} {comparateur} {placeholder}&$params='["{value1}","{value2}"]"'**

For example: `$filter="firstName=:1 AND salary>:2"&$params='["john",20000]'` where firstName and salary are attributes in the Employee datastore class.

Pour plus d'informations sur la façon de rechercher des données dans 4D, reportez-vous à la documentation de [dataClass.query()](https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html).
> Lorsque vous insérez des guillemets (') ou des guillemets doubles ("), vous devez les échapper en utilisant leur code de caractère :
> 
> <li>Guillemets ('): \u0027 <li>Guillemets doubles ("): \u0022
> 
> For example, you can write the following when passing a value with a quote when using the *params* property:  
> `http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params='["O\u0027Reilly"]'`
> 
> Si vous passez la valeur directement, vous pouvez écrire ce qui suit :   `http://127.0.0.1:8081/rest/Person/?$filter="lastName=O'Reilly"`

## Attribut

If the attribute is in the same dataclass, you can just pass it directly (*e.g.*, `firstName`). However, if you want to query another dataclass, you must include the relation attribute name plus the attribute name, i.e. the path (*e.g.*, employer.name). Le nom d'attribut est sensible à la casse (`firstName` n'est pas égal à `FirstName`).

Vous pouvez également rechercher des attributs de type Objet en utilisant la notation par points. Par exemple, si vous avez un attribut dont le nom est "objAttribute" avec la structure suivante :

```
{
    prop1: "this is my first property",
    prop2: 9181,
    prop3: ["abc","def","ghi"]
}
```

Vous pouvez rechercher dans l'objet en écrivant ce qui suit :

`GET  /rest/Person/?filter="objAttribute.prop2 == 9181"`

## Comparateur

Le comparateur doit être l'une des valeurs suivantes :

| Comparateur | Description         |
| ----------- | ------------------- |
| =           | est égal à          |
| !=          | différent de        |
| >           | supérieur à         |
| >=          | supérieur ou égal à |
| <           | inférieur à         |
| <=          | inférieur ou égal à |
| begin       | commence avec       |

## Exemples

Dans l'exemple suivant, nous recherchons tous les employés dont le nom de famille commence par un "j" :

```
 GET  /rest/Employee?$filter="lastName begin j"
```

Dans cet exemple, nous recherchons dans la classe de datastore "Employee" tous les employés d'une entreprise autre que Acmedont et dont le salaire est supérieur à 20 000 :

```
 GET  /rest/Employee?$filter="salary>20000 AND  
 employer.name!=acme"&$orderby="lastName,firstName"
```

Dans cet exemple, nous recherchons dans la classe de datastore "Person" toutes les personnes dont la propriété numérique, de l'attribut anotherobj de type Objet, est supérieure à 50 :

```
 GET  /rest/Person/?filter="anotherobj.mynum > 50"
```
