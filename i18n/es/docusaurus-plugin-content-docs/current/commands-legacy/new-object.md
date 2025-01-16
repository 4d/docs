---
id: new-object
title: New object
slug: /commands/new-object
displayed_sidebar: docs
---

<!--REF #_command_.New object.Syntax-->**New object** {( *propiedad* ; *valor* {; *propiedad2* ; *valor2* ; ... ; *propiedadN* ; *valorN*} )} : Object<!-- END REF-->
<!--REF #_command_.New object.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| propiedad | Text | &#8594;  | Nombre de la propiedad a crear |
| valor | any | &#8594;  | Valor de la propiedad |
| Resultado | Object | &#8592; | Nuevo objeto del lenguaje |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.New object.Summary-->El comando **New object** crea un nuevo objeto vacío o prellenado y devuelve su referencia.<!-- END REF-->

Si no pasa ningún parámetro, **New object** crea un objeto vacío y devuelve su referencia. Debe asignar esta referencia a una variable 4D declarada con [C\_OBJECT](c-object.md) o un campo objeto 4D.

**Nota:** [C\_OBJECT](c-object.md) declara una variable del tipo [Objeto](# "Datos estructurados como forma de objeto nativo 4D") pero no crea ningún objeto.

Opcionalmente, puede prefijar el nuevo objeto pasando uno o varios pares *propiedad*/*valor* como parámetros:

* En el parámetro *propiedad*, pase la etiqueta de la propiedad a crear. Note que el parámetro *propiedad* es sensible a mayúsculas y minúsculas.
* En el parámetro *valor*, pase el valor que desea definir para la propiedad. Varios tipos de datos son soportados:  
   * número (real, entero...) Los valores numéricos se almacenan siempre como reales.  
   * texto  
   * booleano  
   * puntero  
   * blob (4D.Blob)  
   * fecha  
   * hora  
   * null  
   * imagen  
   * objeto  
   * colección

Tenga en cuenta que:

* si pasa un puntero, se mantiene como está; Se evalúa utilizando comandos como [JSON Stringify](json-stringify.md),
* las fechas se almacenan en como fechas "aaaa-mm-dd" o en cadena en formato "AAAA-MM-DDTHH:mm:ss.SSSZ" en función del parámetro actual relativo al almacenamiento de las fechas en los objetos (ver *Página Compatibilidad*). Al convertir las fechas 4D en texto antes de almacenarlas en el objeto, por defecto el programa toma en cuenta la zona horaria local. Puede modificar este comportamiento utilizando el selector Dates inside objects del comando [SET DATABASE PARAMETER](set-database-parameter.md).
* si pasa una hora, se almacena como un número de milisegundos (Real).

#### Ejemplo 1 

Este comando puede crear objeto vacíos o llenos:

```4d
 var $obj1 : Object
 var $obj2 : Object
 var $obj3 : Object
 $obj1:=New object
  // $obj1 = {}
 $obj2:=New object("name";"Smith")
  // $obj2 = {name:Smith}
 $obj3:=New object("name";"Smith";"age";40)
  // $obj3 = {name:Smith,age:40}
```

#### Ejemplo 2 

Crear un nuevo objeto con un objeto como valor de parámetro:

```4d
 var $Children;$Contact : Object
 
  //Crear un array objeto
 ARRAY TEXT($arrChildren;3)
 $arrChildren{1}:="Richard"
 $arrChildren{2}:="Susan"
 $arrChildren{3}:="James"
 OB SET ARRAY($Children;"Children";$arrChildren)
 
  //Inicializar el objeto
 $Contact:=New object("FirstName";"Alan";"LastName";"Parker";"age";30;"Children";$Children)
  // $Contact = {FirstName:Alan,LastName:Parker,age:30,Children:{Children:[Richard,Susan,James]}}
```

#### Ejemplo 3 

Este comando es útil para pasar objetos como parámetros:

```4d
 var $measures : Object
 $measures:=Database measures(New object("path";"DB.cacheReadBytes";"withHistory";True;"historyLength";120))
```

#### Ejemplo 4 

Con este comando, puede fácilmente manejar objetos en bucles:

```4d
 ARRAY OBJECT($refs;0)
 var vCounter : Integer
 
 For(vCounter;1;100)
    APPEND TO ARRAY($refs;New object("line";"Line number "+String(vCounter)))
 End for
```

#### Ver también 

  
[New shared object](new-shared-object.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1471 |
| Hilo seguro | &check; |


