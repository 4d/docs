---
id: ob-get
title: OB Get
slug: /commands/ob-get
displayed_sidebar: docs
---

<!--REF #_command_.OB Get.Syntax-->**OB Get** ( *objeto* ; *propiedad* {; *tipo*} ) : any<!-- END REF-->
<!--REF #_command_.OB Get.Params-->
| Parámetro | Tipo |  | Descripción |
| --- | --- | --- | --- |
| objeto | Object, Campo Object | &#8594;  | Objeto estructurado |
| propiedad | Text | &#8594;  | Nombre de la propiedad a leer |
| tipo | Integer | &#8594;  | Tipo al cual convertir el valor |
| Resultado | any | &#8592; | Valor actual de propiedad |

<!-- END REF-->

#### Descripción 

<!--REF #_command_.OB Get.Summary-->El comando **OB Get** devuelve el valor actual de la *propiedad* del *objeto*, convertido opcionalmente en el *tipo* definido.<!-- END REF-->debe haber sido definido con el comando *C\_OBJECT* o designar un campo objeto 4D.

**Nota:** este comando soporta definiciones de atributo en *objetos* 4D Write Pro, como el comando *WP GET ATTRIBUTES* (ver el ejemplo 9). 

En el parámetro *propiedad*, pase la etiqueta de la propiedad a leer. Tenga en cuenta que el parámetro *propiedad* es sensible a mayúsculas y minúsculas

Por defecto, 4D devuelve el valor de la propiedad en su tipo original. Puede "forzar" la escritura del valor devuelto utilizando el parámetro opcional *tipo*. Para ello, en *tipo* pase una de las siguientes constantes que se encuentran en el tema *Tipos de campos y variables*:

| Constante     | Tipo         | Valor |
| ------------- | ------------ | ----- |
| Is Boolean    | Entero largo | 6     |
| Is collection | Entero largo | 42    |
| Is date       | Entero largo | 4     |
| Is longint    | Entero largo | 9     |
| Is null       | Entero largo | 255   |
| Is object     | Entero largo | 38    |
| Is picture    | Entero largo | 3     |
| Is pointer    | Entero largo | 23    |
| Is real       | Entero largo | 1     |
| Is text       | Entero largo | 2     |
| Is time       | Entero largo | 11    |

El comando devuelve el valor de la *propiedad*. Varios tipos de datos están soportados. Tenga en cuenta que:

* un puntero se devuelve tal cual, puede ser evaluado utilizando el comando [JSON Stringify](json-stringify.md),
* dependiendo de la configuración de la fecha de la base, las fechas en los atributos objeto se almacenan con el tipo de fecha o el tipo de texto (a partir de 4D v16 R6). Para más información, consulte la opción "Utilizar tipo de fecha en lugar del formato de fecha ISO en objetos" en *Página Compatibilidad*. Para que **OB Get** interprete correctamente una fecha almacenada como un texto, debe usar la constante Is date (ver ejemplo 5).
* en valores reales, el separador decimal es siempre un punto "."
* las horas se devuelven como un número. Las horas se almacenan en segundos por defecto en los objetos (ver nota de compatibilidad abajo). Note que [OB SET](ob-set.md) almacena las horas en forma de milisegundos, conforme al estándar JavaScript, mientras 4D espera un número de segundos. Para una interpretación correcta por **OB Get** de una hora almacenada, utilice la constante Is null.

**Notas de compatibilidad:**

* (4D Write Pro) En versiones anteriores a la v17, las horas eran almacenadas en milisegundos en los objetos. Por razones de compatibilidad, este comportamiento anterior puede restablecerse con ayuda del selector Times inside objects del comando [SET DATABASE PARAMETER](set-database-parameter.md). Cualquiera que sea el parámetro, el resultado será correcto cuando se utilice la constante Is time.
* (*4D Write Pro*) En versiones anteriores a v16 R6, cuando *propiedad* definía un atributo de imagen 4D Write Pro (como wk image), siempre se devolvía un valor de texto que contenía un URI de datos. A partir de 4D v16 R6, los atributos imagen 4D Write Pro siempre se devuelven como valores imagen. Debe usar una *propiedad* específica como wk image url ara obtener un URI de datos.
* En versiones anteriores a v16 R4, cuando *propiedad* contiene un valor nulo y si no se utiliza el parámetro *tipo*, 4D devuelve una cadena vacía. En 4D v16 R4 y superiores, la constante Is null se devuelve en este caso. Para conservar la compatibilidad, este cambio solo surte efecto si la opción "Utilizar la notación objetos para acceder a las propiedades de objetos (se requiere Unicode) " está habilitada en la base (ver el párrafo *Página Compatibilidad*).

#### Ejemplo 1 

Recuperación de un valor de tipo texto:

```4d
 var $ref : Object
 var $FirstName : Text
 OB SET($ref;"FirstName";"Harry")
 $FirstName:=OB Get($ref;"FirstName") // $FirstName = "Harry" (text)
```

