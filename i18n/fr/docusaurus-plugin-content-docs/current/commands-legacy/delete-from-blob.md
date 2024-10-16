---
id: delete-from-blob
title: DELETE FROM BLOB
slug: /commands/delete-from-blob
displayed_sidebar: docs
---

<!--REF #_command_.DELETE FROM BLOB.Syntax-->**DELETE FROM BLOB** ( *blob* ; *offset* ; *nombre* )<!-- END REF-->
<!--REF #_command_.DELETE FROM BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB duquel supprimer des octets |
| offset | Integer | &#8594;  | Offset à partir duquel supprimer les octets |
| nombre | Integer | &#8594;  | Nombre d'octets à supprimer |

<!-- END REF-->

#### Description 

<!--REF #_command_.DELETE FROM BLOB.Summary-->**DELETE FROM BLOB** supprime le nombre d'octets spécifié par *nombre* du BLOB *blob* à partir de la position définie par *offset* (exprimée de manière relative à l'origine du BLOB).<!-- END REF--> La taille du BLOB est réduite de *nombre* d'octets.

##### Note 

**Note de compatibilité :** Etant donné que cette commande modifie le blob passé comme paramètre, elle ne prend pas en charge les objets blob (de type 4D.Blob). Reportez-vous à la page *Passer des blobs et objets blobs à des commandes 4D* sur developer.4d.com.

#### Voir aussi 

[INSERT IN BLOB](insert-in-blob.md)  