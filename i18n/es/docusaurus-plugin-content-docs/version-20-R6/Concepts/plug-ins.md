---
id: plug-ins
title: Plug-ins
---

A medida que desarrolle una aplicación 4D, descubrirá muchas funcionalidades de las que no se percató cuando empezó. Incluso puede extender la versión estándar de 4D añadiendo **plug-ins** a su entorno de desarrollo 4D.

## ¿Qué es un plug-in y qué puede hacer?

Un plug-in es una pieza de código, escrita en cualquier lenguaje como C o C++, que 4D lanza al inicio. Añade funcionalidad a 4D y aumenta así su capacidad. Un plug-in contiene generalmente un conjunto de rutinas dadas al desarrollador 4D. Puede manejar las áreas externas y ejecutar los procesos externos.

## ¿Dónde encontrar los plug-ins?

La comunidad 4D ya ha escrito múltiples plug-ins. Los plug-ins publicados [están disponibles en GitHub](https://github.com/search?q=4d-plugin\&type=Repositories). Adicionalmente, puede [desarrollar sus propios plug-ins](Extensions/develop-plug-ins.md).

## Instalar un plug-in

Los plug-ins se instalan en el entorno 4D copiando sus archivos en la carpeta **Plugins**, en el [mismo nivel que la carpeta Project](../Project/architecture.md#plugins).

Los plug-ins son cargados por 4D cuando se lanza la aplicación, por lo que tendrá que salir de su aplicación 4D antes de instalarlos. Si el uso de un plug-in requiere una licencia específica, el plug-in se cargará pero no estará disponible para su uso.

## Utilización de los plug-ins

Los comandos de plug-ins pueden ser utilizados como los comandos 4D clásicos en su desarrollo 4D. Los comandos de plugins aparecen en la página **Plug-ins** del Explorador.
