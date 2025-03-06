---
id: blob-to-users
title: BLOB TO USERS
slug: /commands/blob-to-users
displayed_sidebar: docs
---

<!--REF #_command_.BLOB TO USERS.Syntax-->**BLOB TO USERS** ( *usuarios* )<!-- END REF-->
<!--REF #_command_.BLOB TO USERS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| usuarios | Blob | &#8594;  | BLOB (encriptado) contiene las cuentas de usuarios creadas y guardadas por el Administrador |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.BLOB TO USERS.Summary-->El comando BLOB TO USERS remplaza las cuentas usuarios y los grupos presentes en el BLOB *usuarios* en la base actual.<!-- END REF--> El BLOB *usuarios* está encriptado y debe haber sido creado utilizando el comando [USERS TO BLOB](users-to-blob.md).

Sólo el Administrador o el Diseñador de la base pueden ejecutar este comando. Si otro usuario intenta ejecutarlo, el comando no hace nada y se genera un error de privilegio (-9949).

Los efectos de este comando son diferentes dependiendo de si se ejecuta desde una base proyecto o una base binaria:

  
**Base proyecto**

Este comando se usa por compatibilidad, para mover los usuarios y grupos previamente guardados de un archivo BLOB al archivo directorio.json de la base. Todos los usuarios y grupos ya definidos en el archivo directorio.json son reemplazados por los contenidos BLOB de los usuarios, excepto el "Diseñador" y el "Administrador".

**Base binaria**

Este comando hace que se remplacen todas las cuentas y grupos creados por el Administrador de la base. Si el BLOB *usuarios* contiene datos válidos, el comando realiza las siguientes operaciones:

* todos los usuarios y grupos definidos en la base cuyos números de referencia son negativos (grupos y usuarios creados por el administrador) se eliminan de la estructura,
* todos los usuarios y grupos que se encuentran en el BLOB *usuarios* se añaden a la estructura.

**Nota de compatibilidad:** los archivos de usuarios y grupos (extensión .4UG) creados por el comando de menú **Guardar Grupos...** en versiones de 4D anteriores pueden cargarse en 4D utilizando la siguiente secuencia (las versiones 4D muy antiguas pueden requerir el uso de versiones intermedias):

```4d
 DOCUMENT TO BLOB(mydoc;blob)
 BLOB TO USERS(blob)
```

#### Variables y conjuntos del sistema 

Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1\. De lo contrario, toma el valor 0.

#### Ver también 

[USERS TO BLOB](users-to-blob.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 850 |
| Hilo seguro | &cross; |
| Modifica variables | OK |


