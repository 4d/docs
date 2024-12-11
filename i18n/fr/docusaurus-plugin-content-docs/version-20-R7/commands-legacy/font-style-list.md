---
id: font-style-list
title: FONT STYLE LIST
slug: /commands/font-style-list
displayed_sidebar: docs
---

<!--REF #_command_.FONT STYLE LIST.Syntax-->**FONT STYLE LIST** ( *famillePolice* ; *listeStylesPolice* ; *listeNomsPolice* )<!-- END REF-->
<!--REF #_command_.FONT STYLE LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| famillePolice | Text | &#8594;  | Nom de la famille de police |
| listeStylesPolice | Text array | &#8592; | Liste des styles pris en charge par la famille de police |
| listeNomsPolice | Text array | &#8592; | Liste des noms complets pris en charge par la famille de police |

<!-- END REF-->

#### Description 

<!--REF #_command_.FONT STYLE LIST.Summary-->La commande **FONT STYLE LIST** retourne la liste des styles et la liste des noms complets pris en charge par la famille de police désignée par le paramètre *famillePolice*.<!-- END REF--> Cette commande vous permet de concevoir des interfaces manipulant les familles de polices et les styles de police, en particulier dans le contexte des zones *4D Write Pro*. 

Dans *famillePolice*, passez le nom de la famille de police dont vous souhaitez connaître les styles et les noms complets.

Dans *listeStylesPolice*, passez un tableau texte qui sera rempli avec la liste des styles pris en charge par la *famillePolice*. Les styles sont retournés avec leurs noms localisés (i.e. un élément "Italique" sera "Itálico" sur un système espagnol), ce qui vous permet par exemple de construire dynamiquement un pop-up menu "Styles" localisé.

Dans *listeNomsPolice*, passez un tableau texte qui sera rempli avec la liste complète des noms de police pris en charge par la *famillePolice*. A la différence du tableau *listeStylesPolice*, le tableau *listeNomsPolice* retourne des valeurs non localisées, i.e. des noms de police basés sur leur identifiant système. Ainsi, les noms de police seront indépendants de la langue du système. Les éléments de ce tableau sont des chaînes de caractères destinées à être utilisées avec l'attribut wk font de la commande 4D Write Pro *WP SET ATTRIBUTES*. Grâce à cette fonctionnalité, les documents 4D Write Pro stockent les noms de police et peuvent donc être ouverts sur différentes machines, quelle que soit la langue du système, sans problèmes de polices. 

 Si la *famillePolice* n'est pas trouvée sur la machine, les tableaux sont retournés vides. Pour connaître la liste des familles de police disponibles sur la machine, utilisez la commande [FONT LIST](font-list.md).

#### Exemple 

Vous voulez sélectionner les styles de la famille de police "Verdana" (si elle est disponible) :

```4d
 ARRAY TEXT($aTfonts;0)
 ARRAY TEXT($aTStyles;0)
 ARRAY TEXT($aTnames;0)
 var $numStyle : Integer
 
 FONT LIST($aTfonts)
 $numStyle:=Find in array($aTfonts;"Verdana")
 If($numStyle#0)
    FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)
 End if
 
  //Par exemple, les tableaux résultants sont :
  //$aTStyles{1}="Normal"
  //$aTStyles{1}="Italique"
  //$aTStyles{1}="Gras"
  //$aTStyles{1}="Gras Italique"
 
  // $aTnames{1}="Verdana"
  // $aTnames{1}="Verdana Italic"
  // $aTnames{1}="Verdana Bold"
  // $aTnames{1}="Verdana Bold Italic"
```

#### Voir aussi 

[FONT LIST](font-list.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1362 |
| Thread safe | &check; |
| Interdite sur le serveur ||


