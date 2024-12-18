---
id: object-set-border-style
title: OBJECT SET BORDER STYLE
slug: /commands/object-set-border-style
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT SET BORDER STYLE.Syntax-->**OBJECT SET BORDER STYLE** ( {* ;} *objet* ; *styleBordure* )<!-- END REF-->
<!--REF #_command_.OBJECT SET BORDER STYLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est un champ ou une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Champ ou variable (si * est omis) |
| styleBordure | Integer | &#8594;  | Style de la ligne de bordure |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT SET BORDER STYLE.Summary-->La commande **OBJECT SET BORDER STYLE** vous permet de modifier le style de la ligne de bordure de l’objet ou des objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

La propriété "Style de bordure" permet de modifier l’apparence du contour des objets. Pour plus d’informations, reportez-vous au paragraphe *Style de la bordure* dans le manuel *Mode Développement*. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas le paramètre, vous indiquez que le paramètre *objet* est un champ ou une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de champ ou de variable (champ ou variable objet uniquement).

Passez dans le paramètre *styleBordure* la valeur de style de ligne que vous souhaitez appliquer à l’objet. Vous pouvez passer une des constantes suivantes, placées dans le thème "*Objets de formulaire (Propriétés)*" :

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

[OBJECT Get border style](object-get-border-style.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1262 |
| Thread safe | &cross; |


