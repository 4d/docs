---
id: listbox-set-array
title: LISTBOX SET ARRAY
slug: /commands/listbox-set-array
displayed_sidebar: docs
---

<!--REF #_command_.LISTBOX SET ARRAY.Syntax-->**LISTBOX SET ARRAY** ( {* ;} *objet* ; *typeTab* ; *ptrTab* )<!-- END REF-->
<!--REF #_command_.LISTBOX SET ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne) Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d'objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| typeTab | Integer | &#8594;  | Type de tableau |
| ptrTab | Pointer | &#8594;  | Tableau à associer à la propriété |

<!-- END REF-->

#### Description 

<!--REF #_command_.LISTBOX SET ARRAY.Summary-->**Note :** Cette commande fonctionne uniquement avec les list box de type tableau.<!-- END REF-->

La commande **LISTBOX SET ARRAY** vous permet d’associer un tableau de type *typeTab* à la list box ou à la colonne de list box désignée par les paramètres *objet* et *\**.

**Note :** Des tableaux de style, de couleur, de couleur de fond ou de contrôle des lignes peuvent également être associés aux list box de type tableau via la Liste des propriétés en mode Développement.

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. Vous pouvez désigner comme paramètre *objet* une list box ou une colonne de list box.

Passez dans *typeTab* le type de tableau à associer à la list box ou à la colonne. Vous pouvez utiliser une des constantes suivantes du thème "*List box*" :

| Constante                 | Type        | Valeur | Comment                       |
| ------------------------- | ----------- | ------ | ----------------------------- |
| lk background color array | Entier long | 1      |                               |
| lk control array          | Entier long | 3      |                               |
| lk font color array       | Entier long | 0      |                               |
| lk row height array       | Entier long | 4      | (Licence 4D View Pro requise) |
| lk style array            | Entier long | 2      |                               |

Passez dans le paramètre *ptrTab* un pointeur vers le tableau à utiliser pour prendre en charge le type de propriété.

#### Exemple 1 

Vous souhaitez réutiliser le tableau de couleurs de police de la colonne 4 pour la colonne 10 :

```4d
     // récupérer un pointeur vers le tableau de la colonne 4
 $Pointer:=LISTBOX Get array(*;"Col4";lk font color array)
     // vérification qu’il existe
 If(Not(Nil($Pointer)))
           //report sur la colonne 10
       LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)
 End if
```

#### Exemple 2 

Vous voulez associer un tableau de hauteurs de ligne à une list box :

```4d
 LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)
```

**Note** : La propriété de list box **Tableau hauteurs lignes** nécessite la licence 4D View Pro. Pour plus d'informations, veuillez vous reporter à la section *4D View Pro*.

#### Voir aussi 

[LISTBOX Get array](listbox-get-array.md)  
[LISTBOX GET ARRAYS](listbox-get-arrays.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1279 |
| Thread safe | &check; |
| Interdite sur le serveur ||


