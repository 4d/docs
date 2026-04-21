---
id: window-kind
title: Window kind
slug: /commands/window-kind
displayed_sidebar: docs
---

<!--REF #_command_.Window kind.Syntax-->**Window kind** {( *fenêtre* )} : Integer<!-- END REF-->
<!--REF #_command_.Window kind.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| fenêtre | Integer | &#8594;  | Numéro de référence de la fenêtre ou Fenêtre de premier plan du process courant si omis |
| Résultat | Integer | &#8592; | Type de la fenêtre |
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

<!--REF #_command_.Window kind.Summary-->La commande **Window kind** retourne le type de fenêtre 4D dont vous avez passé la référence dans *fenêtre*.<!-- END REF--> Si la fenêtre n'existe pas, **Window kind** retourne 0 (zéro).  
  
Sinon, **Window kind** retourne une valeur correspondant à l'une des constantes prédéfinies suivantes (thème *Fenêtre*) : 

| Constante       | Type        | Valeur |
| --------------- | ----------- | ------ |
| External window | Entier long | 5      |
| Floating window | Entier long | 14     |
| Modal dialog    | Entier long | 9      |
| Regular window  | Entier long | 8      |

Si vous omettez le paramètre *fenêtre*, **Window kind** s'applique à la fenêtre de premier plan du process courant.

## Exemple 

Reportez-vous à l'exemple de la commande [WINDOW LIST](../commands/window-list).

## Voir aussi 

[GET WINDOW RECT](../commands/get-window-rect)  
[Get window title](../commands/get-window-title)  
[Window process](../commands/window-process)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 445 |
| Thread safe | no |


