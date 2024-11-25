---
id: object-get-type
title: OBJECT Get type
slug: /commands/object-get-type
displayed_sidebar: docs
---

<!--REF #_command_.OBJECT Get type.Syntax-->**OBJECT Get type** ( {* ;} *objeto* ) : Integer<!-- END REF-->
<!--REF #_command_.OBJECT Get type.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| * | Operador | &#8594;  | Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable |
| objeto | any | &#8594;  | Nombre de objeto (si se especifica *) o Variable (si se omite *) |
| Resultado | Integer | &#8592; | Tipo de objeto |

<!-- END REF-->

*Este comando no es hilo seguro, no puede ser utilizado en código apropiativo.*


#### Descripción 

<!--REF #_command_.OBJECT Get type.Summary-->El comando **OBJECT Get type** devuelve el tipo del objeto designado por los parámetros *objeto* y *\** en el formulario actual .<!-- END REF-->

Si pasa el parámetro opcional *\** indica que el parámetro *objeto* es un nombre de objeto (cadena). Esta sintaxis es obligatoria si está procesando objetos estáticos tales como líneas o rectángulos.   
Si no pasa este parámetro, indica que el parámetro *objeto* es una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena.  
  
**Nota**: si aplica este comando a un conjunto de objetos, se devuelve el tipo del último objeto.  
  
El valor devuelto corresponde a una de las siguientes constantes, disponibles en el tema "*Tipos objetos formulario*:

| Constante                           | Tipo         | Valor |
| ----------------------------------- | ------------ | ----- |
| Object type 3D button               | Entero largo | 16    |
| Object type 3D checkbox             | Entero largo | 26    |
| Object type 3D radio button         | Entero largo | 23    |
| Object type button grid             | Entero largo | 20    |
| Object type checkbox                | Entero largo | 25    |
| Object type combobox                | Entero largo | 11    |
| Object type dial                    | Entero largo | 28    |
| Object type group                   | Entero largo | 21    |
| Object type groupbox                | Entero largo | 30    |
| Object type hierarchical list       | Entero largo | 6     |
| Object type hierarchical popup menu | Entero largo | 13    |
| Object type highlight button        | Entero largo | 17    |
| Object type invisible button        | Entero largo | 18    |
| Object type line                    | Entero largo | 32    |
| Object type listbox                 | Entero largo | 7     |
| Object type listbox column          | Entero largo | 9     |
| Object type listbox footer          | Entero largo | 10    |
| Object type listbox header          | Entero largo | 8     |
| Object type matrix                  | Entero largo | 35    |
| Object type oval                    | Entero largo | 34    |
| Object type picture button          | Entero largo | 19    |
| Object type picture input           | Entero largo | 4     |
| Object type picture popup menu      | Entero largo | 14    |
| Object type picture radio button    | Entero largo | 24    |
| Object type plugin area             | Entero largo | 38    |
| Object type popup dropdown list     | Entero largo | 12    |
| Object type progress indicator      | Entero largo | 27    |
| Object type push button             | Entero largo | 15    |
| Object type radio button            | Entero largo | 22    |
| Object type radio button field      | Entero largo | 5     |
| Object type rectangle               | Entero largo | 31    |
| Object type rounded rectangle       | Entero largo | 33    |
| Object type ruler                   | Entero largo | 29    |
| Object type splitter                | Entero largo | 36    |
| Object type static picture          | Entero largo | 2     |
| Object type static text             | Entero largo | 1     |
| Object type subform                 | Entero largo | 39    |
| Object type tab control             | Entero largo | 37    |
| Object type text input              | Entero largo | 3     |
| Object type unknown                 | Entero largo | 0     |
| Object type view pro area           | Entero largo | 42    |
| Object type web area                | Entero largo | 40    |
| Object type write pro area          | Entero largo | 41    |

#### Ejemplo 

Usted quiere cargar un formulario y obtener la lista de todos los objetos de los list boxes que contiene.

```4d
 FORM LOAD("MyForm")
 ARRAY TEXT(arrObjects;0)
 FORM GET OBJECTS(arrObjects)
 ARRAY LONGINT(ar_type;Size of array(arrObjects))
 For($i;1;Size of array(arrObjects))
    ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})
    If(ar_type{$i}=Object type listbox)
       ARRAY TEXT(arrLBObjects;0)
       LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)
    End if
 End for
 FORM UNLOAD
```

#### Ver también 

[FORM LOAD](form-load.md)  
[LISTBOX GET OBJECTS](listbox-get-objects.md)  