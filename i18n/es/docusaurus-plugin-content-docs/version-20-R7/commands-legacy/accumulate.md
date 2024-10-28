---
id: accumulate
title: ACCUMULATE
slug: /commands/accumulate
displayed_sidebar: docs
---

<!--REF #_command_.ACCUMULATE.Syntax-->**ACCUMULATE** ( *objeto* {; *objeto2* ; ... ; *objetoN*} )<!-- END REF-->
<!--REF #_command_.ACCUMULATE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Field, Variable | &#8594;  | Campo o variable de tipo numérico a acumular |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.ACCUMULATE.Summary-->ACCUMULATE especifica los campos o variables a acumular en un informe realizado utilizando [PRINT SELECTION](print-selection.md "PRINT SELECTION").<!-- END REF-->

**Debe** ejecutar [BREAK LEVEL](break-level.md "BREAK LEVEL") y ACCUMULATE antes de cada informe para el cual quiera utilizar rupturas. Estos comandos activan el proceso de rupturas para un informe. Ver la explicación del comando [Subtotal](subtotal.md "Subtotal").

Utilice ACCUMULATE cuando quiera incluir subtotales para tal los campos o variables numéricas en un informe. ACCUMULATE le indica a 4D que almacene los subtotales para cada elemento especificado en *objeto*. Los subtotales se acumulan para cada nivel de ruptura especificado por el comando [BREAK LEVEL](break-level.md "BREAK LEVEL").

Ejecute ACCUMULATE antes de imprimir un informe con [PRINT SELECTION](print-selection.md "PRINT SELECTION").

Utilice la función [Subtotal](subtotal.md "Subtotal") en el método de formulario o en un método de objeto para devolver el subtotal de uno de los objetos especificados en *objeto*.

#### Ejemplo 

Ver el ejemplo del comando [BREAK LEVEL](break-level.md "BREAK LEVEL").

#### Ver también 

[BREAK LEVEL](break-level.md)  
[ORDER BY](order-by.md)  
[PRINT SELECTION](print-selection.md)  
[Subtotal](subtotal.md)  