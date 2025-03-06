---
id: listbox-get-headers-height
title: LISTBOX Get headers height
slug: /commands/listbox-get-headers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get headers height.Syntax-->**LISTBOX Get headers height** ( {* ;} *objet* {; *unité*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get headers height.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| unité | Integer | &#8594;  | Unité de la valeur de hauteur : <br/>0 ou omis = pixels, 1 = lignes |
| Résultat | Integer | &#8592; | Hauteur de la ligne |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get headers height.Summary-->La commande **LISTBOX Get headers height** retourne la hauteur de la ligne d’en-tête de la list box désignée par les paramètres *objet* et *\**.<!-- END REF-->

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d'objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Vous pouvez désigner indifféremment la list box ou tout en-tête de la list box.

Par défaut, si vous omettez le paramètre *unité*, la hauteur de ligne retournée est exprimée en pixels. Pour définir une autre unité, vous pouvez passer dans le paramètre *unité* l’une des constantes suivantes, placées dans le thème *List box* :

| Constante | Type        | Valeur | Comment                                                                                             |
| --------- | ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| lk lines  | Entier long | 1      | La hauteur désigne un nombre de lignes. 4D calcule la hauteur d’une ligne en fonction de la police. |
| lk pixels | Entier long | 0      | La hauteur est un nombre de pixels (défaut)                                                         |

**Note :** Pour plus d’informations sur le calcul des hauteurs de lignes, reportez-vous au manuel *Mode Développement*.

#### Voir aussi 

[LISTBOX SET HEADERS HEIGHT](listbox-set-headers-height.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1144 |
| Thread safe | &cross; |


