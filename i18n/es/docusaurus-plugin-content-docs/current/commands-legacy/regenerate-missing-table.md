---
id: regenerate-missing-table
title: REGENERATE MISSING TABLE
slug: /commands/regenerate-missing-table
displayed_sidebar: docs
---

<!--REF #_command_.REGENERATE MISSING TABLE.Syntax-->**REGENERATE MISSING TABLE** ( *nomTabla* )<!-- END REF-->
<!--REF #_command_.REGENERATE MISSING TABLE.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| nomTabla | Text | &#8594;  | Nombre de tabla faltante a regenerar |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.REGENERATE MISSING TABLE.Summary-->El comando REGENERATE MISSING TABLE reconstruye la tabla faltante cuyo nombre se pasa en el parámetro *nomTabla*.<!-- END REF--> Cuando se reconstruye una tabla faltante, se vuelve visible en el editor de estructura y sus datos son accesibles nuevamente.

Las tablas faltantes son tablas cuyos datos están presentes en el archivo de datos pero que no existen a nivel de la estructura. Puede identificar las tablas faltantes que puedan estar presentes utilizando el comando [GET MISSING TABLE NAMES](get-missing-table-names.md "GET MISSING TABLE NAMES").

Si la tabla designada por el parámetro *nomTabla* no es una tabla faltante de la base, el comando no hace nada. 

#### Ejemplo 

Este método regenera todas las tablas faltantes eventualmente presentes en la base:

```4d
 ARRAY TEXT($arrMissingTables;0)
 GET MISSING TABLE NAMES($arrMissingTables)
 $SizeArray:=Size of array($arrMissingTables)
 If($SizeArray#0)
  // Llena el array con los nombres de todas las tablas en la base
    ARRAY TEXT(arrTables;Last table number)
    If(Last table number>0) //Si hay tablas
       For($vlTables;Size of array(arrTables);1;-1)
          If(Is table number valid($vlTables))
             arrTables{$vlTables}:=Table name($vlTables)
          Else
             DELETE FROM ARRAY(arrTables;$vlTables)
          End if
       End for
    End if
    For($i;1;$SizeArray)
       If(Find in array(arrTables;$arrMissingTables{$i})=-1)
          CONFIRM("Regenerar la tabla"+$arrMissingTables{$i}+"?")
          If(OK=1)
             REGENERATE MISSING TABLE($arrMissingTables{$i})
          End if
       Else
          ALERT("Imposible regenerar la tabla "+$arrMissingTables{$i}+" porque ya hay una tabla con este nombre en la base.")
       End if
    End for
 Else
    ALERT("No ha tablas a regenerar.")
 End if
```

#### Ver también 

[GET MISSING TABLE NAMES](get-missing-table-names.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1126 |
| Hilo seguro | &cross; |


