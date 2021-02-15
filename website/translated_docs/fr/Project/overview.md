---
id: overview
title: Aperçu
---

Un projet 4D contient l'intégralité du code source d'une application 4D, quel que soit son type de déploiement (web, mobile ou desktop), de la structure de la base de données à l'interface utilisateur, en passant par le code, les formulaires, les menus, les paramètres utilisateur ou n'importe quelle ressource requise. Un projet 4D est principalement constitué de fichiers texte.


## Fichiers du projet

Les fichiers de projet 4D sont ouverts et édités à l'aide d'applications standard de la plate-forme 4D (4D ou 4D Server). Avec 4D, des éditeurs complets sont disponibles pour gérer les fichiers, y compris un éditeur de structure, un éditeur de méthode, un éditeur de formulaire, un éditeur de menu, etc...

Les projets étant des fichiers lisibles, en texte brut (JSON, XML, etc.), ils peuvent être lus ou édités manuellement par les développeurs, à l’aide de n’importe quel éditeur de code.

De plus, les fichiers de projet 4D facilitent la programmation générique, la création de modèles d'application et le partage de code. Les projets sont organisés en interne dans des [fichiers et dossiers](Project/architecture.md).


## Développement

Les projets 4D sont développés à l'aide de l'application **4D**. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing to develop, test, and debug any kind of project.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.


## Final application

Project files can be compiled and easily deployed. 4D allows you to create three types of applications from your projects:

- [web](WebServer/webServerObject.md) applications,
- [mobile](https://developer.4d.com/4d-for-ios/) applications,
- [desktop](Desktop/building.md) applications (client/server or single-user).

Back end applications can be deployed using 4D Server, 4D, or merged with 4D Volume license.