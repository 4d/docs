---
id: form-get-objects
title: FORM GET OBJECTS
slug: /commands/form-get-objects
displayed_sidebar: docs
---

<!--REF #_command_.FORM GET OBJECTS.Syntax-->**FORM GET OBJECTS** ( *arrObjetos* {; *arrVariables* {; *arrPags*}} {; *opcionPag*} )<!-- END REF-->
<!--REF #_command_.FORM GET OBJECTS.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| arrObjetos | Text array | &#8592; | Nombre de los objetos del formulario |
| arrVariables | Pointer array | &#8592; | Punteros a variables o campos asociados a los objetos |
| arrPags | Array integer | &#8592; | Número de página de cada objeto |
| opcionPag | Integer, * | &#8594;  | 1=Página actual del formulario, 2=Todas las páginas, 4=Páginas heredadas<br/>Si se pasa * (obsoleto) = página actual con objetos heredados |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.FORM GET OBJECTS.Summary-->El comando FORM GET OBJECTS devuelve en forma de array(s) la lista de todos los objetos presentes en el formulario actual.<!-- END REF--> Esta lista puede estar restringida a la página actual del formulario y puede excluir los objetos de los formularios heredados. El comando puede ser utilizado con los formularios de entrada y de salida.

**Nota:** el comando no incluye partes del list box. Para analizar un formulario para los objetos del  list box, debe utilizarse [LISTBOX GET OBJECTS](listbox-get-objects.md) o [LISTBOX GET ARRAYS](listbox-get-arrays.md) (ver el ejemplo a continuación para una combinación de [FORM GET OBJECTS](form-get-objects.md), [OBJECT Get type](object-get-type.md) y [LISTBOX GET OBJECTS](listbox-get-objects.md)).

Si un array pasado como parámetro no ha sido declarado previamente, el comando lo crea y dimensiona automáticamente. Sin embargo, pensando en la compilación de la aplicación, le recomendamos declarar explícitamente cada array. 

Pase en *arrObjetos* el nombre del array alfa que contendrá los nombres de los objetos (cada nombre de objeto es único en un formulario). El orden en el cual los objetos aparecen en el array no es significativo.

Los otros arrays llenados opcionalmente por el comando son sincronizados con el primer array. 

Pase en el parámetro opcional *arrVariables* el nombre del array puntero que contiene los punteros a las variables o campos asociados a los objetos. Si un objeto no tiene una variable asociada, el puntero Nil es devuelto. Si hay un objeto de tipo “subformulario”, se devuelve un puntero a la tabla del subformulario.

El tercer array (opcional), *arrPags*, se llena con los números de páginas del formulario. Cada línea de este array contiene el número de página del objeto correspondiente.   
  
El parámetro opcional *\** le permite reducir la lista de objetos devueltos en la página actual del formulario. Cuando se pasa este parámetro, sólo los objetos de la página actual, de la página 0 y de las páginas heredadas son devueltos por el comando. En otras palabras, todos los objetos presentes en la página actual del formulario (visibles o no) son procesados por el comando.

El parámetro opcional *opcionPag* permite designar la(s) parte(s) del formulario desde donde desea obtener los objetos. Por defecto, si el parámetro *opcionPag* se omite (así como el parámetro *\**), se devuelven los objetos de todas las páginas, incluyendo los objetos heredados. Para reducir el alcance del comando, puede pasar un valor en *opcionPag*. Puede pasar una (o una combinación) de las siguientes constantes, que se encuentran en el tema "*Objetos de formulario (Acceso)*":   
  
| Constante         | Tipo         | Valor | Comentario                                                                                                    |
| ----------------- | ------------ | ----- | ------------------------------------------------------------------------------------------------------------- |
| Form all pages    | Entero largo | 2     | Devuelve todos los objetos de todas las páginas, excluyendo los objetos heredados                             |
| Form current page | Entero largo | 1     | Devuelve todos los objetos de la página actual, incluyendo la página 0, pero excluyendo los objetos heredados |
| Form inherited    | Entero largo | 4     | Devuelve sólo los objetos heredados                                                                           |
  
  
**Nota de compatibilidad**: pasar el parámetro *\** es equivalente a pasar Form current page+Form inherited. La sintaxis con el parámetro *\** ahora es obsoleta y no debe ser utilizarse más.

#### Ejemplo 1 

Usted quiere recibir información sobre todas las páginas, incluyendo objetos del formulario heredado (si los hay):

```4d
  //Formulario abierto
 FORM GET OBJECTS(arrayObjetos;arrayVariables;arrayPaginas)
```

O:

```4d
  //Formulario cargado
 FORM LOAD([Tabla1];"MiForm")
 FORM GET OBJECTS(arrayObjetos;arrayVariables;arrayPaginas;Form all pages+Form inherited)
```

#### Ejemplo 2 

Usted desea obtener los objetos de la página actual del formulario cargado, incluyendo la página 0 del formulario y los objetos de los formularios heredados (si los hay):

```4d
 FORM LOAD("MiForm")
 FORM GOTO PAGE(2)
 FORM GET OBJECTS(arrayObjetos;arrayVariables;arrayPag;Formulario página actual+Formulario heredado)
```

#### Ejemplo 3 

Quiere obtener información sobre todos los objetos en el formulario heredado (si los hay). Si no hay formularios heredados, los arrays se devolverán vacíos.

```4d
 FORM LOAD("MiForm")
 FORM GET OBJECTS(arrayObjetos;arrayVariables;arrayPag;Formulario heredado)
```

#### Ejemplo 4 

Usted quiere obtener los objetos de la página 4, incluyendo los de la página 0, pero sin los objetos de formularios heredados (si los hay):

```4d
 FORM LOAD([Tabla1];"MiForm")
 FORM GOTO PAGE(4)
 FORM GET OBJECTS(arrayObjetos;arrayVariables;arrayPag;Formulario página actual)
```

#### Ejemplo 5 

Usted quiere obtener información los objetos de todas las páginas, pero sin objetos de formulario heredado (si los hubiera):

```4d
 FORM LOAD([Tabla1];"MiForm")
 FORM GET OBJECTS(arrayObjetos;arrayVariables;arrayPaginas;Form todas las páginas)
```

#### Ejemplo 6 

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

[FORM GET PROPERTIES](form-get-properties.md)  
*Objetos (Formularios)*  
*Objetos de formulario (Acceso)*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 898 |
| Hilo seguro | &cross; |


