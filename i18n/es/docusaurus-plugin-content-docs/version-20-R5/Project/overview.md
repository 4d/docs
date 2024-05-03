---
id: overview
title: Generalidades
---

Un proyecto 4D contiene todo el código fuente de una aplicación 4D, sin importar su tipo de despliegue (web, móvil o escritorio), de la estructura de la base de datos hasta la interfaz de usuario, incluyendo el código, los formularios, los menús, los parámetros usuario o cualquier recurso necesario. Un proyecto 4D se compone principalmente de archivos texto.

## Archivos del proyecto

Los archivos de proyecto 4D se abren y editan con las aplicaciones estándar de la plataforma 4D (4D o 4D Server). Con 4D, los editores completos están disponibles para gestionar los archivos, como un editor de estructuras, un editor de código, un editor de formularios, un editor de menú...

Como los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser leídos o editados manualmente por los desarrolladores, utilizando cualquier editor de código.

Además, los archivos de proyecto 4D facilitan la programación genérica, la creación de plantillas de aplicaciones y el compartir código. Project are organized internally in [folders and files](Project/architecture.md).

## Desarrollo

4D projects are developed using the **4D** application. Ofrece un entorno de desarrollo integrado (IDE) para los proyectos 4D, así como un servidor web, un generador de proyectos para móviles y un tiempo de ejecución de aplicaciones, lo que permite desarrollar, probar y depurar todo tipo de proyecto.

Multi-user development is managed via standard **source control** repository tools (Perforce, Git, SVN, etc.), which allow developers to work on different branches, and compare, merge, or revert modifications.

## Aplicación final

Project files can be [compiled](compiler.md) and easily deployed. 4D le permite crear tres tipos de aplicaciones a partir de sus proyectos:

- [web](WebServer/webServer.md) applications,
- [mobile](https://developer.4d.com/go-mobile/) applications,
- [desktop](Desktop/building.md) applications (client/server or single-user).

Back end applications can be deployed using 4D Server, 4D, or [merged with 4D Volume license](../Desktop/building.md).
