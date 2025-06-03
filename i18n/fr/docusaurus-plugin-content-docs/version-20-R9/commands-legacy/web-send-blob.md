---
id: web-send-blob
title: WEB SEND BLOB
slug: /commands/web-send-blob
displayed_sidebar: docs
---

<!--REF #_command_.WEB SEND BLOB.Syntax-->**WEB SEND BLOB** ( *blob* ; *type* )<!-- END REF-->
<!--REF #_command_.WEB SEND BLOB.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| blob | Blob | &#8594;  | BLOB à envoyer au browser |
| type | Text | &#8594;  | Type de données du BLOB |

<!-- END REF-->

## Description 

<!--REF #_command_.WEB SEND BLOB.Summary-->La commande **WEB SEND BLOB** permet d’envoyer le BLOB *blob* au navigateur.<!-- END REF-->

Le type de données contenues dans le BLOB est indiqué par le paramètre *type*. Ce paramètre peut contenir les valeurs suivantes : 

* *type* \= **Chaîne vide** ("") : dans ce cas, vous ne fournissez aucune information sur le BLOB. Le navigateur tentera alors d’interpréter lui-même le contenu du BLOB.
* *type* \= **Extension de fichier** (ex. : “.HTM”, “.GIF”, “.JPEG”, etc.) : dans ce cas, vous fournissez au navigateur, par l’intermédiaire de son extension, le type MIME des données contenues dans le BLOB. Le BLOB sera interprété en fonction de cette extension. Toutefois, l’extension doit être standard afin que le navigateur puisse l’interpréter correctement. Une liste des types MIME les plus courants et de leurs extensions est fournie ci-dessous.
* *type* \= **Mime/Type** (ex. : “text/html”, “image/tiff”, etc.) : dans ce cas, vous fournissez directement au navigateur le type MIME des données contenues dans le BLOB. Cette solution est celle qui vous offre le plus de latitude. En effet, outre les types standard, vous pouvez passer un type MIME personnalisé pour envoyer des documents propriétaires en Intranet. Il vous suffit pour cela de configurer les navigateurs afin qu’ils reconnaissent le type envoyé et, par exemple, exécutent l’application correspondante. La valeur à passer dans le paramètre *type* est, dans ce cas “application/x-\[NomDuType\]”). Dans les navigateurs des postes clients, vous référencez ce type et lui associez l’action “Exécuter l’application”. La commande **WEB SEND BLOB** vous permet alors d’envoyer des documents de tout type, les clients Intranet ouvrant automatiquement l’application associée.  
**Note :** Pour plus d'informations sur les types MIME, reportez-vous à la page <http://www.iana.org/assignments/media-types>.

La liste des types MIME et leurs extensions pris en charge par le serveur HTTP de 4D est stockée dans le fichier "MimeTypes.xml" situé dans le dossier "Resources" de l'application 4D.

Les éventuelles références aux variables 4D et balises de type *4DSCRIPT* dans la page sont toujours analysées.

## Exemple 

Reportez-vous à l’exemple de la routine [PICTURE TO BLOB](picture-to-blob.md). 

## Voir aussi 

[WEB SEND FILE](web-send-file.md)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 654 |
| Thread safe | &check; |


