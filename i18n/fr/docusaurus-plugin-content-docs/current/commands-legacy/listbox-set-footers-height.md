---
id: listbox-set-footers-height
title: LISTBOX SET FOOTERS HEIGHT
slug: /commands/listbox-set-footers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Syntax-->**LISTBOX SET FOOTERS HEIGHT** ( {* ;} *objet* ; *hauteur* {; *unité*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| hauteur | Integer | &#8594;  | Hauteur de la ligne |
| unité | Integer | &#8594;  | Unité de la valeur de hauteur : 0 ou omis = pixels, 1 = lignes |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET FOOTERS HEIGHT.Summary-->La commande **LISTBOX SET FOOTERS HEIGHT** permet de modifier par programmation la hauteur de la ligne de pied de la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Vous pouvez désigner indifféremment la list box ou tout pied de la list box.

Passez dans le paramètre *hauteur* la hauteur à définir. Par défaut, si vous omettez le paramètre *unité*, cette hauteur est exprimée en pixels. Pour modifier l’unité, vous pouvez passer dans le paramètre *unité* l’une des constantes suivantes, placées dans le thème *List box* :

| Constante | Type        | Valeur | Comment                                                                                             |
| --------- | ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| lk lines  | Entier long | 1      | La hauteur désigne un nombre de lignes. 4D calcule la hauteur d’une ligne en fonction de la police. |
| lk pixels | Entier long | 0      | La hauteur est un nombre de pixels (défaut)                                                         |

**Note :** Pour plus d’informations sur le calcul des hauteurs de lignes, reportez-vous au manuel *Mode Développement*.

#### Voir aussi 

[LISTBOX Get footers height](listbox-get-footers-height.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1145 |
| Thread safe | &check; |
| Interdite sur le serveur ||


