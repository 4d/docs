---
id: listbox-get-auto-row-height
title: LISTBOX Get auto row height
slug: /commands/listbox-get-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get auto row height.Syntax-->**LISTBOX Get auto row height** ( {* ;} *objet* ; *sélecteur* {; *unité*} )  : Integer<!-- END REF-->
<!--REF #_command_.LISTBOX Get auto row height.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (une chaîne). Si omis, objet est une variable. |
| objet | any | &#8594;  | Nom de l'objet (si * est spécifié) ou variable (si * est omis) |
| sélecteur | Integer | &#8594;  | Valeur de hauteur à lire : lk hauteur ligne min ou lk hauteur ligne max |
| unité | Integer | &#8594;  | Valeur d'unité de hauteur : 0 = pixels, 1 = lignes |
| Résultat | Integer | &#8592; | Valeur de la limite de hauteur de ligne sélectionnée |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX Get auto row height.Summary-->La commande **LISTBOX Get auto row height** retourne la limite minimum ou maximum de hauteur de ligne automatique définie pour l'objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

La valeur courante de hauteur minimum ou maximum peut être définie soit dans la Liste des propriétés (voir *Hauteur de ligne automatique*) soit, pour le process courant, à l'aide de la commande [LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md).

**Note :** Cette commande peut être utilisée uniquement avec les list box de type "collection ou selection d'entité" et "tableau".

Si vous passez le paramètre facultatif *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*.

Dans *sélecteur*, passez le type de limite de hauteur automatique à lire. Vous pouvez utiliser l'une des constantes suivantes du thème *List box* :

| Constante         | Type        | Valeur |
| ----------------- | ----------- | ------ |
| lk row max height | Entier long | 33     |
| lk row min height | Entier long | 32     |

Par défaut, la commande retourne la valeur demandée en pixels. Vous pouvez passer une des constantes suivantes du thème *List box* dans le paramètre *unité* afin de définir l'unité à utiliser :

| Constante | Type        | Valeur | Comment                                                                                             |
| --------- | ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| lk lines  | Entier long | 1      | La hauteur désigne un nombre de lignes. 4D calcule la hauteur d’une ligne en fonction de la police. |
| lk pixels | Entier long | 0      | La hauteur est un nombre de pixels (défaut)                                                         |

#### Exemple 

Vous voulez connaître le nombre de lignes maximum pouvant être affichées dans une ligne de list box :

```4d
 var vhMaxInteger
 vhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)
```

#### Voir aussi 

[LISTBOX Get row height](listbox-get-row-height.md)  
[LISTBOX Get rows height](listbox-get-rows-height.md)  
[LISTBOX SET AUTO ROW HEIGHT](listbox-set-auto-row-height.md)  