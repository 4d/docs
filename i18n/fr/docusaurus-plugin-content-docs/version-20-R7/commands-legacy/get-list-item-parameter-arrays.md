---
id: get-list-item-parameter-arrays
title: GET LIST ITEM PARAMETER ARRAYS
slug: /commands/get-list-item-parameter-arrays
displayed_sidebar: docs
---

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Syntax-->**GET LIST ITEM PARAMETER ARRAYS** ( {* ;} *liste* ; refElément | * ; *tabSélecteurs* {; *tabValeurs*} )<!-- END REF-->
<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, liste est un nom d’objet (chaîne)Si omis, liste est un numéro de référence de liste |
| liste | Integer, Text | &#8594;  | Numéro de référence de liste (si * omis) ouNom d'objet de type liste (si * passé) |
| refElément &#124; * | Entier long, Opérateur | &#8594;  | Numéro de référence d’élément ou0 pour le dernier élément ajouté à la liste ou* pour l’élément courant de la liste |
| tabSélecteurs | Text array | &#8592; | Tableau des noms de paramètres |
| tabValeurs | Text array | &#8592; | Tableau des valeurs de paramètres |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.GET LIST ITEM PARAMETER ARRAYS.Summary-->La commande **GET LIST ITEM PARAMETER ARRAYS** permet de récupérer en un seul appel l’ensemble des paramètres (ainsi que, optionnellement, leurs valeurs) associés à l’élément *refElément* de la liste hiérarchique dont vous avez passé la référence ou le nom d’objet dans le paramètre *liste*.<!-- END REF--> 

Les paramètres associés aux éléments permettent de stocker des informations supplémentaires sur chaque élément. Ils sont définis à l’aide de la commande [SET LIST ITEM PARAMETER](set-list-item-parameter.md). 

Si vous passez le premier paramètre optionnel *\**, vous indiquez que le paramètre *liste* est un nom d’objet (chaîne) correspondant à une représentation de liste dans le formulaire. Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *liste* est une référence de liste hiérarchique ([RefListe](# "Expression de type Entier long identifiant de façon unique une liste hiérarchique")). Si vous utilisez une seule représentation de liste ou travaillez avec les éléments structurels (le second *\** est omis), vous pouvez utiliser indifféremment l’une ou l’autre syntaxe. En revanche, si vous utilisez plusieurs représentations d’une même liste et travaillez avec l’élément courant (le second *\** est passé), la syntaxe basée sur le nom d’objet est requise car chaque représentation peut disposer de son propre élément courant.

**GET LIST ITEM PARAMETER ARRAYS** retourne les paramètres définis pour l’élément *réfElément* dans le tableau texte *tabSélecteurs*. Si le tableau texte *tabValeurs* est passé, la commande retourne les valeurs associées à chaque paramètre dans ce tableau.

Le tableau *tabValeur* doit être de type texte. Si vous avez associé des valeurs non-textuelles (type numérique ou booléen), elles sont converties en chaînes (vrai="1", faux="0").

#### Exemple 

Soit la liste hiérarchique suivante : 

```4d
 <>HL:=New list
 $ID:=30
 APPEND TO LIST(<>HL;"Martin";$ID)
     //5 paramètres
 SET LIST ITEM PARAMETER(<>HL;$ID;"Firstname";"Phil")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Birthday";"15/02/1978")
 SET LIST ITEM PARAMETER(<>HL;$ID;"Male";True)   //booléen
 SET LIST ITEM PARAMETER(<>HL;$ID;"Age";32)   //numérique
 SET LIST ITEM PARAMETER(<>HL;$ID;"City";"Nantes")
```

Pour plus de simplicité, la liste a été associée à un objet liste de même nom ("<>HL").  
 Lorsque l’élément "Martin" est sélectionné dans la liste, on peut lire ses paramètres en exécutant le code suivant :

```4d
 ARRAY TEXT(tNomsParams;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;tNomsParams)
     // tNomsParams{1} contient "Firstname"
     // tNomsParams{2} contient "Birthday"
     // tNomsParams{3} contient "Male"
     // tNomsParams{4} contient "Age"
     // tNomsParams{5} contient "City"
```

Si on souhaite récupérer également les valeurs des paramètres, on peut écrire :

```4d
 ARRAY TEXT(tNomsParams;0)
 ARRAY TEXT(tValeursParams;0)
 GET LIST ITEM PARAMETER ARRAYS(*;"<>HL";*;tNomsParams;tValeursParams)
     // tValeursParams{1} contient "Phil"
     // tValeursParams{2} contient "15/02/1978"
     // tValeursParams{3} contient "1"
     // tValeursParams{4} contient "32"
     // tValeursParams{5} contient "Nantes"
```

#### Voir aussi 

[SET LIST ITEM PARAMETER](set-list-item-parameter.md)  