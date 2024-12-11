---
id: listbox-set-headers-height
title: LISTBOX SET HEADERS HEIGHT
slug: /commands/listbox-set-headers-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Syntax-->**LISTBOX SET HEADERS HEIGHT** ( {* ;} *objet* ; *hauteur* {; *unité*} )<!-- END REF-->
<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis |
| hauteur | Integer | &#8594;  | Hauteur de la ligne |
| unité | Integer | &#8594;  | Unité de la valeur de hauteur : <br/>0 ou omis = pixels, 1 = lignes |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET HEADERS HEIGHT.Summary-->La commande **LISTBOX SET HEADERS HEIGHT** permet de modifier par programmation la hauteur de la ligne d’en-tête de la list box désignée par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Vous pouvez désigner indifféremment la list box ou tout en-tête de la list box.

Passez dans le paramètre *hauteur* la hauteur à définir. Par défaut, si vous omettez le paramètre *unité*, cette hauteur est exprimée en pixels. Pour modifier l’unité, vous pouvez passer dans le paramètre *unité* l’une des constantes suivantes, placées dans le thème *List box* :

| Constante | Type        | Valeur | Comment                                                                                             |
| --------- | ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| lk lines  | Entier long | 1      | La hauteur désigne un nombre de lignes. 4D calcule la hauteur d’une ligne en fonction de la police. |
| lk pixels | Entier long | 0      | La hauteur est un nombre de pixels (défaut)                                                         |

Les en-têtes doivent respecter une hauteur minimale, définie par le système d’exploitation. Cette hauteur est de 24 pixels sous Windows et 17 pixels sous Mac OS. Si vous passez une hauteur inférieure, la hauteur minimale est appliquée. 

**Note :** Pour plus d’informations sur le calcul des hauteurs de lignes, reportez-vous au manuel *Mode Développement*.

#### Voir aussi 

[LISTBOX Get headers height](listbox-get-headers-height.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1143 |
| Thread safe | &check; |
| Interdite sur le serveur ||


