---
id: cut-named-selection
title: CUT NAMED SELECTION
slug: /commands/cut-named-selection
displayed_sidebar: docs
---

<!--REF #_command_.CUT NAMED SELECTION.Syntax-->**CUT NAMED SELECTION** ( {*tabla* ;} *nombre* )<!-- END REF-->
<!--REF #_command_.CUT NAMED SELECTION.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Tabla de la cual cortar selección, o Tabla por defecto, si se omite |
| nombre | Text | &#8594;  | Nombre de la selección temporal a crear |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.CUT NAMED SELECTION.Summary-->CUT NAMED SELECTION crea una selección temporal *temp* y coloca allí la selección actual de *tabla*.<!-- END REF--> A diferencia de [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION"), este comando no copia la selección actual de *tabla*, si no que la desplaza.

Después de ejecutar el comando, la selección actual de *tabla* en el proceso actual queda vacía. Por lo tanto, CUT NAMED SELECTION no debe ser utilizado cuando un registro está siendo modificado. 

CUT NAMED SELECTION es más eficiente en términos de utilización de memoria, que [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION"). [COPY NAMED SELECTION](copy-named-selection.md "COPY NAMED SELECTION"), utiliza 4 bytes de memoria por cada registro de la selección. CUT NAMED SELECTION, sólo se desplaza la referencia a la lista. 

#### Ejemplo 

El método siguiente vacía la selección actual de una tabla *\[Clientes\]*:

```4d
 CUT NAMED SELECTION([Clientes];"ABorrar")
 CLEAR NAMED SELECTION("ABorrar")
```

#### Ver también 

[CLEAR NAMED SELECTION](clear-named-selection.md)  
[COPY NAMED SELECTION](copy-named-selection.md)  
[USE NAMED SELECTION](use-named-selection.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 334 |
| Hilo seguro | &check; |
| Modifica la selección actual ||


