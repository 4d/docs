---
id: overview
title: Generalidades
---

Un proyecto 4D contiene todo el código fuente de una aplicación de base de datos 4D, desde la estructura de la base de datos hasta la interfaz de usuario, pasando por los formularios, los menús, la configuración del usuario o cualquier recurso necesario. Un proyecto 4D se compone principalmente de archivos texto.

Los proyectos 4D se crean y gestionan utilizando la aplicación 4D Developer. Los archivos de proyecto se utilizan para crear archivos de despliegue de la aplicación final, que pueden ser abiertos con 4D Server o con una licencia 4D Volume (aplicaciones fusionadas).


## Archivos del proyecto

Los archivos de proyecto 4D se abren y editan con las aplicaciones estándar de la plataforma 4D. Dispone de editores completos para gestionar los archivos, como un editor de estructuras, un editor de métodos, un editor de formularios, un editor de menú...

Además, dado que los proyectos se encuentran en archivos legibles, en texto plano (JSON, XML, etc.), pueden ser leídos o editados manualmente por los desarrolladores, utilizando cualquier editor de código.


## Control de la fuente

Los archivos de proyecto 4D facilitan la programación genérica, la creación de plantillas de aplicaciones y el compartir código.

La flexibilidad de desarrollo de un proyecto 4D se demuestra especialmente cuando varios desarrolladores necesitan trabajar en la misma parte de una aplicación, al mismo tiempo. Los archivos de proyecto 4D son particularmente adecuados para ser gestionados por un sistema de **control de versión** (Perforce, Git, SVN, etc.), permitiendo a los equipos de desarrollo aprovechar funcionalidades como:

- Versioning
- Comparaciones de revisión
- Rollbacks


## Trabajar con proyectos

Puede crear un proyecto de base de datos 4D:

- crear un nuevo proyecto en blanco -- ver [Crear un proyecto 4D](creating.md).
- exportar un desarrollo "binario" 4D existente a un proyecto -- ver "Exportar desde una base 4D" en [doc.4d.com](https://doc.4d.com).

El desarrollo del proyecto se efectúa localmente, utilizando la aplicación 4D Developer -- consulte [Desarrollar un proyecto](developing.md). Las interacciones de desarrollo en equipo son manejadas por la herramienta de control de fuentes.

Los proyectos 4D pueden compilarse y desplegarse fácilmente como aplicaciones monopuesto o cliente-servidor que contienen versiones compactadas de su proyecto -- ver [Construir un paquete de proyecto](building.md).
