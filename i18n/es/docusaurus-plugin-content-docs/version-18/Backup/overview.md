---
id: overview
title: Generalidades
---

4D incluye un módulo completo de copia de seguridad y restauración de la base de datos.

Este módulo permite hacer una copia de seguridad de una base de datos en uso sin tener que salir de ella. Cada copia de seguridad puede incluir la carpeta del proyecto, el archivo de datos y cualquier archivo o carpeta adicional. Estos parámetros se definen primero en las Propiedades de la base.

Las copias de seguridad pueden iniciarse de forma manual o automática a intervalos regulares sin intervención del usuario. Los comandos específicos del lenguaje, así como los métodos base específicos, permiten integrar las funciones de copia de seguridad en una interfaz personalizada.

Las bases de datos pueden restaurarse automáticamente cuando se abre una base de datos dañada.

Además, el módulo de copia de seguridad integrado puede aprovechar el archivo .journal ([de historial](log.md)). Este archivo mantiene un registro de todas las operaciones realizadas en los datos y también garantiza una seguridad total entre dos copias de seguridad. En caso de problemas con una base de datos en uso, las operaciones que falten en el archivo de datos se reintegran automáticamente la próxima vez que se abra la base. En caso de problemas con una aplicación en uso, las operaciones que falten en el archivo de datos se reintegran automáticamente la próxima vez que se abra la aplicación.

> También puede implementar soluciones alternativas para replicar y sincronizar los datos con el fin de mantener versiones idénticas de las bases con fines de copia de seguridad. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> Para una visión general de las funciones de seguridad de 4D, consulte la [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).
