---
id: find-in-array
title: Find in array
slug: /commands/find-in-array
displayed_sidebar: docs
---

<!--REF #_command_.Find in array.Syntax-->**Find in array** ( *array* ; *valor* {; *inicio*} ) : Integer<!-- END REF-->
<!--REF #_command_.Find in array.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| array | Array | &#8594;  | Array a buscar |
| valor | Expression | &#8594;  | Valor del mismo tipo a buscar en el array |
| inicio | Integer | &#8594;  | Elemento a partir del cual comenzar la búsqueda |
| Resultado | Integer | &#8592; | Número del primer elemento en el array que corresponde al valor |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.Find in array.Summary-->El comando Find in array devuelve el número del primer elemento del *array* que corresponde a *valor*.<!-- END REF-->

Find in array puede utilizarse con arrays de tipo Texto, Alfa, Numérico, Fecha, Puntero, y Booleano. Los parámetros *array* y *valor* deben ser del mismo tipo.

*valor* debe coincidir exactamente con el elemento a encontrar (se aplican las mismas reglas que para el operador de igualdad, ver [Operadores básicos](https://developer.4d.com/docs/Concepts/operators#basic-operators)). Si no se encuentra ningún elemento, **Find in array** devuelve –1.

**Nota:** con arrays objeto, sólo se pueden utilizar referencias a objetos en el parámetro *valor*.

Si se especifica *inicio*, el comando comienza la búsqueda en el número de elemento especificado por *inicio*. Si no se especifica *inicio*, el comando comienza la búsqueda en el elemento 1.

#### Ejemplo 1 

El siguiente método de proyecto borra todos los elementos vacíos del array alfa o texto cuyo puntero se pasa como parámetro:

```4d
  // Método de proyecto LIMPIAR ARRAY
  // LIMPIAR ARRAY ( Puntero )
  // LIMPIAR ARRAY ( -> Array Texto o Alfa )
 
 var $1 : Pointer
 Repeat
    $vlElem:=Find in array($1->;"")
    If($vlElem>0)
       DELETE FROM ARRAY($1->;$vlElem)
    End if
 Until($vlElem<0)
```

Después de implementar este método de proyecto en una base, puede escribir:

```4d
 ARRAY TEXT(atValores;...)
  // ...
  // Utilizar el array como quiera
  // ...
  // Eliminar los elementos de cadenas vacías
 LIMPIAR ARRAY(->atValores)
```

#### Ejemplo 2 

El siguiente método de proyecto selecciona el primer elemento de un array cuyo puntero pasado como primer parámetro corresponde al valor de la variable o del campo cuyo puntero se pasa como parámetro:

```4d
  // Método de proyecto SELECT ELEMENT
  // SELECT ELEMENT ( Pointer ; Pointer)
  // SELECT ELEMENT ( -> Text or String array ; -> Text or String variable or field )
 
 $1->:=Find in array($1->;$2->)
 If($1->=-1)
    $1->:=0 // Si no se encuentra un elemento, fijar el array en un elemento no seleccionado
 End if
```

Después de implementar este método proyecto en la base, puede escribir:  
  
```4d
  // Método de objeto de menú desplegable asGender
 Case of
    :(Form event code=On Load)
       SELECT ELEMENT(->asGender;->[People]Gender)
 
 End case
```

**Nota**: este ejemplo utiliza el **elemento seleccionado** del array. Tenga en cuenta que el elemento seleccionado no es significativo si el array contiene más de 32.767 elementos (ver *Arrays y objetos de formulario*). En este caso, es necesario utilizar una variable de tipo entero largo para almacenar el resultado de **Find in array**.

#### Ejemplo 3 

Desea encontrar una referencia a un objeto:

```4d
 ARRAY OBJECT($objects;100)
 $o1:={a10;b"xyz"}
 $o2:={a10;b"xyz"}
 
 $objects{20}:=$o1
 var $p : Integer
 
 $p:=Find in array($objects;$o1) //$p = 20 
 $p:=Find in array($objects;$o2) //$p = -1 
 $p:=Find in array($objects;{a10;b"xyz"}) //$p = -1
```

#### Ver también 

[Count in array](count-in-array.md)  
[DELETE FROM ARRAY](delete-from-array.md)  
[Find in sorted array](find-in-sorted-array.md)  
[INSERT IN ARRAY](insert-in-array.md)  
[Size of array](size-of-array.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 230 |
| Hilo seguro | &check; |


