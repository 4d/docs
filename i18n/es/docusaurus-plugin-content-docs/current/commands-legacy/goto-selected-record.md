---
id: goto-selected-record
title: GOTO SELECTED RECORD
slug: /commands/goto-selected-record
displayed_sidebar: docs
---

<!--REF #_command_.GOTO SELECTED RECORD.Syntax-->**GOTO SELECTED RECORD** ( {*tabla* ;} *registro* )<!-- END REF-->
<!--REF #_command_.GOTO SELECTED RECORD.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla en la cual ir al registro seleccionado o Tabla por defecto, si se omite |
| registro | Integer | &#8594;  | Posición del registro en la selección |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.GOTO SELECTED RECORD.Summary-->**GOTO SELECTED RECORD** vuelve el registro especificado en la selección actual de *tabla* el registro actual.<!-- END REF--> La selección actual no cambia. El parámetro *registro* no es el mismo del número devuelto por [Record number](record-number.md); Este parámetro representa la posición del registro en la selección actual. La posición del registro depende de la manera en que la selección ha sido creada y ordenada. 

**GOTO SELECTED RECORD** no hace nada si:

* no hay registros en la selección actual
* *registro* no está en la selección actual,
* *registro* ya es el registro actual.

Si pasa 0 en *registro*, no habrá registro actual en *tabla*. Este mecanismo permite deseleccionar todos los registros en una lista, en particular en el caso de los subformularios incluidos, cuando el modo de selección es “único”.

#### Ejemplo 

El siguiente ejemplo carga datos del campo \[People\]Last Name en el array *atNames*. Un array de enteros largos, llamado *alRecNum*, se llena con los números que representarán a los registros seleccionados. Luego se ordenan los dos arrays:

```4d
  // Crear aquí la selección de la tabla [People]
  // ...
  // Obtener los nombres
 SELECTION TO ARRAY([People]Last Name;atNames)
  // Crear un array para los números de registros seleccionados
 $vlNbRecords:=Size of array(atNames)
 ARRAY LONGINT(alRecNum;$vlNbRecords)
 For($vlRecord;1;$vlNbRecords)
    alRecNum{$vlRecord}:=$vlRecord
 End for
  // Ordenar los dos arrays en orden alfabético
 SORT ARRAY(atNames;alRecNum;>)
```

Si el array *atNames* se muestra en un área de desplazamiento, el usuario hace clic en uno de los elementos. Como la ordenación de los dos arrays está sincronizada, todo elemento de *alRecNum* ofrece el número del registro seleccionado para el registro cuyo nombre se guarda en el elemento correspondiente en *atNames*.

El siguiente método de objeto del área desplegable *atNames* selecciona el registro correcto en la selección de \[People\], de acuerdo al nombre elegido en el área de desplazamiento:

```4d
 Case of
    :(Form event code=On Clicked)
       If(atNames#0)
          GOTO SELECTED RECORD(alRecNum{atNames})
       End if
 End case
```

#### Ver también 

[Selected record number](selected-record-number.md)  