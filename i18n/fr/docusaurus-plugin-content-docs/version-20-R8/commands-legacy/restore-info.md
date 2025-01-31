---
id: restore-info
title: RESTORE INFO
slug: /commands/restore-info
displayed_sidebar: docs
---

<!--REF #_command_.RESTORE INFO.Syntax-->**RESTORE INFO** ( *sélecteur* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.RESTORE INFO.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Integer | &#8594;  | Type d’information à récupérer |
| info1 | Integer, Date | &#8592; | Valeur 1 du sélecteur |
| info2 | Text, Time | &#8592; | Valeur 2 du sélecteur |

<!-- END REF-->

#### Description 

<!--REF #_command_.RESTORE INFO.Summary-->La commande **RESTORE INFO** permet de récupérer des informations relatives à la dernière restitution automatique de la base.<!-- END REF--> 

Passez dans le paramètre *sélecteur* le type d’information à récupérer. Vous pouvez utiliser une des constantes suivantes, placées dans le thème “*Sauvegarde et restitution*” :

| Constante           | Type        | Valeur |
| ------------------- | ----------- | ------ |
| Last restore date   | Entier long | 0      |
| Last restore status | Entier long | 2      |

Le type et le contenu des paramètres *info1* et *info2* dépendent de la valeur de *sélecteur*.

* Si *sélecteur* \= 0 (Last Restore Date), *info1* retourne la date et *info2* l’heure de la dernière restitution automatique de la base.
* Si *sélecteur* \= 2 (Last Restore Status), *info1* retourne le numéro et *info2* le texte du statut de la dernière restitution automatique de la base.

**Note :** Cette commande ne tient pas compte des restitutions manuelles de la base.

#### Voir aussi 

[RESTORE](restore.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 889 |
| Thread safe | &cross; |


