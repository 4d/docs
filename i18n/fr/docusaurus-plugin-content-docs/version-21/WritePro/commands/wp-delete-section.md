---
id: wp-delete-section
title: WP DELETE SECTION
slug: /WritePro/commands/wp-delete-section
displayed_sidebar: docs
---

<!--REF #_command_.WP DELETE SECTION.Syntax-->**WP DELETE SECTION** ( *section* )<br/> **WP DELETE SECTION** ( *wpDoc* ; *indexNumber* {; *count*} )<!-- END REF-->

<!--REF #_command_.WP DELETE SECTION.Params-->

| Paramètres  | Type    |                             | Description                     |
| ----------- | ------- | --------------------------- | ------------------------------- |
| section     | Object  | &#8594; | Section 4D Write Pro            |
| wpDoc       | Object  | &#8594; | Document 4D Write Pro           |
| indexNumber | Integer | &#8594; | Index de la section à supprimer |
| count       | Integer | &#8594; | Nombre de sections à supprimer  |

<!-- END REF-->

## Description

La commande **WP DELETE SECTION** <!--REF #_command_.WP DELETE SECTION.Summary--> supprime l'objet *section* transmis, ou supprime une ou plusieurs sections à partir de *indexNumber* et en fonction du *count* transmis<!-- END REF-->. Lorsqu'une section est supprimée, tout ce qui lui est associé, y compris l'en-tête, le pied de page, une partie du corps, les images ancrées, les zones de texte et le saut de section final (qu'il s'agisse d'un saut de section ou d'un saut de section continu), est également supprimé.

Une erreur est levée si la commande **WP DELETE SECTION** demande la suppression de toutes les sections ou si le document ne contient qu'une seule section.

**WP DELETE SECTION** ré-indexe l'attribut anchorSection des zones de texte et des images pour ajuster leurs ancres à leurs sections après des modifications. Par exemple, si un document comporte quatre sections et que la deuxième section est supprimée, les sections 3 et 4 deviendront les sections 2 et 3 et les zones de texte et les images qui étaient auparavant ancrées dans les sections 3 et 4 seront désormais ancrées dans les sections 2 et 3.

:::note

Si une image ou une zone de texte est ancrée à une page (par exemple, la page 20) et que cette page n'existe plus après la suppression d'une section, l'image (ou la zone de texte) restera dans le document et réapparaîtra à la page 20 si cette page existe à nouveau ultérieurement.

:::

## Exemples

Pour supprimer la première section du document :

```4d

wpDoc:=WP Import document("test.wp")
// supprimer uniquement la section 1 (sans erreur, sauf s'il n'y a qu'une seule section dans le document)
WP DELETE SECTION(wpDoc ; 1) 

```

Pour supprimer la section 5 du document :

```4d

wpDoc:=WP Import document("test.wp")
// supprimer uniquement la section 5
WP DELETE SECTION(wpDoc ; 5)

```

Pour supprimer la section 5, 6 et 7 du document:

```4d
 
wpDoc:=WP Import document("test.wp")
WP DELETE SECTION(wpDoc ; 5 ; 3 )

```

Pour supprimer toutes les sections à partir de 5 :

```4d
 
wpDoc:=WP Import document("test.wp")
// supprimer toutes les sections à partir de la section 5 (sans erreur, sauf si la section 5 n'existe pas)
WP DELETE SECTION(wpDoc ; 5 ; MAXLONG )

```

Pour récupérer et supprimer la section 5 :

```4d
 
wpDoc:=WP Import document("test.wp")
// récupèrer la section 5
$section:=WP Get section(wpDoc, 5)
// supprimer $section
WP DELETE SECTION($section)

```

## Voir également

[WP Get section](../commands-legacy/wp-get-section.md)\
[WP RESET ATTRIBUTES](wp-reset-attributes.md)
