---
id: plug-ins
title: Plug-ins
---

A medida que desarrolle una aplicación 4D, descubrirá muchas funcionalidades de las que no se percató cuando empezó. You can even augment the standard version of 4D by adding **plug-ins** to your 4D development environment.

## ¿Qué es un plug-in y qué puede hacer?

Un plug-in es una pieza de código, escrita en cualquier lenguaje como C o C++, que 4D lanza al inicio. Añade funcionalidad a 4D y aumenta así su capacidad. Un plug-in contiene generalmente un conjunto de rutinas dadas al desarrollador 4D. Puede manejar las áreas externas y ejecutar los procesos externos.

## ¿Dónde encontrar los plug-ins?

La comunidad 4D ya ha escrito múltiples plug-ins. Published plug-ins [can be found on GitHub](https://github.com/search?q=4d-plugin\&type=Repositories). Additionnally, you can [develop your own plug-ins](Extensions/develop-plug-ins.md).

## Instalar un plug-in

You install plug-ins in the 4D environment by copying their files into the **Plugins** folder, at the [same level as the Project folder](../Project/architecture.md#plugins).

Los plug-ins son cargados por 4D cuando se lanza la aplicación, por lo que tendrá que salir de su aplicación 4D antes de instalarlos. Si el uso de un plug-in requiere una licencia específica, el plug-in se cargará pero no estará disponible para su uso.

## Utilización de los plug-ins

Los comandos de plug-ins pueden ser utilizados como los comandos 4D clásicos en su desarrollo 4D. Plug-in commands appear in the **Plug-ins** page of the Explorer.
