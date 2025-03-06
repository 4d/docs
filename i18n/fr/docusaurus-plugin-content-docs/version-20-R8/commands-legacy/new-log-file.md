---
id: new-log-file
title: New log file
slug: /commands/new-log-file
displayed_sidebar: docs
---

<!--REF #_command_.New log file.Syntax-->**New log file**  : Text<!-- END REF-->
<!--REF #_command_.New log file.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Chemin d’accès complet du fichier d’historique refermé |

<!-- END REF-->

#### Description 

<!--REF #_command_.New log file.Summary-->**Note préliminaire :** Cette commande ne fonctionne qu’avec 4D Server.<!-- END REF--> Elle ne peut être exécutée que via la commande [Execute on server](execute-on-server.md) ou dans une procédure stockée. 

La commande **New log file** referme le fichier d’historique courant, le renomme et en crée un nouveau avec le même nom et au même emplacement que le précédent. Cette commande est destinée à la mise en place d’un système de sauvegarde par miroir logique (cf. section “*Mise en place d'un miroir logique*” dans le Manuel de référence de 4D Server). 

La commande retourne le nom complet (chemin d’accès+nom) du fichier d’historique refermé (appelé “segment”). Ce fichier est stocké au même emplacement que le fichier d’historique courant (spécifié dans la page Configuration des préférences de l’application, thème Sauvegarde). La commande n’effectue aucun traitement (compression, segmentation) sur le fichier sauvegardé. Aucune boîte de dialogue n’apparaît.

Le fichier est renommé avec les numéros de sauvegarde courants de la base et du fichier d’historique, sur le modèle suivant : NomBase\[NumSvgde-NumSvgdeHisto\].journal. Par exemple : 

* si la base MaBase.4DD a été sauvegardée 4 fois, le dernier fichier de sauvegarde se nomme MaBase\[0004\].4BK. Le nom du premier “segment” de fichier d’historique sera donc MaBase\[0004-0001\].journal.
* si la base MaBase.4DD a été sauvegardée 3 fois et que le fichier d’historique a été sauvegardé 5 fois depuis, le nom de la 6e sauvegarde du fichier d’historique sera MaBase\[0003-0006\].journal.

#### Gestion des erreurs 

En cas d'anomalie, la commande génère une erreur que vous pouvez intercepter à l’aide de la commande [ON ERR CALL](on-err-call.md).



#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 926 |
| Thread safe | &check; |
| Modifie les variables | error |


