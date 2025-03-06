---
id: sql-load-record
title: SQL LOAD RECORD
slug: /commands/sql-load-record
displayed_sidebar: docs
---

<!--REF #_command_.SQL LOAD RECORD.Syntax-->**SQL LOAD RECORD** {( *nombreEnr* )}<!-- END REF-->
<!--REF #_command_.SQL LOAD RECORD.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| nombreEnr | Integer | &#8594;  | Nombre d’enregistrements à charger |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL LOAD RECORD.Summary-->La commande **SQL LOAD RECORD** récupère dans 4D un ou plusieurs enregistrement(s) provenant de la source de données ouverte dans la connexion courante.<!-- END REF-->

Le paramètre facultatif *nombreEnr* permet de définir le nombre d’enregistrements à récupérer :

* Si vous omettez ce paramètre, la commande récupèrera l’enregistrement courant dans la source de données. Ce principe correspond à la récupération des données dans une boucle où un enregistrement est reçu à la fois.
* Si vous passez une valeur entière dans *nombreEnr*, la commande récupérera *nombreEnr* enregistrements.
* Si vous passez la constante SQL all records (ou la valeur -1), la commande récupèrera tous les enregistrements de la table.

**Note :** Ces deux derniers paramétrages n’ont de sens que si les données récupérées sont associées à des tableaux ou des champs 4D. 

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK retourne 1, sinon elle retourne 0.

#### Voir aussi 

[SQL CANCEL LOAD](sql-cancel-load.md)  
[SQL EXECUTE](sql-execute.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 822 |
| Thread safe | &cross; |
| Modifie les variables | OK |


