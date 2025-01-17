---
id: listbox-set-auto-row-height
title: LISTBOX SET AUTO ROW HEIGHT
slug: /commands/listbox-set-auto-row-height
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Syntax-->**LISTBOX SET AUTO ROW HEIGHT** ( {* ;} *objet* ; *sélecteur* ; *valeur* ; *unité* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou Variable (si * est omis) |
| sélecteur | Integer | &#8594;  | Limite de hauteur à définir : lk hauteur ligne min ou lk hauteur ligne max |
| valeur | Integer | &#8594;  | Hauteur de ligne minimum ou maximum |
| unité | Integer | &#8594;  | Valeur d'unité de hauteur : 0 = pixels, 1 = lignes |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET AUTO ROW HEIGHT.Summary-->La commande **LISTBOX SET AUTO ROW HEIGHT** vous permet de définir une *valeur* de hauteur minimum ou maximum dans l'objet list box désigné par les paramètres *objet* et *\**.<!-- END REF-->

**Note** : Cette commande est prise en compte uniquement si le mode "hauteur de ligne automatique" (disponible uniquement pour les list box de type "collection ou sélection d'entité" et "tableau") est activé (voir *Hauteur de ligne automatique*). Sinon, elle n'a pas d'effet.

Si vous passez le paramètre facultatif *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Pour plus d'informations sur les noms d’objets, reportez-vous à la section *Objets de formulaires*.

Dans *sélecteur*, passez le type de limite à définir. Vous pouvez utiliser l'une des constantes suivantes du thème *List box* :

| Constante         | Type        | Valeur |
| ----------------- | ----------- | ------ |
| lk row max height | Entier long | 33     |
| lk row min height | Entier long | 32     |

Dans le paramètre *valeur*, passez la valeur correspondante dans l'*unité* appropriée.

Le paramètre *unité* peut être défini à l'aide des constantes suivantes du thème *List box* :

| Constante | Type        | Valeur | Comment                                                                                             |
| --------- | ----------- | ------ | --------------------------------------------------------------------------------------------------- |
| lk lines  | Entier long | 1      | La hauteur désigne un nombre de lignes. 4D calcule la hauteur d’une ligne en fonction de la police. |
| lk pixels | Entier long | 0      | La hauteur est un nombre de pixels (défaut)                                                         |

**Note :** La commande ne vérifie pas la cohérence des valeurs. Cependant, à l'exécution, la valeur minimum sera appliquée aux deux valeurs en cas de conflit. Par exemple, si la valeur minimum est 5 lignes et la valeur maximum est 3 lignes (ce qui est incohérent), la hauteur maximum des lignes appliquée dans la list box sera de 5 lignes.

#### Exemple 

Dans une list box où les hauteurs de lignes sont automatiques, vous voulez définir les hauteurs de ligne minimum et maximum :

```4d
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels) // hauteur minimale 60 pixels
 LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels) //hauteur maximale 100 pixels
```

#### Voir aussi 

[LISTBOX Get auto row height](listbox-get-auto-row-height.md)  
[LISTBOX SET ROW HEIGHT](listbox-set-row-height.md)  
[LISTBOX SET ROWS HEIGHT](listbox-set-rows-height.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1501 |
| Thread safe | &cross; |


