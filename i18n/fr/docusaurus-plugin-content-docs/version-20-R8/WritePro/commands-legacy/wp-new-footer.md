---
id: wp-new-footer
title: WP New footer
slug: /WritePro/commands/wp-new-footer
displayed_sidebar: docs
---

<!--REF #_command_.WP New footer.Syntax-->**WP New footer** ( *wpSection* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP New footer.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Section ou sous-section 4D Write Pro |
| Résultat | Object | &#8592; | Pied de page 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New footer.Summary-->La commande **WP New footer** crée et retourne le pied associé à la section ou à la sous-section définie par le paramètre *wpSection* .<!-- END REF-->

Si un élément pied est déjà défini pour la section ou la sous-section, un objet indéfini est retourné et une erreur est générée

#### Exemple 

Vous souhaitez créer un pied pour les pages de gauche d'une section :

```4d
 var $section;$subsection;$footer : Object
  //Récupère la première section
 $section:=WP Get section(wpDoc;1)
  //Récupère la référence de la sous-section gauche de la première section
 $subsection:=WP Get subsection($section;wk left page)
 
  //Si la sous-section existe, fixez le pied
 If($subsection#Null)
    $footer:=WP New footer($subsection)
 End if
```

#### Voir aussi 

[WP DELETE FOOTER](wp-delete-footer.md)  
[WP Get footer](wp-get-footer.md)  
[WP New header](wp-new-header.md)  