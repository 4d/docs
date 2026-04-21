---
id: get-document-position
title: Get document position
slug: /commands/get-document-position
displayed_sidebar: docs
---

<!--REF #_command_.Get document position.Syntax-->**Get document position** ( *docRef* ) : Real<!-- END REF-->
<!--REF #_command_.Get document position.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence de document |
| Résultat | Real | &#8592; | Position dans le fichier (exprimée en octets) à partir du début du fichier |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.Get document position.Summary-->Cette commande ne fonctionne qu'avec un document déjà ouvert, dont vous avez passé le numéro de référence dans le paramètre *docRef*.<!-- END REF-->retourne la position, à partir du début du document, à laquelle la prochaine lecture ([RECEIVE PACKET](../commands/receive-packet)) ou écriture ([SEND PACKET](../commands/send-packet)) aura lieu.

## Voir aussi 

[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  
[SET DOCUMENT POSITION](../commands/set-document-position)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 481 |
| Thread safe | yes |


