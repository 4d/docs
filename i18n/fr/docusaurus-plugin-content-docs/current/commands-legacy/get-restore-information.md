---
id: get-restore-information
title: GET RESTORE INFORMATION
slug: /commands/get-restore-information
displayed_sidebar: docs
---

<!--REF #_command_.GET RESTORE INFORMATION.Syntax-->**GET RESTORE INFORMATION** ( *sélecteur* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET RESTORE INFORMATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Integer | &#x1F852; | Type d’information à récupérer |
| info1 | Integer, Date | &#x1F858; | Valeur 1 du sélecteur |
| info2 | Text, Time | &#x1F858; | Valeur 2 du sélecteur |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET RESTORE INFORMATION.Summary-->La commande **GET RESTORE INFORMATION** permet de récupérer des informations relatives à la dernière restitution automatique de la base.<!-- END REF--> 

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