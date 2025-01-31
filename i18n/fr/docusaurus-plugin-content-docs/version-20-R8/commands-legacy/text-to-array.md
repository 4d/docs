---
id: text-to-array
title: TEXT TO ARRAY
slug: /commands/text-to-array
displayed_sidebar: docs
---

<!--REF #_command_.TEXT TO ARRAY.Syntax-->**TEXT TO ARRAY** ( *varTexte* ; *tabTexte* ; *largeur* ; *nomPolice* ; *taillePolice* {; *stylePolice* {; *}} )<!-- END REF-->
<!--REF #_command_.TEXT TO ARRAY.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| varText | Text | &#8594;  | Texte original à découper |
| tabTexte | Text array | &#8592; | Tableau contenant le texte découpé en mots ou lignes |
| largeur | Integer | &#8594;  | Largeur maximale de la chaîne (en pixels) |
| nomPolice | Text | &#8594;  | Nom de police |
| taillePolice | Integer | &#8594;  | Taille de police |
| stylePolice | Integer | &#8594;  | Style de police |
| * | Opérateur | &#8594;  | Si passé = interpréter le texte en multistyle |

<!-- END REF-->

#### Description 

<!--REF #_command_.TEXT TO ARRAY.Summary-->La commande **TEXT TO ARRAY** permet de transformer une variable texte en tableau texte.<!-- END REF--> Le texte d’origine (stylé ou non) est découpé et chaque morceau devient un élément du tableau *tabTexte* qui est retourné par la commande. Cette commande peut être utilisée par exemple pour remplir des pages ou des colonnes de texte de taille fixe.

Le découpage du texte original est effectué en "mots" à partir d’une taille de ligne définie par les paramètres de la commande et tenant compte des styles utilisés. 

Passez dans *varTexte* le texte à découper en éléments de tableaux. Ce texte peut être multistyle ou non. Certains paramètres seront ignorés si le texte est multistyle.

Passez dans *tabTexte* le nom du tableau qui sera rempli par le texte découpé.

Passez dans *largeur* une taille en pixels indiquant la longueur maximum de ligne à mesurer pour découper le texte. Pour l’ensemble du texte, la commande évaluera le nombre maximum de mots pouvant "tenir" dans cette largeur en fonction des attributs graphiques du texte (police, style). 

* Si le texte est multistyle, les styles du texte original seront pris en compte et les paramètres suivants seront ignorés s’ils sont passés. Dans ce cas, les lignes de texte dans le tableau résultant conserveront leurs styles (afin de pouvoir être imprimées une par une via une variable texte ou alpha par exemple).
* Si le texte est brut (sans styles), vous devez passer tous les paramètres afin que la commande puisse calculer la longueur des lignes.

Chaque élément du tableau doit contenir au moins un mot. Si la *largeur* passée est trop faible pour que la règle de découpage soit entièrement respectée, le tableau sera rempli de la façon la plus proche possible des paramètres et la variable OK prendra la valeur 0\. Par exemple, si vous passez une largeur de 3 pixels, il est probable que la taille de la plupart des mots sera au-delà de cette longueur. Dans ce cas, la variable OK prendra la valeur 0\.   
Ce principe implique également que la taille théorique maximale du tableau retourné est égale au nombre de mots présents dans *varTexte*. 

Passez dans *nomPolice* et *taillePolice* le nom et la taille de la police de caractères avec laquelle *varTexte* doit être évalué par la commande pour effectuer le découpage. Ces paramètres sont obligatoires dans le cas d’un texte brut. 

Passez dans *stylePolice* une ou une combinaison de constante(s) du thème *Styles de caractères* :

| Constante | Type        | Valeur |
| --------- | ----------- | ------ |
| Bold      | Entier long | 1      |
| Italic    | Entier long | 2      |
| Plain     | Entier long | 0      |
| Underline | Entier long | 4      |

Ce paramètre est optionnel ; s’il est omis, le style Plain est utilisé. 

Le paramètre optionnel *\**, s’il est passé, permet de forcer la prise en compte des paramètres *nomPolice*, *taillePolice* et/ou *stylePolice* pour les textes multistyles lorsque ces paramètres ne sont pas définis dans le texte d’origine. S’ils sont définis dans le texte, les paramètres passés à la commande sont ignorés dans tous les cas. 

#### Exemple 1 

Nous souhaitons découper un texte multistyle en lignes d’une taille maximale de 200 pixels : 

```4d
 TEXT TO ARRAY(leTexte;leTabTexte;200;"Arial";20;Plain;*)
  // les attributs Arial, 20, Normal ne seront pris en compte que s’ils ne sont pas définis dans le texte
```

#### Exemple 2 

Nous souhaitons découper un texte brut en lignes d’une taille maximale de 350 pixels en police Bodoni gras 14\. Comme la commande ne fonctionne pas correctement si la police n’est pas disponible, il est utile de vérifier sa présence :

```4d
 ARRAY TEXT($FontList;0)
 FONT LIST($FontList)
 $Font:="Bodoni"
 $p:=Find in array($FontList;$Font)
 If($p>0)
    TEXT TO ARRAY(leTexte;leTabTexte;350;"Bodoni";14;Bold)
 Else
  // utiliser une autre police.
 End if
```

#### Exemple 3 

Un texte multistyle doit être imprimé sans style dans la police Arial normal 12 avec une largeur maximale de 600 pixels : 

```4d
  // on transforme le texte multistyle en texte brut
 $RawText:=OBJECT Get plain text(vText)  
  // on remplit le tableau
 TEXT TO ARRAY($RawText;tabTexte;600;"Arial";12)
```

#### Exemple 4 

Vous devez imprimer dans une zone de 400 pixels de large un texte d’un maximum de 80 lignes et ce, avec la plus grande taille de police possible (ne devant pas dépasser 24 points). Vous pouvez écrire : 

```4d
 ARRAY TEXT(tabTexte;0)
 $Taille:=24
 Repeat
    TEXT TO ARRAY($RawText;tabTexte;400;"Arial";$Taille)
    $Taille:=$Taille-1
    $n:=Size of array(tabTexte)
 Until($n<=80)
```

#### Voir aussi 

[Split string](split-string.md)  
[ST Get plain text](st-get-plain-text.md)  
[ST Get text](st-get-text.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1149 |
| Thread safe | &cross; |


