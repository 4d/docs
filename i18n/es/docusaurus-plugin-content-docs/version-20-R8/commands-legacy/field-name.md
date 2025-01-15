---
id: field-name
title: Field name
slug: /commands/field-name
displayed_sidebar: docs
---

<!--REF #_command_.Field name.Syntax-->**Field name** ( campPtr | tablaNum {; *numCamp*} ) : Text<!-- END REF-->
<!--REF #_command_.Field name.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| campPtr &#124; tablaNum | Puntero, Entero largo | &#8594;  | Puntero a un campo o número de tabla |
| numCamp | Integer | &#8594;  | Número de campo si se pasa un número de tabla como primer parámetro |
| Resultado | Text | &#8592; | Nombre del campo |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Field name.Summary-->El comando Field name devuelve el nombre del campo cuyo puntero se pasa en *campPtr* o cuyos números de tabla y de campos se pasan en *tablaNum* y *campNum*.<!-- END REF-->

#### Ejemplo 1 

Este ejemplo asigna el segundo elemento del array *campArray{1}* al nombre del segundo campo en la primera tabla. *campArray* es un array de dos dimensiones:

```4d
 campArray{1}{2}:=Field name(1;2)
```

#### Ejemplo 2 

Este ejemplo asigna al segundo elemento del array *campArray{1}* el nombre del campo *\[MiTabla\]MiCampo*. *campArray* es un array de dos dimensiones:

```4d
 campArray{1}{2}:=Field name(->[MiTabla]MiCampo)
```

#### Ejemplo 3 

Este ejemplo muestra una alerta. Este método pasa un puntero a un campo:

```4d
 ALERT("El número del campo "+Field name($1)+" de la tabla "
 +Table name(Table($1))+" debe ser de más de cinco caracteres.")
```

#### Ver también 

[Field](field.md)  
[Last field number](last-field-number.md)  
[Table name](table-name.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 257 |
| Hilo seguro | &check; |


