---
id: wp-get-sections
title: WP Get sections
slug: /WritePro/commands/wp-get-sections
displayed_sidebar: docs
---

<!--REF #_command_.WP Get sections.Syntax-->**WP Get sections** ( *objCible* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get sections.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou document 4D Write Pro |
| Résultat | Collection | &#8592; | Collection de toutes les sections contenues dans objCible |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get sections.Summary-->La commande **WP Get sections** retourne une collection de toutes les sections définies dans le paramètre *objCible*.<!-- END REF-->

Dans le paramètre *objCible*, vous pouvez passer :

* une plage, ou
* un élément (tableau / ligne / paragraphe / corps / en-tête / pied de page / zone de texte), ou
* un document 4D Write Pro

Si la plage ou l'élément est associé(e) à un en-tête ou à un pied de page, **WP Get sections** retourne la section à laquelle l'en-tête ou le pied de page est associé. 

Pour les zones de texte et les images ancrées, **WP Get sections** retourne : 

* une collection contenant une seule section si l'élément est ancré à une section,
* une collection avec toutes les sections si l'élément est ancré à toutes les sections,
* une collection vide si l'élément est ancré à la vue intégrée ou à un numéro de page.

Pour plus d'informations sur les sections, voir le paragraphe *Gestion des en-têtes, pieds de pages et sections*.

#### Exemple 

Vous souhaitez modifier un attribut de la dernière section de la zone 4D Write Pro :

```4d
 var $colSections : Collection
 $colSections:=WP Get sections(wpDoc)
 WP SET ATTRIBUTES($colSections[$colSections.length-1];wk column count;3)
```

#### Voir aussi 

[WP Get section](wp-get-section.md)  