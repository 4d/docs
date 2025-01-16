---
id: set-query-and-lock
title: SET QUERY AND LOCK
slug: /commands/set-query-and-lock
displayed_sidebar: docs
---

<!--REF #_command_.SET QUERY AND LOCK.Syntax-->**SET QUERY AND LOCK** ( *bloq* )<!-- END REF-->
<!--REF #_command_.SET QUERY AND LOCK.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| bloq | Boolean | &#8594;  | True = bloquear los registros encontrados por las búsquedas False = No bloquear registros |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET QUERY AND LOCK.Summary-->El comando SET QUERY AND LOCK permite solicitar el bloqueo automático de los registros encontrados por todas las búsquedas que siguen el llamado de este comando en la transacción actual.<!-- END REF--> Esto significa que los registros no pueden ser modificados por un proceso diferente al proceso actual entre una búsqueda y la manipulación de resultados.

Por defecto, los registros encontrados por las búsquedas no están bloqueados. Pase [True](true.md "True") en el parámetro *bloq* para activar el bloqueo.

Este comando debe imperativamente utilizarse al interior de una transacción. Si se llama fuera de este contexto, se genera un error. Esto permite un mejor control del bloqueo de registros. Los registros encontrados permanecerán bloqueados hasta que la transacción termine (validada o cancelada). Después de que la transacción se completa, todos los registros se desbloquean, excepto el registro actual.

Los registros están bloqueados para todas las tablas en la transacción actual.

Cuando una instrucción **SET QUERY AND LOCK**(True) ha sido ejecutada, los comandos de búsqueda (por ejemplo [QUERY](query.md)) adoptan un funcionamiento específico si se encuentra un registro bloqueado:

* La búsqueda se detiene y la variable sistema OK toma el valor 0,
* La selección actual queda vacía,
* El conjunto sistema LockedSet contiene el registro bloqueado que causó que la búsqueda se detuviera.  
    
Por lo tanto, en este contexto es necesario probar el conjunto LockedSet definido después de una búsqueda infructuosa (selección actual vacía y/o variable OK en 0) para determinar la causa de la falla.

Llame SET QUERY AND LOCK (False) con el fin de desactivar el mecanismo posteriormente.

SET QUERY AND LOCK modifica únicamente el comportamiento de los comandos de búsqueda en otras palabras:

* [QUERY](query.md)
* [QUERY SELECTION](query-selection.md)
* [QUERY BY EXAMPLE](query-by-example.md)
* [QUERY BY FORMULA](query-by-formula.md)
* [QUERY BY SQL](query-by-sql.md)
* [QUERY SELECTION BY FORMULA](query-selection-by-formula.md)
* [QUERY SELECTION WITH ARRAY](query-selection-with-array.md)
* [QUERY WITH ARRAY](query-with-array.md)
* [QUERY BY ATTRIBUTE](query-by-attribute.md)
* [QUERY SELECTION BY ATTRIBUTE](query-selection-by-attribute.md)

Sin embargo, SET QUERY AND LOCK no afecta los otros comandos que modifican la selección actual tales como #cmd id="47"/\], [RELATE MANY](relate-many.md), etc.

#### Ejemplo 

En este ejemplo, no es posible borrar un cliente que habrías sido pasado de la categoría “C” a la categoría “A” en otro proceso entre [QUERY](query.md) y [DELETE SELECTION](delete-selection.md):

```4d
 START TRANSACTION
 SET QUERY AND LOCK(True)
 QUERY([Clientes];[Clientes]Categoria=“C”)
  //En este momento, los registros encontrados son bloqueados automáticamente para todos los otros procesos
 DELETE SELECTION([Clientes])
 SET QUERY AND LOCK(False)
 VALIDATE TRANSACTION
```

#### Gestión de errores 

Si el comando no se llama en el contexto de una transacción, se genera un error.

#### Ver también 

[QUERY](query.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 661 |
| Hilo seguro | &check; |
| Modifica variables | error |


