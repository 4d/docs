---
id: qr-get-report-table
title: QR Get report table
slug: /commands/qr-get-report-table
displayed_sidebar: docs
---

<!--REF #_command_.QR Get report table.Syntax-->**QR Get report table** ( *zone* : Integer ) : Integer<!-- END REF-->
<!--REF #_command_.QR Get report table.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| Résultat | Integer | &#8592; | Numéro de table |
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

<!--REF #_command_.QR Get report table.Summary-->La commande **QR Get report table** retourne le numéro de la table courante de l'état désigné par le paramètre *zone*.<!-- END REF--> 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.

## Voir aussi 

[QR SET REPORT TABLE](../commands/qr-set-report-table)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 758 |
| Thread safe | no |
| Modifie les variables | error |


