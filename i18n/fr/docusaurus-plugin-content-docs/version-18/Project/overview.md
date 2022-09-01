---
id: overview
title: Vue d’ensemble
---

Un projet 4D contient l'intégralité du code source d'une application de base de données 4D, de la structure de la base de données à l'interface utilisateur, en passant par les formulaires, les menus, les paramètres utilisateur ou n'importe quelle ressource requise. Un projet 4D est principalement constitué de fichiers texte.

Les projets 4D sont créés et gérés à l'aide de l'application 4D Developer. Les fichiers de projet sont ensuite utilisés pour créer les fichiers de déploiement d'application finaux, qui peuvent être ouverts avec 4D Server ou une licence 4D Volume (applications fusionnées).


## Fichiers du projet

Les fichiers de projet 4D sont ouverts et édités à l'aide d'applications standard de la plate-forme 4D. Des éditeurs complets sont disponibles pour gérer les fichiers, y compris un éditeur de structure, un éditeur de méthode, un éditeur de formulaire, un éditeur de menu, etc.

De plus, les projets étant des fichiers lisibles, en texte brut (JSON, XML, etc.), ils peuvent être lus ou édités manuellement par les développeurs, à l’aide de n’importe quel éditeur de code.


## Contrôle de la source

Les fichiers de projet 4D facilitent la programmation générique, la création de modèles d'application et le partage de code.

La flexibilité du développement d'un projet 4D est particulièrement démontrée lorsque plusieurs développeurs doivent travailler simultanément sur la même partie d'une application. Les fichiers de projet 4D sont particulièrement bien adaptés pour être gérés par un système de **contrôle de version** (Perforce, Git, SVN, etc.), permettant aux équipes de développement de tirer parti de fonctionnalités telles que :

- Versioning
- Comparaisons de révision
- Retours en arrière (Rollbacks)


## Travailler avec des projets

Vous pouvez créer un projet de base de données 4D :

- en créant un nouveau projet vierge - voir [Créer un projet 4D](creating.md).
- en exportant un développement "binaire" 4D existant en projet -- voir "Exporter depuis une base 4D" sur [doc.4d.com](https://doc.4d.com).

Le développement du projet s'effectue localement, à l'aide de l'application 4D Developer - reportez-vous à la section [Développer un projet](developing.md). Les interactions de développement d'équipe sont gérées par un outil de contrôle de version.

Les projets 4D peuvent être compilés et facilement déployés sur des applications en monoposte ou en client-serveur qui contiennent des versions compactées de votre projet - voir [Créer un package de projet](building.md).
