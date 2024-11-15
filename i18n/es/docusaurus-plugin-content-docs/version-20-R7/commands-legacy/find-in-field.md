---
id: find-in-field
title: Find in field
slug: /commands/find-in-field
displayed_sidebar: docs
---

<!--REF #_command_.Find in field.Syntax-->**Find in field** ( *campoObjetivo* ; *valor* ) : Integer<!-- END REF-->
<!--REF #_command_.Find in field.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campoObjetivo | Field | &#8594;  | Campo objetivo en el cual ejecutar la búsqueda. |
| valor | Field, Variable | &#8594;  | Valor a buscar |
| &#8592; | Valor encontrado |
| Resultado | Integer | &#8592; | Número del registro encontrado o -1 si no se encontró ningún registro |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Find in field.Summary-->El comando Find in field devuelve el número del primer registro cuyo *campoObjetivo* es igual a *valor*.<!-- END REF-->  
Si no se encuentran registros, Find in field devuelve -1\. 

Después de llamar este comando, *valor* contiene el valor encontrado. Esta funcionalidad le permite efectuar búsquedas utilizando el carácter (“@”) en campos tipo Alfa y luego recuperar el valor encontrado. 

**Nota:** por este principio, no se puede utilizar un parámetro ($1, $2, etc.) en *valor* porque esto causaría un mal funcionamiento en modo compilado. Del mismo modo, si pasa un campo en el parámetro *valor*, tenga en cuenta que su valor será reasignado si la consulta tiene éxito (el comando [Modified record](modified-record.md), en particular, devolverá True para el registro actual de la tabla).

Este comando no modifica la selección actual ni el registro actual.  

Este comando es rápido y muy útil para evitar la creación de entradas dobles durante la entrada de datos. 

****Nota histórica:** en versiones anteriores de 4D, el comando **Find in field** era llamado **Find index key** y sólo funcionaba con campos indexados. A partir de 4D v11 SQL, esta limitación se eliminó y el comando se renombró.

#### Ejemplo 1 

En una base de datos de CDs, durante la entrada de datos asumamos que usted quiere verificar el nombre del cantante para ver si ya existe en la base. Como pueden existir homónimos, usted quiere que el campo \[Cantante\]Nombre sea único. Por lo tanto, en el formulario de entrada, puede escribir el siguiente código en el método de objeto del campo \[Cantante\]Nombre:

```4d
 If(FORM Event=On Data Change)
    $RecNum:=Find in field([Cantante]Nombre;[Cantante]Nombre)
    If($RecNum #-1) // si este nombre ya ha sido introducido
       CONFIRM("Ya existe un cantante con el mismo nombre. ¿Quiere ver el registro?";"Sí";"No")
       If(OK=1)
          GOTO RECORD([Cantante];$RecNum)
       End if
    End if
 End if
```

#### Ejemplo 2 

Este es un ejemplo que permite verificar la existencia de un valor:

```4d
 var $id;$1 : Integer
 $id:=$1
 If(Find in field([MyTable]MyID;$id)>=0)
    $0:=True
 Else
    $0:=False
 End if
```

Tenga en cuenta >= permite cubrir todos los casos. De hecho, la función devuelve un número de registro y el primer registro tiene el número 0.
