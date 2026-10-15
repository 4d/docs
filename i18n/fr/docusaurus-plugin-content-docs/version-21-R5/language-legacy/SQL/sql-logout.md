---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
<div class="no-index">

| Ne requiert pas de paramètre |  |
| --- | --- |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|2004|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SQL LOGOUT.Summary-->La commande **SQL LOGOUT** referme la connexion avec une source ODBC ouverte dans le process courant (le cas échéant).<!-- END REF--> S’il n’y a pas de connexion ODBC ouverte, la commande ne fait rien. 

## Variables et ensembles système 

Si la connexion a été correctement refermée, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. Vous pouvez intercepter les éventuelles erreurs à l’aide d’une méthode installée par la commande [ON ERR CALL](../commands/on-err-call).

## Voir aussi 

[SQL LOGIN](../commands/sql-login)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 872 |
| Thread safe | no |
| Modifie les variables | OK, error |


