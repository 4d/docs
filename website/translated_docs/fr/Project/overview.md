---
id: overview
title: Aperçu
---

A 4D project contains all of the source code of a 4D application, whatever its deployement type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. Un projet 4D est principalement constitué de fichiers texte.


## Fichiers du projet

4D project files are open and edited using regular 4D platform applications (4D or 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor...

Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor.

In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in [folders and files](Project/architecture.md).

La flexibilité du développement d'un projet 4D est particulièrement démontrée lorsque plusieurs développeurs doivent travailler simultanément sur la même partie d'une application. Les fichiers de projet 4D sont particulièrement bien adaptés pour être gérés par un système de **contrôle de version** (Perforce, Git, SVN, etc.), permettant aux équipes de développement de tirer parti de fonctionnalités telles que :

- Versioning
- Comparaisons de révision
- Retours en arrière (Rollbacks)

## Development

Your 4D application can open projects **locally** or **remotely**:

- **[locally](creating.md#opening-a-local-project)** - project files are stored on the same machine as the 4D application; they are executed and edited by a single 4D application.
- **[remotely](creating.md#opening-a-remote-project)** - project files are stored on the 4D Server machine; 4D applications connect to the server and open the project in read-only mode, usually for testing purposes. However, a project opened by 4D Server is editable by 4D if [both applications are on the same machine](Project/developing.md#using-4d-developer-on-the-same-machine).

![](assets/en/getStart/localremote.png)

When you select the project to open, you also select the mode to be used.


## Deployment

Project files can be compiled and easily deployed for your web, mobile, or desktop (client-server or single-user) application.

Final application deployment files are generated during the building process, using the [4D build manager](Admin/building.md). Applications can be opened by 4D Server, 4D, or merged with 4D Volume license.

