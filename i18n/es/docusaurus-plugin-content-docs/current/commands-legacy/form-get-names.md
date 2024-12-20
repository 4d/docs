---
id: form-get-names
title: FORM GET NAMES
slug: /commands/form-get-names
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET NAMES.Syntax-->**FORM GET NAMES** ( {*tabla* ;} *arrayNoms* {; *filtro* {; *marcador*}}{; *} )<!-- END REF-->
<!--REF #_command_.FORM GET NAMES.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| tabla | Table | &#8594;  | Referencia de tabla |
| arrayNoms | Text array | &#8592; | Array de nombres de formulario |
| filtro | Text | &#8594;  | Filtro de nombres |
| marcador | Real | &#8594;  | Marcador para versión mínima a devolver |
| &#8592; | Nuevo valor |
| * | Operador | &#8594;  | Si se pasa = el comando se aplica a la base local cuando se ejecuta desde un componente (parámetro ignorado fuera de este contexto) |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM GET NAMES.Summary-->El comando **FORM GET NAMES** llena el array *arrayNoms* con los nombres de los formularios de la aplicación.<!-- END REF--> 

Si pasa el parámetro *tabla*, el comando devuelve los nombres de los formularios tabla asociados a esta tabla. Si omite este parámetro, el comando devuelve los nombres de los formularios proyecto de la base. 

Puede limitar esta lista de formularios pasando una cadena de comparación en el parámetro *filtro*: en este caso, sólo se devuelven los formularios cuyos nombres corresponden al filtro. Puede utilizar el carácter @ para definir los filtros de tipo "comienza por", "termina en" o "contiene". Si pasa una cadena vacía, se ignora el parámetro *filtro*.

También puede limitar la lista de formularios utilizando el parámetro opcional *marcador*, que permite limitar los formularios devueltos en *arrayNoms* a los que fueron modificados después de un tiempo determinado. Como parte de un sistema de control de versiones, este parámetro le permite actualizar sólo los formularios que se fueron modificados desde la última copia de seguridad.

Este principio funciona de esta forma: 4D mantiene un contador interno de las modificaciones de los recursos de la base. Como los formularios son recursos, cada vez que un formulario se crea o se guarda, el contador se incrementa.  
Si pasa el parámetro *marcador*, el comando devuelve, en *arrayNoms*, sólo los formularios que corresponden a los valores de los marcadores superiores o iguales a *marcador*. Además, si pasa una variable en el marcador, el comando devuelve el nuevo valor del contador de modificación, es decir, el más alto, en esta variable. Puede guardar este valor y utilizarlo en la próxima llamada al comando **FORM GET NAMES** para recuperar sólo los formularios nuevos o modificados.

Si el comando se ejecuta desde un componente, devuelve por defecto los nombres de los formularios proyecto del componente. Si pasa el parámetro *\**, el array contendrá los formularios de la base local. 

**Nota:** los formularios ubicados en la papelera no se listan. 

#### Ejemplo 

Ejemplos de uso típicos:

```4d
  // Lista de todos los formularios proyecto de la base
 FORM GET NAMES(arr_Names)
 
  // Lista de formularios de la tabla [Empleados]
 FORM GET NAMES([Empleados] ;arr_Names)
 
  // Lista de formularios "input" de la tabla [Empleados]
 FORM GET NAMES([Empleados] ;arr_Names;"input_@")
 
  // Lista de formularios proyecto especificos de la base
 FORM GET NAMES(arr_Names;"dialogue_@")

 // Lista todos los formularios proyecto que fueron modificados desde la última sincronización
  // vMarker contiene un valor numérico
 FORM GET NAMES(arr_Names;"";vMarker)
 
  // Lista de formularios tabla desde un componente
  // Un puntero es necesario porque se desconoce el nombre de la tabla
 FORM GET NAMES(tablePtr->;arr_Names;*)


```

#### Ver también 

[METHOD GET PATHS FORM](method-get-paths-form.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1167 |
| Hilo seguro | &cross; |

