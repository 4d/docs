---
id: sql-export-database
title: SQL EXPORT DATABASE
slug: /commands/sql-export-database
displayed_sidebar: docs
---

<!--REF #_command_.SQL EXPORT DATABASE.Syntax-->**SQL EXPORT DATABASE** ( *cheminDossier* {; *nbFichiers* {; *tailleLimiteFichiers* {; *tailleLimiteChamps*}}} )<!-- END REF-->
<!--REF #_command_.SQL EXPORT DATABASE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminDossier | Text | &#8594;  | Chemin d'accès du dossier d'export ou "" pour afficher une boîte de dialogue de sélection de dossier |
| nbFichiers | Integer | &#8594;  | Nombre maximum de fichiers par dossier |
| tailleLimiteFichiers | Integer | &#8594;  | Valeur de limite de taille des fichiers d'exportation (en Ko) |
| tailleLimiteChamps | Integer | &#8594;  | Limite de taille au-dessous de laquelle le contenu d'un champ Texte, BLOB ou Image sera intégré au fichier principal (en octets) |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL EXPORT DATABASE.Summary-->La commande **SQL EXPORT DATABASE** exporte au format SQL tous les enregistrements de toutes les tables de la base.<!-- END REF--> En SQL, cette opération d’exportation globale est appelée "Dump". 

**Note :** Cette commande ne peut pas être utilisée avec une connexion externe ouverte directement ou via ODBC. 

Pour chaque table, la commande génère un fichier texte contenant les instructions SQL nécessaires à l’importation des données dans une autre base. Ce fichier peut être utilisé directement par la commande [SQL EXECUTE SCRIPT](sql-execute-script.md) afin d’importer les données dans une autre base 4D. 

Les fichiers d’export seront placés dans un dossier nommé "SQLExport" créé dans le dossier de destination désigné par le paramètre *cheminDossier*. A noter que si un dossier "SQLExport" existe déjà à l’emplacement défini, la commande le remplace sans qu’aucun message d’alerte n’apparaisse.   
Si vous passez une chaîne vide dans ce paramètre, 4D affiche une boîte de dialogue standard permettant à l’utilisateur de désigner le dossier de destination. Par défaut, la boîte de dialogue affiche le dossier courant de l’utilisateur ayant ouvert la session ("Mes Documents" sous Windows ou "Documents" sous Mac OS).

Pour chaque table exportée, la commande effectue les actions suivantes :

* un sous-dossier du nom de la table est créé dans le dossier de destination.
* un fichier texte nommé "Export.sql" est créé dans le sous-dossier. Ce fichier est encodé en UTF-8 avec BOM (marque d'ordre des octets). Il contient des ordres SQL *INSERT* correspondant aux données exportées. Les valeurs des champs sont séparées par des caractères deux-points. Il peut y avoir moins de valeurs que de champs dans la table. Dans ce cas, les champs restants seront considérés NULL.
* si la table contient des champs BLOB, image ou texte (textes à stockage externe, c'est-à-dire stockés en-dehors des enregistrements), par défaut la commande crée un sous-dossier supplémentaire nommé "BLOBS" à côté du fichier "Export.sql" et y crée autant de sous-dossiers que nécessaire nommés "BlobsN”. Ces sous-dossiers stockeront sous forme de fichiers séparés le contenu de tous les champs BLOB, image ou texte externe des enregistrements de la table. Les fichiers BLOB sont nommés "BlobNNNNN.BLOB", les fichiers texte sont nommés "TEXTNNNNN.TXT" (où NNNNN est un nombre unique généré par l’application). Les fichiers image sont nommés PICTNNNNN.ZZZZ (où NNNNN est un nombre unique généré par l’application et ZZZZ est l’extension). Lorsque c’est possible, les images sont exportées dans leur format natif d’origine avec l’extension correspondant au type d’image (.jpg, .png, etc.). Si l’export au format natif n’est pas possible, les images sont exportées dans le format 4D interne avec l’extension .4PCT.  
Ce fonctionnement par défaut peut être modulé en fonction de la taille des données contenues dans le champ à l'aide du paramètre optionnel *tailleLimiteChamps* (cf. ci-dessous).  
**Note :** Ce fonctionnement diffère lorsque vous exécutez **SQL EXPORT DATABASE** depuis un 4D en mode distant. Dans ce contexte, les données à stockage externe sont automatiquement incluses dans le fichier "Export.sql".

Si vous passez le paramètre *nbFichiers*, la commande créera autant de sous-dossiers "BlobsN" que nécessaire afin que chacun d’eux ne contienne pas plus de *nbFichiers* fichiers BLOBs, images ou textes externes. Par défaut, si le paramètre *nbFichiers* est omis, la commande limite le nombre de fichiers à 200\. Si vous passez 0, chaque sous-dossier contiendra au plus un seul fichier. 

Le paramètre *tailleLimiteFichiers* vous permet de définir une limite de taille (en ko) pour chaque fichier "Export.sql" créé sur le disque. Lorsque la taille du fichier d’export en cours de création atteint la valeur définie dans *tailleLimiteFichiers*, 4D stoppe l’écriture des enregistrements, referme le fichier et en crée un nouveau nommé "ExportN.sql" (où N représente le numéro de séquence) à côté du précédent. A noter qu'il s'agit d'une limite théorique : la taille effective des fichiers "ExportN.sql" dépasse la valeur définie dans *tailleLimiteFichiers* car le fichier n’est refermé qu’à l’issue de l’écriture complète de l’enregistrement en cours d’exportation (le contenu des enregistrements n'est pas fractionné). La valeur minimale acceptée est de 100 et la valeur maximale (valeur par défaut) est de 100 000 (100 Mo). 

Le paramètre optionnel *tailleLimiteChamps* vous permet de définir une taille pivot au-dessous de laquelle le contenu d'un champ BLOB, image ou texte externe sera intégré au fichier principal "Export.sql" et non sauvegardé en tant que fichier séparé. Ce paramètre a pour but d'optimiser l'opération d'export en limitant le nombre de sous-dossiers et de fichiers créés sur le disque.   
Le paramètre doit être exprimé en octets. Par exemple, si vous passez 1000, tous les champs BLOB, image ou texte externe contenant des données d'une taille inférieure ou égale à 1000 octets seront intégrés au fichier d'export principal.   
A noter que les données des champs binaires (BLOB et image) intégrées au fichier d'export sont écrites au format hexadécimal, sous la forme X'0f20' (notation hexadécimale SQL standard, cf. *literal*). Ce format est automatiquement pris en charge par le moteur SQL de 4D.   
Par défaut, si le paramètre *tailleLimiteChamps* est omis, les champs BLOB, image et texte externe sont toujours exportés sous forme de fichiers externes, quelle que soit leur taille. 

Dans le fichier d’export, il peut y avoir moins de valeurs que de champs dans la table. Dans ce cas, les champs vides seront considérés comme NULL. Vous pouvez également passer la valeur NULL dans un champ.

Si l’export s’est déroulé correctement, la variable *OK* prend la valeur 1\. Dans le cas contraire, elle prend la valeur 0\. 

##### 

**Note :** Cette commande ne prend pas en charge les champs de type Objet.

#### Voir aussi 

[SQL EXPORT SELECTION](sql-export-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1065 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Interdite sur le serveur ||


