---
id: object
title: Objects
---

Variables, fields or expressions of the Object type can contain various types of data. The structure of "native" 4D objects is based on the classic principle of "property/value" pairs. The syntax of these objects is based on JSON notation:

- El nombre de una propiedad es siempre un texto, por ejemplo "Name".

- A property value can be of the following type:
    - number (Real, Integer, etc.)
    - texto
    - null
    - Booleano
    - pointer (stored as such, evaluated using the `JSON Stringify` command or when copying),
    - date (date type or ISO date format string)
    - objeto (los objetos pueden estar anidados en varios niveles)
    - imagen(*)
    - colección

(*)Cuando se expone como texto en el depurador o se exporta a JSON, las propiedades de los objetos imagen imprimen "[objeto Imagen]".

**Atención:** recuerde que los nombres de atributos diferencian entre mayúsculas y minúsculas.

Las variables, campos o expresiones de tipo objeto se gestionan mediante los comandos disponibles en el tema **Objetos (Lenguaje)** o a través de la notación de objetos (ver [Básicos de sintaxis](Concepts/dt_object.md#syntax-basics)). Tenga en cuenta que se pueden utilizar comandos específicos del tema Búsquedas, como `QUERY BY ATTRIBUTE`, `QUERY SELECTION BY ATTRIBUTE`, o `ORDER BY ATTRIBUTE` para llevar a cabo el procesamiento de los campos objetos.

Cada valor de propiedad al que se accede a través de la notación de objeto se considera una expresión. Cuando la notación de objetos está activada en su base (ver más abajo), puede utilizar estos valores siempre que se esperen expresiones 4D:

- en código 4D, ya sea escrito en los métodos (editor de métodos) o externalizado (fórmulas, archivos de etiquetas procesados por PROCESS 4D TAGS o el servidor web, archivos de exportación, documentos 4D Write Pro...),
- in the Expression areas of the Debugger and the Runtime explorer,
- in the Property list of the Form editor for form objects: Variable or Expression field as well as various selection list box and columns expressions (Data Source, background color, style, or font color).

## Initialization

Los objetos deben haber sido inicializados, por ejemplo utilizando el comando `New object`, de lo contrario al intentar leer o modificar sus propiedades se generará un error de sintaxis.

Example:
```4d
 C_OBJECT($obVar) //creation of an object type 4D variable
 $obVar:=New object //initialization of the object and assignment to the 4D variable
```

### Regular or shared object

Puede crear dos tipos de objetos:

- regular (non-shared) objects, using the `New object` command. These objects can be edited without any specific access control but cannot be shared between processes.
- shared objects, using the `New shared object` command. These objects can be shared between processes, including preemptive threads. Access to these objects is controlled by `Use...End use` structures. For more information, refer to the [Shared objects and collections](Concepts/shared.md) section.


## Syntax basics

La notación de objetos puede utilizarse para acceder a los valores de las propiedades de objetos a través de una cadena de tokens.

### Object properties

Con la notación de objetos, se puede acceder a las propiedades de los objetos de dos maneras:

- using a "dot" symbol: > object.propertyName

Example:
```4d
     employee.name:="Smith"
```

- using a string within square brackets: > object["propertyName"]

Examples:
```4d
     $vName:=employee["name"]
     //or also:
     $property:="name"
     $vName:=employee[$property]

```

Since an object property value can be an object or a collection, object notation accepts a sequence of symbols to access sub-properties, for example:
```4d
 $vAge:=employee.children[2].age
```
La notación de objetos está disponible en cualquier elemento del lenguaje que pueda contener o devolver un objeto, es decir:

- **Objects** themselves (stored in variables, fields, object properties, object arrays, or collection elements). Examples:

```4d
     $age:=$myObjVar.employee.age //variable
     $addr:=[Emp]data_obj.address //field
     $city:=$addr.city //property of an object
     $pop:=$aObjCountries{2}.population //object array
     $val:=$myCollection[3].subvalue //collection element
```
- **4D commands** that return objects. Example:

```4d
     $measures:=Get database measures.DB.tables
```

- **Project methods** that return objects. Example:

```4d
      // MyMethod1
     C_OBJECT($0)
     $0:=New object("a";10;"b";20)

      //myMethod2
     $result:=MyMethod1.a //10
```

- **Collections** Example:

```4d
     myColl.length //size of the collection
```

### Pointers
**Nota preliminar:** dado que los objetos se pasan siempre por referencia, no suele ser necesario utilizar punteros. Al pasar el objeto, internamente 4D utiliza automáticamente un mecanismo similar a un puntero, minimizando la necesidad de memoria y permitiendo modificar el parámetro y devolver las modificaciones. Como resultado, no es necesario utilizar punteros. Sin embargo, en caso de querer utilizar punteros, se puede acceder a los valores de las propiedades mediante punteros.

El uso de la notación de objetos con punteros es muy similar al uso de la notación de objetos directamente con objetos, excepto que el símbolo "punto" debe omitirse.

- Direct access:
> pointerOnObject->propertyName

- Access by name:
> pointerOnObject->["propertyName"]

Example:

```4d
 C_OBJECT(vObj)
 C_POINTER(vPtr)
 vObj:=New object
 vObj.a:=10
 vPtr:=->vObj
 x:=vPtr->a //x=10
```

### Null value

Cuando se utiliza la notación de objetos, se soporta el valor **null** con el comando **Null**. Este comando puede utilizarse para asignar o comparar el valor nulo a propiedades de objetos o a elementos de colecciones, por ejemplo:

```4d
 myObject.address.zip:=Null
 If(myColl[2]=Null)
```

Para más información, consulte la descripción del comando `Null`.

### Undefined value

La evaluación de una propiedad de un objeto puede producir a veces un valor indefinido. Normalmente, al intentar leer o asignar expresiones indefinidas, 4D generará errores. Esto no ocurre en los siguientes casos:

- La lectura de una propiedad de un objeto o valor indefinido devuelve un indefinido; la asignación de un valor indefinido a variables (excepto arrays) tiene el mismo efecto que llamar con ellas:

```4d
     C_OBJECT($o)
     C_LONGINT($val)
     $val:=10 //$val=10
     $val:=$o.a //$o.a is undefined (no error), and assigning this value clears the variable
      //$val=0
```

- Reading the **length** property of an undefined collection produces 0:

```4d
     C_COLLECTION($c) //variable created but no collection is defined
     $size:=$c.length //$size = 0
```

- An undefined value passed as parameter to a project method is automatically converted to 0 or "" according to the declared parameter type.

```4d
     C_OBJECT($o)
     mymethod($o.a) //pass an undefined parameter

      //In mymethod method
     C_TEXT($1) //parameter type is text
      // $1 contains ""
```

- A condition expression is automatically converted to false when evaluating to undefined with the If and Case of keywords:

```4d
     C_OBJECT($o)
     If($o.a) // false
     End if
     Case of
        :($o.a) // false
     End case
```

- Assigning an undefined value to an existing object property reinitializes or clears its value, depending on its type:
 - Object, collection, pointer: Null
 - Picture: Empty picture
 - Boolean: False
 - String: ""
 - Number: 0
 - Date: !00-00-00! if "Use date type instead of ISO date format in objects" setting is enabled, otherwise ""
 - Time: 0 (number of ms)
 - Undefined, Null: no change

```4d
     C_OBJECT($o)
     $o:=New object("a";2)
     $o.a:=$o.b //$o.a=0
```

- Assigning an undefined value to a non existing object property does nothing.

Cuando se esperan expresiones de un tipo determinado en su código 4D, puede asegurarse de que tienen el tipo correcto incluso cuando se evalúan como indefinidas, rodeándolas con el comando de transformación 4D apropiado: `String`, `Num`, `Date`, `Time`, `Bool`. Estos comandos devuelven un valor vacío del tipo especificado cuando la expresión se evalúa como indefinida. For example:

```4d
 $myString:=Lowercase(String($o.a.b)) //make sure you get a string value even if undefined
  //to avoid errors in the code
```

## Identificadores de propiedades de objetos

Las reglas de nombres de los tokens (es decir, los nombres de las propiedades de los objetos a los que se accede utilizando la notación de objeto) son más restrictivos que los nombres de los objetos estándar 4D. Deben cumplir con la gramática de los identificadores JavaScript ( ver [Estándar ECMA Script](https://www.ecma-international.org/ecma-262/5.1/#sec-7.6)):

- el primer carácter debe ser una letra, un guión bajo (_) o un signo de dólar ($),
- los caracteres subsiguientes pueden ser cualquier letra, dígito, un guión bajo o un signo de dólar (los caracteres de espacio NO están permitidos),
- son sensibles a las mayúsculas y minúsculas.

**Nota:**

- La utilización de un campo como índice de colección, por ejemplo a.b[[Table1]Id], no está permitida. Debe utilizar una variable intermedia.
- La creación de atributos de objetos mediante una cadena entre corchetes permite anular las reglas de ECMA Script. Por ejemplo, el atributo $o["My Att"] es válido en 4D, a pesar del espacio. En este caso, sin embargo, no será posible utilizar la notación de puntos con este atributo.


## Examples
La utilización de la notación de objetos simplifica el código 4D en el manejo de los mismos. Sin embargo, tenga en cuenta que la notación basada en comandos sigue siendo totalmente soportada.

- Escritura y lectura de propiedades de objetos (este ejemplo compara la notación de objetos y la notación de comandos):

```4d
  // Using the object notation
 C_OBJECT($myObj) //declares a 4D variable object
 $myObj:=New object //creates an object and assigns to the variable
 $myObj.age:=56
 $age:=$myObj.age //56

  // Using the command notation
 C_OBJECT($myObj2) //declares a 4D variable object
 OB SET($myObj2;"age";42) //creates an object and adds the age property
 $age:=OB Get($myObj2;"age") //42

  // Of course, both notations can be mixed
 C_OBJECT($myObj3)
 OB SET($myObj3;"age";10)
 $age:=$myObj3.age //10
```

- Creación de propiedades y asignación de valores, incluyendo objetos:

```4d
 C_OBJECT($Emp)
 $Emp:=New object
 $Emp.city:="London" //creates the city property and sets its value to "London"
 $Emp.city:="Paris" //modifies the city property
 $Emp.phone:=New object("office";"123456789";"home";"0011223344")
  //creates the phone property and sets its value to an object
```

- Obtener un valor en un subobjeto es muy sencillo utilizando la notación de objetos:

```4d
 $vCity:=$Emp.city //"Paris"
 $vPhone:=$Emp.phone.home //"0011223344"
```
- Puede acceder a las propiedades como cadenas utilizando el operador [ ]

```4d
 $Emp["city"]:="Berlin" //modifies the city property
  //this can be useful for creating properties through variables
 C_TEXT($addr)
 $addr:="address"
 For($i;1;4)
    $Emp[$addr+String($i)]:=""
 End for
  // creates 4 empty properties "address1...address4" in the $Emp object
```
