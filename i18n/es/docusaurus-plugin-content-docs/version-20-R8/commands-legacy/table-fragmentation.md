---
id: table-fragmentation
title: Table fragmentation
slug: /commands/table-fragmentation
displayed_sidebar: docs
---

<!--REF #_command_.Table fragmentation.Syntax-->**Table fragmentation** ( *laTabla* ) : Real<!-- END REF-->
<!--REF #_command_.Table fragmentation.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| laTable | Table | &#8594;  | Tabla para la cual obtener la tasa de fragmentación |
| Resultado | Real | &#8592; | Porcentaje de fragmentación |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Table fragmentation.Summary-->El comando Table fragmentation devuelve el porcentaje de fragmentación lógica de los registros de la tabla designada pro el parámetro *laTabla*.<!-- END REF--> 

La tasa de fragmentación de los registros indica si los registros se almacenan de manera ordenada en el archivo de datos. Una fragmentación muy alta, puede ralentizar considerablemente las ordenaciones y las búsquedas secuenciales en una tabla. Un porcentaje de fragmentación de 0 corresponde a una fragmentación nula. Una tasa de más del 20%, puede ser útil para compactar el archivo de datos. 

#### Ejemplo 

Este método de mantenimiento permite solicitar la compactación del archivo de datos en caso de que haya una fragmentación considerable en al menos una tabla de la base:

```4d
 ToBeCompacted:=False
 For($i ;1;Last table number)
    If(Is table number valid($i))
       If(Table fragmentation(Table($i)->)>20)
          ToBeCompacted:=True
       End if
    End if
 End for
 If(ToBeCompacted)
  // Pone un marcador de solicitud de compactación
 End if
```

#### Ver también 

[Compact data file](compact-data-file.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1127 |
| Hilo seguro | &check; |


