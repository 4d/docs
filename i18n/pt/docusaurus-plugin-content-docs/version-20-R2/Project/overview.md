---
id: overview
title: Gestão de projectos
---

Um projeto 4D contém todo o código fonte de uma aplicação 4D, qualquer que seja seu tipo de implementação (web, móvel, ou desktop), desde a estrutura do banco de dados até a interface do usuário, incluindo código, formulários, menus, configurações usuário, ou quaisquer recursos necessários. Um projeto 4D é principalmente composto por ficheiros texto.


## Ficheiros do projecto

Os ficheiros de projeto 4D são abertos e editados usando aplicações normais da plataforma 4D (4D ou 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a Code Editor, a form editor, a menu editor...

Since projects are in human-readable, plain text files (JSON, XML, etc.), they can be read or edited manually by developers, using any code editor.

In addition, 4D project files make it easier to program generically, create application templates, and share code. Project are organized internally in [folders and files](Project/architecture.md).


## Desenvolvimento

4D projects are developed using the **4D** application. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.


## Aplicação final

Project files can be [compiled](compiler.md) and easily deployed. 4D allows you to create three types of applications from your projects:

- [web](WebServer/webServer.md) applications,
- [mobile](https://developer.4d.com/go-mobile/) applications,
- [desktop](Desktop/building.md) applications (client/server or single-user).

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume license](../Desktop/building.md).