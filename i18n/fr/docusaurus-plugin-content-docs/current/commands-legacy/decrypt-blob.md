---
id: decrypt-blob
title: DECRYPT BLOB
slug: /commands/decrypt-blob
displayed_sidebar: docs
---

<!--REF #_command_.DECRYPT BLOB.Syntax-->**DECRYPT BLOB** ( *aDécrypter* ; *cléPubEmetteur* {; *cléPrivRécepteur*} )<!-- END REF-->
<!--REF #_command_.DECRYPT BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| aDécrypter | Blob | &#8596;  | Données à décrypter |
| ||| Données décryptées |
| cléPubEmetteur | Blob | &#8594;  | Clé publique de l’émetteur |
| cléPrivRécepteur | Blob | &#8594;  | Clé privée du récepteur |

<!-- END REF-->

#### Description 

<!--REF #_command_.DECRYPT BLOB.Summary-->La commande **DECRYPT BLOB** permet de décrypter le contenu du BLOB *aDécrypter* à l’aide de la clé publique de l’émetteur *cléPubEmetteur* ainsi que, optionnellement, de la clé privée du récepteur *cléPrivRécepteur*.<!-- END REF-->

Vous passez dans le paramètre *cléPubEmetteur* le BLOB contenant la clé publique de l’émetteur. Cette clé a été générée par l’émetteur (à l’aide de la commande [GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md)), qu’il doit ensuite transmettre au récepteur.

Le paramètre optionnel *cléPrivRécepteur* doit recevoir la clé privée du récepteur. Dans ce cas, le récepteur doit également avoir généré une paire de clés de cryptage à l’aide de [GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md) et transmis sa clé publique à l’émetteur. Le système de cryptage à deux clés permet de garantir que seul l’émetteur peut avoir crypté le message et seul le récepteur peut le décrypter.   
Pour plus d’informations sur le système de cryptage à deux clés, reportez-vous à la description de la commande [ENCRYPT BLOB](encrypt-blob.md). 

La commande **DECRYPT BLOB** comporte une fonction de vérification d’intégrité (checksum), afin d’empêcher toute modification malveillante ou accidentelle du contenu du BLOB. Si le BLOB crypté est endommagé ou modifié, la commande ne fera rien et retournera une erreur.

#### Exemple 

Reportez-vous aux exemples de la commande [ENCRYPT BLOB](encrypt-blob.md).

#### Voir aussi 

[ENCRYPT BLOB](encrypt-blob.md)  
[GENERATE ENCRYPTION KEYPAIR](generate-encryption-keypair.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 690 |
| Thread safe | &check; |
| Interdite sur le serveur ||


