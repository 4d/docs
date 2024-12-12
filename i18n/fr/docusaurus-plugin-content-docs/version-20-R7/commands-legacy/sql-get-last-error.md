---
id: sql-get-last-error
title: SQL GET LAST ERROR
slug: /commands/sql-get-last-error
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET LAST ERROR.Syntax-->**SQL GET LAST ERROR** ( *errCode* ; *errTexte* ; *errODBC* ; *errSQLServer* )<!-- END REF-->
<!--REF #_command_.SQL GET LAST ERROR.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| errCode | Integer | &#8592; | Code de l’erreur |
| errText | Text | &#8592; | Texte de l’erreur |
| errODBC | Text | &#8592; | Code d’erreur ODBC |
| errSQLServer | Integer | &#8592; | Code d’erreur native serveur SQL |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.SQL GET LAST ERROR.Summary-->La commande **SQL GET LAST ERROR** retourne des informations relatives à la dernière erreur rencontrée lors de l’exécution d’une commande ODBC.<!-- END REF--> L’erreur peut provenir de l’application 4D, du réseau, de la source ODBC, etc. 

Cette commande doit généralement être appelée dans le contexte d’une méthode de gestion des erreurs installée à l’aide de la commande [ON ERR CALL](on-err-call.md).

* Le paramètre *errCode* retourne le code de l’erreur.
* Le paramètre *errTexte* retourne le libellé de l’erreur.

Les deux derniers paramètres ne sont remplis que si l’erreur provient de la source ODBC. Dans le cas contraire, ils sont retournés vides. 

* Le paramètre *errODBC* retourne le code d’erreur ODBC (SQL state).
* Le paramètre *errSQLServer* retourne le code de l’erreur native du serveur SQL.

#### Voir aussi 

[Last errors](last-errors.md)   
[ON ERR CALL](on-err-call.md)  