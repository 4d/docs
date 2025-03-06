---
id: wp-get-body
title: WP Get body
slug: /WritePro/commands/wp-get-body
displayed_sidebar: docs
---

<!--REF #_command_.WP Get body.Syntax-->**WP Get body** ( *docWP* ) -> Résultat<!-- END REF-->
<!--REF #_command_.WP Get body.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |
| Résultat | Object | &#8592; | Corps de 4D Write Pro |

<!-- END REF-->

#### Description 

<!--REF #_command_.WP Get body.Summary-->La commande **WP Get body** retourne la partie corps (*body*) du document 4D Write Pro *docWP*.<!-- END REF-->

Cet élément peut ensuite être passé aux commandes :

* [WP SELECT](wp-select.md) pour sélectionner le corps du document.
* [WP Text range](wp-text-range.md) pour définir le corps en tant que plage.
* [WP SET ATTRIBUTES](../commands/wp-set-attributes.md) et [WP GET ATTRIBUTES](../commands/wp-get-attributes.md) pour gérer les attributs du corps du document.

#### Exemple 

Vous voulez copier le corps d'un document 4D Write Pro dans un autre document 4D Write Pro :

```4d
 var $bodySource;$rangeSource;$tempoc;$bodyTarget;$rangeTarget : Object
 
 $bodySource:=WP Get body([TEMPLATES]WPtemplate)
 $rangeSource:=WP Text range($bodySource;wk start text;wk end text)
 $tempoc:=WP New($rangeSource)
 
 $bodyTarget:=WP Get body([Docs]MyWPDoc)
 $rangeTarget:=WP Text range($bodyTarget;wk start text;wk end text)
 
 WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)
```

#### Voir aussi 

[WP Text range](wp-text-range.md)  