#### Ejemplo 2 

Recuperación de un valor real convertido en entero largo:

```4d
 OB SET($ref ;"age";42)
 $age:=OB Get($ref ;"age") // $age es un número real (default)
 $age:=OB Get($ref ;"age";Is longint) // $age es un entero largo
```

#### Ejemplo 3 

Recuperación de los valores de un objeto:

```4d
 var $ref1;$ref2 : Object
 OB SET($ref1;"LastName";"Smith") // $ref1={"LastName":"Smith"}
 OB SET($ref2;"son";$ref1) // $ref2={"son":{"LastName":"Smith"}}
 $son:=OB Get($ref2;"son") // $son={"LastName":"john"} (object)
 $sonsName:=OB Get($son ;"name") // $sonsName="john" (text)
```

#### Ejemplo 4 

Modificando de la edad de un empleado dos veces:

```4d
 var $ref_john;$ref_jim : Object
 OB SET($ref_john;"name";"John";"age";35)
 OB SET($ref_jim;"name";"Jim";"age";40)
 APPEND TO ARRAY($myArray;$ref_john) // creamos un objeto array
 APPEND TO ARRAY($myArray;$ref_jim)
  // cambiamos la edad de John de 35 a 25
 OB SET($myArray{1};"age";25)
  // cambiamos la edad de "John" en el array
 For($i;1;Size of array($myArray))
    If(OB Get($myArray{$i};"name")="John")
       OB SET($myArray{$i};"age";36) // en cambio de 25
  // $ref_john={"name":"John","age":36}
    End if
 End for
```

#### Ejemplo 5 

Al recuperar una fecha, el valor resultante depende de la configuración actual de la fecha de la base.

* Si la opción "Utilizar tipo fecha en lugar del formato de fecha ISO en objetos" no está seleccionada:

```4d
 var $object : Object
 var $birthday : Date
 var $birthdayString : Text
 OB SET($object;"Birthday";!30/01/2010!)
 $birthday:=OB Get($object;"Birthday";Is date) //30/01/10
 $birthdayString:=OB Get($object;"Birthday") //"2010-01-29T23:00:00.000Z" (Paris time zone)
```

* Si la opción "Utilizar tipo fecha en lugar del formato de fecha ISO en objetos" está seleccionada:

```4d
 var $object : Object
 var $birthday : Date
 OB SET($object;"Birthday";!30/01/2010!)
 $birthday:=OB Get($object;"Birthday") //30/01/10, no hay necesidad de Is date
```

**Nota:** para más información sobre esta configuración, consulte *Página Compatibilidad*.

#### Ejemplo 6 

Utilización de objetos anidados:

```4d
 var $ref1;$child;$children : Object
 var $childName : Text
 OB SET($ref1;"firstname";"John";"lastname";"Monroe")
  //{"firstname":"john","lastname";"Monroe"}
 OB SET($children;"children";$ref1)
 $child:=OB Get($children;"children")
  //$son = {"firstname":"John","lastname":"Monroe"} (object)
 $childName:=OB Get($child;"lastname")
  //$childName = "Monroe" (text)
  //o
 $childName:=OB Get(OB Get($children;"children");"lastname")
  // $childName = "Monroe" (text)
```

#### Ejemplo 7 

Recuperación en 4D de una hora almacenada en un objeto:

```4d
 var $obj_o : Object
 var $set_h;$get_h : Time
 
 $set_h:=?01:00:00?+1
 OB SET($obj_o;"myHour";$set_h)
  // $obj_o = {"myHour":3601}
  // La hora se almacena en segundos
 $get_h:=OB Get($obj_o;"myHour";Is time)
  // $get_h = ?01:00:01?
```

#### Ejemplo 8 

Ejemplos de manipulación de campos objeto 4D:

```4d
  // Definir un valor
 OB SET([People]Identity_OB;"First name";$firstName)
 OB SET([People]Identity_OB;"Last name";$lastName)
 
  // Obtener un valor
 $firstName:=OB Get([People]Identity_OB;"First name")
 $lastName:=OB Get([People]Identity_OB;"Last name")
```

#### Ejemplo 9 

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

#### Ejemplo 10 

Desea conocer el tamaño de una imagen almacenada en un atributo objeto:

```4d
 var $vSize : Integer
 $vSize:=Picture size(OB Get($object;"photo";Is picture))
```

**Nota:** si asigna el resultado del comando a una variable imagen, la constante Is picture no es necesaria. Ejemplo:  

```4d
 var $vPict : Picture
 $vPict:=OB Get($object;"photo") //"is picture" es inútil en este caso
```

#### Ver también 

[OB Copy](ob-copy.md)  
[OB SET](ob-set.md)  
*Tipos de campos y variables*  

#### Propiedades

|  |  |
| --- | --- |
| Número de comando | 1224 |
| Hilo seguro | &check; |


