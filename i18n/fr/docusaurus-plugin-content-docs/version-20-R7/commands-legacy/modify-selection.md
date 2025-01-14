---
id: modify-selection
title: MODIFY SELECTION
slug: /commands/modify-selection
displayed_sidebar: docs
---

<!--REF #_command_.MODIFY SELECTION.Syntax-->**MODIFY SELECTION** ( {*laTable*}{; *modeSélection*}{; *saisieListe*}{; *}{; *} )<!-- END REF-->
<!--REF #_command_.MODIFY SELECTION.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Table à afficher et modifier ou Table par défaut si ce paramètre est omis |
| modeSélection | Integer | &#8594;  | Mode de sélection |
| saisieListe | Boolean | &#8594;  | Autoriser saisie en liste |
| * | Operator |  &#8594;  | Utiliser formulaire sortie pour un seul enregistrement et cacher les barres de défilement dans le formulaire entrée |
| * | Operator |  &#8594;  | Afficher les barres de défilement dans le formulaire entrée (= annuler le second effet du premier paramètre *) |

<!-- END REF-->

#### Description 

<!--REF #_command_.MODIFY SELECTION.Summary-->La commande **MODIFY SELECTION** est quasiment identique à la commande [DISPLAY SELECTION](display-selection.md).<!-- END REF--> Reportez-vous à la commande [DISPLAY SELECTION](display-selection.md) pour une description détaillée.  
Les seules différences entre ces deux commandes sont les suivantes :

1\. [DISPLAY SELECTION](display-selection.md) et **MODIFY SELECTION** provoquent l'affichage des enregistrements de la sélection courante de *laTable* dans le formulaire sortie courant, ou dans le formulaire entrée lorsque vous double-cliquez sur un enregistrement. Avec **MODIFY SELECTION**, vous pouvez en plus modifier les champs de l'enregistrement dans le formulaire entrée lorsque vous double-cliquez dessus (s'il n'est pas déjà chargé par un autre utilisateur/process) ou en mode “Saisie en liste” (s'il est autorisé).

2\. [DISPLAY SELECTION](display-selection.md) charge les enregistrements en mode Lecture seulement dans le process courant, ce qui signifie qu'ils ne sont pas verrouillés en écriture pour les autres process. **MODIFY SELECTION** place tous les enregistrements de la sélection en mode Lecture-écriture, ce qui signifie qu'ils sont automatiquement verrouillés en écriture pour les autres process. **MODIFY SELECTION** libère les enregistrements lorsque son exécution est terminée.

#### Voir aussi 

[DISPLAY SELECTION](display-selection.md)  
[Form event code](../commands/form-event-code.md)"  
*Présentation des ensembles*  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 204 |
| Thread safe | &cross; |
| Interdite sur le serveur ||


