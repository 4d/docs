---
id: get-process-variable
title: GET PROCESS VARIABLE
slug: /commands/get-process-variable
displayed_sidebar: docs
---

<!--REF #_command_.GET PROCESS VARIABLE.Syntax-->**GET PROCESS VARIABLE** ( *proceso* ; *srcVar* ; *dstVar* {; *srcVar2* ; *dstVar2* ; ... ; *srcVarN* ; *dstVarN*} )<!-- END REF-->
<!--REF #_command_.GET PROCESS VARIABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso fuente |
| srcVar | Variable | &#8594;  | Variable fuente |
| dstVar | Variable | &#8592; | Variable de destino |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.GET PROCESS VARIABLE.Summary-->El comando GET PROCESS VARIABLE lee el valor de las variables proceso *srcVar* (*srvVar2*, etc.) desde el proceso fuente cuyo número se pasa en *proceso* y devuelve sus valores actuales en las variables *dstVar* (*dstVar2*, etc.) del proceso actual.<!-- END REF-->

Cada variable fuente puede ser una variable, un array o un elemento de array. Sin embargo, tenga en cuenta las restricciones listadas más adelante en esta sección.

En cada pareja de variables *srcVar;dstVar*, las dos variables deben ser de tipos compatibles, de lo contrario los valores que usted obtiene podrían no ser significativos.

El proceso actual “ojea” las variables del proceso fuente, el proceso fuente no es advertido de ninguna manera de que otro proceso está leyendo la instancia de sus variables.

**4D Server:** utilizando 4D Client, puede leer las variables en un proceso de destino ejecutado en el equipo servidor (procedimiento almacenado). Para hacer esto, coloque un signo menos antes del número de identificación del proceso en el parámetro *proceso*.

La comunicación proceso “Intermachine”, ofrecida por los comandos GET PROCESS VARIABLE, [SET PROCESS VARIABLE](set-process-variable.md "SET PROCESS VARIABLE") y [VARIABLE TO VARIABLE](variable-to-variable.md "VARIABLE TO VARIABLE"), es posible únicamente desde el cliente al servidor. Siempre es un proceso cliente el que lee o escribe las variables de un procedimiento almacenado. 

**Tip:** si no conoce el número de identificación del proceso servidor, aún puede utilizar las variables interproceso del servidor. Para hacer esto, puede utilizar cualquier valor negativo en *proceso*. En otras palabras, no es necesario conocer el número de identificación del proceso para poder utilizar el comando GET PROCESS VARIABLE con las variables interproceso del servidor. Esta posibilidad es muy útil particularmente cuando un procedimiento almacenado se lanza utilizando el método base On server startup. Como los equipos cliente no conocen automáticamente el número de identificación de ese proceso, todo valor negativo puede pasarse en el parámetro *proceso*.

##### Restricciones 

GET PROCESS VARIABLE no acepta variables locales como variables fuente. 

Por otra parte, las variables de destino pueden ser interproceso, proceso o locales. Los valores se “reciben” únicamente en las variables, no en los campos.

GET PROCESS VARIABLE acepta todo tipo de variable fuente, proceso o interproceso, excepto:

* Punteros
* Array de punteros
* Arrays de dos dimensiones

El proceso fuente debe ser un proceso usuario; no puede ser un proceso kernel. Si el proceso fuente no existe, este comando no tiene efecto.

**Nota:** en modo interpretado, si una variable fuente no existe, se devuelve el valor indefinido. Puede detectar esto utilizando la función [Type](type.md "Type") para probar la variable de destino correspondiente. 

#### Ejemplo 1 

Esta línea de código lee el valor de la variable texto *vtEstadoActual* en el proceso cuyo número es *$vlProceso* y devuelve el resultado en la variable proceso *vtInfo* del proceso actual:

```4d
 GET PROCESS VARIABLE($vlProceso;vtEstadoActual;vtInfo)
```

#### Ejemplo 2 

Esta línea de código hace lo mismo, pero devuelve el valor en la variable local *$vtInfo* de método que se está ejecutando en el proceso actual:

```4d
 GET PROCESS VARIABLE($vlProceso;vtEstadoActual;$vtInfo)
```

#### Ejemplo 3 

Esta línea de código hace lo mismo pero devuelve el valor en la variable *vtEstadoActual* del proceso actual: 

```4d
 GET PROCESS VARIABLE($vlProceso;vtEstadoActual;vtEstadoActual)
```

**Nota:** el primer *vtCurStatus* designa la instancia de la variable en el proceso fuente, el segundo *vtCurStatus* designa la instancia de la variable en el proceso actual.

#### Ejemplo 4 

Este ejemplo lee secuencialmente los elementos de un array proceso desde el proceso indicado por *$vlProceso*: 

```4d
 GET PROCESS VARIABLE($vlProceso;vl_IPCom_Array;$vlTam)
 For($vlElem;1;$vlTam)
    GET PROCESS VARIABLE($vlProceso;at_IPCom_Array{$vlElem};$vtElem)
  // Hacer algo con $vtElem
 End for
```

**Nota:** en este ejemplo, la variable proceso *vl\_IPCom\_Array* contiene el tamaño del Array *at\_IPCom\_Array*, y debe ser mantenida por el proceso fuente.

#### Ejemplo 5 

Este ejemplo hace lo mismo que el anterior, pero lee el array como un todo, en lugar de leer los elementos de manera secuencial:

```4d
 GET PROCESS VARIABLE($vlProceso;at_IPCom_Array;$anArray)
 For($vlElem;1;Size of array($anArray))
  // Hacer algo con $anArray{$vlElem}
 End for
```

#### Ejemplo 6 

Este ejemplo lee las instancias de las variables *v1*,*v2*,*v3* en el proceso fuente y devuelve sus valores en la instancia de las mismas variables del proceso actual:

```4d
 GET PROCESS VARIABLE($vlProceso;v1;v1;v2;v2;v3;v3)
```

#### Ejemplo 7 

Ver el ejemplo del comando DRAG AND DROP PROPERTIES.

#### Ver también 

*Arrastrar y soltar*  
[POST OUTSIDE CALL](post-outside-call.md)  
*Procesos*  
[SET PROCESS VARIABLE](set-process-variable.md)  
[VARIABLE TO VARIABLE](variable-to-variable.md)  