---
id: order-by-formula
title: ORDER BY FORMULA
slug: /commands/order-by-formula
displayed_sidebar: docs
---

<!--REF #_command_.ORDER BY FORMULA.Syntax-->**ORDER BY FORMULA** ( *tabla* ; *formula* {; > o <}{; *formula2* ; > o <2 ; ... ; *formulaN* ; > o <N} )<!-- END REF-->
<!--REF #_command_.ORDER BY FORMULA.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla para la cual ordenar la selección de registros |
| formula | Expression | &#8594;  | Fórmula de ordenación de los registros (puede ser de tipo Alfanumérico, Real, Entero,  Entero largo, Fecha, Hora o Booleano) |
| > o < | Operador | &#8594;  | Sentido de la ordenación para cada nivel: > orden cresciente, u < orden decreciente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.ORDER BY FORMULA.Summary-->**ORDER BY FORMULA** ordena (reordena) los registros de la selección actual de *tabla* para el proceso actual.<!-- END REF--> Una vez efectuada la ordenación, el primer registro de la nueva selección actual se convierte en el nuevo registro actual.

Note que debe especificar *tabla*. No puede utilizar una tabla por defecto.

Puede ordenar la selección en uno o varios niveles. Para cada nivel de ordenación, usted pasa una expresión en *formula* y un criterio de ordenación en *\> o <*. Si pasa el símbolo “mayor que” (>) el orden es creciente. Si pasa el simbolo "menor que " (<) el orden es decreciente. Si no especifica el criterio de ordenación, el orden por defecto es creciente.

El parámetro *formula* puede ser de tipo Alfa, Real, Entero, Entero largo, Fecha, Hora o Booleano.

**Advertencia**: los parámetros ($1...$n) no están soportados en la fórmula.   
  
**Nota**: si se utiliza **ORDER BY FORMULA** junto con [PRINT SELECTION](print-selection.md), [BREAK LEVEL](break-level.md) y una variable local, los tres comandos deben ejecutarse desde el mismo método, de lo contrario se generará un error. Esto se debe a que [PRINT SELECTION](print-selection.md) necesita reevaluar la fórmula para calcular los valores de ruptura. Por ejemplo, si se ejecuta ORDER BY FORMULA( \[T1\] ; \[T1\]f1 > $value) desde un método, la ordenación se hace y el método termina. Cualquier llamada posterior a [PRINT SELECTION](print-selection.md) y [BREAK LEVEL](break-level.md) fallará porque $valor ya no existe y la fórmula no puede ser evaluada. 

Sin importar la manera en que se defina una ordenación, si la operación de ordenación va a tomar cierto tiempo, 4D muestra automáticamente un mensaje que contiene un termómetro de progreso. Estos mensajes pueden ser activados y desactivados utilizando los comandos [MESSAGES ON](messages-on.md) y [MESSAGES OFF](messages-off.md). Si se muestra el termómetro de progresión, el usuario puede hacer clic en el botón Detener para interrumpir la ordenación. Si la ordenación se completa correctamente, OK toma el valor 1\. De lo contrario, si la ordenación se interrumpe, OK toma el valor 0 (cero).

**4D Server:** este comando se ejecuta en el servidor, lo cual optimiza su ejecución. Note que cuando las variables son llamadas directamente en la *formula*, la ordenación se calcula con el valor de la variable en el equipo cliente. Por ejemplo, la instrucción **ORDER BY FORMULA(\[mytable\];\[mytable\]myfield\*myvariable)** se ejecutará en el servidor pero con el contenido de la variable myvariable del cliente..  
  
**Nota de compatibilidad:** hasta 4D Server v11, este comando se ejecutaba en los equipos clientes. Por compatibilidad, este funcionamiento se conserva en las bases de datos convertidas. Sin embargo, una preferencia de compatibilidad y un selector del comando [SET DATABASE PARAMETER](set-database-parameter.md) permiten adoptar la ejecución en el servidor en bases de datos convertidas.

#### Ejemplo 

Este ejemplo ordena los registros de la tabla \[Personas\] en orden descendente, basado en la longitud del apellido de cada persona. El registro de la persona con el apellido más largo será el primer registro de la selección actual:

```4d
 ORDER BY FORMULA([Personas];Length([Personas]Apellido);<)
```

#### Ver también 

[ORDER BY](order-by.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 300 |
| Hilo seguro | &check; |
| Modifica variables | OK |
| Modifica el registro actual ||


