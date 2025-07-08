---
id: overview
title: Copia de seguridad y restauración
---

4D incluye un módulo completo de copia de seguridad y de restauración de la aplicación.

Este módulo permite hacer una copia de seguridad de una aplicación en uso sin tener que salir de ella. Cada copia de seguridad puede incluir la carpeta del proyecto, el archivo de datos y cualquier archivo o carpeta adicional. Estos parámetros se definen primero en las Propiedades.

Las copias de seguridad pueden iniciarse de forma manual o automática a intervalos regulares sin intervención del usuario. Los comandos específicos del lenguaje, así como los métodos base específicos, permiten integrar las funciones de copia de seguridad en una interfaz personalizada.

Las aplicaciones pueden restaurarse automáticamente cuando se abre una aplicación dañada.

Además, el módulo de copia de seguridad integrado puede aprovechar el archivo .journal ([de historial](log.md)). Este archivo mantiene un registro de todas las operaciones realizadas en los datos y también garantiza una seguridad total entre dos copias de seguridad. Puede ver el contenido del archivo de historial en cualquier momento. En caso de problemas con una aplicación en uso, las operaciones que falten en el archivo de datos se reintegran automáticamente la próxima vez que se abra la aplicación.

> También puede implementar soluciones alternativas para replicar y sincronizar los datos con el fin de mantener versiones idénticas de las aplicaciones con fines de copia de seguridad. Estas soluciones pueden estar basadas en los siguientes mecanismos y tecnologías:
>
> - Configurando un espejo lógico con 4D Server (utilizando los mecanismos del módulo de copia de seguridad integrado)
> - Sincronización utilizando SQL
> - Sincronización utilizando HTTP (/rest/url)

> Para una visión general de las funciones de seguridad de 4D, consulte la [Guía de seguridad de 4D](https://blog.4d.com/4d-security-guide/).
