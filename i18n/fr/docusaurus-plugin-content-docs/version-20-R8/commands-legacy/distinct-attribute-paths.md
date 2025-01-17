---
id: distinct-attribute-paths
title: DISTINCT ATTRIBUTE PATHS
slug: /commands/distinct-attribute-paths
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Syntax-->**DISTINCT ATTRIBUTE PATHS** ( *champObjet* ; *tabChemins* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| champObjet | Field | &#8594;  | Champ objet indexé |
| tabChemins | Text array | &#8592; | Tableau devant recevoir les chemins d'attributs du champ |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISTINCT ATTRIBUTE PATHS.Summary-->La commande **DISTINCT ATTRIBUTE PATHS** retourne la liste des chemins d'attributs différents présents dans le champ objet indexé passé dans *champObjet* et ce, pour la sélection courante de la table à laquelle le champ appartient.<!-- END REF-->

Vous devez passer dans *champObjet* un champ de type Objet indexé ; sinon, une erreur est retournée. 

Après l'exécution de la commande, la taille du tableau *tabChemins* est égale au nombre de chemins différents trouvés dans la sélection. Les chemins des attributs imbriqués sont retournés avec la notation à points standard, par exemple "sociétés.adresse.numéro". Attention, gardez à l'esprit que les noms d'attributs d'objets tiennent compte de la casse des caractères. 

 Dans *tabChemins*, la liste des chemins d'attributs distincts est retournée dans l'ordre alphabétique (diacritique). 

La commande ne modifie pas la sélection courante ni l'enregistrement courant. 

**Notes :**

* Les enregistrements pour lesquels la valeur de *champObjet* est indéfinie ne sont pas pris en compte.
* Les chemins d'attributs créés pendant une transaction sont pris en compte par la commande. Attention, ces chemins sont conservés dans l'index du champ objet même si la transaction a été annulée.

#### Exemple 

Votre base de données comporte un champ objet \[Customer\]full\_Data avec 15 enregistrements. Le champ est indexé :

![](../assets/en/commands/pict2994114.en.png) 

Si vous exécutez ce code :

```4d
 ARRAY TEXT(aTPaths;0)
 ALL RECORDS([Customer])
 DISTINCT ATTRIBUTE PATHS([Customer]full_Data;aTPaths)
```

Le tableau *aTPaths* reçoit les éléments suivants :

| **Elément** | **Valeur**          |
| ----------- | ------------------- |
| 1           | "age"               |
| 2           | "Children"          |
| 3           | "Children\[\]"      |
| 4           | "Children\[\].age"  |
| 5           | "Children\[\].Name" |
| 6           | "Children.length"   |
| 7           | "client"            |
| 8           | "FirstName"         |
| 9           | "LastName"          |
| 10          | "Sex"               |
| 11          | "telephone"         |
| 12          | "telephone\[\]"     |
| 13          | "telephone.length"  |

**Note :** "length" est une *propriété virtuelle* qui est disponible automatiquement pour tous les attributs de type tableau. Elle fournit la taille du tableau, c'est-à-dire le nombre d'éléments, et peut être utilisée dans les requêtes. Pour plus d'informations, reportez-vous au paragraphe *Using the .length virtual property*. 

#### Voir aussi 

  
[DISTINCT ATTRIBUTE VALUES](distinct-attribute-values.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1395 |
| Thread safe | &check; |


