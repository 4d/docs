---
id: flush-cache
title: FLUSH CACHE
slug: /commands/flush-cache
displayed_sidebar: docs
---

<!--REF #_command_.FLUSH CACHE.Syntax-->**FLUSH CACHE** {( tam | *  )}<!-- END REF-->
<!--REF #_command_.FLUSH CACHE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tam &#124; * | Real, Operador | &#8594;  | * para liberar la memoria caché completamente, o número de bytes a liberar en la caché |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FLUSH CACHE.Summary-->El comando FLUSH CACHE guarda inmediatamente los buffers de datos en el disco.<!-- END REF--> Todos los cambios realizados a la base se guardan en el disco.

Por defecto, este comando no afecta el contenido actual de la caché, esto significa que los datos se siguen utilizando en acceso en lectura posteriores. Opcionalmente, se puede pasar un parámetro a modificar su contenido:

* pase *\** para guardar la caché y liberar toda la memoria caché.
* pase un valor *tam* para guardar la caché y liberar sólo el número *tam* de bytes de la caché.

**Nota:** pasar un parámetro a este comando es para propósitos de prueba. Por motivos de rendimiento, no se recomienda liberar la caché en el entorno de producción.

Normalmente, no es necesario llamar a este comando, ya que 4D guarda las modificaciones de datos regularmente. La opción **Vaciar la caché cada X segundos (minutos)** en [Página Base de datos](https://developer.4d.com/docs/es/settings/database/) de las Propiedades de la base, que especifica con qué frecuencia guardar, se suele utilizar para controlar el vaciado de la caché. Recomendamos utilizar el valor por defecto de 20 segundos. Tenga en cuenta también que el parámetro Cache flush periodicity se puede ajustar y leer utilizando los comandos [SET DATABASE PARAMETER](set-database-parameter.md) y [Get database parameter](get-database-parameter.md).

#### Ver también 

[Get database parameter](get-database-parameter.md)  
[SET DATABASE PARAMETER](set-database-parameter.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 297 |
| Hilo seguro | &check; |


