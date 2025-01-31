---
id: sql-logout
title: SQL LOGOUT
slug: /commands/sql-logout
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOGOUT.Syntax-->**SQL LOGOUT**<!-- END REF-->
<!--REF #_command_.SQL LOGOUT.Params-->
| Ne requiert pas de paramètre |  |
| --- | --- |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL LOGOUT.Summary-->La commande **SQL LOGOUT** referme la connexion avec une source ODBC ouverte dans le process courant (le cas échéant).<!-- END REF--> S’il n’y a pas de connexion ODBC ouverte, la commande ne fait rien. 

#### Variables et ensembles système 

Si la connexion a été correctement refermée, la variable système OK prend la valeur 1, sinon elle prend la valeur 0\. Vous pouvez intercepter les éventuelles erreurs à l’aide d’une méthode installée par la commande [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[SQL LOGIN](sql-login.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 872 |
| Thread safe | &cross; |
| Modifie les variables | OK, error |


