---
id: wp-delete-style-sheet
title: WP DELETE STYLE SHEET
slug: /WritePro/commands/wp-delete-style-sheet
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE STYLE SHEET.Syntax-->**WP DELETE STYLE SHEET** ( *objFeuilleStyle* : Object ) | (*docWP* : Object ; *nomFeuilleStyle* : Text )<!-- END REF-->
<!--REF #_command_.WP DELETE STYLE SHEET.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objFeuilleStyle | Object | &#8594;  | Objet feuille de style |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| nomFeuilleStyle | Text | &#8594;  | Nom de la feuille de style |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.WP DELETE STYLE SHEET.Summary-->La commande **WP DELETE STYLE SHEET** retire la feuille de style de paragraphe ou de caractère désignée du document courant.<!-- END REF--> Lorsqu'une feuille de style est retirée, chaque caractère ou paragraphe auquel elle s'appliquait reprend le style original (*i.e.* par défaut).

Cette commande offre deux manières de retirer une feuille de style. Vous pouvez indiquer :

* l'objet feuille de style (créé à l'aide de [WP New style sheet](../commands/wp-new-style-sheet) ou retourné par la commande [WP Get style sheet](../commands/wp-get-style-sheet)) à retirer dans le paramètre *typeFeuilleStyle*, ou
* le document 4D Write Pro avec le nom de la feuille de style à retirer dans les paramètres *docWP* et nomFeuilleStyle.

**Note** : La feuille de style par défaut ("Normal") ne peut pas être supprimée.

## Voir aussi 

*Accéder au contenu des documents par programmation*  
[WP Get style sheet](../commands/wp-get-style-sheet)  
[WP Get style sheets](../commands/wp-get-style-sheets)  
[WP IMPORT STYLE SHEETS](../commands/wp-import-style-sheets)  
[WP New style sheet](../commands/wp-new-style-sheet)  
