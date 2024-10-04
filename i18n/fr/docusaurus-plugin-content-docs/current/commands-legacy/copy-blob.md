---
id: copy-blob
title: COPY BLOB
slug: /commands/copy-blob
displayed_sidebar: docs
---

<!--REF #_command_.COPY BLOB.Syntax-->**COPY BLOB** ( *srcBLOB* ; *dstBLOB* ; *srcOffset* ; *dstOffset* ; *nombre* )<!-- END REF-->
<!--REF #_command_.COPY BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| srcBLOB | BLOB | &#x1F852; | BLOB source |
| dstBLOB | BLOB | &#x1F852; | BLOB de destination |
| srcOffset | Entier long | &#x1F852; | Position dans la source pour la copie |
| dstOffset | Entier long | &#x1F852; | Position dans la destination pour la copie |
| nombre | Entier long | &#x1F852; | Nombre d'octets à copier |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY BLOB.Summary-->**COPY BLOB** copie le nombre d'octets spécifié par *nombre* du BLOB *srcBLOB* vers le BLOB *dstBLOB*.<!-- END REF-->

La copie commence à la position (exprimée par rapport à l'origine du BLOB source) définie par *srcOffset* et est placée à partir de la position (exprimée par rapport à l'origine du BLOB de destination) définie par *dstOffset*.

Notez que le BLOB de destination peut être redimensionné si nécessaire.

#### Voir aussi 

[DELETE FROM BLOB](delete-from-blob.md)  
[INSERT IN BLOB](insert-in-blob.md)  