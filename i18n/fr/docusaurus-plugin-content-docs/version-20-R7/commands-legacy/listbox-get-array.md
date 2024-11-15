---
id: listbox-get-array
title: LISTBOX Get array
slug: /commands/listbox-get-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX Get array.Syntax-->**LISTBOX Get array** ( {* ;} *objet* ; *typeTab* ) : Pointer<!-- END REF-->
<!--REF #_command_.LISTBOX Get array.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou Variable (si * est omis) |
| typeTab | Integer | &#8594;  | Type de tableau |
| Résultat | Pointer | &#8592; | Pointeur vers le tableau associé à la propriété |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.LISTBOX Get array.Summary-->**Note :** Cette commande fonctionne uniquement avec les list box de type tableau.<!-- END REF-->

La commande **LISTBOX Get array** retourne un pointeur vers le tableau *typeTab* de la list box ou de la colonne de list box désignée par les paramètres *objet* et *\**.

Des tableaux de style, de couleur, de couleur de fond ou de contrôle des lignes peuvent être associés aux list box de type tableau ou (hormis le tableau de contrôle des lignes) aux colonnes de list box tableau via la Liste des propriétés en mode Développement ou la commande [LISTBOX SET ARRAY](listbox-set-array.md).

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Vous pouvez désigner comme paramètre *objet* une list box ou une colonne de list box. 

Passez dans *typeTab* le type du tableau de propriété à obtenir. Vous pouvez utiliser une des constantes suivantes du thème "*List box*" : 

| Constante                 | Type        | Valeur | Comment                       |
| ------------------------- | ----------- | ------ | ----------------------------- |
| lk background color array | Entier long | 1      |                               |
| lk control array          | Entier long | 3      |                               |
| lk font color array       | Entier long | 0      |                               |
| lk row height array       | Entier long | 4      | (Licence 4D View Pro requise) |
| lk style array            | Entier long | 2      |                               |

La commande retourne une des valeurs suivantes :

* [Is nil pointer](is-nil-pointer.md) si aucun tableau de la propriété demandée n’est associé à la colonne ou à la list box
* un pointeur vers le tableau de la propriété demandée, défini par l’utilisateur
* un pointeur vers le tableau de la propriété demandée, défini dynamiquement lors de l’appel de la commande [LISTBOX SET ROW COLOR](listbox-set-row-color.md) ou [LISTBOX SET ROW FONT STYLE](listbox-set-row-font-style.md).

#### Exemple 

Exemples type d’utilisation :

```4d
 vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)
     // retourne un pointeur vers le tableau de couleurs de police associé
     // à la list box "MyLB"
 
 vPtr:=LISTBOX Get array(*;"Col4";lk style array)
     // retourne un pointeur vers le tableau de styles de police associé
     // à la colonne de list box "Col4"
```

#### Voir aussi 

[LISTBOX GET ARRAYS](listbox-get-arrays.md)  
[LISTBOX SET ARRAY](listbox-set-array.md)  