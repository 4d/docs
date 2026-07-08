---
id: set-document-position
title: SET DOCUMENT POSITION
slug: /commands/set-document-position
displayed_sidebar: docs
---

<!--REF #_command_.SET DOCUMENT POSITION.Syntax-->**SET DOCUMENT POSITION** ( *docRef* : Time ; *offset* : Real {; *ancre* : Integer} )<!-- END REF-->
<!--REF #_command_.SET DOCUMENT POSITION.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| docRef | Time | &#8594;  | Numéro de référence de document |
| offset | Real | &#8594;  | Position dans fichier (exprimée en octets) |
| ancre | Integer | &#8594;  | 1 = Par rapport au début du fichier 2 = Par rapport à la fin du fichier 3 = Par rapport à la position courante |
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

<!--REF #_command_.SET DOCUMENT POSITION.Summary-->Cette commande ne fonctionne qu'avec un document déjà ouvert, dont vous avez passé le numéro de référence dans le paramètre *docRef*.<!-- END REF-->définit la position que vous passez dans *offset* comme étant celle à laquelle la prochaine lecture ([RECEIVE PACKET](../commands/receive-packet)) ou écriture ([SEND PACKET](../commands/send-packet)) aura lieu.

Si vous omettez le paramètre optionnel *ancre*, la position est définie par rapport au début du document. Sinon, vous pouvez passer dans le paramètre *ancre* une des valeurs listées ci-dessus. 

En fonction de l'*ancre* définie, vous pouvez passer des valeurs positives ou négatives dans le paramètre *offset*.

## Voir aussi 

[Get document position](../commands/get-document-position)  
[RECEIVE PACKET](../commands/receive-packet)  
[SEND PACKET](../commands/send-packet)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 482 |
| Thread safe | yes |


