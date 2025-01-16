---
id: set-process-variable
title: SET PROCESS VARIABLE
slug: /commands/set-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.SET PROCESS VARIABLE.Syntax-->**SET PROCESS VARIABLE** ( *proceso* ; *dstVar* ; *expr* {; *dstVar2* ; *expr2* ; ... ; *dstVarN* ; *exprN*} )<!-- END REF-->
<!--REF #_command_.SET PROCESS VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso de destino |
| dstVar | Variable | &#8594;  | Variable de destino |
| expr | Variable | &#8594;  | Expresión fuente (o variable fuente) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SET PROCESS VARIABLE.Summary-->El comando SET PROCESS VARIABLE escribe las variables proceso *dstVar* (*dstVar2*, etc.) del proceso de destino cuyo número se pasa en *proceso* utilizando los valores pasados en *expr1* (*expr2*, etc.).<!-- END REF-->

Cada variable de destino puede ser una variable o un elemento de array. Sin embargo, vea las restricciones listadas más adelante en esta sección. 

Para cada pareja de variables *dstVar;expr*, la expresión debe ser compatible con la variable de destino, de lo contrario usted puede terminar con un valor en la variable que no tiene significado. En modo interpretado, si una variable de destino no existe, se crea y asigna con la expresión.

El proceso actual escribe las variables del proceso de destino, el proceso de destino no es advertido de ninguna manera de que otro proceso está escribiendo la instancia de sus variables.

**4D Server:** utilizando 4D Client, puede escribir variables en un proceso de destino ejecutado en el equipo servidor (procedimiento almacenado). Para hacer esto, coloque un signo menos antes del número de identificación del proceso en el parámetro *proceso*.  
La comunicación proceso “Intermachine”, ofrecida por los comandos [GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE"), SET PROCESS VARIABLE y [VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE"), es posible únicamente desde el cliente al servidor. Siempre es un proceso cliente el que lee o escribe las variables de un procedimiento almacenado. 

**Tip:** en otras palabras, no es necesario conocer el número de identificación del proceso para poder utilizar el comando SET PROCESS VARIABLE con las variables interproceso del servidor. Esta posibilidad es muy útil particularmente cuando un procedimiento almacenado se lanza utilizando el método base On server startup. Como los equipos cliente no conocen automáticamente el número de identificación de ese proceso, todo valor negativo puede pasarse en el parámetro *proceso*.

##### Restricciones 

SET PROCESS VARIABLE no acepta variables locales como variables de destino. 

SET PROCESS VARIABLE acepta todo tipo de proceso de variable proceso o interproceso de destino, excepto:

* Punteros
* Arrays de todo tipo. Para escribir un array como un todo de un proceso a otro, utilice el comando [VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE"). Nota, sin embargo, SET PROCESS VARIABLE le permite escribir el elemento de un array.
* No es posible escribir el elemento de un array de punteros o el elemento de un array de dos dimensiones.

El proceso de destino debe ser un proceso usuario; no puede ser un proceso kernel. Si el proceso de destino no existe, se genera un error. Puede encontrar este error utilizando un método de gestión de errores instalado con [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ejemplo 1 

La siguiente línea de código asigna (a la cadena vacía) el texto de la variable *vtEstadoActual* del proceso cuyo número es *$vlProceso*:

```4d
 SET PROCESS VARIABLE($vlProceso;vtEstadoActual;"")
```

#### Ejemplo 2 

Esta línea de código asigna a la variable texto *vtEstadoActual* del proceso cuyo número es *$vlProceso* el valor de la variable *$vtInfo* desde el método de ejecución en el proceso actual:

```4d
 SET PROCESS VARIABLE($vlProceso;vtEstadoActual;$vtInfo)
```

#### Ejemplo 3 

Esta línea de código define el texto de la variable *vtEstadoActual* del proceso cuyo número es *$vlProceso* al valor de la misma variable en el proceso actual: 

```4d
 SET PROCESS VARIABLE($vlProceso;vtEstadoActual;vtEstadoActual)
```

**Nota:** el primer *vtEstadoActual* designa la instancia de la variable en el proceso de destino. El segundo *vtEstadoActual* designa la instancia de la variable en el proceso actual.

#### Ejemplo 4 

Este ejemplo vuelve mayúsculas secuencialmente todos los elementos de un array proceso desde el proceso indicado por *$vlProceso*: 

```4d
 GET PROCESS VARIABLE($vlProceso;vl_IPCom_Array;$vlTam)
 For($vlElem;1;$vlSize)
    GET PROCESS VARIABLE($vlProceso;at_IPCom_Array{$vlElem};$vtElem)
    SET PROCESS VARIABLE($vlProceso;at_IPCom_Array{$vlElem};Uppercase($vtElem))
 End for
```

**Nota:** en este ejemplo, la variable proceso *vl\_IPCom\_Array* contiene el tamaño del array *at\_IPCom\_Array* y debe ser mantenida por el proceso fuente/destino.

#### Ejemplo 5 

Este ejemplo escribe la instancia de las variables *v1*, *v2* y *v3* utilizando la instancia de las mismas variables desde el proceso actual:

```4d
 SET PROCESS VARIABLE($vlProceso;v1;v1;v2;v2;v3;v3)
```

#### Ver también 

[GET PROCESS VARIABLE](get-process-variable.md)  
[POST OUTSIDE CALL](post-outside-call.md)  
*Procesos*  
[VARIABLE TO VARIABLE](variable-to-variable.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 370 |
| Hilo seguro | &cross; |


