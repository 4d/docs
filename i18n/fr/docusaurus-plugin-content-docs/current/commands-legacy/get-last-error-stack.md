---
id: get-last-error-stack
title: GET LAST ERROR STACK
slug: /commands/get-last-error-stack
displayed_sidebar: docs
---

<!--REF #_command_.GET LAST ERROR STACK.Syntax-->**GET LAST ERROR STACK** ( *tabCodes* ; *tabCompInternes* ; *tabLibellés* )<!-- END REF-->
<!--REF #_command_.GET LAST ERROR STACK.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabCodes | Integer array | &harr; | Tableau de numéros d'erreurs |
| tabCompInternes | Text array | &harr; | Tableau de codes de composants internes |
| tabLibellés | Text array | &harr; | Tableau de libellés d'erreurs |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET LAST ERROR STACK.Summary-->La commande **GET LAST ERROR STACK** retourne les informations relatives à la “pile” d'erreurs courante de l’application 4D.<!-- END REF--> Lorsqu’une instruction 4D provoque une erreur, la pile d’erreurs courante contient la description de l’erreur ainsi que les éventuelles erreurs générées en cascade. Par exemple l’erreur du type "disque saturé" entraîne une erreur d'écriture dans le fichier puis une erreur dans la commande de sauvegarde d’enregistrements : la pile contient alors trois erreurs. Si la dernière instruction 4D n’a pas généré d’erreur, la pile d’erreurs courante est vide. 

Cette commande générique permet de traiter tous les types d’erreurs pouvant se produire dans l'application 4D. 

**Note :** Toutefois, pour obtenir des informations détaillées relatives aux erreurs générées par une source ODBC, il est nécessaire d’utiliser la commande [SQL GET LAST ERROR](sql-get-last-error.md). 

La commande **GET LAST ERROR STACK** doit être appelée dans le cadre d’une méthode d’appel sur erreur installée par la commande [ON ERR CALL](on-err-call.md).

Les informations sont retournées sous la forme de trois tableaux synchronisés :

* *tabCodes* : ce tableau reçoit la liste des codes d’erreurs générés.
* *tabCompInternes* : ce tableau contient les codes des composants internes associés à chaque erreur.
* *tabLibellés* : ce tableau contient les libellés de chaque erreur.

La liste des codes d’erreurs et de leurs libellés est fournie dans les sections du thème "*Codes d'erreurs*". 

#### Voir aussi 

[Last errors](last-errors.md)  
[ON ERR CALL](on-err-call.md)  
[SQL GET LAST ERROR](sql-get-last-error.md)  