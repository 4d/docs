---
id: close-resource-file
title: CLOSE RESOURCE FILE
slug: /commands/close-resource-file
displayed_sidebar: docs
---

<!--REF #_command_.CLOSE RESOURCE FILE.Syntax-->**CLOSE RESOURCE FILE** ( *resFichier* )<!-- END REF-->
<!--REF #_command_.CLOSE RESOURCE FILE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| resFichier | Time | &#8594;  | Numéro de référence de fichier de ressources |

<!-- END REF-->

#### Description 

<!--REF #_command_.CLOSE RESOURCE FILE.Summary-->La commande **CLOSE RESOURCE FILE** referme le fichier de ressources dont vous avez passé le numéro de référence dans *resFichier*.<!-- END REF-->

Même si vous avez ouvert plusieurs fois un fichier de ressources, il vous suffit d'appeler **CLOSE RESOURCE FILE** une seule fois pour le refermer.

Si vous appliquez **CLOSE RESOURCE FILE** au fichier de ressources de l'application 4D ou de la base, la commande le détecte et ne fait rien.

Si vous passez un numéro de référence de fichier de ressources non valide, la commande ne fait rien.

N'oubliez pas d'appeler finalement **CLOSE RESOURCE FILE** pour un fichier de ressources que vous avez ouvert à l'aide de la commande [Open resource file](open-resource-file.md). Notez cependant que 4D referme automatiquement tous les fichiers de ressources ouverts lorsque vous quittez l'application ou ouvrez une autre base de données.

#### Voir aussi 

[Open resource file](open-resource-file.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 498 |
| Thread safe | &check; |
| Interdite sur le serveur ||


