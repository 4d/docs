---
id: overview
title: 4D en un coup d'œil
slug: /GettingStarted/overview
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, desktop, or mobile), from the database structure to the user interface, including code, web pages, forms, menus, user settings, or any required resources. Un projet 4D est principalement constitué de fichiers texte.

## Fichiers du projet

4D project files are open and edited using regular 4D platform applications (4D or 4D Server), on Windows or macOS. With 4D, full-featured editors are available to manage files, including a [code editor](../code-editor/write-class-method.md), a [web interface builder (4D Qodly Pro)](https://developer.4d.com/qodly/), a [form editor](../FormEditor/formEditor.md), a structure editor, a menu editor...

Les projets étant des fichiers lisibles, en texte brut (JSON, XML, etc.), ils peuvent être lus ou édités manuellement par les développeurs, à l’aide de n’importe quel éditeur de code.

De plus, les fichiers de projet 4D facilitent la programmation générique, la création de modèles d'application et le partage de code. Les projets sont organisés en interne dans des [fichiers et dossiers](../Project/architecture.md).

## Développement

Les projets 4D sont développés à l'aide de l'application **4D**. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a web interface builder, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project.

### Contrôle de la source

Le développement multi-utilisateur est géré via des outils de **source control** standard (Perforce, Git, SVN, etc.), permettant aux développeurs de travailler sur différentes branches et de comparer, fusionner ou annuler des modifications.

### Development mode on 4D Server

If you are a small-size development team and you do not want to use a source control tool, you can use the [**Development mode**](../Desktop/clientServer.md#development-mode) of 4D Server, allowing developers to work online on the same project with 4D in remote mode. Note that this alternative mode should be used in specific cases; using an organisation based upon source control tools (see above) is usually recommended.

## Déploiement

Les fichiers du projet peuvent être [compilés](compiler.md) et facilement déployés. 4D allows you to create several types of application from your projects, including [web](WebServer/webServer.md) applications, [desktop](Desktop/building.md) applications (client/server or single-user), or [mobile applications](https://developer.4d.com/go-mobile/).

Les applications back end peuvent être déployées à l'aide de 4D Server, 4D ou [fusionnées avec 4D Volume Desktop](../Desktop/building.md).