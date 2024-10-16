---
id: add-to-set
title: ADD TO SET
slug: /commands/add-to-set
displayed_sidebar: docs
---

<!--REF #_command_.ADD TO SET.Syntax-->**ADD TO SET** ( {*laTable* ;} *ensemble* )<!-- END REF-->
<!--REF #_command_.ADD TO SET.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table de l'enregistrement courant ou Table par défaut si ce paramètre est omis |
| ensemble | Text | &#8594;  | Nom de l'ensemble auquel ajouter l'enregistrement courant |

<!-- END REF-->

#### Description 

<!--REF #_command_.ADD TO SET.Summary-->**ADD TO SET** ajoute l'enregistrement courant de *laTable* à *ensemble*.<!-- END REF--> L'ensemble doit avoir déjà été créé ; si *ensemble* n'existe pas, une erreur est retournée. S'il n'y a pas d'enregistrement courant pour *laTable*, **ADD TO SET** ne fait rien.

#### Voir aussi 

[REMOVE FROM SET](remove-from-set.md)  