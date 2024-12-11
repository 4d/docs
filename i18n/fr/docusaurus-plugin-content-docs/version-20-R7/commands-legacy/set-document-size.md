---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* ; *taille* )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence de document |
| taille | Real | &#8594;  | Nouvelle taille (en octets) de document |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->La commande **SET DOCUMENT SIZE** fixe la taille d'un document au nombre d'octets que vous avez passé dans *taille*.<!-- END REF--> 

Le document doit avoir été ouvert au préalable. Vous passez son numéro de référence dans *docRef*.

Sous Mac OS, c'est la taille de la data fork du document qui est modifiée.

#### Voir aussi 

[Get document position](get-document-position.md)  
[Get document size](get-document-size.md)  
[SET DOCUMENT POSITION](set-document-position.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 480 |
| Thread safe | &check; |
| Interdite sur le serveur ||


