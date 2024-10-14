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
| srcBlob | Blob | &srarr; | BLOB source |
| dstBlob | Blob | &srarr; | BLOB de destination |
| srcOffset | Integer | &srarr; | Position dans la source pour la copie |
| dstOffset | Integer | &srarr; | Position dans la destination pour la copie |
| nombre | Integer | &srarr; | Nombre d'octets à copier |

<!-- END REF-->

#### Description 

<!--REF #_command_.COPY BLOB.Summary-->**COPY BLOB** copie le nombre d'octets spécifié par *nombre* du BLOB *srcBLOB* vers le BLOB *dstBLOB*.<!-- END REF-->

La copie commence à la position (exprimée par rapport à l'origine du BLOB source) définie par *srcOffset* et est placée à partir de la position (exprimée par rapport à l'origine du BLOB de destination) définie par *dstOffset*.

Notez que le BLOB de destination peut être redimensionné si nécessaire.

#### Voir aussi 

[DELETE FROM BLOB](delete-from-blob.md)  
[INSERT IN BLOB](insert-in-blob.md)  