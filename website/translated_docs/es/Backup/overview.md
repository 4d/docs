---
id: overview
title: Overview
---

4D incluye un módulo completo de copia de seguridad y restauración de la base de datos.

Este módulo permite hacer una copia de seguridad de una base de datos en uso sin tener que salir de ella. Each backup can include the project folder, the data file and any additional files or folders. Estos parámetros se definen primero en las Propiedades de la base.

Backups can be started manually or automatically at regular intervals without any user intervention. Specific language commands, as well as specific database methods, allow integrating backup functions into a customized interface.

Las bases de datos pueden restaurarse automáticamente cuando se abre una base de datos dañada.

Also, the integrated backup module can take advantage of the .journal file ([database log file](log.md)). This file keeps a record of all operations performed on the data and also ensures total security between two backups. En caso de problemas con una base de datos en uso, las operaciones que falten en el archivo de datos se reintegran automáticamente la próxima vez que se abra la base. You can view the journal file contents at any time.

> También puede implementar soluciones alternativas para replicar y sincronizar los datos con el fin de mantener versiones idénticas de las bases con fines de copia de seguridad. These solutions can be based on the following mechanisms and technologies:  
> - Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)  
> - Synchronization using SQL - Synchronization using HTTP (/rest/url)


> For a general overview of 4D's security features, see the [4D Security guide](https://blog.4d.com/4d-security-guide/).
