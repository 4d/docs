---
id: wp-new-subsection
title: WP New subsection
slug: /WritePro/commands/wp-new-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP New subsection.Syntax-->**WP New subsection** ( *wpSection* ; *typeSousSection* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP New subsection.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| wpSection | Object | &#8594;  | Section 4D Write Pro |
| typeSousSection | Integer | &#8594;  | Type de sous-section (wk first page, wk left page ou wk right page) |
| Résultat | Object | &#8592; | Nouvelle sous-section |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP New subsection.Summary-->La commande **WP New subsection** crée et retourne une nouvelle sous-section de type *typeSousSection* dans la section 4D Write Pro *wpSection*.<!-- END REF-->

Dans *wpSection*, passez la section où vous souhaitez créer une nouvelle sous-section. Cette section peut être obtenue à l'aide des commandes [WP Get sections](wp-get-sections.md) ou [WP Get section](wp-get-section.md).

Le paramètre *typeSousSection* indique la sous-section à créer. Vous pouvez passer l'une des constantes suivantes :  
  
| Constante     | Type        | Valeur |
| ------------- | ----------- | ------ |
| wk first page | Entier long | 1      |
| wk left page  | Entier long | 2      |
| wk right page | Entier long | 3      |

**Note :** La création d'une sous-section de page de gauche ou de page de droite créera automatiquement la sous-section opposée. Par exemple, si vous créez une sous-section de page de gauche, la sous-section de la page de droite est automatiquement définie.

Si le *typeSousSection* existe déjà, une erreur est retournée.

#### Exemple 

Vous souhaitez créer des sous-sections de gauche et de droite :

```4d
 var $section;$subsection : Object
  // lire la première section
 $section:=WP Get section(wpDoc;1)
  // Créer la section de gauche - la section de droite est créée automatiquement
 $subsection:=WP New subsection($section;wk left page)
```

#### Voir aussi 

[WP DELETE SUBSECTION](../commands/wp-delete-subsection.md)  
[WP Get subsection](wp-get-subsection.md)  