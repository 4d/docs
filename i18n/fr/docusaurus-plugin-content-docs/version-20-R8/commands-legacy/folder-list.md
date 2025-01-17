---
id: folder-list
title: FOLDER LIST
slug: /commands/folder-list
displayed_sidebar: docs
---

<!--REF #_command_.FOLDER LIST.Syntax-->**FOLDER LIST** ( *cheminAccès* ; *dossiers* )<!-- END REF-->
<!--REF #_command_.FOLDER LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAccès | Text | &#8594;  | Chemin d'accès de volume, répertoire ou dossier |
| dossiers | Text array | &#8592; | Noms des dossiers situés à cet endroit |

<!-- END REF-->

#### Description 

<!--REF #_command_.FOLDER LIST.Summary-->La commande **FOLDER LIST** remplit le tableau de type Texte ou Alpha *dossiers* avec les noms des dossiers (répertoires sous Windows) situés à l'endroit que vous avez indiqué avec le paramètre *cheminAccès*.<!-- END REF-->Vous devez passer un chemin d'accès absolu dans le paramètre *cheminAccès*. 

S'il n'y pas de dossier à cet endroit, la commande retourne un tableau vide. Si le chemin d'accès que vous avez passé dans *cheminAccès* est invalide, **FOLDER LIST** génère une erreur de gestionnaire de fichiers que vous pouvez intercepter à l'aide d'une méthode installée par [ON ERR CALL](on-err-call.md).

#### Voir aussi 

[DOCUMENT LIST](document-list.md)  
[VOLUME LIST](volume-list.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 473 |
| Thread safe | &check; |
| Modifie les variables | error |


