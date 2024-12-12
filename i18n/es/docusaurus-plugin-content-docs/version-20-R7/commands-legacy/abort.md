---
id: abort
title: ABORT
slug: /commands/abort
displayed_sidebar: docs
---

<!--REF #_command_.ABORT.Syntax-->**ABORT**<!-- END REF-->
<!--REF #_command_.ABORT.Params-->
| Este comando no requiere parámetros |  |
| --- | --- |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ABORT.Summary-->El comando ABORT se utiliza en un método de proyecto de gestión de errores instalado por el comando [ON ERR CALL](on-err-call.md "ON ERR CALL").<!-- END REF-->

Si no instala un método de proyecto de gestión de errores, cuando ocurra un error (por ejemplo, un error de la base de datos) 4D mostrará su caja de diálogo de error estándar y luego interrumpirá la ejecución de su código. Si el código en ejecución es:

* Un método de objeto, método de formulario (o un método de proyecto llamado por un método de formulario o de objeto), el control vuelve al formulario que se muestra actualmente.
* Un método llamado desde un menú, el control vuelve a la barra de menús o formulario que se muestra actualmente.
* El método maestro de un proceso, entonces el proceso termina.
* Un método llamado directa o indirectamente por una operación de importación o exportación, la operación se detiene. Lo mismo para las búsquedas secuenciales u ordenaciones.
* Etc.

Si utiliza un método de proyecto de intercepción de errores, 4D no muestra más su caja de diálogo de errores estándar y no interrumpe la ejecución de su código. En lugar de eso, 4D llama a su método de proyecto de intercepción de errores (que puede ver como un manejador de excepciones), y reasume la ejecución de la línea de código siguiente en el método que disparó el error. 

Hay errores que puede tratar por programación; por ejemplo, durante una operación de importación, si intercepta un error de la base de datos que señala un valor duplicado, puede “cubrir” el error y seguir con la importación. Sin embargo, hay errores que no puede procesar y errores que no debe “cubrir.” En estos casos, necesita detener la ejecución llamando ABORT desde el método de proyecto de intercepción de errores.

#### Nota histórica 

Aunque el comando ABORT está destinado a ser utilizado sólo desde un método de proyecto de intercepción de errores, algunos miembros de la comunidad 4D también lo utilizan en otros métodos para interrumpir su ejecución. El hecho de que funcione es sólo un efecto secundario. No recomendamos utilizar este comando en métodos diferentes a los métodos de proyecto de intercepción de errores.

#### Ver también 

[ON ERR CALL](on-err-call.md)  