---
id: sql-export-selection
title: SQL EXPORT SELECTION
slug: /commands/sql-export-selection
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT SELECTION.Syntax-->**SQL EXPORT SELECTION** ( *laTable* ; *cheminDossier* {; *nbFichiers* {; *tailleLimiteFichiers* {; *tailleLimiteChamps*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle exporter la sélection |
| cheminDossier | Text | &#8594;  | Chemin d'accès du dossier d'export ou "" pour afficher une boîte de dialogue de sélection de dossier |
| nbFichiers | Integer | &#8594;  | Nombre maximum de fichiers par dossier |
| tailleLimiteFichiers | Integer | &#8594;  | Valeur de limite de taille des fichiers d’export (en Ko) |
| tailleLimiteChamps | Integer | &#8594;  | Limite de taille au-dessous de laquelle le contenu d'un champ Texte, BLOB ou Image sera intégré au fichier principal (en octets) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL EXPORT SELECTION.Summary-->La commande **SQL EXPORT SELECTION** exporte au format SQL les enregistrements de la sélection courante de la table 4D désignée par le paramètre *laTable*.<!-- END REF--> 

Cette commande est quasiment identique à la commande [SQL EXPORT DATABASE](sql-export-database.md). Le fichier généré peut être utilisé directement par la commande [SQL EXECUTE SCRIPT](sql-execute-script.md) afin d’importer les données dans une autre base 4D. La seule différence entre ces deux commandes est le fait que **SQL EXPORT SELECTION** exporte uniquement la sélection courante de *laTable* alors que [SQL EXPORT DATABASE](sql-export-database.md) exporte la totalité des données de la base. De même, à la différence de [SQL EXPORT DATABASE](sql-export-database.md), la commande **SQL EXPORT SELECTION** ne fonctionne pas avec les bases SQL externes. Elle ne peut être utilisée qu’avec la base principale. 

Reportez-vous à la description de la commande [SQL EXPORT DATABASE](sql-export-database.md) pour le détail du fonctionnement et des paramètres de ces commandes.

Si la sélection courante est vide, la commande ne fait rien. A noter que dans ce cas, le dossier de destination n’est pas vidé. 

Si l’export s’est déroulé correctement, la variable *OK* prend la valeur 1\. Dans le cas contraire, elle prend la valeur 0\. 

##### 

**Note :** Cette commande ne prend pas en charge les champs de type Objet.

#### Voir aussi 

[SQL EXPORT DATABASE](sql-export-database.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1064 |
| Thread safe | &cross; |
| Modifie les variables | OK |


