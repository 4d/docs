---
id: array-to-list
title: ARRAY TO LIST
slug: /commands/array-to-list
displayed_sidebar: docs
---

<!--REF #_command_.ARRAY TO LIST.Syntax-->**ARRAY TO LIST** ( *tableau* ; *liste* {; *réfEléments*} )<!-- END REF-->
<!--REF #_command_.ARRAY TO LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tableau | Array | &#8594;  | Tableau duquel copier les éléments |
| liste | Text, Integer | &#8594;  | Nom ou référence de la liste dans laquelle copier les éléments du tableau |
| réfEléments | Array | &#8594;  | Tableau numérique des numéros de référence des éléments |

<!-- END REF-->

#### Description 

<!--REF #_command_.ARRAY TO LIST.Summary-->La commande **ARRAY TO LIST** crée ou remplace la liste hiérarchique ou l'énumération *liste* en utilisant les éléments du tableau *tableau*.<!-- END REF-->

Vous pouvez passer dans le paramètre *liste* soit un nom d'énumération (une chaîne) soit une référence de liste hiérarchique ([RefListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Dans ce deuxième cas, la liste doit déjà avoir été créée (par exemple via la commande [New list](new-list.md)) pour que la commande fonctionne.

Le paramètre optionnel *réfEléments*, s'il est passé, doit être un tableau de type numérique synchronisé avec le tableau *tableau*. Chaque élément de ce tableau indique le numéro de référence de l'élément de la liste correspondant dans *tableau*. Si ce paramètre est omis, 4D affecte automatiquement aux éléments de la liste les numéros de référence 1, 2... N.

**Note de compatibilité :** La commande **ARRAY TO LIST** doit être utilisée avec précaution du fait des limitations suivantes :

* cette commande permet de définir seulement les éléments du premier niveau de la liste.
* lorsque vous l'utilisez avec une énumération, cette commande modifie la structure de l'application (les énumérations sont stockées dans le fichier de structure), les modifications effectuées en local seront donc perdues lors de mise à jour du fichier de structure en production.
* cette commande ne peut pas être utilisée avec une énumération dans une structure chargée en lecture seule, telle qu'un projet .4dz ou un composant.

Vous pouvez utiliser **ARRAY TO LIST** pour construire une liste basée sur les éléments d'un tableau. Cependant, pour vous affranchir de ces contraintes et exploiter pleinement les listes de valeurs, il est conseillé d'utiliser les commandes du thème *Listes hiérarchiques*.

#### Exemple 

L'exemple suivant copie le tableau *tabRégions* dans l'énumération "Régions" :

```4d
 ARRAY TO LIST(tabRégions;"Régions")
```

#### Exemple 

Vous souhaitez placer les valeurs distinctes d’un champ dans une liste, par exemple pour créer un pop up menu hiérarchique. Vous pouvez écrire :

```4d
 ALL RECORDS([Company])
 DISTINCT VALUES([Company]country;$tabPays)
 listePays:=New list
 ARRAY TO LIST($tabPays;listePays)
```

#### Gestion des erreurs 

La commande **ARRAY TO LIST** génère l'erreur *\-9957* lorsqu'elle est appliquée à une énumération en cours de modification en mode Développement. Vous pouvez intercepter cette erreur à l'aide d'une méthode projet de gestion des erreurs installée par la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[LIST TO ARRAY](list-to-array.md)  
[Load list](load-list.md)  
[ON ERR CALL](on-err-call.md)  
[SAVE LIST](save-list.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 287 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


