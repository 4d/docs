---
id: wp-get-attributes
title: WP GET ATTRIBUTES
slug: /WritePro/commands/wp-get-attributes
displayed_sidebar: docs
---

<!--REF #_command_.WP GET ATTRIBUTES.Syntax-->**WP GET ATTRIBUTES** ( *objCible* ; *nomAttribut* ; *valeurAttribut* {; *nomAttribut2* ; *valeurAttribut2* ; ... ; *nomAttributN* ; *valeurAttributN*} )<!-- END REF-->
<!--REF #_command_.WP GET ATTRIBUTES.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément ou document 4D Write Pro |
| nomAttribut | Text | &#8594;  | Nom d'attribut dont vous souhaitez lire la valeur |
| valeurAttribut | Texte, Numérique, Tableau, Collection, Image, Date | &#x1F858; | Valeur courante de l'attribut |

<!-- END REF-->

## Description 

<!--REF #_command_.WP GET ATTRIBUTES.Summary-->La commande **WP GET ATTRIBUTES** retourne la valeur courante d'attribut(s) dans une plage, un élément ou un document 4D Write Pro.<!-- END REF--> Cette commande donne accès à tous les types d'attributs internes de 4D Write Pro : caractère, paragraphe, document, tableau ou image. 

Dans le paramètre *objCible*, vous pouvez passer :

* un objet plage 4D Write Pro, ou
* un élément (en-tête / pied / corps / tableau / paragraphe / image en ligne ou ancrée / section / sous-section / feuille de style), ou
* un document 4D Write Pro

Pour une liste complète des attributs que vous pouvez passer dans *nomAttribut* ainsi que leurs valeurs respectives retournées dans *valeurAttribut*, veuillez vous référer à la section *Attributs 4D Write Pro*.

S'il y a des valeurs différentes pour un même attribut dans l'élément passé en paramètre, la commande retourne :

* pour les valeurs numériques, wk mixed
* pour un tableau, un tableau vide (tabulations, couleur si *valeurAttribut* est défini en tant que tableau), avec une exception pour l'attribut wk text shadow offset pour lequel la valeur du tableau contiendra toujours 2 éléments qui peuvent être fixés séparément à wk mixed si soit le décalage horizontal soit le décalage vertical (ou les deux) sont mélangés.
* pour les valeurs chaîne, une chaîne vide
* pour les valeurs image, une image vide

**Note :** Si objCible contient des feuilles de style de paragraphe et de caractère, les noms des feuilles de style sont retournés.

## Exemple 

Vous souhaitez obtenir la couleur de fond de la zone sélectionnée :

```4d
 $range:=WP Selection range(*;"WParea")
 WP GET ATTRIBUTES($range;wk background color;$bcol)
```

## Voir aussi 

*Attributs 4D Write Pro*  
*Constantes 4D Write Pro*  
[WP RESET ATTRIBUTES](../commands/wp-reset-attributes.md)  
[WP SET ATTRIBUTES](wp-set-attributes.md)  