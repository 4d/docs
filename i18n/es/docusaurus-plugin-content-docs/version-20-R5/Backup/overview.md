---
id: overview
title: Copia de seguridad y restauración
---

4D incluye un módulo completo de copia de seguridad y de restauración de la aplicación.

Este módulo permite hacer una copia de seguridad de una aplicación en uso sin tener que salir de ella. Cada copia de seguridad puede incluir la carpeta del proyecto, el archivo de datos y cualquier archivo o carpeta adicional. Estos parámetros se definen primero en las Propiedades.

Las copias de seguridad pueden iniciarse de forma manual o automática a intervalos regulares sin intervención del usuario. Los comandos específicos del lenguaje, así como los métodos base específicos, permiten integrar las funciones de copia de seguridad en una interfaz personalizada.

Las aplicaciones pueden restaurarse automáticamente cuando se abre una aplicación dañada.

Also, the integrated backup module can take advantage of the .journal file ([database log file](log.md)). Este archivo mantiene un registro de todas las operaciones realizadas en los datos y también garantiza una seguridad total entre dos copias de seguridad. Puede ver el contenido del archivo de historial en cualquier momento. En caso de problemas con una aplicación en uso, las operaciones que falten en el archivo de datos se reintegran automáticamente la próxima vez que se abra la aplicación.

> También puede implementar soluciones alternativas para replicar y sincronizar los datos con el fin de mantener versiones idénticas de las aplicaciones con fines de copia de seguridad. These solutions can be based on the following mechanisms and technologies:
>
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)
> - Sincronización utilizando SQL
> - Synchronization using HTTP (/rest/url)

> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).
