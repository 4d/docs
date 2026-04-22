---
id: count-user-processes
title: Count user processes
slug: /commands/count-user-processes
displayed_sidebar: docs
---

<!--REF #_command_.Count user processes.Syntax-->**Count user processes**  : Integer<!-- END REF-->
<!--REF #_command_.Count user processes.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Integer | &#8592; | Nombre de process vivants (à l'exception de process internes) |
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

<!--REF #_command_.Count user processes.Summary-->**Count user processes** retourne le nombre courant de process "vivants" dans l'application 4D et dont le type est différent de -25 (Internal Timer Process), -31 (Client Manager Process) et -15 (Server Interface Process).<!-- END REF--> Pour plus d'informations sur les types de process, reportez-vous à la commande [Process info](../commands/process-info) et au thème de constantes *Type du process*. 

**Note :** Les process "vivants" sont des process dont le statut n'est ni *détruit*, ni *inexistant* (cf. commande [Process state](../commands/process-state)). 

## Voir aussi 

[Count tasks](../commands/count-tasks)  
[Count users](../commands/count-users)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 343 |
| Thread safe | yes |


