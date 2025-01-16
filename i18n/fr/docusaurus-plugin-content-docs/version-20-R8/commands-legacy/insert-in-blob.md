---
id: insert-in-blob
title: INSERT IN BLOB
slug: /commands/insert-in-blob
displayed_sidebar: docs
---

<!--REF #_command_.INSERT IN BLOB.Syntax-->**INSERT IN BLOB** ( *blob* ; *décalage* ; *nombre* {; *remplisseur*} )<!-- END REF-->
<!--REF #_command_.INSERT IN BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB dans lequel insérer les octets |
| décalage | Integer | &#8594;  | Position de début d'insertion des octets |
| nombre | Integer | &#8594;  | Nombre d'octets à insérer |
| remplisseur | Integer | &#8594;  | Valeur d'octet par défaut (0x00..0xFF) 0x00 si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.INSERT IN BLOB.Summary-->**INSERT IN BLOB** insère le nombre d'octets spécifié par *nombre* dans le BLOB *blob* à la position spécifiée par *décalage*.<!-- END REF--> La taille du BLOB est augmentée de *nombre* d'octets.

Si vous ne passez pas le paramètre optionnel *remplisseur*, la valeur des octets insérés dans le BLOB est fixée à *0x00*. Sinon, les octets prennent la valeur passée dans *remplisseur* (modulo 256 — 0..255).

Vous passez dans le paramètre *décalage* la position (relative à l'origine du BLOB) de l'insertion. 

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Voir aussi 

[DELETE FROM BLOB](delete-from-blob.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 559 |
| Thread safe | &check; |


