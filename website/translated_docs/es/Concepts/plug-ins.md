---
id: plug-ins
title: Plug-ins
---

A medida que desarrolle una aplicación 4D, descubrirá muchas funcionalidades de las que no se percató cuando empezó. Incluso puede extender la versión estándar de 4D añadiendo **plug-ins** a su entorno de desarrollo 4D.

## ¿Qué es un plug-in y qué puede hacer?

A plug-in is a piece of code, written in any language such as C or C++, that 4D launches at start up. Añade funcionalidad a 4D y aumenta así su capacidad. A plug-in usually contains a set of routines given to the 4D developer. Puede manejar las áreas externas y ejecutar los procesos externos.

## ¿Dónde encontrar los plug-ins?

La comunidad 4D ya ha escrito múltiples plug-ins. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).


## Instalar un plug-in

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](../Project/architecture.md#plugins).

Los plug-ins son cargados por 4D cuando se lanza la aplicación, por lo que tendrá que salir de su aplicación 4D antes de instalarlos. If a plug-in requires a specific license for use, it will be loaded but not available for use.


## Utilización de los plug-ins

Plug-ins commands can be used as regular 4D commands in your 4D development. Plug-in commands appear in the **Plug-ins** page of the Explorer. 


