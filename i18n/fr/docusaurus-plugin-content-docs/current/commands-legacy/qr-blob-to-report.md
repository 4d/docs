---
id: qr-blob-to-report
title: QR BLOB TO REPORT
slug: /commands/qr-blob-to-report
displayed_sidebar: docs
---

<!--REF #_command_.QR BLOB TO REPORT.Syntax-->**QR BLOB TO REPORT** ( *zone* ; *blob* )<!-- END REF-->
<!--REF #_command_.QR BLOB TO REPORT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| blob | Blob | &#8594;  | BLOB contenant l'état |

<!-- END REF-->

#### Description 

<!--REF #_command_.QR BLOB TO REPORT.Summary-->La commande **QR BLOB TO REPORT** place l’état contenu dans le paramètre *blob* dans la zone d'état rapide désignée par le paramètre *zone*.<!-- END REF--> 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si le paramètre *blob* est incorrect, l’erreur -9852 est générée.

#### Exemple 1 

Le code suivant affiche dans la zone MaZone l'état rapide “etat.4qr”, stocké à côté du fichier de structure de la base. A noter que le fichier d'état peut avoir été créé avec une version de 4D antérieure à la 2003 :

```4d
 var $doc : Blob
 var MaZone : Integer
 DOCUMENT TO BLOB("etat.4qr";$doc)
 QR BLOB TO REPORT(MaZone;$doc)
```

#### Exemple 2 

L'instruction suivante affiche l'état stocké dans le champ ChampBlob dans la zone MaZone :

```4d
 QR BLOB TO REPORT(MaZone;[Table 1]ChampBlob)
```

#### Voir aussi 

[QR REPORT TO BLOB](qr-report-to-blob.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 771 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


