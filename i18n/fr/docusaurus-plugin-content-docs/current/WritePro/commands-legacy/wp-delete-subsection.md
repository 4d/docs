---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *typeSousSection* )<!-- END REF-->
<!--REF #_command_.WP DELETE SUBSECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Objet | &#x1F852; | Section 4D Write Pro |
| typeSousSection | Entier long | &#x1F852; | Type de sous-section (wk first page, wk left page ou wk right page) |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP DELETE SUBSECTION.Summary-->La commande **WP DELETE SUBSECTION** supprime la sous-section du type *typeSousSection* depuis la section 4D Write Pro *wpSection*.<!-- END REF-->

Dans *wpSection*, passez la section dans laquelle vous souhaitez supprimer la sous-section. Cette section peut être obtenue à l'aide des commandes [WP Get sections](wp-get-sections.md) ou [WP Get section](wp-get-section.md).

Le paramètre *typeSousSection* indique la sous-section à supprimer. Vous pouvez passer l'une des constantes suivantes :  
  
| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| wk first page | Entier long | 1      |
| wk left page  | Entier long | 2      |
| wk right page | Entier long | 3      |

**Note :** La suppression d'une sous-section d'une page de gauche ou d'une page de droite supprimera automatiquement la sous-section opposée. Par exemple, si vous supprimez une sous-section de la page de droite, la sous-section de la page de gauche est automatiquement supprimée.

Si le *typeSousSection* n'existe pas, la commande ne fait rien (aucun erreur n'est générée).

#### Exemple 

Vous souhaitez supprimer la sous-section "première page" de la première section :

```4d
 var $section;$subsection : Object
  // lire la première section
 $section:=WP Get section(wpDoc;1)
  // Supprimer la sous-section
 WP DELETE SUBSECTION($section;wk first page)
```

#### Voir aussi 

[WP Get subsection](wp-get-subsection.md)  
[WP New subsection](wp-new-subsection.md)  