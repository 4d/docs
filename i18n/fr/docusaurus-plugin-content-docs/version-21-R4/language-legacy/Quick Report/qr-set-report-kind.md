---
id: qr-set-report-kind
title: QR SET REPORT KIND
slug: /commands/qr-set-report-kind
displayed_sidebar: docs
---

<!--REF #_command_.QR SET REPORT KIND.Syntax-->**QR SET REPORT KIND** ( *zone* : Integer ; *type* : Integer )<!-- END REF-->
<!--REF #_command_.QR SET REPORT KIND.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| zone | Integer | &#8594;  | Référence de la zone |
| type | Integer | &#8594;  | Type d'état |
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

<!--REF #_command_.QR SET REPORT KIND.Summary-->La commande **QR SET REPORT KIND** permet de définir le *type* de l'état rapide présent dans la *zone*.<!-- END REF-->

Vous pouvez passer dans le paramètre *type* une des constantes du thème *QR Types d'états* :

| Constante       | Type        | Valeur |
| --------------- | ----------- | ------ |
| qr cross report | Entier long | 2      |
| qr list report  | Entier long | 1      |

Si vous définissez à l'aide de cette commande un nouveau *type* pour un état existant, les paramétrages précédents sont supprimés et un nouvel état vide est créé. 

Si un numéro de *zone* invalide est passé, l’erreur -9850 est générée.  
Si la valeur de *type* est incorrecte, l’erreur -9852 est générée.

## Voir aussi 

[QR Get report kind](../commands/qr-get-report-kind)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 738 |
| Thread safe | no |
| Modifie les variables | error |


