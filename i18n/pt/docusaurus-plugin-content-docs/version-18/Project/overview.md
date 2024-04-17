---
id: overview
title: Visão Geral
---

A 4D project contains all of the source code of a 4D database application, from the database structure to the user interface, including forms, menus, user settings, or any required resources. Um projeto 4D é principalmente composto por ficheiros texto.

Os projetos 4D são criados e manipulados utilizando a aplicação 4D Developer. Project files are then used to build final application deployment files, that can be opened by 4D Server or 4D Volume license (merged applications).


## Ficheiros do projecto

4D project files are open and edited using regular 4D platform applications. Full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor...

Moreover, since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor.


## Controle da origem

4D project files make it easier to program generically, create application templates, and share code.

The flexibility of developing a 4D project is especially demonstrated when multiple developers need to work on the same part of an application, at the same time. 4D project files are particularly well suited to be managed by a **source control** repository (Perforce, Git, SVN, etc.), allowing development teams to take advantage of features such as:

- Versioning
- Comparações de revisões
- Rollbacks


## Trabalhar com projetos

Cria-se um projeto de base de dados 4D:

- creating a new, blank project -- see [Creating a 4D project](creating.md).
- exporting an existing 4D "binary" development to a project -- see "Export from a 4D database" on [doc.4d.com](https://doc.4d.com).

Project development is done locally, using the 4D Developer application -- see [Developing a project](developing.md). As interações de desenvolvimento em equipe são gerenciadas pela ferramenta de controle de versão.

4D projects can be compiled and easily deployed as single-user or client-server applications containing compacted versions of your project -- see [Building a project package](building.md).
