---
id: sql-get-option
title: SQL GET OPTION
slug: /commands/sql-get-option
displayed_sidebar: docs
---

<!--REF #_command_.SQL GET OPTION.Syntax-->**SQL GET OPTION** ( *option* ; *valeur* )<!-- END REF-->
<!--REF #_command_.SQL GET OPTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| option | Integer | &#8594;  | Numéro d’option |
| valeur | Integer, Text | &#8592; | Valeur de l’option |

<!-- END REF-->

#### Description 

<!--REF #_command_.SQL GET OPTION.Summary-->La commande **SQL GET OPTION** retourne la *valeur* courante de l’option passée dans le paramètre *option*.<!-- END REF-->

Pour plus d’informations sur les différentes options et leurs valeurs associées, reportez-vous à la description de la commande [SQL SET OPTION](sql-set-option.md).

#### Variables et ensembles système 

Si la commande a été correctement exécutée, la variable système OK retourne 1, sinon elle retourne 0.

#### Voir aussi 

[SQL SET OPTION](sql-set-option.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 819 |
| Thread safe | &cross; |
| Modifie les variables | OK |


