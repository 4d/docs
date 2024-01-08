---
id: overview
title: Visão Geral
---

A 4D project contains all of the source code of a 4D application, whatever its deployement type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. Um projeto 4D é principalmente composto por ficheiros texto.


## Ficheiros do projecto

Os ficheiros de projeto 4D são abertos e editados usando aplicações normais da plataforma 4D (4D ou 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a method editor, a form editor, a menu editor...

Quando os projetos estão em ficheiros de texto simples legíveis (JSON, XML, etc.), podem ser lidos ou editados manualmente pelos programadores, utilizando qualquer editor de código.

Além disso, os ficheiros de projeto 4D facilitam a programação genérica, a criação de modelos de aplicação e a partilha de código. Os projetos são organizados internamente em [pastas e ficheiros](Project/architecture.md).


## Desenvolvimento

Os projetos 4D são desenvolvidos utilizando a aplicação **4D**. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing to develop, test, and debug any kind of project.

O desenvolvimento multi-usuário é gerido através de ferramentas de **source control** padrão (Perforce, Git, SVN, etc.), que permitem aos programadores trabalhar em ramos diferentes e comparar, fundir ou reverter modificações.


## Aplicação final

Os ficheiros de projeto podem ser [compilados](compiler.md) e facilmente implementados. 4D permite criar três tipos de aplicações a partir de seus projetos:

- aplicações [web](WebServer/webServer.md),
- aplicações [móveis](https://developer.4d.com/4d-for-ios/),
- aplicações [desktop](Desktop/building.md) (cliente/servidor ou usuário único).

Back end applications can be deployed using 4D Server, 4D, or merged with 4D Volume license.