---
id: wp-delete-subsection
title: WP DELETE SUBSECTION
slug: /WritePro/commands/wp-delete-subsection
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SUBSECTION.Syntax-->**WP DELETE SUBSECTION** ( *wpSection* ; *subSectionType* )<br/>**WP DELETE SUBSECTION** ( *subSection* )<!-- END REF-->

<!--REF #_command_.WP DELETE SUBSECTION.Params-->

| Paramètres     | Type    |                             | Description                                                                             |
| -------------- | ------- | --------------------------- | --------------------------------------------------------------------------------------- |
| wpSection      | Object  | &#8594; | 4D Write Pro section                                                                    |
| subSectionType | Integer | &#8594; | Type de sous-section (wk first page, wk left page, or wk right page) |
| subSection     | Object  | &#8594; | Sous-section 4D Write Pro                                                               |

<!-- END REF-->

## Description

La commande **WP DELETE SUBSECTION** <!--REF #_command_.WP DELETE SUBSECTION.Summary--> supprime les éléments de sous-section *subSectionType* de la section *wpSection* 4D Write Pro, ou supprime directement la *subSection*<!-- END REF--> passée. Les éléments de sous-section comprennent les en-têtes, les pieds de page, les colonnes, les images ancrées, etc. Notez que le corps du document n'est pas modifié.

Dans *wpSection*, passez la section à partir de laquelle vous voulez supprimer les éléments de la sous-section. La section peut être obtenue en utilisant les commandes [WP Get sections](../commands-legacy/wp-get-sections.md) ou [WP Get section](../commands-legacy/wp-get-section.md).

Le paramètre subSectionType spécifie la sous-section à supprimer. Vous pouvez passer l'une des constantes suivantes :

| Constante     | Type    | Valeur |
| ------------- | ------- | ------ |
| wk first page | Integer | 1      |
| wk left page  | Integer | 2      |
| wk right page | Integer | 3      |

:::note

La suppression d'une sous-section de la page gauche ou de la page droite entraîne automatiquement la suppression de la sous-section opposée. Par exemple, si vous supprimez une sous-section de la page de droite, la sous-section de la page de gauche est automatiquement supprimée.

:::

Si le *subSectionType* n'existe pas, la commande ne fait rien (aucune erreur n'est générée).

:::note

Lorsqu'une sous-section est supprimée, l'en-tête et le pied de page sont supprimés, ainsi que les images et les zones de texte ancrées, mais le corps reste intact.

:::

## Exemple 1

Vous souhaitez supprimer la sous-section "première page" de la première section :

```4d
 var $section;$subsection : Object
  // lire la première section
 $section:=WP Get section(wpDoc;1)
  // Supprimer la sous-section
 WP DELETE SUBSECTION($section;wk first page)
```

## Exemple 2

Vous souhaitez supprimer la sous-section de la page de droite de la section 3 :

```4d

$subSection:=WP Get subsection(WP Get section($document;3);wk right page)
 WP DELETE SUBSECTION($subSection)
 
```

## Voir également

[WP Get subsection](../commands-legacy/wp-get-subsection.md)\
[WP New subsection](../commands-legacy/wp-new-subsection.md)