---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* {; *} ) : Integer<br/>**Process number** ( *id* {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| Paramètres | Type      |                             | Description                                     |
| ---------- | --------- | --------------------------- | ----------------------------------------------- |
| name       | Text      | &#8594; | Nom du process duquel obtenir le numéro         |
| id         | Text      | &#8594; | ID du process duquel récupérer le numéro        |
| \*         | Opérateur | &#8594; | Renvoyer le numéro du process depuis le serveur |
| Résultat   | Integer   | &#8592; | Process number                                  |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                   |
| ------- | ------------------------------- |
| 20 R7   | Prise en charge du paramètre id |

</details>

## Description

<!--REF #_command_.Process number.Summary-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->. Si aucun process n'est trouvé, `Process number` renvoie 0.

Le paramètre optionnel \* permet de récupérer, à partir d'un 4D distant, le numéro d'un process exécuté sur le serveur. Dans ce cas, la valeur retournée est négative. Cette option est particulièrement utile lors de l'utilisation des commandes [GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md), [SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md) et [VARIABLE TO VARIABLE](../commands-legacy/variable-to-variable.md).

Si la commande est exécutée avec le paramètre \* à partir d'un process sur la machine serveur, la valeur renvoyée est positive.

## Voir également

[GET PROCESS VARIABLE](../commands-legacy/get-process-variable.md)\
[Process state](../commands-legacy/process-state.md)\
[SET PROCESS VARIABLE](../commands-legacy/set-process-variable.md)

## Propriétés

|                    |                             |
| ------------------ | --------------------------- |
| Numéro de commande | 372                         |
| Thread safe        | &check; |


