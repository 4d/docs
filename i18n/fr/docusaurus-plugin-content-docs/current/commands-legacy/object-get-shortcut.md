---
id: object-get-shortcut
title: OBJECT GET SHORTCUT
slug: /commands/object-get-shortcut
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT GET SHORTCUT.Syntax-->**OBJECT GET SHORTCUT** ( {* ;} *objet* ; *touche* ; *modifiers* )<!-- END REF-->
<!--REF #_command_.OBJECT GET SHORTCUT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| * | Opérateur | &#8594;  | Si spécifié, objet est un nom d'objet (chaîne)<br/>Si omis, objet est une variable |
| objet | any | &#8594;  | Nom d’objet (si * est spécifié) ou <br/>Variable (si * est omis) |
| touche | Text | &#8592; | Touche associée à l’objet |
| modifiers | Integer | &#8592; | Masque ou combinaison de masques de touche(s) de modification |

<!-- END REF-->

#### Description 

<!--REF #_command_.OBJECT GET SHORTCUT.Summary-->La commande **OBJECT GET SHORTCUT** retourne l’équivalent clavier associé à l’objet ou aux objets désigné(s) par les paramètres *objet* et *\**.<!-- END REF--> 

Si vous passez le paramètre optionnel *\**, vous indiquez que le paramètre *objet* est un nom d’objet (une chaîne). Si vous ne passez pas ce paramètre, vous indiquez que le paramètre *objet* est une variable. Dans ce cas, vous ne passez pas une chaîne mais une référence de variable. 

Le paramètre *touche* retourne le caractère associé à la touche (dans le cas d’une touche standard) ou une chaîne entre crochets désignant la touche (dans le cas d’une touche de fonction). Vous pouvez comparer cette valeur aux constantes du thème *Touches équivalents clavier* (cf. commande [OBJECT SET SHORTCUT](object-set-shortcut.md)).

Le paramètre *modifiers* retourne une valeur indiquant la ou les touche(s) de modification associée(s) à l’équivalent clavier. Si plusieurs touches de modification ont été combinées, la commande retourne le cumul de leurs valeurs. Vous pouvez comparer la valeur reçue aux constantes suivantes du thème *Evénements (Modifiers)* :

| Constante        | Type        | Valeur | Comment                                                   |
| ---------------- | ----------- | ------ | --------------------------------------------------------- |
| Command key mask | Entier long | 256    | Touche Ctrl sous Windows, touche Commande sous OS X       |
| Control key mask | Entier long | 4096   | Touche Ctrl sous OS X, ou clic droit sous Windows et OS X |
| Option key mask  | Entier long | 2048   | Touche Alt (aussi appelée Option sous OS X)               |
| Shift key mask   | Entier long | 512    | Windows et OS X                                           |

Si aucune touche de modification n’a été définie dans l’équivalent clavier, *modifiers* retourne 0\. 

**Note :** Si le paramètre *objet* désigne plusieurs objets du formulaire ayant des paramétrages différents, la commande retourne "" dans *touche* et 0 dans *modifiers*. 

#### Voir aussi 

[OBJECT SET SHORTCUT](object-set-shortcut.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1186 |
| Thread safe | &check; |
| Interdite sur le serveur ||


