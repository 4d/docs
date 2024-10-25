---
id: sort-array
title: SORT ARRAY
slug: /commands/sort-array
displayed_sidebar: docs
---

<!--REF #_command_.SORT ARRAY.Syntax-->**SORT ARRAY** ( *array* {; *array2* ; ... ; *arrayN*}{; > o <} )<!-- END REF-->
<!--REF #_command_.SORT ARRAY.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Arrays a ordenar |
| > o < | Operador | &#8594;  | ">" ordenar en orden ascendente, u "<" ordenar en orden descendente, u orden ascendente si se omite |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.SORT ARRAY.Summary-->El comando SORT ARRAY ordena uno o más arrays en orden ascendente o descendente.<!-- END REF-->

**Notas:** 

* No es posible ordenar arrays de tipo [Puntero](# "A reference to another variable (including arrays and array elements), table, or field") o [Imagen](# "Can be any Windows or Macintosh picture"). Puede ordenar los elementos de un array bidimensional (es decir, *a2DArray{$vlEsteElem}*) pero no puede ordenar el array bidimensional en sí mismo (es decir, *a2DArray*).
* Puede ordenar arrays [Objeto](# "Datos estructurados como forma de objeto nativo 4D"). Los elementos null se agrupan y los elementos del array se ordenan con un orden interno.

El último parámetro especifica si ordenar el *array* en orden ascendente o descendente. El símbolo “mayor que” (>) indica un orden ascendente; el símbolo “menor que” (<) indica un orden descendente. Si no especifica el orden, la ordenación es ascendente.

Si se especifica más de un array, los arrays se ordenan siguiendo el definido para el primer array; las ordenaciones multiniveles no son posibles. En su lugar puede utilizar el comando [MULTI SORT ARRAY](multi-sort-array.md) si desea ordenar arrays sincronizados.

#### Ejemplo 1 

El siguiente ejemplo crea dos arrays y luego los ordena en función del nombre de la empresa:

```4d
 ALL RECORDS([Personas])
 SELECTION TO ARRAY([Personas]Nombre;asNombres;[Personas]Empresa;asEmpresas)
 SORT ARRAY(asEmpresas;asNombres;>)
```

Sin embargo, como SORT ARRAY no realiza ordenaciones multinivel, los nombres de las personas aparecen en desorden al interior de cada empresa. Para ordenar las personas por nombre para cada empresa, debe escribir:

```4d
 ALL RECORDS([Personas])
 ORDER BY([Personas];[Personas]Empresa;>;[Personas]Nombre;>)
 SELECTION TO ARRAY([Personas]Nombre;asNombres;[Personas]Empresa;asEmpresas)
```

#### Ejemplo 2 

Usted visualiza los nombres de una tabla *\[Personas\]* en una ventana flotante. Cuando hace clic en los botones en la ventana, puede ordenar esta lista de nombres de A a Z o de Z a A. Como varias personas pueden tener el mismo nombre, también puede utilizar un campo *\[Personas\]Numero ID*, el cual es un campo indexado único. Cuando hace clic en un nombre de la lista, usted recupera el registro para el nombre correspondiente. Manteniendo un array sincronizado y oculto de números de identificación, se asegura de acceder al registro correspondiente al nombre seleccionado:

```4d
  // Método de objeto del array asNames
 Case of
    :(Form event code=On Load)
       ALL RECORDS([People])
       SELECTION TO ARRAY([People]Name;asNames;[People]ID number;alIDs)
       SORT ARRAY(asNames;alIDs;>)
    :(Form event code=On Unload)
       CLEAR VARIABLE(asNames)
       CLEAR VARIABLE(alIDs)
    :(Form event code=On Clicked)
       If(asNames#0)
  // Utilice el array alIDs para obtener el registro correcto
          QUERY([People];[People]ID Number=alIDs{asNames})
  // Hacer algo con el registro
       End if
 End case
 
  // Método de objeto del botón bA2Z
  // Ordenación de los arrays en orden creciente conservando la sincronización
 SORT ARRAY(asNames;alIDs;>)
 
  // Método de objeto del botón bZ2A
  // Ordenación de los arrays en orden decreciente conservando la sincronización
 SORT ARRAY(asNames;alIDs;<)
```

#### Ver también 

[Find in sorted array](find-in-sorted-array.md)  
[MULTI SORT ARRAY](multi-sort-array.md)  
[ORDER BY](order-by.md)  
[SELECTION TO ARRAY](selection-to-array.md)  