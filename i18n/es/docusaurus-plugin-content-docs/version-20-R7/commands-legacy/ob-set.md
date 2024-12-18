---
id: ob-set
title: OB SET
slug: /commands/ob-set
displayed_sidebar: docs
---

<!--REF #_command_.OB SET.Syntax-->**OB SET** ( *objeto* ; *propiedad* ; *valor* {; *propiedad2* ; *valor2* ; ... ; *propiedadN* ; *valorN*} )<!-- END REF-->
<!--REF #_command_.OB SET.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object, Object | &#8594;  | Objeto estructurado |
| propiedad | Text | &#8594;  | Nombre de la propiedad a configurar |
| valor | Expression | &#8594;  | Nuevo valor de la propiedad |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB SET.Summary-->El comando **OB SET** crea o modifica uno o más pares de *propiedad*/*valor* en el objeto de lenguaje designado por el parámetro *objeto*.<!-- END REF-->debe haber sido definido usando el comando [C\_OBJECT](c-object.md) o designar un campo objeto 4D.

En el parámetro *propiedad*, pase la etiqueta de la propiedad a crear o modificar. Si la propiedad ya existe en *objeto*, su valor se actualiza. Si no existe, se crea.  
  
Tenga en cuenta, que el parámetro *propiedad* es sensible a las mayúsculas y minúsculas.

En el parámetro *valor*, pase el valor que desea definir para la propiedad. Se admiten varios tipos de datos. Tenga en cuenta que:  
* si pasa un puntero, se mantiene como es, se evalúa utilizando el comando [JSON Stringify](json-stringify.md)
* si pasa una fecha, se almacenará con el tipo de fecha o como texto en formato ISO dependiendo de la configuración actual de la fecha de la base. Para más información, consulte la opción "Utilizar tipo de fecha en lugar de formato de fecha ISO en objetos" en *Página Compatibilidad*.
* si pasa una hora, se almacena en forma de un número de segundos (real) en *objeto*
* si pasa un objeto de lenguaje o una colección, el comando utiliza una referencia y no una copia. Toda modificación aplicada al objeto o colección se informará a todas las referencias
* a partir de 4D v16 R4, puede pasar una imagen de todo tipo soportado (ver *Formatos nativos soportados*).

#### Ejemplo 1 

Creación de un objeto y adición de una propiedad de tipo texto:

```4d
 var $Object : Object
 OB SET($Object ;"FirstName";"John";"LastName";"Smith")
  // $Object = {"FirstName":"John","LastName":"Smith"}
```

#### Ejemplo 2 

Creación de un objeto y adición de una propiedad de tipo booleano:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"smith";"age";42;"client";True)
  // $Object = {"LastName":"smith","age":42,"client":true}
```

#### Ejemplo 3 

Modificación de una propiedad:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"FirstName";"Paul")
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
```

#### Ejemplo 4 

Adición de una propiedad:

```4d
  // $Object = {"FirstName":"John","LastName":"Smith"}
 OB SET($Object ;"department";"Accounting")
  // $Object = {"FirstName":"Paul","LastName":"Smith","department":"Accounting"}
```

#### Ejemplo 5 

Renombrando una propiedad:

```4d
 var $Object : Object
 OB SET($Object ;"LastName";"James";"age";35)
  // $Object = {"LastName":"James","age":35}
 OB SET($Object ;"FirstName";OB Get($Object ;"LastName"))
  // $Object = {"FirstName":""James","nom":"James","age":35}
 OB REMOVE($Object ;"LastName")
  // $Object = {"FirstName":""James","age":35}
```

#### Ejemplo 6 

Usando un puntero:

```4d
  // $Object = {"FirstName":"Paul","LastName":"Smith"}
 var $LastName : Text
 OB SET($Object ;"LastName";->$LastName)
  // $Object = {"FirstName":"Paul","LastName":"->$LastName"}
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":""}
 $LastName:="Wesson"
 $JsonString:=JSON Stringify($Object)
  // $JsonString="{"FirstName":"Paul","LastName":"Wesson"}
```

#### Ejemplo 7 

Usando un objeto:

```4d
 var $ref_smith : Object
 OB SET($ref_smith ;"name";"Smith")
 var $ref_emp : Object
 OB SET($ref_emp ;"employee";$ref_smith)
 $Json_string :=JSON Stringify($ref_emp)
  // $ref_emp = {"employee":{"name":"Smith"}} (object)
  // $Json_string = "{"employee":{"name":"Smith"}}" (string)
```

También puede cambiar un valor sobre la marcha:

```4d
 OB SET($ref_smith ;"name";"Smyth")
  // $ref_smith = {"employee":{"name":"Smyth"}}
 $string:=JSON Stringify($ref_emp)
  // $string = "{"employee":{"name":"Smyth"}}"
```

#### Ejemplo 8 

Si ha definido el campo \[Rect\]Desc como un campo objeto, puede escribir:

```4d
 CREATE RECORD([Rect])
 [Rect]Name:="Blue square"
 OB SET([Rect]Desc;"x";"50";"y";"50";"color";"blue")
 SAVE RECORD([Rect])
```

#### Ejemplo 9 

Usted quiere exportar datos en JSON que contienen una fecha 4D que desea convertir en una cadena sin información de zona horaria. Note que la conversión ocurre cuando la fecha se guarda en el objeto, debe llamar al comando [SET DATABASE PARAMETER](set-database-parameter.md) antes de llamar a [OB SET](ob-set.md): 

```4d
 var $o : Object
 $vDateSetting:=Get database parameter(Dates inside objects) //guardar la configuración actual
 SET DATABASE PARAMETER(Dates inside objects;String type without time zone)
 OB SET($o ;"myDate";Current date) // conversión JSON
 $json:=JSON Stringify($o)
 SET DATABASE PARAMETER(Dates inside objects;$vDateSetting)
```

  
#### Ejemplo 10 

En un método formulario, puede escribir:

```4d
 If(FORM Event=On Validate)
    OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)
    OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")
 End if
```

También puede leer los atributos personalizados de los documentos:

```4d
 vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")
```

#### Ejemplo 11 

Usted desea definir una colección como un valor propiedad. Puede escribir:

```4d
 var $person : Object
 var $myCol : Collection
 
 $person:=OB New
 $myCol:=New collection("Mike";25;"Denis";12;"Henry";4;True)
 OB SET($person;"Name";"Jones";"Children";$myCol)
```

#### Ejemplo 12 

Usted desea almacenar una imagen en un campo objeto. Puede escribir:

```4d
 var $vPict : Picture
 READ PICTURE FILE("photo.jpg";$vPict)
 If(OK=1)
    OB SET([Emp]Children;"photo";$vPict)
 End if
```

#### Ver también 

[OB Get](ob-get.md)  
[OB REMOVE](ob-remove.md)  
[OB SET ARRAY](ob-set-array.md)  
[OB SET NULL](ob-set-null.md)  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1220 |
| Hilo seguro | &check; |


