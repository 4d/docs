---
id: overview
title: Vue d’ensemble
---

Un projet 4D contient l'intégralité du code source d'une application 4D, quel que soit son type de déploiement (web, mobile ou desktop), de la structure de la base de données à l'interface utilisateur, en passant par le code, les formulaires, les menus, les paramètres utilisateur ou n'importe quelle ressource requise. Un projet 4D est principalement constitué de fichiers texte.

## Fichiers du projet

Les fichiers de projet 4D sont ouverts et édités à l'aide d'applications standard de la plate-forme 4D (4D ou 4D Server). Un projet 4D contient l'intégralité du code source d'une application 4D, quel que soit son type de déploiement (web, mobile ou desktop), de la structure de la base de données à l'interface utilisateur, en passant par le code, les formulaires, les menus, les paramètres utilisateur ou n'importe quelle ressource requise.

Les projets étant des fichiers lisibles, en texte brut (JSON, XML, etc.), ils peuvent être lus ou édités manuellement par les développeurs, à l’aide de n’importe quel éditeur de code.

De plus, les fichiers de projet 4D facilitent la programmation générique, la création de modèles d'application et le partage de code. Les fichiers du projet peuvent être [compilés](compiler.md) et facilement déployés.

## Développement

Les projets 4D sont développés à l'aide de l'application **4D**. Elle fournit un Environnement de Développement Intégré (IDE) pour les projets 4D ainsi qu'un serveur web, un générateur d'application mobile, et un environnement d'exécution d'application, permettant de développer, tester et déboguer le projet.

Le développement multi-utilisateur est géré via des outils de **source control** standard (Perforce, Git, SVN, etc.), permettant aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.

## Application finale

Les fichiers du projet peuvent être [compilés](compiler.md) et facilement déployés. 4D vous permet de créer trois types d'applications à partir de vos projets :

- des applications [web](WebServer/webServer.md),
- des applications [mobile](https://developer.4d.com/go-mobile/),
- des applications [desktop](Desktop/building.md) (client/serveur ou monoposte).

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume Desktop](../Desktop/building.md).