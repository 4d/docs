---
id: select-log-file
title: SELECT LOG FILE
displayed_sidebar: docs
---

<!--REF #_command_.SELECT LOG FILE.Syntax-->**SELECT LOG FILE** ( *logFile* )<br/>**SELECT LOG FILE** ( * )<!-- END REF-->

<!--REF #_command_.SELECT LOG FILE.Params-->

| Paramètres | Type |                             | Description                       |
| ---------- | ---- | --------------------------- | --------------------------------- |
| logFile    | Text | &#8594; | Nom du fichier journal            |
| \*         |      | &#8594; | Fermer le fichier journal courant |

<!-- END REF-->

#### Description

<!--REF #_command_.SELECT LOG FILE.Summary-->La commande **SELECT LOG FILE** crée ou ferme le fichier d'historique (ou fichier journal) de la base de données, suivant la valeur que vous passez en paramètre.<!-- END REF-->.

Passez dans *logFile* le nom ou le chemin d'accès complet du fichier d'historique à créer. Si vous passez uniquement un nom, le fichier sera créé dans le dossier "Logs" de la base, à côte du fichier de structure de la base.

Si vous passez une chaîne vide, **SELECT LOG FILE** présente une boîte de dialogue standard d'enregistrement de fichier, permettant à l'utilisateur de choisir le nom et l'emplacement du fichier d'historique à créer. Si le fichier est correctement créé, la variable OK prend la valeur 1. Autrement, si l'utilisateur clique sur le bouton Annuler ou si le fichier d'historique ne peut pas être créé, OK prend la valeur 0.

**Note :** Le nouveau fichier journal n'est pas généré immédiatement après l'exécution de la commande, mais après la sauvegarde suivante (le paramétrage est conservé dans le fichier de données et sera pris en compte même si la base de données est fermée entre-temps) ou un appel à la commande [`New log file`](new-log-file.md). Vous pouvez appeler la commande [BACKUP](../commands-legacy/backup.md) pour déclencher la création du fichier journal.

Si vous passez *\** dans *logFile*, **SELECT LOG FILE** ferme le fichier journal courant de la base de données. La variable OK prend la valeur 1 lorsque le fichier d'historique est refermé.

#### Variables et ensembles système

OK prend la valeur 1 si le fichier d'historique est correctement créé ou fermé.

#### Voir également

[New log file](new-log-file.md)\
[ON ERR CALL](../commands-legacy/on-err-call.md)

#### Propriétés

|                       |                             |
| --------------------- | --------------------------- |
| Numéro de commande    | 345                         |
| Thread safe           | &cross; |
| Modifie les variables | OK, error                   |

