---
id: table
title: Table
slug: /commands/table
displayed_sidebar: docs
---

<!--REF #_command_.Table.Syntax-->**Table** ( numTabla | unPtr ) : any<!-- END REF-->
<!--REF #_command_.Table.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| numTabla &#124; unPtr | Entero largo, Puntero | &#8594;  | Número de tabla o Puntero de tabla, o Puntero de campo |
| Resultado | Integer, Pointer | &#8592; | Puntero de tabla, si se pasa un número de tabla Número de tabla, si se pasa un puntero de tabla Número de tabla, si se pasa un puntero de campo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Table.Summary-->El comando Table tiene tres sintaxis diferentes: 

* Si pasa un número de tabla en *numTabla*, Table devuelve un puntero para la tabla.<!-- END REF-->
* Si pasa un puntero de tabla en *unPtr*, Table devuelve el número de la tabla.
* Si pasa un puntero de campo en *unPtr*, Table devuelve el número de tabla del campo.

#### Ejemplo 1 

En este ejemplo, la variable *ptrTabla* recibe un puntero de la tabla 3 de la base:

```4d
 ptrTabla:=Table(3)
```

#### Ejemplo 2 

Si pasa *ptrTabla* (un puntero a la tabla 3) a Table devuelve 3\. En la siguiente línea, la variable *numTabla* toma el valor 3:

```4d
 numTabla:=Table(ptrTabla)
```

#### Ejemplo 3 

En este ejemplo, la variable *numTabla* es igual al número de la tabla *\[Tabla3\]*: 

```4d
 numTabla:=Table(->[Tabla3])
```

#### Ejemplo 4 

Este ejemplo, la variable *numTabla* es igual al número de la tabla a la cual pertenece el campo *\[Tabla3\]Campo1*:

```4d
 numTabla:=Table(->[Tabla3]Campo1)
```

#### Ver también 

[Field](field.md)  
[Last table number](last-table-number.md)  
[Table name](table-name.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 252 |
| Hilo seguro | &check; |


