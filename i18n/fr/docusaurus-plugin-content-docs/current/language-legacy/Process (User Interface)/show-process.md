---
id: show-process
title: SHOW PROCESS
slug: /commands/show-process
displayed_sidebar: docs
---

<!--REF #_command_.SHOW PROCESS.Syntax-->**SHOW PROCESS** ( *process* )<!-- END REF-->
<!--REF #_command_.SHOW PROCESS.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| process | Integer | &#8594;  | Numéro du process dont les fenêtres doivent être affichées |
</div>
<!-- END REF-->

## Description 

<!--REF #_command_.SHOW PROCESS.Summary-->**SHOW PROCESS** fait apparaître l'ensemble des fenêtres appartenant à *process*.<!-- END REF--> Cette commande ne passe pas les fenêtres de *process* au premier plan, utilisez pour cela la commande [BRING TO FRONT](../commands/bring-to-front).

Si les fenêtres de *process* sont déjà affichées, cette commande ne fait rien.

## Exemple 

L'exemple suivant affiche le process "Clients", s'il était caché auparavant. Le numéro de process est stocké dans la variable interprocess *<>Clients* :

```4d
 SHOW PROCESS(<>Clients)
```

## Voir aussi 

[BRING TO FRONT](../commands/bring-to-front)  
[HIDE PROCESS](../commands/hide-process)  
[Process state](../commands/process-state)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 325 |
| Thread safe | no |


