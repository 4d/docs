---
id: listbox-get-rows-height
title: LISTBOX Get rows height
slug: /commands/listbox-get-rows-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get rows height.Syntax-->**LISTBOX Get rows height** ( {* ;} *objet* {; *unité*} ) : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get rows height.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d’objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| unité | Integer | &#8594;  | Unité de la valeur de hauteur : <br/>0 ou omis = pixels, 1 = lignes |
| Résultat | Integer | &#8592; | Hauteur de ligne en pixels |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX Get rows height.Summary-->La commande **LISTBOX Get rows height** retourne la hauteur courante des lignes de l’objet list box désigné par les paramètres *objet* et *\**.<!-- END REF--> La valeur retournée correspond à la hauteur d'une seule ligne. 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*.

Par défaut, si vous omettez le paramètre *unité*, la hauteur de ligne retournée est exprimée en pixels. Pour définir une autre unité, vous pouvez passer dans le paramètre *unité* l’une des constantes suivantes, placées dans le thème *List box* :

| Constante | Type        | Valeur | Comment                                                                                             |
| --------- | ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| lk lines  | Entier long | 1      | La hauteur désigne un nombre de lignes. 4D calcule la hauteur d’une ligne en fonction de la police. |
| lk pixels | Entier long | 0      | La hauteur est un nombre de pixels (défaut)                                                         |

**Note :** Pour plus d’informations sur le calcul des hauteurs de lignes, reportez-vous au manuel *Mode Développement*.

#### Voir aussi 

[LISTBOX Get auto row height](listbox-get-auto-row-height.md)  
[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 836 |
| Thread safe | &cross; |


