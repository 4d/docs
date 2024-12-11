---
id: select-log-file
title: SELECT LOG FILE
slug: /commands/select-log-file
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *historique* )<!-- END REF-->
<!--REF #_command_.SELECT LOG FILE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| historique | *, Text | &#8594;  | Nom du fichier d'historique ou * pour refermer l'historique courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.SELECT LOG FILE.Summary-->La commande **SELECT LOG FILE** crée ou ferme le fichier d'historique de la base de données, suivant la valeur que vous passez dans *historique*.<!-- END REF-->

Passez dans *historique* le nom ou le chemin d'accès complet du fichier d'historique à créer. Si vous passez uniquement un nom, le fichier sera créé dans le dossier "Logs" de la base, à côte du fichier de structure de la base. Si vous passez une chaîne vide, **SELECT LOG FILE** présente une boîte de dialogue standard d'enregistrement de fichier, permettant à l'utilisateur de choisir le nom et l'emplacement du fichier d'historique à créer. Si le fichier est correctement créé, la variable OK prend la valeur 1\. Autrement, si l'utilisateur clique sur le bouton **Annuler** ou si le fichier d'historique ne peut pas être créé, OK prend la valeur 0.

**Note :** Le nouveau fichier d’historique n’est pas généré immédiatement après l’exécution de la commande, mais après la prochaine sauvegarde (le paramètre est conservé dans le fichier de données, il sera pris en compte même si la base est refermée entre-temps. Vous pouvez appeler la commande [BACKUP](backup.md) pour provoquer la création du fichier d’historique.

Si vous passez *\** dans *historique*, **SELECT LOG FILE** referme le fichier d'historique courant de la base. La variable OK prend la valeur 1 lorsque le fichier d'historique est refermé.

Si vous utilisez **SELECT LOG FILE** pour créer un fichier d'historique avant qu'une sauvegarde n'ait été réalisée et si le fichier de données contient déjà des enregistrements, 4D génère l'erreur *\-4447*, que vous pouvez intercepter avec une méthode installée par [ON ERR CALL](on-err-call.md).

#### Variables et ensembles système 

OK prend la valeur 1 si le fichier d'historique est correctement créé ou fermé.

#### Gestion des erreurs 

L'erreur -4447 est générée si l'opération ne peut pas être réalisée car la base de données doit être auparavant sauvegardée.

#### Voir aussi 

[ON ERR CALL](on-err-call.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 345 |
| Thread safe | &check; |
| Modifie les variables | OK, error |
| Interdite sur le serveur ||


