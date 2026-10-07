---
id: overview
title: 4D en un coup d'œil
slug: /GettingStarted/overview
---

Un projet 4D contient l'intégralité du code source d'une application 4D, quel que soit son type de déploiement (web, mobile ou desktop), de la structure de la base de données à l'interface utilisateur, en passant par le code, les formulaires, les menus, les paramètres utilisateur ou n'importe quelle ressource requise. Un projet 4D est principalement constitué de fichiers texte.

## Fichiers du projet

Les fichiers de projet 4D sont ouverts et édités à l'aide des applications standard de la plate-forme 4D (4D ou 4D Server) sous Windows ou macOS. Avec 4D, des éditeurs complets sont disponibles pour gérer les fichiers, y compris un [éditeur de code](../code-editor/write-class-method.md), un [constructeur d'interface web (4D Qodly Pro)](https://developer.4d.com/qodly/), un [éditeur de formulaires](../FormEditor/formEditor.md), un éditeur de structure, un éditeur de menu...

Les projets étant des fichiers lisibles, en texte brut (JSON, XML, etc.), ils peuvent être lus ou édités manuellement par les développeurs, à l’aide de n’importe quel éditeur de code.

De plus, les fichiers de projet 4D facilitent la programmation générique, la création de modèles d'application et le partage de code. Les projets sont organisés en interne dans des [fichiers et dossiers](../Project/architecture.md).

## Développement

Les projets 4D sont développés à l'aide de l'application **4D**. Elle fournit un Environnement de Développement Intégré (IDE) pour les projets 4D ainsi qu'un serveur web, un constructeur d'interface web, un générateur d'application mobile, et un environnement d'exécution d'application, permettant de développer, tester et déboguer tout type de projet.

### Contrôle des sources

Le développement multi-utilisateur est géré via des outils de **source control** standard (Perforce, Git, SVN, etc.), permettant aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.

### Mode développement sur 4D Server

Si vous êtes une petite équipe de développement et que vous ne voulez pas utiliser un outil de contrôle des sources, vous pouvez utiliser le [**mode développement**](../Desktop/clientServer.md#development-mode) de 4D Server, permettant aux développeurs de travailler en ligne sur le même projet avec 4D en mode distant. Notez que ce mode alternatif doit être utilisé dans des cas spécifiques ; une organisation basée sur les outils de contrôle des sources est généralement recommandé.

## Déploiement

Les fichiers du projet peuvent être [compilés](compiler.md) et facilement déployés. 4D vous permet de créer plusieurs types d'applications à partir de vos projets, y compris des applications [web](WebServer/webServer.md), des applications [desktop](Desktop/building.md) (client/serveur ou mono-utilisateur) ou des [applications mobiles](https://developer.4d.com/go-mobile/).

Les applications back end peuvent être déployées à l'aide de 4D Server, 4D ou [fusionnées avec 4D Volume Desktop](../Desktop/building.md).