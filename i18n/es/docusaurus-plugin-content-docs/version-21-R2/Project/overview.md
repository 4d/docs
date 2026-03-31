---
id: overview
title: 4D de un vistazo
slug: /GettingStarted/overview
---

A 4D project contains all of the source code of a 4D application, whatever its deployment type (web, desktop, or mobile), from the database structure to the user interface, including code, web pages, forms, menus, user settings, or any required resources. Un proyecto 4D se compone principalmente de archivos texto.

## Archivos del proyecto

4D project files are open and edited using regular 4D platform applications (4D or 4D Server), on Windows or macOS. With 4D, full-featured editors are available to manage files, including a [code editor](../code-editor/write-class-method.md), a [web interface builder (4D Qodly Pro)](https://developer.4d.com/qodly/), a [form editor](../FormEditor/formEditor.md), a structure editor, a menu editor...

Como los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser leídos o editados manualmente por los desarrolladores, utilizando cualquier editor de código.

Además, los archivos de proyecto 4D facilitan la programación genérica, la creación de plantillas de aplicaciones y el compartir código. Los proyectos se organizan internamente en [carpetas y archivos](../Project/architecture.md).

## Desarrollo

Los proyectos 4D se desarrollan con la aplicación **4D**. It provides an Integrated Development Environment (IDE) for 4D projects as well as a web server, a web interface builder, a mobile project generator, and an application runtime, allowing you to develop, test, and debug any kind of project.

### Control de la fuente

El desarrollo multiusuario se gestiona a través de herramientas estándar del repositorio de **control de fuentes** (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificacion

### Modo desarrollo en 4D Server

If you are a small-size development team and you do not want to use a source control tool, you can use the [**Development mode**](../Desktop/clientServer.md#development-mode) of 4D Server, allowing developers to work online on the same project with 4D in remote mode. Tenga en cuenta que este modo alternativo debe utilizarse en casos concretos; normalmente se recomienda utilizar una organización basada en herramientas de control de código fuente (ver más arriba).

## Despliegue

Los archivos del proyecto pueden ser [compilados](compiler.md) y fácilmente desplegados. 4D allows you to create several types of application from your projects, including [web](WebServer/webServer.md) applications, [desktop](Desktop/building.md) applications (client/server or single-user), or [mobile applications](https://developer.4d.com/go-mobile/).

Las aplicaciones de back-end pueden desplegarse utilizando 4D Server, 4D, o [fusionadas con 4D Volume Desktop](../Desktop/building.md).