---
id: qr-report-to-blob
title: QR REPORT TO BLOB
slug: /commands/qr-report-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.QR REPORT TO BLOB.Syntax-->**QR REPORT TO BLOB** ( *zone* : Integer ; *blob* : Blob )<!-- END REF-->
<!--REF #_command_.QR REPORT TO BLOB.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| blob | Blob | &#8592; | BLOB devant recevoir l'état rapide |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2003|Créé|

</details>
</div>

## Description 

<!--REF #_command_.QR REPORT TO BLOB.Summary-->La commande **QR REPORT TO BLOB** place dans le BLOB *blob* (variable ou champ) l’état dont la référence a été passée dans le paramètre *zone*.<!-- END REF-->

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

## Exemple 

L'instruction suivante affecte l'état rapide stocké dans la zone MaZone à un champ BLOB :

```4d
 QR REPORT TO BLOB(MaZone;[Table 1]ChampBlob)
```

## Voir aussi 

[QR BLOB TO REPORT](../commands/qr-blob-to-report)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 770 |
| Thread safe | no |
| Modifie les variables | error |


