---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence de document |
| Résultat | Real | &#8592; | Position dans le fichier (exprimée en octets) à partir du début du fichier |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get document position.Summary-->Cette commande ne fonctionne qu'avec un document déjà ouvert, dont vous avez passé le numéro de référence dans le paramètre *docRef*.<!-- END REF-->

**Get document position** retourne la position, à partir du début du document, à laquelle la prochaine lecture ([RECEIVE PACKET](receive-packet.md)) ou écriture ([SEND PACKET](send-packet.md)) aura lieu.

#### Voir aussi 

[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  
[SET DOCUMENT POSITION](set-document-position.md)  