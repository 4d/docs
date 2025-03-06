---
id: wp-delete-footer
title: WP DELETE FOOTER
slug: /WritePro/commands/wp-delete-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE FOOTER.Syntax-->**WP DELETE FOOTER** ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE FOOTER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Section ou sous-section 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE FOOTER.Summary-->La commande **WP DELETE FOOTER** supprime l'élément pied associé à la section ou à la sous-section définie par le paramètre *wpSection*.<!-- END REF--> 

S'il n'existe pas d'élément pied associé à la section ou à la sous-section, la commande ne fait rien.

#### Exemple 

Vous souhaitez supprimer le pied de page des pages de droite d'une section :

```4d
 var $section;$subsection;$header : Object
  //Récupère la référence de la première section
 $section:=WP Get section(wpDoc;1)
  //Récupère la référence de la sous-section gauche de la première section
 $subsection:=WP Get subsection($section;wk left page)
 
  //Supprime le pied
 WP DELETE FOOTER($subsection)
```

#### Voir aussi 

[WP Get footer](wp-get-footer.md)  
[WP New footer](wp-new-footer.md)  