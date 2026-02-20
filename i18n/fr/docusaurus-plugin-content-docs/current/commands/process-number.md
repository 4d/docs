---
id: process-number
title: Process number
slug: /commands/process-number
displayed_sidebar: docs
---

<!--REF #_command_.Process number.Syntax-->**Process number** ( *name* : Text {; *} ) : Integer<br/>**Process number** ( *id* : Text {; *} ) : Integer<!-- END REF-->

<!--REF #_command_.Process number.Params-->

| Paramètres | Type      |                             | Description                                     |
| ---------- | --------- | --------------------------- | ----------------------------------------------- |
| name       | Text      | &#8594; | Nom du process duquel obtenir le numéro         |
| id         | Text      | &#8594; | ID du process duquel récupérer le numéro        |
| \*         | Opérateur | &#8594; | Renvoyer le numéro du process depuis le serveur |
| Résultat   | Integer   | &#8592; | Numéro du process                               |

<!-- END REF-->

<details><summary>Historique</summary>

| Release | Modifications                   |
| ------- | ------------------------------- |
| 20 R7   | Prise en charge du paramètre id |

</details>

## Description

<!--REF #_command_.Process number.Summary-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameter<!-- END REF-->The `Process number` command returns the number of the process whose *name* or *id* you pass in the first parameterLa commande `Process number` renvoie le numéro du process dont le nom *name* ou l'*id* est passé en premier paramètre. Si aucun process n'est trouvé, `Process number` renvoie 0.

Le paramètre optionnel \* permet de récupérer, à partir d'un 4D distant, le numéro d'un process exécuté sur le serveur. Dans ce cas, la valeur retournée est négative. Cette option est particulièrement utile lors de l'utilisation des commandes [GET PROCESS VARIABLE](./commands/get-process-variable), [SET PROCESS VARIABLE](./commands/set-process-variable) et [VARIABLE TO VARIABLE](./commands/variable-to-variable).

Si la commande est exécutée avec le paramètre \* à partir d'un process sur la machine serveur, la valeur renvoyée est positive.

## Voir également

[GET PROCESS VARIABLE](./commands/get-process-variable)\
[Process state](./commands/process-state)\
[SET PROCESS VARIABLE](./commands/set-process-variable)

## Propriétés

|                    |     |
| ------------------ | --- |
| Numéro de commande | 372 |
| Thread safe        | oui |



