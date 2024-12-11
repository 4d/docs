---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *docRef* ; *offset* {; *ancre*} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence de document |
| offset | Real | &#8594;  | Position dans fichier (exprimée en octets) |
| ancre | Integer | &#8594;  | 1 = Par rapport au début du fichier 2 = Par rapport à la fin du fichier 3 = Par rapport à la position courante |

<!-- END REF-->

#### Description 

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->Cette commande ne fonctionne qu'avec un document déjà ouvert, dont vous avez passé le numéro de référence dans le paramètre *docRef*.<!-- END REF-->définit la position que vous passez dans *offset* comme étant celle à laquelle la prochaine lecture ([RECEIVE PACKET](receive-packet.md)) ou écriture ([SEND PACKET](send-packet.md)) aura lieu.

Si vous omettez le paramètre optionnel *ancre*, la position est définie par rapport au début du document. Sinon, vous pouvez passer dans le paramètre *ancre* une des valeurs listées ci-dessus. 

En fonction de l'*ancre* définie, vous pouvez passer des valeurs positives ou négatives dans le paramètre *offset*.

#### Voir aussi 

[Get document position](get-document-position.md)  
[RECEIVE PACKET](receive-packet.md)  
[SEND PACKET](send-packet.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 482 |
| Thread safe | &check; |
| Interdite sur le serveur ||


