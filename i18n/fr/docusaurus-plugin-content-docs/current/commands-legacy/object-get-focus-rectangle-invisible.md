---
id: object-get-focus-rectangle-invisible
title: OBJECT Get focus rectangle invisible
slug: /commands/object-get-focus-rectangle-invisible
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get focus rectangle invisible.Syntax-->**OBJECT Get focus rectangle invisible** ( {* ;} *objet* ) : Boolean<!-- END REF-->
<!--REF #_command_.OBJECT Get focus rectangle invisible.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable ou un champ |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| Résultat | Boolean | &#8592; | Vrai = rectangle focus caché, Faux = rectangle focus visible |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get focus rectangle invisible.Summary-->La commande **OBJECT Get focus rectangle invisible** retourne le statut de l’option d’invisibilité du rectangle de focus de l’objet ou des objets désigné(s) par les paramètres *objet* et *\** pour le process courant.<!-- END REF--> Ce paramétrage correspond à l’option **Cacher rectangle de focus** disponible pour les objets saisissables dans la Liste des propriétés en mode Développement. La commande retourne le statut courant de l’option, qu’elle ait été définie en mode Développement ou à l’aide de la commande [OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md).

**Note :** Cette option est utilisable sous Mac OS uniquement. Elle n’a pas d’effet sous Windows. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable ou un champ. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

La commande retourne **Vrai** si le rectangle de focus est masqué et **Faux** s’il est visible.

#### Voir aussi 

[OBJECT SET FOCUS RECTANGLE INVISIBLE](object-set-focus-rectangle-invisible.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1178 |
| Thread safe | &check; |
| Interdite sur le serveur ||


