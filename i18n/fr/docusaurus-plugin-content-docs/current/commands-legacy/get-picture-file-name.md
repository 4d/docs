---
id: get-picture-file-name
title: Get picture file name
slug: /commands/get-picture-file-name
displayed_sidebar: docs
---

<!--REF #_command_.Get picture file name.Syntax-->**Get picture file name** ( *image* ) : Text<!-- END REF-->
<!--REF #_command_.Get picture file name.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| image | Picture, Picture | &#8594;  | Image dont vous souhaitez obtenir le nom par défaut |
| Résultat | Text | &#8592; | Nom par défaut du fichier image |

<!-- END REF-->

#### Description 

<!--REF #_command_.Get picture file name.Summary-->La commande **Get picture file name** retourne le nom par défaut courant de l’image passée en paramètre.<!-- END REF--> 

Le nom par défaut est utilisé lors de l’exportation de l’image dans un fichier disque. Il peut être défini automatiquement à partir du nom d’origine du fichier image importé dans le champ ou la variable image, ou à l’aide de la commande [SET PICTURE FILE NAME](set-picture-file-name.md). Pour plus d’informations, reportez-vous au manuel *Mode Développement*. 

Si l’image n’a pas de nom par défaut, la commande retourne une chaîne vide. 

#### Voir aussi 

[SET PICTURE FILE NAME](set-picture-file-name.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1171 |
| Thread safe | &check; |
| Interdite sur le serveur ||


