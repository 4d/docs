---
id: erase-window
title: ERASE WINDOW
slug: /commands/erase-window
displayed_sidebar: docs
---

<!--REF #_command_.ERASE WINDOW.Syntax-->**ERASE WINDOW** ({ *fenêtre* : Integer })<!-- END REF-->
<!--REF #_command_.ERASE WINDOW.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de fenêtre ou Fenêtre au premier plan du process courant si ce paramètre est omis |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|6|Modifié|
|<6|Créé|

</details>
</div>

## Description 

<!--REF #_command_.ERASE WINDOW.Summary-->La commande **ERASE WINDOW** efface le contenu de la fenêtre dont vous avez passé la référence dans *fenêtre*.<!-- END REF--> 

Si vous omettez le paramètre *fenêtre*, **ERASE WINDOW** efface le contenu de la fenêtre de premier plan du process courant. 

Généralement, vous utiliserez **ERASE WINDOW** en combinaison avec [MESSAGE](../commands/message) et [GOTO XY](../commands/goto-xy). Dans ce cas, **ERASE WINDOW** efface le contenu de la fenêtre et place le curseur dans son angle supérieur gauche, c'est-à-dire à la position correspondant à [GOTO XY](../commands/goto-xy)(0; 0). 

Ne confondez pas **ERASE WINDOW**, qui efface le contenu d'une fenêtre, et [GOTO XY](../commands/goto-xy), qui supprime la fenêtre de l'écran.

## Voir aussi 

[GOTO XY](../commands/goto-xy)  
[MESSAGE](../commands/message)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 160 |
| Thread safe | no |


