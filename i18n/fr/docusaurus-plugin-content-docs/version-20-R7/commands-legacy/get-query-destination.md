---
id: get-query-destination
title: GET QUERY DESTINATION
slug: /commands/get-query-destination
displayed_sidebar: docs
---

<!--REF #_command_.GET QUERY DESTINATION.Syntax-->**GET QUERY DESTINATION** ( *destinationType* ; *destinationObjet* ; *destinationPtr* )<!-- END REF-->
<!--REF #_command_.GET QUERY DESTINATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| destinationType | Integer | &#8592; | 0 = sélection courante, 1 = ensemble, 2 = sélection temporaire, 3 = variable |
| destinationObjet | Text | &#8592; | Nom de l'ensemble ou Nom de la sélection temporaire ou Chaîne vide |
| destinationPtr | Pointer | &#8592; | Pointeur vers variable locale si destinationType = 3 |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET QUERY DESTINATION.Summary-->La commande **GET QUERY DESTINATION** retourne la destination courante des résultats des recherches pour le process en cours.<!-- END REF--> Par défaut, les résultats des recherches modifient la sélection courante, mais vous pouvez modifier ce fonctionnement l’aide de la commande [SET QUERY DESTINATION](set-query-destination.md).

4D retourne dans le paramètre *destinationType* une valeur indiquant la destination courante des recherches et dans *destinationObjet* le nom de la destination (le cas échéant). Vous pouvez comparer la valeur du paramètre *destinationType* aux constantes du thème *Recherches* :

| Constante              | Type        | Valeur |
| ---------------------- | ----------- | ------ |
| Into current selection | Entier long | 0      |
| Into named selection   | Entier long | 2      |
| Into set               | Entier long | 1      |
| Into variable          | Entier long | 3      |

La valeur retournée dans le paramètre *destinationObjet* dépend de la valeur du paramètre *destinationType* :

| **Paramètre destinationType** | **Paramètre** **destinationObjet**                                              |
| ----------------------------- | ------------------------------------------------------------------------------- |
| 0 (sélection courante)        | *destinationObjet* est une chaîne vide                                          |
| 1 (ensemble)                  | *destinationObjet* contient le nom de l’ensemble                                |
| 2 (sélection temporaire)      | *destinationObjet* contient le nom de la sélection temporaire                   |
| 3 (variable)                  | *destinationObjet* est une chaîne vide (utiliser le paramètre *destinationPtr*) |

Lorsque la destination des recherches est une variable (*destinationType* retourne 3), 4D retourne dans le paramètre *destinationPtr* un pointeur vers cette variable.

#### Exemple 

Nous souhaitons modifier temporairement la destination de recherche, et rétablir ensuite les paramètres précédents :

```4d
 GET QUERY DESTINATION($vType;$vNom;$ptr)
  //récupération des paramètres courants
 SET QUERY DESTINATION(Into set;"$tempo")
  //modification temporaire de la destination
 QUERY(...) //recherche
 SET QUERY DESTINATION($vType;$vNom;$ptr)
  //rétablissement des paramètres
```

#### Voir aussi 

[SET QUERY DESTINATION](set-query-destination.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1155 |
| Thread safe | &check; |


