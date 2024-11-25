---
id: wp-new-style-sheet
title: WP New style sheet
slug: /WritePro/commands/wp-new-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP New style sheet.Syntax-->**WP New style sheet** ( *docWP* ; *typeFeuilleStyle* ; *nomFeuilleStyle* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP New style sheet.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| typeFeuilleStyle | Integer | &#8594;  | Type de la feuille de style |
| nomFeuilleStyle | Text | &#8594;  | Nom de la feuille de style |
| Résultat | Object | &#8592; | Objet feuille de style |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New style sheet.Summary-->La commande **WP New style sheet** crée un nouvel objet feuille de style (vide) pour le *docWP* désigné.<!-- END REF-->

Dans le paramètre docWP, passez un document 4D Write Pro. 

Le paramètre *typeFeuilleStyle* vous permet d'indiquer le type de feuille de style, *i.e.* la partie de docWP qui sera affectée par la feuille de style. Deux types sont disponibles :

* wk type character : Applique les attributs de style aux caractères.
* wk type paragraph : Applique les attributs de style aux paragraphes.

Passez un nom à la feuille de style dans le paramètre *nomFeuilleStyle*. Le nom de la feuille de style est stocké avec le document et facilite la réutilisation ou la modification du style. Il peut également être utilisé avec les commandes [WP Get style sheet](wp-get-style-sheet.md) et [WP DELETE STYLE SHEET](wp-delete-style-sheet.md). Le nom de la feuille de style doit être conforme aux règles suivantes :

* il doit commencer par une lettre
* il peut ensuite contenir des caractères alphanumériques, des espaces, des caractères "-" ou des caractères unicode >= 128
* il doit être unique dans le document, quel que soit le type
* il ne doit pas commencer par "section", qui est réservé
* le "\_" est remplacé par un espace et les espaces de fin de ligne sont supprimés.

Vous pouvez indiquer les attributs de la feuille de style à l'aide de la commande [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) ou de la notation objet (voir *Attributs 4D Write Pro*). Pour consulter la liste des attributs disponibles, référez-vous à la section *Style sheet attributes*.

**Notes** : 

* Une feuille de style modifie uniquement l'affichage d'un caractère ou d'un paragraphe, mais ne modifie pas la façon dont il est stocké dans le document. Si une feuille de style est supprimée, le texte reprendra le style par défaut.
* Les attributs de style non définis dans la nouvelle feuille de style utiliseront automatiquement le style Normal. Pour plus d'informations, consultez *Commandes feuilles de style*.

#### Exemple 

Le code suivant crée et définit une feuille de style de paragraphe :

```4d
 var $styleSheet : Object
 $styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Titre principal")
 
  //définit les paramètres de la feuille de style
 WP SET ATTRIBUTES($styleSheet;wk font family;"Papyrus")
 WP FIXER ATTRIBUTS($styleSheet;wk font size;"48pt")
 WP FIXER ATTRIBUTS($styleSheet;wk text color;"red")
 WP FIXER ATTRIBUTS($styleSheet;wk text align;wk left)
 
 
  //Appliquer la feuille de style au premier paragraphe
 var $Paragraphs : Collection
 $Paragraphs:=WP Lireéléments(wpArea;wk type paragraph)
 If($Paragraphs.length>0)
    WP SET ATTRIBUTES($Paragraphs[0];wk style sheet;$styleSheet)
 End if 
```

#### Voir aussi 

*Accéder au contenu des documents par programmation*  
[WP DELETE STYLE SHEET](wp-delete-style-sheet.md)  
[WP Get style sheet](wp-get-style-sheet.md)  
[WP Get style sheets](wp-get-style-sheets.md)  
[WP IMPORT STYLE SHEETS](wp-import-style-sheets.md)  