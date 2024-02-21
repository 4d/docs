---
id: object
title: Object
---

Las variables, campos o expresiones de tipo objeto pueden contener datos de diversos tipos. La estructura de los objetos nativos de 4D se basa en el principio clásico de los pares "propiedad/valor". La sintaxis de estos objetos se basa en la notación JSON:

- El nombre de una propiedad es siempre un texto, por ejemplo "Name". It must follow [specific rules](identifiers.md#object-properties).

- Un valor de propiedad puede ser del tipo siguiente:
  - número (Real, Entero, etc.)
  - text
  - null
  - boolean
  - pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
  - fecha (tipo fecha o cadena en formato fecha ISO)
  - objeto(1) (los objetos pueden ser anidados en varios niveles)
  - imagen(2)
  - collection

(1) **Non-streamable objects** such as ORDA objects ([entities](ORDA/dsMapping.md#entity), [entity selections](ORDA/dsMapping.md#entity-selection), etc.), [file handles](../API/FileHandleClass.md), [web server](../API/WebServerClass.md)... no pueden almacenarse en **campos objeto**. An error is returned if you try to do it; however, they are fully supported in **object variables** in memory.

(2) Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos de tipo imagen indican "[objeto Imagen]".

:::caution

Tenga en cuenta que los nombres de las propiedades distinguen entre mayúsculas y minúsculas.

:::

You manage Object type variables, fields or expressions using the standard [object notation](#properties) or the commands available in the **Objects (Language)** theme. Note that specific commands of the **Queries** theme such as `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, or `ORDER BY ATTRIBUTE` can be used to carry out processing on object fields.

Cada valor de propiedad al que se accede a través de la notación de objeto se considera una expresión. Puede utilizar estos valores siempre que se esperen expresiones 4D:

- in 4D code, either written in the methods (Code Editor) or externalized (formulas, 4D tags files processed by `PROCESS 4D TAGS` or the Web Server, export files, 4D Write Pro documents...),
- en las áreas de expresiones del depurador y del explorador de ejecución,
- en la lista de propiedades del editor de formularios para los objetos formulario: campo Variable o Expresión, así como diversas expresiones de list box y columnas (fuente de datos, color de fondo, estilo o color de fuente).

## Instanciación

Los objetos deben haber sido instanciados, de lo contrario intentar leer o modificar sus propiedades generará un error de sintaxis.

La instanciación de objetos puede realizarse de una de las siguientes maneras:

- using the [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command,
- utilizando el operador `{}`.

:::info

Several 4D commands and functions return objects, for example [`Get database measures`](https://doc.4d.com/4Dv19R7/4D/19-R7/Get-database-measures.301-5945423.en.html) or [`File`](../API/FileClass.md#file). En este caso, no es necesario instanciar explícitamente el objeto, el lenguaje 4D lo hace por usted.

:::

### Comando `New object`

The [`New object`](https://doc.4d.com/4dv19R/help/command/en/page1471.html) command creates a new empty or prefilled object and returns its reference.

Ejemplos:

```4d
 var $obVar : Object //declaration of an object type 4D variable
 $obVar:=New object //instantiation of an object and assignment to the 4D variable
 
 var $obFilled : Object 
 $obFilled:=New object("name";"Smith";"age";42) //instantiation and assignment of a prefilled object
```

### operador \`{}

The `{}` operator allows you to create an **object literal**. An object literal is a semi-column separated list of zero or more pairs of property names and associated values of an object, enclosed in curly braces (`{}`). La sintaxis literal de objeto crea objetos vacíos o llenos.

Since any property value is considered an expression, you can create sub-objects using `{}` in property values.  You can also create and reference **collection literals**.

Ejemplos:

```4d
 var $o ; $o2 ; $o3 : Object //declaration of object variables
 $o := {} // instantiation of an empty object 
 $o2 := {a: "foo"; b: 42; c: {}; d: ($toto) ? true : false } // instantiation of an object
 		// with properties {"a":"foo","b":42,"c":{},"d":false})

	// same properties using variables
 var $a : Text
 var $b : Number
 var $c : Object
 $a:="foo"
 $b:=42
 $c:={}
 $o3:={ a: $a; b: $b; c: $c } // {"a":"foo";b":42;"c":{}}

```

You can mix the `New object` and literal syntaxes:

```4d
$o:={\
	ob1: {age: 42}; \
	ob2: New object("message"; "Hello"); \
	form1: Formula(return This.ob1.age+10); \
	form2 : Formula(ALERT($1)); \
	col: [1; 2; 3; 4; 5; 6]\
	}

$o.form1()  //52
$o.form2($o.ob2.message)  // displays Hello
$col:=$o.col[5] //6
```

### Objeto estándar o compartido

Puede crear dos tipos de objetos:

- regular (non-shared) objects, using the [`New object`](https://doc.4d.com/4Dv20/4D/20/New-object.301-6237618.en.html) command or object literal syntax (`{}`). Estos objetos pueden ser editados sin ningún control de acceso específico, pero no pueden ser compartidos entre procesos.
- shared objects, using the [`New shared object`](https://doc.4d.com/4Dv20/4D/20/New-shared-object.301-6237617.en.html) command. Estos objetos pueden ser compartidos entre procesos, incluidos los hilos apropiativos. Access to these objects is controlled by `Use...End use` structures.
  Para más información, consulte la sección [Objetos y colecciones compartidos](shared.md).

## Propiedades

Se accede a los valores de las propiedades de los objetos a través de una cadena de tokens. Se puede acceder a las propiedades de los objetos de dos maneras:

- utilizando un símbolo de "punto":
  > object.propertyName

Ejemplo:

```4d
     employee.name:="Smith"
```

- utilizando una cadena entre corchetes:
  > object["propertyName"]

Ejemplos:

```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
	 $vName:=employee[$property]

```

Dado que un valor de propiedad de un objeto puede ser un objeto o una colección, puede utilizar una secuencia de símbolos para acceder a subpropiedades, por ejemplo:

```4d
 $vAge:=employee.children[2].age
```

La notación de objetos está disponible en cualquier elemento del lenguaje que pueda contener o devolver un objeto, es decir:

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements).
  Ejemplos:

```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //field
     $city:=$addr.city //property of an object
     $pop:=$aObjCountries{2}.population //object array
     $val:=$myCollection[3].subvalue //collection element
```

- **Comandos 4D** que devuelven objetos.
  Ejemplo:

```4d
     $measures:=Get database measures.DB.tables
```

- **Project methods** or **Functions** that return objects.
  Ejemplo:

```4d
      // MyMethod1
     #DECLARE -> $o : Object
     $o:=New object("a";10;"b";20)
     
      //myMethod2
     $result:=MyMethod1.a //10
```

- **Colecciones**
  Ejemplo:

```4d
     myColl.length //tamaño de la colección
```

### Valor Null

When using the objects, the **null** value is supported though the **Null** command. Este comando se puede utilizar para asignar o comparar el valor null a propiedades de objetos, por ejemplo:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

For more information, please refer to [Null and Undefined](dt_null_undefined.md).

### Valor indefinido

La evaluación de una propiedad de un objeto puede producir a veces un valor indefinido. Asignar un valor indefinido a una propiedad de objeto existente reinicializa o borra su valor. La asignación de un valor indefinido a una propiedad de objeto no existente no hace nada.

For more information, please refer to [Null and Undefined](dt_null_undefined.md)

### Punteros

**Preliminary Note:** Since objects are always passed by reference, there is usually no need to use pointers. Al pasar el objeto, internamente 4D utiliza automáticamente un mecanismo similar a un puntero, minimizando la necesidad de memoria y permitiendo modificar el parámetro y devolver las modificaciones. Como resultado, no es necesario utilizar punteros. Sin embargo, en caso de querer utilizar punteros, se puede acceder a los valores de las propiedades mediante punteros.

El uso de la notación de objetos con punteros es muy similar al uso de la notación de objetos directamente con objetos, excepto que el símbolo "punto" debe omitirse.

- Acceso directo:

> pointerOnObject->propertyName

- Acceso por nombre:

> pointerOnObject->["propertyName"]

Ejemplo:

```4d
 var vObj : Object
 var vPtr : Pointer
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

## Resources

Objects use _resources_ such a documents, entity locks, and of course, memory. Estos recursos se conservan siempre que los objetos los necesiten. Normalmente, no tiene que preocuparse por ellos, 4D libera automáticamente todos los recursos adjuntos a un objeto cuando detecta que el objeto en sí ya no está referenciado por ninguna variable u otro objeto.

Por ejemplo, cuando ya no hay referencias a una entidad sobre la que se ha establecido un bloqueo con [`$entity.lock()`](../API/EntityClass.md#lock), 4D liberará la memoria pero también liberará automáticamente el bloqueo asociado, una llamada a [`$entity.unlock()`](../API/EntityClass.md#unlock) es inútil.

Si desea liberar inmediatamente todos los recursos ocupados por un objeto sin tener que esperar que 4D lo haga automáticamente (al final de la ejecución del método para variables locales, por ejemplo), solo tiene que **anular todas sus referencias**. Por ejemplo:

```4d

$doc:=WP Import document("large_novel.4wp")
	... // do something with $doc
$doc:=Null  // free resources occupied by $doc
	... // continue execution with more free memory

```

## Ejemplos

La utilización de la notación de objetos simplifica el código 4D en el manejo de los mismos. Sin embargo, tenga en cuenta que la notación basada en comandos sigue siendo totalmente soportada.

- Escritura y lectura de propiedades de objetos (este ejemplo compara la notación de objetos y la notación de comandos):

```4d
  // Using the object notation
 var $myObj : Object //declares a 4D variable object
 $myObj:={} //creates an object literal and assigns it to the variable
 $myObj.age:=56
 $age:=$myObj.age //56
 
  // Using the command notation
 var $myObj2 : Object //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42
 
  // Of course, both notations can be mixed
 var $myObj3 : Object
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Creación de propiedades y asignación de valores, incluyendo objetos:

```4d
 var $Emp : Object
 $Emp:=New object
 $Emp.city:="London" //crea la propiedad city y establece su valor como"London"
 $Emp.city:="Paris" //modifica la propiedad city
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //crea la propiedad phone y establece su valor para un objeto
```

- Obtener un valor en un subobjeto es muy sencillo utilizando la notación de objetos:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```

- Puede acceder a las propiedades como cadenas utilizando el operador `[]`

```4d
 $Emp["city"]:="Berlin" //modifica la propiedad city
  //esto puede ser útil para crear propiedades a través de variables
 var $addr : Text
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // crea 4 propiedades vacías "address1...address4" en el objeto $Emp
```
