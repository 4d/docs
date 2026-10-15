---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
<div class="no-index">

| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom de la source de données en cours d’utilisation |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Historique</summary>

|Version|Changements|
|---|---|
|19 R5|Renommé|
|11 SQL|Créé|

</details>
</div>

## Description 

<!--REF #_command_.SQL Get current data source.Summary-->La commande **SQL Get current data source** retourne le nom de la source de données courante de l’application.<!-- END REF--> La source de données courante reçoit les requêtes SQL exécutées au sein de structures [Begin SQL](../commands/begin-sql)/[End SQL](../commands/end-sql).  
Lorsque la source de données courante est la base 4D locale, la commande retourne la chaîne “;DB4D\_SQL\_LOCAL;”, correspondant à la valeur de la constante SQL\_INTERNAL (thème "*SQL*").  
Cette commande vous permet de contrôler la source de données courante, généralement avant d’exécuter une requête SQL.

## Voir aussi 

[Begin SQL](../commands/begin-sql)  
[End SQL](../commands/end-sql)  
[SQL GET DATA SOURCE LIST](../commands/sql-get-data-source-list)  
[SQL LOGIN](../commands/sql-login)  
[SQL LOGOUT](../commands/sql-logout)  

## Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 990 |
| Thread safe | no |


