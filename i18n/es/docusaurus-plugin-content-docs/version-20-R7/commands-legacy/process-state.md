---
id: process-state
title: Process state
slug: /commands/process-state
displayed_sidebar: docs
---

<!--REF #_command_.Process state.Syntax-->**Process state** ( *proceso* ) : Integer<!-- END REF-->
<!--REF #_command_.Process state.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| proceso | Integer | &#8594;  | Número de proceso |
| Resultado | Integer | &#8592; | Estado del proceso |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.Process state.Summary-->El comando Process state devuelve el estado del proceso cuyo número se pasó en *proceso*.<!-- END REF--> 

El resultado de la función puede ser uno de los valores de las siguientes constantes predefinidas:

| Constante                 | Tipo         | Valor | Comentario                                                                                                                                                                                                                                      |
| ------------------------- | ------------ | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Does not exist            | Entero largo | \-100 |                                                                                                                                                                                                                                                 |
| Aborted                   | Entero largo | \-1   |                                                                                                                                                                                                                                                 |
| Executing                 | Entero largo | 0     |                                                                                                                                                                                                                                                 |
| Delayed                   | Entero largo | 1     |                                                                                                                                                                                                                                                 |
| Waiting for user event    | Entero largo | 2     |                                                                                                                                                                                                                                                 |
| Waiting for input output  | Entero largo | 3     |                                                                                                                                                                                                                                                 |
| Waiting for internal flag | Entero largo | 4     |                                                                                                                                                                                                                                                 |
| Paused                    | Entero largo | 5     |                                                                                                                                                                                                                                                 |
| \_o\_Hidden modal dialog  | Entero largo | 6     | **Compatibilidad**: este estado de proceso ya no existe a partir de 4D v16\. El comando [Process info](../commands/process-info.md) <br/>devuelve un estado equivalente cuando *procState*\=Waiting for user event y *procMode*\=False. |

Si el proceso no existe (lo cual significa que no pasó un número en el rango de 1 a [Count tasks](count-tasks.md "Count tasks")), Process state devuelve Does not exist (-100).

#### Ejemplo 

El siguiente ejemplo coloca el nombre y número de referencia para cada proceso en los arrays *asProcName* y *aiProcNum*. El método prueba si el proceso ha sido abortado. En este caso, el nombre y el número del proceso no son añadidos a los arrays:

```4d
 $vlNbTareas:=Count tasks
 ARRAY TEXT(asProcNombre;$vlNbTareas)
 ARRAY INTEGER(aiProcNum;$vlNbTareas)
 $vlActualCont:=0
 For($vlProcess;1;$vlNbTareas)
    If(Process state($vlProcess)>=Executing)
       $vlActualCont:=$vlActualCont+1
       PROCESS PROPERTIES($vlProcess;asProcNombre{$vlActualCont};$vlStado;$vlHora)
       aiProcNum{$vlActualCont}:=$vlProcess
    End if
 End for
  // Eliminar los elementos extras superfluos
 ARRAY TEXT(asProcNombre;$vlActualCont)
 ARRAY INTEGER(aiProcNum;$vlActualCont)
```

#### Ver también 

[Count tasks](count-tasks.md)  
[Process info](../commands/process-info.md)  