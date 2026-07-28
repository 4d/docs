---
id: set-document-size
title: SET DOCUMENT SIZE
slug: /commands/set-document-size
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT SIZE.Syntax-->**SET DOCUMENT SIZE** ( *docRef* : Time ; *taille* : Real )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT SIZE.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence de document |
| taille | Real | &#8594;  | Nouvelle taille (en octets) de document |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|11 SQL Release 3|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SET DOCUMENT SIZE.Summary-->La commande **SET DOCUMENT SIZE** fixe la taille d'un document au nombre d'octets que vous avez passé dans *taille*.<!-- END REF--> 

Le document doit avoir été ouvert au préalable. Vous passez son numéro de référence dans *docRef*.

Sous Mac OS, c'est la taille de la data fork du document qui est modifiée.

## Voir aussi 

[Get document position](../commands/get-document-position)  
[Get document size](../commands/get-document-size)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 480 |
| Thread safe | yes |


