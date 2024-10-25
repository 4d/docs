---
id: restore
title: RESTORE
slug: /commands/restore
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE.Syntax-->**RESTORE** {( *cheminArchive* {; *cheminDossierDest*} )}<!-- END REF-->
<!--REF #_command_.RESTORE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminArchive | Text | &#8594;  | Chemin d’accès de l’archive à restituer |
| cheminDossierDest | Text | &#8594;  | Chemin d’accès du dossier de destination |

<!-- END REF-->

*Cette commande n'est pas thread-safe, elle ne peut pas être utilisée dans du code préemptif.*


#### Description 

<!--REF #_command_.RESTORE.Summary-->La commande **RESTORE** permet restituer le ou les fichier(s) inclus dans une archive 4D.<!-- END REF--> Cette commande est utile dans le cadre d’interfaces personnalisées pour la gestion des sauvegardes. 

Si vous ne passez pas le paramètre *cheminArchive*, la commande affiche une boîte de dialogue d’ouverture permettant à l’utilisateur de sélectionner l'archive à restituer.

Le paramètre *cheminArchive* vous permet d’indiquer le chemin d’accès du fichier d’archive à restituer. Ce chemin doit être exprimé avec la syntaxe système. Vous pouvez passer un chemin d’accès absolu ou relatif au fichier de structure de la base.   
Dans ce cas (si le paramètre *cheminDossierDest* est omis), la boîte de dialogue de restitution standard apparaît avec l’archive pré-sélectionnée, permettant à l’utilisateur de désigner le dossier de destination. A l’issue de la procédure, une boîte de dialogue d’alerte apparaît et le dossier contenant les éléments restitués est affiché. 

Vous pouvez également passer le paramètre *cheminDossierDest* avec le chemin d’accès du dossier de destination des éléments restitués. Ce chemin doit être exprimé avec la syntaxe système. Vous pouvez passer un chemin d’accès absolu ou relatif au fichier de structure de la base. Si vous passez ce paramètre, une boîte de dialogue de restitution préconfigurée apparaît, permettant uniquement à l’utilisateur de lancer ou d’annuler la restitution. A l’issue de la procédure, la fenêtre est simplement refermée sans affichage d’information supplémentaire. 

La commande **RESTORE** modifie la valeur des variables *OK* et *Document* : si la restitution s’est déroulée correctement, *OK* prend la valeur 1 et *Document* contient le chemin du dossier de restitution. Si l’utilisateur a annulé la boîte de dialogue de restitution, interrompu la restitution ou si une erreur s’est produite, *OK* prend la valeur 0 et *Document* contient une chaîne vide. Vous pouvez intercepter l’erreur à l’aide d’une méthode installée via la commande [ON ERR CALL](on-err-call.md).

**Note :** Dans le cadre d'une application 4D compilée et fusionnée avec 4D Volume Desktop, la commande **RESTORE** provoque l’affichage d'une boîte de dialogue système standard d'ouverture de fichiers, proposant par défaut les fichiers d'extension “4BK”.

#### Voir aussi 

[BACKUP](backup.md)  
[RESTORE INFO](restore-info.md)  