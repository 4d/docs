---
id: wp-use-page-setup
title: WP USE PAGE SETUP
slug: /WritePro/commands/wp-use-page-setup
displayed_sidebar: docs
---

<!--REF #_command_.WP USE PAGE SETUP.Syntax-->**WP USE PAGE SETUP** ( *docWP* )<!-- END REF-->
<!--REF #_command_.WP USE PAGE SETUP.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docWP | Object | &#8594;  | Document 4D Write Pro |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.WP USE PAGE SETUP.Summary-->La commande **WP USE PAGE SETUP** modifie les options d'impression de la page courante, sur la base des attributs du document 4D Write Pro qui concernent la taille et l'orientation de la page.<!-- END REF--> Cette commande doit être appelée juste avant [WP PRINT](wp-print.md) de façon à synchroniser les paramètres courants d'impression de la page avec les options de page du document 4D Write Pro.

D'autres options peuvent être définies avec la commande 4D [PRINT SETTINGS](../../commands-legacy/print-settings.md). Les options d'impression sont définies pour toute la session 4D.

#### Exemple 

Avant d'imprimer un document, vous souhaitez réinitialiser la taille et l'orientation de sa page avec les valeurs stockées dans le document :

```4d
 WP USE PAGE SETUP(writeProDoc)
```

#### Voir aussi 

[WP PRINT](wp-print.md)  