---
id: log-file
title: Log File
slug: /commands/log-file
displayed_sidebar: docs
---

<!--REF #_command_.Log File.Syntax-->**Log File**  : Text<!-- END REF-->
<!--REF #_command_.Log File.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| Résultat | Text | &#8592; | Nom long du fichier d’historique de la base |

<!-- END REF-->

#### Description 

<!--REF #_command_.Log File.Summary-->La commande **Log File** retourne le nom long (c’est-à-dire le chemin d’accès complet au fichier, y compris son nom) du fichier d’historique courant de la base ouverte.<!-- END REF--> 

Si la base fonctionne sans fichier d’historique, la fonction retourne une chaîne vide et la variable système OK prend la valeur 0\. 

Si la base fonctionne avec un fichier d’historique, la variable système OK prend la valeur 1\. Le chemin d’accès retourné par la commande est exprimé avec la syntaxe de la plate-forme courante.

**ATTENTION :** Si vous exécutez cette commande depuis un poste 4D Client, seul le nom du fichier d’historique est retourné, pas le nom long.

#### Variables et ensembles système 

* Si la base fonctionne sans fichier d’historique, la variable système OK prend la valeur 0\. Sinon, elle prend la valeur 1.
* Si le fichier d'historique devient inaccessible au cours de la session de travail, l'erreur 1274 est générée et 4D Server ne permet plus aux utilisateurs d'écrire ou de modifier des données. Lorsque le fichier d'historique est de nouveau accessible, il est nécessaire d'effectuer une sauvegarde.

#### Voir aussi 

[SELECT LOG FILE](select-log-file.md)  