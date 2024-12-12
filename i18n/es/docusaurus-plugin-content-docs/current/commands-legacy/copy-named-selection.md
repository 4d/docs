---
id: copy-named-selection
title: COPY NAMED SELECTION
slug: /commands/copy-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.COPY NAMED SELECTION.Syntax-->**COPY NAMED SELECTION** ( {*tabla* ;} *nombre* )<!-- END REF-->
<!--REF #_command_.COPY NAMED SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual copiar selección, o Tabla por defecto, si se omite |
| nombre | Text | &#8594;  | Nombre de la selección temporal a crear |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.COPY NAMED SELECTION.Summary-->COPY NAMED SELECTION copia la selección actual de *tabla* en una selección temporal *temp*.<!-- END REF--> La tabla por defecto del proceso se utiliza si el parámetro opcional *tabla* no se especifica. El parámetro *temp* contiene una copia de la selección. La selección actual y el registro actual de *tabla* para el proceso no cambian.

Una selección temporal no contiene en realidad registros, sino una lista ordenada de referencias a registros. Cada referencia a un registro ocupa 4 bytes en memoria. Esto significa que cuando una selección se copia utilizando el comando COPY NAMED SELECTION, la cantidad de memoria necesaria es de 4 bytes multiplicado por el número de registros en la selección. Como las selecciones temporales residen en memoria, usted debe tener suficiente memoria para la selección temporal así como la selección actual de la tabla en el proceso.

Utilice el comando [CLEAR NAMED SELECTION](clear-named-selection.md "CLEAR NAMED SELECTION") para liberar la memoria utilizada por *temp*.

#### Ejemplo 

El siguiente ejemplo permite verificar si hay otras facturas vencidas en la tabla *\[Personas*\]. La selección se ordena y luego se guarda. Nosotros buscamos todos los registros donde las facturas están vencidas. Luego reutilizamos la selección y borramos la selección temporal en memoria. Borrar la selección temporal en memoria es opcional, en caso que el diseñador de la base quiera conservar la selección ordenada para uso futuro:

```4d
 ALL RECORDS([Personas])
  //Permitir al usuario ordenar la selección
 ORDER BY([Personas])
  // Guardar la selección ordenada como una selección temporal
 COPY NAMED SELECTION([Personas];"OrdenUsuario")
  // Buscar los registros donde las facturas estén vacías
 QUERY([Personas];[Personas]FacturaVence=True)
  //Si se encuentran registros
 If(Records in selection([Personas])>0)
  // Informar al usuario
    ALERT("Sí, hay facturas vencidas en la tabla.")
 End if
  // Reutilizar la selección temporal ordenada
 USE NAMED SELECTION("OrdenUsuario")
  // Borrar la selección de la memoria
 CLEAR NAMED SELECTION("OrdenUsuario")
```

#### Ver también 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[CUT NAMED SELECTION](cut-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  