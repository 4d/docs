---
id: remove-from-set
title: REMOVE FROM SET
slug: /commands/remove-from-set
displayed_sidebar: docs
---

<!--REF #_command_.REMOVE FROM SET.Syntax-->**REMOVE FROM SET** ( {*laTable* ;} *ensemble* )<!-- END REF-->
<!--REF #_command_.REMOVE FROM SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l'enregistrement courant ou Table par défaut si ce paramètre est omis |
| ensemble | Text | &#8594;  | Nom de l'ensemble duquel supprimer l'enregistrement courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.REMOVE FROM SET.Summary-->**REMOVE FROM SET** supprime l'enregistrement courant de *laTable* de l'ensemble *ensemble*.<!-- END REF--> L'ensemble doit déjà exister ; s'il n'existe pas, une erreur est générée. S'il n'y a pas d'enregistrement courant dans *laTable*, **REMOVE FROM SET** ne fait rien.

#### Voir aussi 

[ADD TO SET](add-to-set.md)  

#### Propriétés
|  |  |
| --- | --- |
| Numéro de commande | 561 |
| Thread safe | &check; |
| Modifie les variables | error |
| Interdite sur le serveur ||


