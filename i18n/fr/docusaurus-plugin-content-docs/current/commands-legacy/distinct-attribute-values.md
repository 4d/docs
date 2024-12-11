---
id: distinct-attribute-values
title: DISTINCT ATTRIBUTE VALUES
slug: /commands/distinct-attribute-values
displayed_sidebar: docs
---

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Syntax-->**DISTINCT ATTRIBUTE VALUES** ( *champObjet* ; *cheminAttribut* ; *tabValeurs* )<!-- END REF-->
<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| champObjet | Field | &#8594;  | Champ objet à utiliser |
| cheminAttribut | Text | &#8594;  | Nom ou chemin de l'attribut dont vous voulez obtenir les valeurs distinctes |
| tabValeurs | Text array, Integer array, Boolean array, Date array, Time array | &#8592; | Tableau des valeurs distinctes dans l'attribut |

<!-- END REF-->

#### Description 

<!--REF #_command_.DISTINCT ATTRIBUTE VALUES.Summary-->La commande **DISTINCT ATTRIBUTE VALUES** crée et remplit le tableau *tabValeurs* avec les valeurs uniques présentes dans l'attribut *cheminAttribut* du champ objet *champObjet* et ce, pour la sélection courante de la table à laquelle appartient le champ.<!-- END REF--> Notez que le champ *champObjet* doit être type Objet, sinon une erreur est retournée. La commande peut être utilisée avec des champs indexés ou non indexés. 

Passez un chemin valide d'attribut dans *cheminAttribut*. Utilisez la notation à points standard pour désigner le chemin d'attributs imbriqués, par exemple "société.adresse.numéro". Attention, gardez à l'esprit que les noms d'attributs d'objets tiennent compte de la casse des caractères. 

Le tableau que vous passez dans *tabValeurs* doit être du même type que les valeurs stockées dans l'attribut *cheminAttribut*. Ces valeurs doivent être scalaires et peuvent être de type texte, numérique, booléen, date ou heure (les pointeurs, objets, BLOBs et images ne sont pas pris en charge). Assurez-vous que toutes les valeurs d'attributs du champ soient bien du même type, autrement une erreur est retournée. Par exemple, si l'attribut *cheminAttribut* contient "Lundi" dans un enregistrement et 10125 dans un autre enregistrement, **DISTINCT ATTRIBUTE VALUES** retournera une erreur. 

Si la commande est appelée pendant une transaction, les enregistrements créés dans la transation sont pris en compte.

Après l'exécution de la commande, la taille du tableau *tabValeurs* est égale au nombre de valeurs différentes trouvées dans la sélection. 

La commande ne modifie pas la sélection courante ni l'enregistrement courant. 

##### Utilisation de la propriété virtuelle length 

Vous pouvez utiliser la propriété virtuelle "length" avec cette commande. Cette propriété est automatiquement disponible pour tous les attributs de type tableau, et retourne la taille du tableau, c'est-à-dire le nombre d'éléments qu'il contient. Elle est destinée à une utilisation avec la commande [QUERY BY ATTRIBUTE](query-by-attribute.md) mais est également disponible pour **DISTINCT ATTRIBUTE VALUES** afin d'obtenir les différentes tailles de tableaux pour un attribut.

#### Exemple 

Votre base de données comporte un champ objet \[Customer\]full\_Data avec 15 enregistrements :

![](../assets/en/commands/pict2994114.en.png)

Si vous exécutez ce code :

```4d
 ARRAY LONGINT(aLAges;0)
 ARRAY LONGINT(aLAgesChild;0)
 ARRAY LONGINT(aLChildNum;0)
 ALL RECORDS([Customer])
  //obtenir les valeurs distinctes de l'attribut "age"
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"age";aLAges)
  //obtenir les valeurs distinctes de l'attribut dans le tableau Children"
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children[].age";aLAgesChild)
  //obtenir les différents nombres d'enfants à l'aide de la propriété virtuelle length
 DISTINCT ATTRIBUTE VALUES([Customer]full_Data;"Children.length";aLChildNum)
```

Le tableau *aLAges* reçoit les éléments suivants :

| **Elément** | **Valeur** |
| ----------- | ---------- |
| 1           | 33         |
| 2           | 35         |
| 3           | 36         |
| 4           | 40         |
| 5           | 42         |
| 6           | 44         |
| 7           | 52         |
| 8           | 54         |
| 9           | 60         |

Le tableau *aLAgesChild* reçoit les éléments suivants :

| **Elément** | **Valeur** |
| ----------- | ---------- |
| 1           | 2          |
| 2           | 3          |
| 3           | 4          |
| 4           | 5          |
| 5           | 6          |
| 6           | 10         |
| 7           | 12         |
| 8           | 14         |
| 9           | 15         |
| 10          | 16         |

Le tableau *aLChildNum* reçoit les éléments suivants :

| **Elément** | **Valeur** |
| ----------- | ---------- |
| 1           | 1          |
| 2           | 2          |
| 3           | 3          |

#### Voir aussi 

  
[DISTINCT ATTRIBUTE PATHS](distinct-attribute-paths.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1397 |
| Thread safe | &check; |
| Interdite sur le serveur ||


