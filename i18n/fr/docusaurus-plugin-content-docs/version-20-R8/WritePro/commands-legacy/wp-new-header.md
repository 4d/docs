---
id: wp-new-header
title: WP New header
slug: /WritePro/commands/wp-new-header
displayed_sidebar: docs
---

<!--REF #_command_.WP New header.Syntax-->**WP New header** ( *wpSection* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP New header.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Section ou sous-section 4D Write Pro |
| Résultat | Object | &#8592; | En-tête 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New header.Summary-->La commande **WP New header** crée et retourne l'en-tête associé à la section ou à la sous-section définie par le paramètre *wpSection* .<!-- END REF-->

Si un élément en-tête est déjà défini pour la section ou la sous-section, un objet indéfini est retourné et une erreur est générée.

#### Exemple 

Vous souhaitez créer un en-tête pour les pages de droite d'une section :

```4d
 var $section;$subsection;$header : Object
  //Récupère la première section
 $section:=WP Get section(wpDoc;1)
  //Récupère la sous-section droite de la première section
 $subsection:=WP Get subsection($section;wk right page)
 
  //Si la sous-section existe, fixez l'en-tête
 If($subsection#Null)
    $header:=WP New header($subsection)
 End if
```

#### Voir aussi 

[WP DELETE HEADER](wp-delete-header.md)  
[WP Get header](wp-get-header.md)  
[WP New footer](wp-new-footer.md)  