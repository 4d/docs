---
id: wp-get-section
title: WP Get section
slug: /WritePro/commands/wp-get-section
displayed_sidebar: docs
---

<!--REF #_command_.WP Get section.Syntax-->**WP Get section** ( *objCible* ) | (*docWP* ; *indexSection* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get section.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| objCible | Object | &#8594;  | Plage ou élément |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| indexSection | Integer | &#8594;  | Index section |
| Résultat | Object | &#8592; | Section 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get section.Summary-->La commande **WP Get section** retourne soit la première section intersectée par la plage ou par l'élément *objCible*, soit l'*indexSection* spécifié du document *docWP*.<!-- END REF-->

* Avec la première syntaxe (utilisant le paramètre *objCible*), la commande retourne la première section intersectée par la plage ou par l'élément. Vous pouvez passer dans *objCible* :  
   * une plage, ou  
   * un élément (tableau / ligne / paragraphe / corps / zone de texte / en-tête / pied). Vous ne pouvez passer ni une sous-section ni une image ancrée (dans ce cas, une erreur est retournée).  
Si la plage ou l'élément est associé(e) à un en-tête ou à un pied de page, **WP Get section** retourne la section à laquelle l'en-tête ou le pied de page est associé. Si la plage ou l'élément est ou est associé(e) à une zone de texte, **WP Get section** retourne toujours la première section, sauf s'il est ancré à une section (dans ce cas, la section est renvoyée).
* Avec la deuxième syntaxe (utilisant le paramètre *docWP*), la commande retourne la section correspondant à la section *indexSection* spécifiée (la valeur d'*indexSection* doit être >=1).  
Si aucune section n'est définie pour l'*indexSection* spécifié, la commande retourne un objet indéfini (aucune erreur n'est retournée).

**Note :** Utilisez la commande [WP Get subsection](wp-get-subsection.md) pour lire une sous-section depuis une section ou depuis une plage.

#### Exemple 

Vous souhaitez lire la première section :

```4d
 var $section : Object
  // lire la référence de la première section
 $section:=WP Get section(wpDoc;1)
```

#### Voir aussi 

[WP Get sections](wp-get-sections.md)  
[WP Get subsection](wp-get-subsection.md)  