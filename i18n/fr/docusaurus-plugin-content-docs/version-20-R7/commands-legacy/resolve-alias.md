---
id: resolve-alias
title: RESOLVE ALIAS
slug: /commands/resolve-alias
displayed_sidebar: docs
---

<!--REF #_command_.RESOLVE ALIAS.Syntax-->**RESOLVE ALIAS** ( *cheminAlias* ; *cheminCible* )<!-- END REF-->
<!--REF #_command_.RESOLVE ALIAS.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| cheminAlias | Text | &#8594;  | Nom ou chemin d’accès complet de l’alias/ du raccourci |
| cheminCible | Text | &#8592; | Nom ou chemin d’accès complet de la cible de l’alias/du raccourci |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESOLVE ALIAS.Summary-->La commande **RESOLVE ALIAS** retourne le chemin d’accès complet du fichier ou dossier cible d’un alias (appelé “raccourci” sous Windows).<!-- END REF--> 

Vous passez dans *cheminAlias* le nom ou le chemin d’accès complet de l’alias. 

**Note :** Sous Windows, les raccourcis sont des fichiers dont l’extension est “.LNK”. Si vous ne passez pas cette extension, la commande l’ajoute automatiquement. 

Après l’exécution de la commande, la variable *cheminCible* contient le chemin d’accès complet du fichier ou dossier cible de l’alias et la variable système OK prend la valeur 1.  
Si le chemin passé dans *cheminAlias* correspond à un fichier et non à un alias, *cheminCible* retourne le chemin d’accès du fichier et la variable système OK prend la valeur 0.

#### Variables et ensembles système 

Si *cheminAlias* désigne bien un alias/raccourci, la variable système OK prend la valeur 1\. Si *cheminAlias* désigne un fichier standard, la variable système OK prend la valeur 0.

#### Voir aussi 

[CREATE ALIAS](create-alias.md)  