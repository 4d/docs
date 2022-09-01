---
id: overview
title: Generalidades
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, mobile, or desktop), from the database structure to the user interface, including code, forms, menus, user settings, or any required resources. Un proyecto 4D se compone principalmente de archivos texto.


## Archivos del proyecto

Los archivos de proyecto 4D se abren y editan con las aplicaciones estándar de la plataforma 4D (4D o 4D Server). With 4D, full-featured editors are available to manage files, including a structure editor, a Code Editor, a form editor, a menu editor...

Como los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser leídos o editados manualmente por los desarrolladores, utilizando cualquier editor de código.

Además, los archivos de proyecto 4D facilitan la programación genérica, la creación de plantillas de aplicaciones y el compartir código. Los proyectos se organizan internamente en [carpetas y archivos](Project/architecture.md).


## Desarrollo

Los proyectos 4D se desarrollan con la aplicación **4D**. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project.

El desarrollo multiusuario se gestiona a través de herramientas estándar del repositorio de **control de fuentes** (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificaciones.


## Aplicación final

Los archivos del proyecto pueden ser [compilados](compiler.md) y fácilmente desplegados. 4D le permite crear tres tipos de aplicaciones a partir de sus proyectos:

- las aplicaciones [web](WebServer/webServer.md),
- las aplicaciones [móviles](https://developer.4d.com/go-mobile/),
- las aplicaciones [de escritorio](Desktop/building.md) (cliente/servidor o monopuesto).

Las aplicaciones de back-end pueden desplegarse utilizando 4D Server, 4D, o [fusionadas con la licencia 4D Volume](../Desktop/building.md).