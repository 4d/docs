---
id: overview
title: 4D de un vistazo
slug: /GettingStarted/overview
---

Un proyecto 4D contiene todo el código fuente de una aplicación 4D, cualquiera que sea su tipo de despliegue (web, escritorio o móvil), desde la estructura de la base de datos hasta la interfaz de usuario, incluyendo código, páginas web, formularios, menús, configuración de usuario o cualquier recurso necesario. Un proyecto 4D se compone principalmente de archivos texto.

## Archivos del proyecto

Los archivos proyecto 4D se abren y editan utilizando las aplicaciones habituales de la plataforma 4D (4D o 4D Server), en Windows o macOS. Con 4D, se dispone de editores con todas las funciones para gestionar archivos, entre los que se incluyen un [editor de código](../code-editor/write-class-method.md), un [creador de interfaces web (4D Qodly Pro)](https://developer.4d.com/qodly/), un [editor de formularios](../FormEditor/formEditor.md), un editor de estructuras, un editor de menús...

Como los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser leídos o editados manualmente por los desarrolladores, utilizando cualquier editor de código.

Además, los archivos de proyecto 4D facilitan la programación genérica, la creación de plantillas de aplicaciones y el compartir código. Los proyectos se organizan internamente en [carpetas y archivos](../Project/architecture.md).

## Desarrollo

Los proyectos 4D se desarrollan con la aplicación **4D**. Ofrece un entorno de desarrollo integrado (IDE) para proyectos 4D, además de un servidor web, un generador de interfaces web, un generador de proyectos para dispositivos móviles y un entorno de ejecución de aplicaciones, lo que te permite desarrollar, probar y depurar cualquier tipo de proyecto.

### Control de la fuente

El desarrollo multiusuario se gestiona a través de herramientas estándar del repositorio de **control de fuentes** (Perforce, Git, SVN, etc.), que permiten a los desarrolladores trabajar en diferentes ramas y comparar, fusionar o revertir las modificacion

### Modo desarrollo en 4D Server

Si tiene un equipo de desarrollo pequeño y no quiere utilizar una herramienta de control de fuentes, puedes utilizar el **Modo desarrollo**](../Desktop/clientServer.md#development-mode) del servidor 4D, permitiendo a los desarrolladores trabajar en línea en el mismo proyecto con 4D en modo remoto. Tenga en cuenta que este modo alternativo debe utilizarse en casos concretos; normalmente se recomienda utilizar una organización basada en herramientas de control de código fuente (ver más arriba).

## Despliegue

Los archivos del proyecto pueden ser [compilados](compiler.md) y fácilmente desplegados. 4D le permite crear varios tipos de aplicaciones a partir de sus proyectos, entre ellas aplicaciones [web](WebServer/webServer.md), aplicaciones [de escritorio](Desktop/building.md) (cliente/servidor o mono usuario) o [aplicaciones móviles](https://developer.4d.com/go-mobile/).

Las aplicaciones de back-end pueden desplegarse utilizando 4D Server, 4D, o [fusionadas con 4D Volume Desktop](../Desktop/building.md).