---
id: truncate-table
title: TRUNCATE TABLE
slug: /commands/truncate-table
displayed_sidebar: docs
---

<!--REF #_command_.TRUNCATE TABLE.Syntax-->**TRUNCATE TABLE** {( *laTable* )}<!-- END REF-->
<!--REF #_command_.TRUNCATE TABLE.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de laquelle vous voulez supprimer tous les enregistrements ou Table par défaut si ce paramètre est omis |

<!-- END REF-->

#### Description 

<!--REF #_command_.TRUNCATE TABLE.Summary-->La commande **TRUNCATE TABLE** supprime tous les enregistrements de *laTable* de façon très rapide.<!-- END REF--> Après l’appel de la commande, il n’y a plus de sélection courante ni d’enregistrement courant.

L’effet de cette commande est semblable à celui d’une séquence [ALL RECORDS](all-records.md) / [DELETE SELECTION](delete-selection.md), toutefois son fonctionnement diffère sur les points suivants :

* Le trigger éventuel n'est pas appelé.
* L’intégrité référentielle des données n’est pas contrôlée.
* Aucune transaction ne doit être en cours dans le process exécutant **TRUNCATE TABLE**. Si c’est le cas, la commande ne fait rien et la variable système OK prend la valeur 0.
* Si un enregistrement au moins est verrouillé par un autre process, la commande échoue : une erreur est générée et la variable OK prend la valeur 0\. L’ensemble système LockedSet n’est pas créé.
* Si *laTable* est déjà vide, **TRUNCATE TABLE** ne fait rien et fixe la variable OK à 1.
* Si *laTable* est en lecture seule, **TRUNCATE TABLE** ne fait rien et fixe la variable OK à 0.
* L’opération est enregistrée dans le fichier d’historique s’il est présent.

La commande **TRUNCATE TABLE** est donc à manier avec précaution mais est très efficace pour, par exemple, supprimer rapidement des données temporaires.

**Note :** Le concept et le fonctionnement de cette commande sont proches de ceux de la commande TRUNCATE (TABLE) du SQL.

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK prend la valeur 1\. Sinon, elle prend la valeur 0.

#### Voir aussi 

[DELETE SELECTION](delete-selection.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 1051 |
| Thread safe | &check; |
| Modifie les variables | OK |
| Change l'enregistrement courant ||
| Change la sélection courante ||
| Interdite sur le serveur ||


