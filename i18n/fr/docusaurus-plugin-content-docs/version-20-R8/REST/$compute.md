---
id: compute
title: $compute
---

Calcule des attributs spécifiques (par exemple, `Employee/salary/?$compute=sum)` ou dans le cas d'un attribut Objet (par exemple, Employee/objectAtt.property1/?$compute=sum)

## Description

Ce paramètre vous permet de réaliser des calculs avec vos données.

Si vous souhaitez effectuer un calcul avec un attribut, saisissez ce qui suit :

`GET  /rest/Employee/salary/?$compute=$all`

Si vous souhaitez passer un attribut Objet, vous devez passer l'une de ses propriétés. Par exemple :

`GET  /rest/Employee/objectAtt.property1/?$compute=$all`

Vous pouvez utiliser l'un des mots clés suivants :

| Mot-clé | Description                                                                                                                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| $all    | Un objet JSON qui définit toutes les fonctions de l'attribut (moyenne, nombre, min, max et somme pour les attributs de type Numérique et count, min et max pour les attributs de type Chaîne |
| average | Obtenir la moyenne d'un attribut numérique                                                                                                                                                                      |
| count   | Obtenir le nombre total dans la collection ou la dataclass (dans les deux cas, vous devez spécifier un attribut)                                                                             |
| min     | Obtenir la valeur minimale d'un attribut numérique ou la plus petite valeur d'un attribut de type Chaîne                                                                                                        |
| max     | Obtenir la valeur maximale d'un attribut numérique ou la plus grande valeur d'un attribut de type Chaîne                                                                                                        |
| sum     | Obtenir la somme d'un attribut numérique                                                                                                                                                                        |

## Exemple

Si vous souhaitez obtenir tous les calculs pour un attribut de type Numérique, vous pouvez écrire :

`GET  /rest/Employee/salary/?$compute=$all`

**Réponse** :

```
{
    "salary": {
        "count": 4,
        "sum": 335000,
        "average": 83750,
        "min": 70000,
        "max": 99000
    }
}
```

Si vous souhaitez obtenir tous les calculs pour un attribut de type Chaîne, vous pouvez écrire :

`GET  /rest/Employee/firstName/?$compute=$all`

**Réponse** :

```
{
    "salary": {
        "count": 4,
        "min": Anne,
        "max": Victor
    }
}
```

Si vous souhaitez obtenir un calcul avec un attribut, vous pouvez écrire ce qui suit :

`GET  /rest/Employee/salary/?$compute=sum`

**Réponse** :

`235000`

Si vous souhaitez effectuer un calcul avec un attribut Objet, vous pouvez saisir ce qui suit :

`GET  /rest/Employee/objectAttribute.property1/?$compute=sum`

Réponse :

`45`
