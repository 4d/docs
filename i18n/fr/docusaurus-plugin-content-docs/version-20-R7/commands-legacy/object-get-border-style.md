---
id: object-get-border-style
title: OBJECT Get border style
slug: /commands/object-get-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get border style.Syntax-->**OBJECT Get border style** ( {* ;} *objet* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get border style.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| Résultat | Integer | &#8592; | Style de la ligne de bordure |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT Get border style.Summary-->La commande **OBJECT Get border style** retourne le style de ligne de bordure de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

Le style de bordure d’un objet peut avoir été défini en mode Développement via la Liste des propriétés, ou à l’aide de la commande [OBJECT SET BORDER STYLE](object-set-border-style.md). 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

La commande retourne une valeur correspondant au style de la bordure. Vous pouvez comparer la valeur reçue aux constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

| Constante     | Type        | Valeur | Comment                                                                                                                 |
| ------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------- |
| Border Dotted | Entier long | 2      | Les objets apparaissent dans un cadre pointillé de 1 pt                                                                 |
| Border Double | Entier long | 5      | Les objets apparaissent encadrés par une double ligne, c’est-à-dire deux lignes continues de 1 pt séparées par un pixel |
| Border None   | Entier long | 0      | Les objets apparaissent sans encadrement                                                                                |
| Border Plain  | Entier long | 1      | Les objets apparaissent dans un cadre continu de 1 pt                                                                   |
| Border Raised | Entier long | 3      | Les objets apparaissent avec un effet 3D (relief)                                                                       |
| Border Sunken | Entier long | 4      | Les objets apparaissent avec un effet 3D en creux (relief inversé)                                                      |
| Border System | Entier long | 6      | Le cadre est dessiné en fonction des spécifications graphiques du système                                               |

#### Voir aussi 

[OBJECT SET BORDER STYLE](object-set-border-style.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1263 |
| Thread safe | &check; |
| Interdite sur le serveur ||


