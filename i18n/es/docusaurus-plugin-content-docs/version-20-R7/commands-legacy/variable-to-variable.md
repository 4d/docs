---
id: variable-to-variable
title: VARIABLE TO VARIABLE
slug: /commands/variable-to-variable
displayed_sidebar: docs
---

<!--REF #_command_.VARIABLE TO VARIABLE.Syntax-->**VARIABLE TO VARIABLE** ( *proceso* ; *dstVar* ; *srcVar* {; *dstVar2* ; *srcVar2* ; ... ; *dstVarN* ; *srcVarN*} )<!-- END REF-->
<!--REF #_command_.VARIABLE TO VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso de destino |
| dstVar | Variable | &#8594;  | Variable de destino |
| srcVar | Variable | &#8594;  | Variable fuente |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.VARIABLE TO VARIABLE.Summary-->El comando VARIABLE TO VARIABLE escribe las variables proceso *dstVar* (*dstVar2*, etc.) del proceso de destino cuyo número se pasa en *proceso* utilizando los valores de las variables *srcVar1* *srcVar2*, etc.<!-- END REF-->

VARIABLE TO VARIABLE tiene la misma acción de [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE"), con las siguientes diferencias:   
• Usted pasa expresiones fuente a [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE") y por lo tanto no puede pasar un array como un todo. Debe pasar exclusivamente variables fuente a VARIABLE TO VARIABLE y por lo tanto puede pasar un array como un todo.  
• Cada variable de destino puede ser una variable o un elemento de un array, pero no puede ser un array como un todo. Cada variable de destino de VARIABLE TO VARIABLE puede ser una variable, un array o un elemento de array.

**4D Server:** la comunicación proceso “Intermachine”, ofrecida por los comandos [GET PROCESS VARIABLE](get-process-variable.md "GET PROCESS VARIABLE"), [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE") y VARIABLE TO VARIABLE, es posible únicamente desde el cliente al servidor. Siempre es un proceso cliente el que lee o escribe las variables de un procedimiento almacenado. 

Para cada pareja de variables *dstVar;expr*, la variable fuente debe ser de tipo compatible con la variable de destino, de lo contrario puede terminar con un valor en la variable que no tiene significado. En modo interpretado, si una variable de destino no existe, se crea y asigna con el tipo y valor de la variable fuente.

El proceso actual escribe las variables del proceso de destino, el proceso de destino no es advertido de ninguna manera de que otro proceso está escribiendo la instancia de sus variables.

##### Restricciones 

VARIABLE TO VARIABLE no acepta variables locales como variables de destino. 

VARIABLE TO VARIABLE acepta todo tipo de variable proceso o interproceso de destino, a excepción de las variables de tipo:

* Punteros
* Arrays de punteros
* Arrays de dos dimensiones

El proceso de destino debe ser un proceso usuario; no puede ser un proceso kernel. Si el proceso de destino no existe, se genera un error. Usted puede encontrar este error utilizando un método de gestión de errores instalado con [ON ERR CALL](on-err-call.md "ON ERR CALL").

#### Ejemplo 

El siguiente ejemplo lee un array proceso desde el proceso indicado por *$vlProceso*, secuencialmente convierte los elementos a mayúsculas y luego escribe completamente el array: 

```4d
 GET PROCESS VARIABLE($vlProceso;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
    $anArray{$vlElem}:=Uppercase($anArray{$vlElem})
 End for
 VARIABLE TO VARIABLE($vlProceso;at_IPCom_Array;$anArray)
```

#### Ver también 

[GET PROCESS VARIABLE](get-process-variable.md)  
*Procesos*  
[SET PROCESS VARIABLE](set-process-variable.md)  

#### Propiedades
|  |  |
| --- | --- |
| Número de comando | 635 |
| Hilo seguro | &check; |


