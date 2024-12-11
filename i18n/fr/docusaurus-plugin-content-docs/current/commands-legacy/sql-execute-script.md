---
id: sql-execute-script
title: SQL EXECUTE SCRIPT
slug: /commands/sql-execute-script
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXECUTE SCRIPT.Syntax-->**SQL EXECUTE SCRIPT** ( *cheminScript* ; *actionErreur* {; *nomAttribut* ; *valAttribut*} {; *nomAttribut2* ; *valAttribut2* ; ... ; *nomAttributN* ; *valAttributN*} )<!-- END REF-->
<!--REF #_command_.SQL EXECUTE SCRIPT.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminScript | Text | &#8594;  | Chemin d'accès complet du fichier contenant le script SQL à exécuter |
| actionErreur | Integer | &#8594;  | Action à effectuer en cas d’erreur durant l’exécution du script |
| nomAttribut | Text | &#8594;  | Nom d’attribut à utiliser |
| valAttribut | Text | &#8594;  | Valeur de l’attribut |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL EXECUTE SCRIPT.Summary-->La commande **SQL EXECUTE SCRIPT** vous permet d’exécuter une suite d’instructions SQL placées dans le fichier de script désigné par *cheminScript*.<!-- END REF--> Cette commande ne peut être exécutée que sur un poste local (4D local ou procédure stockée sur 4D Server). Elle fonctionne avec la base courante (base interne ou base externe). 

**Note :** Cette commande ne peut pas être utilisée avec une connexion externe ouverte directement ou via ODBC. 

Passez dans le paramètre *cheminScript* le chemin d’accès complet du fichier texte contenant les instructions SQL à exécuter. Le chemin d’accès doit être exprimé à l’aide de syntaxe du système courant. Si vous passez une chaîne vide ("") dans *cheminScript*, une boîte de dialogue standard d’ouverture de documents s’affiche, permettant à l’utilisateur de sélectionner le fichier de script à exécuter. 

**Note :** Les commandes [SQL EXPORT DATABASE](sql-export-database.md) et [SQL EXPORT SELECTION](sql-export-selection.md) génèrent automatiquement ce fichier de script.

Le paramètre *actionErreur* vous permet de paramétrer le fonctionnement de la commande lorsqu’elle rencontre une erreur au cours de l’exécution du script. Vous pouvez passer l’une des trois constantes ci-dessous, placées dans le thème *SQL* :

| Constante             | Type        | Valeur | Comment                                                                                                                                                   |
| --------------------- | ----------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL On error abort    | Entier long | 1      | En cas d’erreur, 4D stoppe immédiatement l’exécution du script.                                                                                           |
| SQL On error confirm  | Entier long | 2      | En cas d’erreur, 4D affiche une boîte de dialogue détaillant l’erreur et permettant à l’utilisateur d’interrompre ou de poursuivre l’exécution du script. |
| SQL On error continue | Entier long | 3      | En cas d’erreur, 4D l’ignore et poursuit l’exécution du script.                                                                                           |

Les paramètres *nomAttribut* et *valAttribut* doivent être passés par paires. Ces paramètres sont destinés à permettre de définir des attributs spécifiques pour l’exécution du script. Dans la version actuelle de 4D, un seul attribut peut être passé dans *nomAttribut*, disponible via la constante suivante, placée dans le thème *SQL* :

| Constante             | Type   | Valeur                   | Comment                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------------- | ------ | ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SQL use access rights | Chaîne | SQL\_Use\_Access\_Rights | Permet de restreindre les droits d’accès à appliquer lors de l’exécution des commandes SQL du script. Lorsque vous utilisez cet attribut, vous devez passer 0 ou 1 dans *valAttribut* :<br/>*valAttribut* \= 1 : 4D utilise les droits d’accès de l’utilisateur 4D courant. *valAttribut* \= 0 (ou attribut non défini) : 4D ne restreint pas les accès, les droits du Super\_Utilisateur sont utilisés. |

Si le fichier d’enregistrement des requêtes de 4D est activé (via les sélecteurs 28 ou 45 de la commande [SET DATABASE PARAMETER](set-database-parameter.md)), chaque commande SQL exécutée génèrera une entrée avec les informations suivantes :

* Type de commande SQL
* Nombre d’enregistrements affectés par la commande
* Durée d’exécution de la commande
* Pour chaque erreur rencontrée :  
   * le code d’erreur  
   * le texte de l’erreur s’il est disponible

Si le script est correctement exécuté (aucune erreur rencontrée), la variable système *OK* prend la valeur 1\. En cas d’erreur, la variable système *OK* prend ou non la valeur 0 en fonction du paramètre *actionErreur* : 

* Si *actionErreur* vaut SQL On error abort (valeur 1), *OK* prend la valeur 0.
* Si *actionErreur* vaut SQL On error confirm (valeur 2), la variable *OK* prend la valeur 0 si l’utilisateur choisit de stopper l’opération et 1 s’il choisit de la poursuivre.
* Si *actionErreur* vaut SQL On error continue (valeur 3), la variable *OK* vaut toujours 1\.

**Note :** Si vous utilisez cette commande pour exécuter des actions consommatrices de mémoire telles que l’importation massive de données, vous pouvez envisager de faire appel à la nouvelle commande SQL *ALTER DATABASE* afin de désactiver temporairement des options SQL.


#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1089 |
| Thread safe | &check; |
| Modifie les variables | OK |


