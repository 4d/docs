---
id: overview
title: Aperçu
---

Un projet 4D contient l'intégralité du code source d'une application 4D, quel que soit son type de déploiement (web, mobile ou desktop), de la structure de la base de données à l'interface utilisateur, en passant par le code, les formulaires, les menus, les paramètres utilisateur ou n'importe quelle ressource requise. Un projet 4D est principalement constitué de fichiers texte.


## Fichiers du projet

Les fichiers de projet 4D sont ouverts et édités à l'aide d'applications standard de la plate-forme 4D (4D ou 4D Server). Avec 4D, des éditeurs complets sont disponibles pour gérer les fichiers, y compris un éditeur de structure, un éditeur de méthode, un éditeur de formulaire, un éditeur de menu, etc...

Les projets étant des fichiers lisibles, en texte brut (JSON, XML, etc.), ils peuvent être lus ou édités manuellement par les développeurs, à l’aide de n’importe quel éditeur de code.

De plus, les fichiers de projet 4D facilitent la programmation générique, la création de modèles d'application et le partage de code. Les projets sont organisés en interne dans des [fichiers et dossiers](Project/architecture.md).

La flexibilité du développement d'un projet 4D est particulièrement démontrée lorsque plusieurs développeurs doivent travailler simultanément sur la même partie d'une application. Les fichiers de projet 4D sont particulièrement bien adaptés pour être gérés par un système de **contrôle de version** (Perforce, Git, SVN, etc.), permettant aux équipes de développement de tirer parti de fonctionnalités telles que :

- Versioning
- Comparaisons de révision
- Retours en arrière (Rollbacks)

## Développement

Votre application 4D peut ouvrir des projets **en local** ou **à distance** :

- **[en loca](creating.md#opening-a-local-project)** - les fichiers de projet sont stockés sur le même poste que l'application 4D; ils sont exécutés et édités par une seule application 4D.
- **[à distance](creating.md#opening-a-remote-project)** - les fichiers de projet sont stockés sur la machine 4D Server; Les applications 4D se connectent au serveur et ouvrent le projet en lecture seule, généralement à des fins de test. Cependant, un projet ouvert par 4D Server est modifiable par 4D si [les deux applications sont sur la même machine](Project/developing.md#using-4d-developer-on-the-same-machine).

![](assets/en/getStart/localremote.png)

Lorsque vous sélectionnez le projet à ouvrir, vous sélectionnez également le mode à utiliser.


## Déploiement

Les fichiers de projet peuvent être compilés et facilement déployés pour votre application Web, mobile ou de bureau (client-serveur ou monoposte).

Final application deployment files are generated during the building process, using the [4D build manager](Admin/building.md). Applications can be opened by 4D Server, 4D, or merged with 4D Volume license.

