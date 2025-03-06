---
id: component-list
title: COMPONENT LIST
slug: /commands/component-list
displayed_sidebar: docs
---

<!--REF #_command_.COMPONENT LIST.Syntax-->**COMPONENT LIST** ( *tabComposants* )<!-- END REF-->
<!--REF #_command_.COMPONENT LIST.Params-->
| Paramètre | Type |  | Description |
| --- | --- | --- | --- |
| tabComposants | Text array | &#8592; | Noms des composants |

<!-- END REF-->

#### Description 

<!--REF #_command_.COMPONENT LIST.Summary-->La commande **COMPONENT LIST** dimensionne et remplit le tableau *tabComposants* avec les noms des composants chargés par l’application 4D pour la base hôte courante.<!-- END REF-->

A l’ouverture d’une base, 4D charge les composants valides situés dans le(s) dossier(s) Components :

* le dossier Components situé à côté du fichier de structure (s'il y en a un),
* le dossier Components situé à côté de l'application 4D exécutable.

**Rappel :** Si un même composant est placé aux deux endroits, 4D charge uniquement celui situé à côté de la structure. 

Cette commande peut être appelée depuis la base hôte ou depuis un composant. Si la base n’utilise pas de composant, le tableau *tabComposants* est retourné vide. 

Les noms des composants sont les noms des fichiers de structure des bases matrices (.4db, .4dc ou .4dbase). Cette commande permet de mettre en place des architectures et des interfaces modulaires proposant des fonctionnalités supplémentaires en fonction de la présence des composants.

Pour plus d'informations sur les composants 4D, reportez-vous au manuel *Mode Développement*.

#### Voir aussi 

[PLUGIN LIST](plugin-list.md)  

#### Propriétés

|  |  |
| --- | --- |
| Numéro de commande | 1001 |
| Thread safe | &check; |


