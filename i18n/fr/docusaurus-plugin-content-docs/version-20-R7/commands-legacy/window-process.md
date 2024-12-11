---
id: window-process
title: Window process
slug: /commands/window-process
displayed_sidebar: docs
---

<!--REF #_command_.Window process.Syntax-->**Window process** {( *fenêtre* )} : Integer<!-- END REF-->
<!--REF #_command_.Window process.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de fenêtre |
| Résultat | Integer | &#8592; | Numéro de référence de process |

<!-- END REF-->

#### Description 

<!--REF #_command_.Window process.Summary-->La commande **Window process** retourne le numéro du process qui exécute la fenêtre dont le numéro de référence est passé dans *fenêtre*.<!-- END REF--> Si la fenêtre n'existe pas, la commande retourne *0* (zéro).

Si vous omettez le paramètre *fenêtre*, **Window process** retourne le numéro du process de la fenêtre de premier plan du process courant.

#### Voir aussi 

[Current process](current-process.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 446 |
| Thread safe | &check; |
| Interdite sur le serveur ||


