---
id: users-to-blob
title: USERS TO BLOB
slug: /commands/users-to-blob
displayed_sidebar: docs
---

<!--REF #_command_.USERS TO BLOB.Syntax-->**USERS TO BLOB** ( *usuarios* )<!-- END REF-->
<!--REF #_command_.USERS TO BLOB.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| usuarios | Blob | &#8594;  | BLOB que debe contener los usuarios |
| &#8592; | Cuentas de usuarios (encriptado) |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.USERS TO BLOB.Summary-->**Nota de compatibilidad*: este comando solo funciona en bases de datos binarias.<!-- END REF--> Siempre devuelve un BLOB vacío en proyectos.* 

El comando **USERS TO BLOB** guarda en el BLOB *usuarios* la lista de todas las cuentas de usuarios y los grupos de la base creados por el Administrador.

Sólo el Administrador y el Diseñador de la base pueden ejecutar este comando. Si otro usuario intenta ejecutarlo, el comando no hace nada y se genera un error de privilegio (-9949).

El BLOB generado se encripta automáticamente y sólo puede ser leído utilizando el comando [BLOB TO USERS](blob-to-users.md). Puede almacenar este BLOB en un archivo en su disco duro o en un campo.

Este comando es el equivalente al registro de los grupos y usuarios desde la ventana de gestión de los grupos de la Caja de herramientas. La única diferencia es que permite almacenar cuentas de usuarios en un campo BLOB y no únicamente en un archivo.

Este concepto permite conservar un backup de usuarios en la base e implementar un mecanismo de backup como también un sistema para cargar automáticamente a los usuarios en caso de una actualización de la estructura de la base (la información relacionada con las cuentas de usuario se son guardadas por 4D en el archivo de estructura de la base).

#### Ver también 

[BLOB TO USERS](blob-to-users.md)  