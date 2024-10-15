---
id: get-backup-information
title: GET BACKUP INFORMATION
slug: /commands/get-backup-information
displayed_sidebar: docs
---

<!--REF #_command_.GET BACKUP INFORMATION.Syntax-->**GET BACKUP INFORMATION** ( *sélecteur* ; *info1* ; *info2* )<!-- END REF-->
<!--REF #_command_.GET BACKUP INFORMATION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| sélecteur | Integer | &rarr; | Type d’information à récupérer |
| info1 | Integer, Date | &larr; | Valeur 1 du sélecteur |
| info2 | Time, Text | &larr; | Valeur 2 du sélecteur |

<!-- END REF-->

#### Description 

<!--REF #_command_.GET BACKUP INFORMATION.Summary-->La commande **GET BACKUP INFORMATION** permet de récupérer des informations relatives à la dernière sauvegarde effectuée sur les données de la base.<!-- END REF-->

Passez dans le paramètre *sélecteur* le type d’information à récupérer. Le type et le contenu des paramètres *info1* et *info2* dépendent de la valeur du *sélecteur.* Vous pouvez utiliser une des constantes suivantes, placées dans le thème “*Sauvegarde et restitution*” : 

| Constante               | Type        | Valeur | Comment                                                                                                                                                                                                                                   |
| ----------------------- | ----------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Last backup date        | Entier long | 0      | *info1* et info2 retournent respectivement la date et l'heure de la dernière sauvegarde.                                                                                                                                                  |
| Last backup information | Entier long | 5      | *info1* retourne la durée de la dernière sauvegarde en millisecondes (entier long) et *info2* retourne le timestamp de début de la dernière sauvegarde (chaine, voir les détails de formatage dans la commande [Timestamp](timestamp.md)) |
| Last backup status      | Entier long | 2      | *info1* et info2 retournent respectivement le numéro et le texte du statut de la dernière sauvegarde.                                                                                                                                     |
| Next backup date        | Entier long | 4      | *info1* et info2 retournent respectivement la date et l'heure de la prochaine sauvegarde prévue.                                                                                                                                          |

#### Voir aussi 

[RESTORE](restore.md)  