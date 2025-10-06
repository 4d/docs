---
id: overview
title: 4D at a glance
slug: /GettingStarted/overview
---

Um projeto 4D contém todo o código fonte de uma aplicação 4D, qualquer que seja seu tipo de implementação (web, móvel, ou desktop), desde a estrutura do banco de dados até a interface do usuário, incluindo código, formulários, menus, configurações usuário, ou quaisquer recursos necessários. Um projeto 4D é principalmente composto por ficheiros texto.

## Ficheiros do projecto

Os ficheiros de projeto 4D são abertos e editados usando aplicações normais da plataforma 4D (4D ou 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a [Code Editor](../code-editor/write-class-method.md), a [form editor](../FormEditor/formEditor.md), a menu editor...

Quando os projetos estão em ficheiros de texto simples legíveis (JSON, XML, etc.), podem ser lidos ou editados manualmente pelos programadores, utilizando qualquer editor de código.

Além disso, os ficheiros de projeto 4D facilitam a programação genérica, a criação de modelos de aplicação e a partilha de código. Los proyectos se organizan internamente en [carpetas y archivos](Project/architecture.md).

## Desenvolvimento

Los proyectos 4D se desarrollan con la aplicación **4D**. Fornece um ambiente de desenvolvimento Integrado (IDE) para projetos 4D, bem como um servidor Web, um gerador de projetos móveis e um tempo de execução de aplicações, permitindo-lhe desenvolver, testar e depurar qualquer tipo de projeto.

El desarrollo multiusuario se gestiona a través de herramientas estándar del repositorio de **control de fuentes** (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificacion

## Aplicação final

Los archivos del proyecto pueden ser [compilados](compiler.md) y fácilmente desplegados. 4D allows you to create several types of application from your projects, including [web](WebServer/webServer.md) applications, [desktop](Desktop/building.md) applications (client/server or single-user), or mobile applications.

Os aplicativos de back-end podem ser implementados usando 4D Server, 4D ou [fundido com 4D Volume Desktop](../Desktop/building.md).