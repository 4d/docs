---
id: overview
title: Generalidades
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. Un proyecto 4D se compone principalmente de archivos texto.


## Archivos del proyecto

Los archivos de proyecto 4D se abren y editan con las aplicaciones estándar de la plataforma 4D (4D o 4D Server). Con 4D, los editores completos están disponibles para gestionar los archivos, como un editor de estructuras, un editor de métodos, un editor de formularios, un editor de menú...

Como los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser leídos o editados manualmente por los desarrolladores, utilizando cualquier editor de código.

Además, los archivos de proyecto 4D facilitan la programación genérica, la creación de plantillas de aplicaciones y el compartir código. Los proyectos se organizan internamente en [carpetas y archivos](Project/architecture.md).


## Desarrollo

Los proyectos 4D se desarrollan con la aplicación **4D**. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.


## Aplicación final

Los archivos del proyecto pueden ser [compilados](compiler.md) y fácilmente desplegados. 4D le permite crear tres tipos de aplicaciones a partir de sus proyectos:

- las aplicaciones [web](WebServer/webServer.md),
- las aplicaciones [móviles](https://developer.4d.com/go-mobile/),
- las aplicaciones [de escritorio](Desktop/building.md) (cliente/servidor o monopuesto).

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume license](../Desktop/building.md).