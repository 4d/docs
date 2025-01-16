---
id: wp-delete-header
title: WP DELETE HEADER
slug: /WritePro/commands/wp-delete-header
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE HEADER.Syntax-->**WP DELETE HEADER** ( *wpSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE HEADER.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Section ou sous-section 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE HEADER.Summary-->La commande **WP DELETE HEADER** supprime l'élément en-tête associé à la section ou à la sous-section définie par le paramètre *wpSection*.<!-- END REF--> 

S'il n'existe pas d'élément en-tête associé à la section ou à la sous-section, la commande ne fait rien. 

#### Exemple 

Vous souhaitez supprimer l'en-tête des pages de droite d'une section :

```4d
 var $section;$subsection;$header : Object
  //Récupère la référence de la première section
 $section:=WP Get section(wpDoc;1)
  //Récupère la référence de la sous-section droite de la première section
 $subsection:=WP Get subsection($section;wk right page)
 
  //Supprime l'en-tête
 WP DELETE HEADER($subsection)
```

#### Voir aussi 

[WP Get header](wp-get-header.md)  
[WP New header](wp-new-header.md)  