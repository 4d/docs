---
id: sql-get-current-data-source
title: SQL Get current data source
slug: /commands/sql-get-current-data-source
displayed_sidebar: docs
---

<!--REF #_command_.SQL Get current data source.Syntax-->**SQL Get current data source**  : Text<!-- END REF-->
<!--REF #_command_.SQL Get current data source.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom de la source de données en cours d’utilisation |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SQL Get current data source.Summary-->La commande **SQL Get current data source** retourne le nom de la source de données courante de l’application.<!-- END REF--> La source de données courante reçoit les requêtes SQL exécutées au sein de structures [Begin SQL](begin-sql.md)/[End SQL](end-sql.md).  
Lorsque la source de données courante est la base 4D locale, la commande retourne la chaîne “;DB4D\_SQL\_LOCAL;”, correspondant à la valeur de la constante SQL\_INTERNAL (thème "*SQL*").  
Cette commande vous permet de contrôler la source de données courante, généralement avant d’exécuter une requête SQL.

#### Voir aussi 

[Begin SQL](begin-sql.md)  
[End SQL](end-sql.md)  
[SQL GET DATA SOURCE LIST](sql-get-data-source-list.md)  
[SQL LOGIN](sql-login.md)  
[SQL LOGOUT](sql-logout.md)  