---
id: classes
title: Clases
---

## Generalidades

El lenguaje 4D soporta el concepto de **clases**. En un lenguaje de programación, el uso de una clase permite definir el comportamiento de un objeto con propiedades y funciones asociadas.

Una vez definida una clase usuario, puede <strong x-id="1">instanciar</strong> los objetos de esta clase en cualquier parte de su código. Una vez definida una clase usuario, puede <strong x-id="1">instanciar</strong> los objetos de esta clase en cualquier parte de su código. Una clase puede [`extend`](#class-extends-classname) otra clase, y luego hereda sus [funciones](#function) y propiedades ([declaradas](#property) y [calculadas](#function-get-and-function-set)).

> El modelo de clases en 4D es similar al de las clases en JavaScript, y se basa en una cadena de prototipos.

Por ejemplo, puede crear una clase `Person` con la siguiente definición:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function sayHello() -> $welcome : Text

 $welcome:="Hello "+This.fullName
```

En un método, creando una "Persona":

```4d
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
```

Class files are managed through the 4D Explorer (see [Creating classes](../Project/code-overview.md#creating-classes)).

#### Borrar una clase

Para eliminar una clase existente, selecciónela en el Explorador y haga clic en ![](../assets/en/Users/MinussNew.png) o elija **Mover a la Papelera** en el menú contextual.

También puede eliminar el archivo de clase .4dm de la carpeta "Classes" de su disco.

## Class stores

Las clases disponibles son accesibles desde sus class stores. Hay dos class stores disponibles:

- [`cs`](../commands/cs) para las clases de usuario y las class stores de los componentes
- [`4D`](../commands/4d) para las clases integradas

#### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->

<!-- REF #_command_.cs.Params -->

<div class="no-index">

| Parámetros | Tipo                                                       |                             | Descripción                                       |
| ---------- | ---------------------------------------------------------- | --------------------------- | ------------------------------------------------- |
| classStore | [4D.ClassStore](../API/ClassStoreClass.md) | &#8592; | Class store usuario para el proyecto o componente |

</div>
<!-- END REF -->

El comando `cs` <!-- REF #_command_.cs.Summary -->devuelve el almacén de clases de usuario para el proyecto o componente actual<!-- END REF -->. Devuelve todas las clases de usuario [definidas](../Project/code-overview.md#creating-classes) en el proyecto o componente abierto. Por defecto, sólo las [clases ORDA](ORDA/ordaClasses.md) están disponibles.

#### Ejemplo

Quiere crear una nueva instancia de un objeto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

#### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->

<div class="no-index">

| Parámetros | Tipo                                                       |                             | Descripción    |
| ---------- | ---------------------------------------------------------- | --------------------------- | -------------- |
| classStore | [4D.ClassStore](../API/ClassStoreClass.md) | &#8592; | Class store 4D |

</div>
<!-- END REF -->

El comando `4D` <!-- REF #_command_.4D.Summary -->devuelve el almacén de clases para las clases 4D integradas<!-- END REF -->. Ofrece acceso a las APIs específicas como [CryptoKey](API/CryptoKeyClass.md).

#### Ejemplos

Quiere crear una nueva llave en la clase `CryptoKey`:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

Quiere listar las clases integradas en 4D:

```4d
 var $keys : Collection
 $keys:=OB Keys(4D)
 ALERT("There are "+String($keys.length)+" built-in classes.")
```

## El objeto clase

Cuando una clase es [definida](#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto de la [clase "Class"](API/ClassClass.md). Un objeto clase tiene las siguientes propiedades y funciones:

- cadena [`name`](API/ClassClass.md#name)
- objeto [`superclass`](API/ClassClass.md#superclass) (null si no hay)
- función [`new()`](API/ClassClass.md#new), que permite instanciar objetos de clase
- propiedad [`isShared`](API/ClassClass.md#isshared), true si la clase es [compartida](#clases-compartidas)
- propiedad [`isSingleton`](API/ClassClass.md#issingleton), verdadero si la clase define una [clase singleton](#singleton-classes).
- propiedad [`isSectionSingleton`](API/ClassClass.md#issectionsingleton), true si la clase define un [sesión singleton](#singleton-classes).
- Propiedad [`me`](API/ClassClass.md#me), que permite instanciar y acceder a [singletons](#singleton-classes).

Además, un objeto clase puede hacer referencia a un objeto [`constructor`](#class-constructor) (opcional).

Un objeto de clase en sí mismo es un [objeto compartido](shared.md) y, por tanto, se puede acceder a él desde diferentes procesos de 4D simultáneamente.

### Herencia

Si una clase hereda de otra clase (es decir, se utiliza la palabra clave [Class extends](classes.md#class-extends-classname) en su definición), la clase padre es su [`superclass`](API/ClassClass.md#superclass).

Cuando 4D no encuentra una función o una propiedad en una clase, la busca en su [`superclass`](API/ClassClass.md#superclass); si no la encuentra, 4D sigue buscando en la superclase de la superclase, y así sucesivamente hasta que no haya más superclase (todos los objetos heredan de la superclase "Object").

## Palabras clave de clase

En las definiciones de clase se pueden utilizar palabras claves específicas de 4D:

- `Function <Name>` para definir las funciones de clase de los objetos.
- `Class constructor` para inicializar nuevos objetos de la clase.
- `property` para definir propiedades estáticas de los objetos con un tipo.
- `Function get <Name>` y `Function set <Name>` para definir las propiedades calculadas de los objetos.
- `Class extends <ClassName>` para definir la herencia.
- `This` y `Super` son comandos que tienen funcionalidades especiales dentro de clases.

### `Function`

#### Sintaxis

```4d
{local | server} {shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// código
```

:::note

No hay palabra clave final para el código de una función. El lenguaje 4D detecta automáticamente el final del código de una función por la siguiente palabra clave `Function` o el final del archivo de clase.

:::

Las funciones de clase son propiedades específicas de la clase. Son objetos de la clase [4D.Function](API/FunctionClass.md). En el archivo de definición de clase, las declaraciones de función utilizan la palabra clave `Function` seguida del nombre de la función.

Si las funciones se declaran en una [clase compartida](#shared-class-constructor), puede utilizar la palabra clave `shared` con ellas para que puedan ser llamadas sin la estructura [`Use...End use`](shared.md#useend-use). Para obtener más información, consulte el párrafo [Funciones compartidas](#shared-functions) a continuación.

En el contexto de una aplicación cliente/servidor, la palabra clave `local` o `server` permite especificar en qué máquina debe ejecutarse la función. Estas palabras claves sólo pueden utilizarse con las funciones del modelo de datos ORDA y las funciones singleton compartidas/sesión. Para más información, consulte el párrafo [funciones locales y de servidor](#local-and-server) más abajo.

El nombre de la función debe ser compatible con las [reglas de nomenclatura de objetos](Concepts/identifiers.md#object-properties).

:::note

Dado que las propiedades y las funciones comparten el mismo espacio de nombres, no está permitido utilizar el mismo nombre para una propiedad y una función de la misma clase (en este caso se produce un error).

:::

:::tip

Comenzar el nombre de la función con un caracter guión bajo ("_") excluirá la función de las funcionalidades de autocompletado en el editor de código 4D. Por ejemplo, si declara `Function _myPrivateFunction` en `MyClass`, no se propondrá en el editor de código cuando digite en `"cs.MyClass. "`.

:::

Inmediatamente después del nombre de la función, los [parámetros](#parameters) de la función se pueden declarar con un nombre y un tipo de datos asignados, incluido el parámetro de retorno (opcional). Por ejemplo:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

En una función de clase, el comando `This` se utiliza como instancia del objeto. Por ejemplo:

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

Para una función clase, el comando `Current method name` devuelve: `<ClassName>.<FunctionName>`, por ejemplo "MyClass.myFunction".

En el código de la aplicación, las funciones de clases se llaman como los métodos miembros de las instancias de objetos y pueden recibir [parámetros](#parameters) si los hay. Se soportan las siguientes sintaxis:

- uso del operador `()`. Por ejemplo, `myObject.methodName("hello")`
- utilización de un método miembro de la clase "4D.Function":
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Aviso de seguridad del hilo

Si una función de clase no es hilo seguro y es llamada por un método con el atributo "Puede ejecutarse en proceso apropiativo":

- el compilador no genera ningún error (lo que es diferente en comparación con los métodos regulares),
- un error es lanzado por 4D sólo en tiempo de ejecución.

:::

#### Parámetros

Los parámetros de las funciones se declaran utilizando el nombre del parámetro y su tipo, separados por dos puntos. El nombre del parámetro debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties). Múltiples parámetros (y tipos) están separados por punto y coma (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

Si no se declaró el tipo, el parámetro se definirá como `Variant`.

:::

#### Valor devuelto

Se declara el parámetro de retorno (opcional) añadiendo una flecha (`->`) y la definición del parámetro de retorno después de la lista de parámetros de entrada, o dos puntos (`:`) y el tipo de parámetro de retorno únicamente. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

También puedes declarar el parámetro de retorno añadiendo sólo `: type` y utilizar la [`expresión return`](parameters.md#return-expression) (también terminará la ejecución de la función). Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
 // algo de código
 return $x+$y
```

#### Ejemplo 1

```4d
property name : Text
property height; width : Integer

// Clase: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Definición de función
Function getArea()->$result : Integer
 $result:=(This.height)*(This.width)
```

```4d
// En un método proyecto

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

#### Ejemplo 2

Este ejemplo utiliza la [`expresión return`](parameters.md#return-expression):

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Class constructor`

#### Sintaxis

```4d
// Class: MyClass
{shared} {{session} singleton} Class constructor({$parameterName : type; ...})
// código
```

:::note

No hay palabra clave final para el código de función class constructor. El lenguaje 4D detecta automáticamente el final del código de una función por la siguiente palabra clave `Function` o el final del archivo de clase.

:::

Una función constructora de clase acepta [parámetros](#parameters) opcionales y puede ser utilizada para crear e inicializar objetos de la clase del usuario.

Cuando llama a la función [`new()`](API/ClassClass.md#new), el constructor de clase es llamado con los parámetros opcionalmente pasados a la función `new()`.

Sólo puede haber una función constructora en una clase (de lo contrario se devuelve un error). El comando [`Super`](../commands/super.md) permite realizar llamadas a [`superclass`](../API/ClassClass#superclass), es decir, a la clase padre de la función.

Puede crear y escribir propiedades de instancia dentro del constructor (ver ejemplo). Alternativamente, si los valores de las propiedades de instancia no dependen de los parámetros pasados al constructor, puede definirlos utilizando la palabra clave [`property`](#property).

Utilizando la palabra clave `shared` se crea una **clase compartida**, utilizada para instanciar únicamente objetos compartidos. Para obtener más información, consulte el párrafo [Clases compartidas](#shared-classes).

Utilizando la palabra clave `singleton` se crea un **singleton**, utilizado para crear una sola instancia de la sesión. Un `session singleton` crea una sola instancia por sesión. Para obtener más información, consulte el párrafo [Clases singleton](#singleton-classes).

:::note

Las [clases de entidad ORDA](../ORDA/ordaClasses.md#entity-class) también pueden beneficiarse de una función `Class constructor`. La implementación es similar a la de las clases normales pero [con algunas diferencias](../ORDA/ordaClasses.md#class-constructor-1).

:::

#### Ejemplo

```4d
// Class: MyClass
// Class constructor of MyClass
Class constructor ($name : Text ; $age : Integer)
 This.name:=$name
 This.age:=$age
```

```4d
// En un método proyecto
// Se puede instanciar un objeto
var $o : cs.MyClass
$o:=cs.MyClass.new("John";42)  
// $o = {"name":"John";"age":42}
```

### `propiedad`

#### Sintaxis

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

La palabra clave`property` se puede utilizar para declarar una propiedad dentro de una clase usuario. Una propiedad de clase tiene un nombre y un tipo.

La declaración de propiedades de clase mejora las sugerencias del editor de código, las funciones de tecleo predictivo y la detección de errores.

Las propiedades se declaran para nuevos objetos cuando llama a [`new()`](API/ClassClass.md#new), sin embargo, no se añaden automáticamente a los objetos (sólo se añaden cuando se les asigna un valor).

:::note

Una propiedad se añade automáticamente al objeto cuando se [inicializa en la línea de declaración](#initializing-the-property-in-the-declaration-line).

:::

Los nombres de las propiedades deben cumplir [las normas de denominación de propiedades](Concepts/identifiers.md#object-properties).

:::note

Dado que las propiedades y las funciones comparten el mismo espacio de nombres, no está permitido utilizar el mismo nombre para una propiedad y una función de la misma clase (en este caso se produce un error).

:::

El tipo de propiedad puede ser uno de los siguientes tipos soportados:

| propertyType                 | Contenido                                                                   |
| ---------------------------- | --------------------------------------------------------------------------- |
| `Text`                       | Valor texto                                                                 |
| `Date`                       | Valor fecha                                                                 |
| `Time`                       | Valor Hora                                                                  |
| `Boolean`                    | Valor booleano                                                              |
| `Integer`                    | Valor entero largo                                                          |
| `Real`                       | Valor real                                                                  |
| `Pointer`                    | Valor puntero                                                               |
| `Picture`                    | Valor imagen                                                                |
| `Blob`                       | Valeor Blob escalar                                                         |
| `Collection`                 | Valor colección                                                             |
| `Variant`                    | Valor variant                                                               |
| `Object`                     | Objeto con clase por defecto (4D.object) |
| `4D.<className>`             | Objeto del nombre de la clase 4D                                            |
| `cs.<className>`             | Objeto del nombre de la clase usuario                                       |
| `cs.<namespace>.<className>` | Objeto del componente `<namespace>` nombre de la clase                      |

Si omite el tipo en la línea de declaración, la propiedad se crea como una variante.

:::info

La palabra clave `property` sólo puede utilizarse en métodos clase y fuera de cualquier bloque `Function` o `Class constructor`.

:::

#### Inicialización de la propiedad en la línea de declaración

Al declarar una propiedad, tiene la flexibilidad de especificar su tipo de datos y proporcionar su valor en una sola declaración. La sintaxis soportada es:

`property <propertyName> { : <propertyType>} := <Propertyvalue>`

:::note

Cuando se utiliza esta sintaxis, no se pueden declarar varias propiedades en la línea de declaración.

:::

Puede omitir el tipo en la línea de declaración, en cuyo caso el tipo se deducirá cuando sea posible. Por ejemplo:

```4d
// Class: MyClass

property name : Text := "Smith"
property age : Integer := 42

property birthDate := !1988-09-29! //se deduce la fecha
property fuzzy //variant
```

Cuando inicializa una propiedad en su línea de declaración, se agrega al objeto de la clase después de su instanciación con la función [`new()`](API/ClassClass.md#new) pero antes de llamar al constructor.

Si una clase [extiende a](#class-extends-classname) otra, las propiedades de la clase padre se instancian antes que las propiedades de la clase hija.

:::note

Si inicializa una propiedad en su línea de declaración con un objeto o una colección en una [clase compartida](#clases-compartidas), el valor se transforma automáticamente en un valor compartido:

```4d
// en una clase compartida
property myCollection := ["something"]
// myCollection será una colección compartida
// equivalente a:
myCollection := New shared collection("something")
```

:::

#### Ejemplo

```4d
// Clase: MyClass

property name : Text
property age : Integer
property color : Text := "Blue"
```

En un método:

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{"color" : "Blue"}
$o.name:="Juan" //$o:{"color" : "Azul"; "name" : "John"}
$o.age:="Smith" //error con la sintaxis de verificación
```

### `Function get` y `Function set`

#### Sintaxis

```4d
{local | server} {shared} Function get <name>()->$result : type
// código
```

```4d
{local | server} {shared} Function set <name>($parameterName : type)
// code
```

`Function get` y `Function set` son accesos que definen las **propiedades calculadas** en la clase. Una propiedad calculada es una propiedad nombradas con un tipo de datos que enmascara un cálculo. Cuando se accede a un valor de propiedad calculado, 4D sustituye el código del accesor correspondiente:

- cuando se lee la propiedad, `Function get` se ejecuta,
- cuando se escribe la propiedad, `Function get` se ejecuta.

Si no se accede a la propiedad, el código nunca se ejecuta.

:::note

Las [clases de entidad ORDA](../ORDA/ordaClasses.md#entity-class) se benefician de una implementación extendida de propiedades computadas con [dos funciones adicionales](../ORDA/ordaClasses.md#computed-attributes-1): `query` y `orderBy`.

:::

Las propiedades calculadas están diseñadas para manejar datos que no necesitan ser guardados en memoria. Generalmente se basan en propiedades persistentes. Por ejemplo, si un objeto de clase contiene como propiedad persistente el *precio bruto* y el *tipo de IVA*, El *precio neto* podría ser manejado por una propiedad calculada.

En el archivo de definición de la clase, las declaraciones de propiedades calculadas utilizan las palabras claves `Function get` (*getter*) y `Function set` (*setter*) seguido por el nombre de la propiedad. El nombre debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties).

`Función get` devuelve un valor del tipo de la propiedad y `Function set` toma un parámetro del tipo de la propiedad. Ambos argumentos deben cumplir con los [parámetros de función](#parameters) estándar.

Cuando ambas funciones están definidas, la propiedad calculada es **read-write**. Si solo se define una `Function get`, la propiedad calculada es **de solo lectura**. En este caso, se devuelve un error si el código intenta modificar la propiedad. En este caso, se devuelve un error si el código intenta modificar la propiedad.

Si las funciones se declaran en una [clase compartida](#shared-classes), puede utilizar la palabra clave `shared` con ellas para que puedan ser llamadas sin la estructura [`Use...End use`](shared.md#useend-use). Para obtener más información, consulte el párrafo [Funciones compartidas](#shared-functions) a continuación.

En el contexto de una aplicación cliente/servidor, la palabra clave `local` o `server` permite especificar en qué máquina debe ejecutarse la función. Estas palabras claves sólo pueden utilizarse con las funciones del modelo de datos ORDA y las funciones singleton compartidas/sesión. Para más información, consulte el párrafo [funciones locales y de servidor](#local-and-server) más abajo.

El tipo de la propiedad calculada es definido por la declaración de tipo `$return` del \*getter \*. Puede ser de cualquier [tipo de propiedad válido](dt_object.md).

> Asignar *undefined* a una propiedad de objeto limpia su valor mientras se preserva su tipo. Para ello, la `Function get` es llamada primero para recuperar el tipo de valor, luego `Function set` es llamado con un valor vacío de ese tipo.

:::note

Las clases de entidad ORDA también pueden beneficiarse de una función `Class constructor`. La implementación es similar a la de las clases normales pero [con algunas diferencias](../ORDA/ordaClasses.md#class-constructor-1).

:::

#### Ejemplo 1

```4d
//Clase: Person.4dm
property firstName; lastName : Text

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
```

```4d
//en un método proyecto
$fullName:=$person.fullName // Function get fullName() is called
$person.fullName:="John Smith" // Function set fullName() is called
```

#### Ejemplo 2

```4d
Function get fullAddress()->$result : Object

 $result:=New object

 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country
```

### `Class extends <ClassName>`

#### Sintaxis

```4d
// Class hijo
Class extends <ParentClass>
```

La palabra clave `Class extends` se utiliza en la declaración de clase para crear una clase usuario que es hijo de otra clase usuario. La clase hijo hereda todas las funciones de la clase padre.

La extensión de clase debe respetar las siguientes reglas:

- Una clase de usuario no puede extender una clase integrada (excepto las 4D.Object y [clases ORDA](../ORDA/ordaClasses.md) que se extienden por defecto para las clases de usuario).
- Una clase usuario no puede extender una clase usuario de otro proyecto o componente.
- Una clase usuario no puede extenderse a sí misma.
- No es posible extender las clases de una manera circular (es decir, "a" extiende "b" que extiende "a").
- No es posible definir una [clase usuario compartida](#shared-classes) extendida a partir de una clase usuario no compartida.

La ruptura de tal regla no es detectada por el editor de código o el intérprete, solo el compilador y `comprobar sintaxis` arrojará un error en este caso.

Una clase extendida puede llamar al constructor de su clase padre utilizando el comando [`Super`](#super).

#### Ejemplo

Este ejemplo crea una clase llamada `Square` de una clase llamada `Polygon`.

```4d
//Clase: Square

//ruta: Classes/Square.4dm

Class extends Polygon

Class constructor ($side : Integer)

Llama al constructor de la clase padre con las longitudes
 // suministradas para el ancho y alto del polígono
 Super($side;$side)
 // En las clases derivadas, Super debe ser llamado antes de 
 // utilizar 'This'
 This.name:="Square"



  Function getArea() -> $area : Integer
  $area:=This.height*This.width
```

## Comandos de función clase

Los siguientes comandos tienen características específicas cuando se utilizan dentro de las funciones clase:

### `Super`

El comando [`Super`](../commands/super) permite realizar llamadas a [`superclass`](../API/ClassClass#superclass), es decir, a la clase padre de la función. Sólo puede haber una función constructora en una clase (de lo contrario se devuelve un error).

Para más detalles, vea la descripción del comando [`Super`](../commands/super).

### `This`

El comando [`This`](../commands/this) devuelve una referencia al objeto procesado actualmente. En la mayoría de los casos, el valor de `This` está determinado por cómo se llama una función clase. Normalmente, `This` se refiere al objeto al que la función fue llamada, como si la función estuviera sobre el objeto.

Ejemplo:

```4d
//Clase: ob

Function f() : Integer
 return This.a+This.b
```

A continuación, puede escribir en un método:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

Para más detalles, vea la descripción del comando [`This`](../commands/this).

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` devuelve la clase del objeto pasado como parámetro.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` devuelve `true` si `object` pertenece a la `class` o a una de las clases heredadas y `false` de lo contrario.

## Clases compartidas

Puede crear **clases compartidas**. Una clase compartida es una clase usuario que instancia un [objeto compartido](shared.md) cuando se llama a la función [`new()`](../API/ClassClass.md#new) en la clase. Una clase compartida sólo puede crear objetos compartidos.

Las clases compartidas también admiten **funciones compartidas** que pueden llamarse sin estructuras [`Use...End use`](shared.md#useend-use).

La propiedad [`.isShared`](../API/ClassClass.md#isshared) de los objetos de la Clase permite saber si la clase está compartida.

:::info

- Una clase [que hereda](#class-extends-classname) de una clase no compartida no puede definirse como compartida.
- Las clases compartidas no están soportadas por las [clases basadas en ORDA](../ORDA/ordaClasses.md).

:::

### Creación de una clase compartida

Para crear una clase compartida, añada la palabra clave `shared` antes del [Class constructor](#class-constructor). Por ejemplo:

```4d
	//shared class: Person
shared Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

```

```4d
//myMethod
var $person := cs.Person.new("John"; "Smith")
OB Is shared($person) // true
cs.Person.isShared //true
```

### Funciones compartidas

Si una función definida al interior de una clase compartida modifica objetos de la clase, debería llamar a la estructura [`Use...End use`](shared.md#useend-use) para proteger el acceso a los objetos compartidos. Sin embargo, para simplificar el código, puede definir la función como **compartida**, de modo que active automáticamente un `Use...End use` interno cuando se ejecute.

Para crear una función compartida, añada la palabra clave `shared` antes de la palabra clave [Function](#function) en una clase compartida. Por ejemplo:

```4d
//clase compartida Foo
shared Class constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //no es necesario llamar use/end use
```

:::note

Si se utiliza la palabra clave `shared` en una clase usuario no compartida, se ignora.

:::

## Clases Singleton

Una **clase singleton** es una clase usuario que sólo produce una única instancia. Para más información sobre el concepto de singletons, por favor consulte la [página Wikipedia sobre los singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

### Tipos de Singletons

Los singletons son útiles para definir los valores que necesitan estar disponibles desde cualquier parte de una aplicación, una sesión o un proceso.

4D soporta tres tipos de singletons:

- un **singleton proceso** tiene una instancia única para el proceso en el que se instancia,
- un **singleton compartido** tiene una instancia única para todos los procesos en la máquina.
- un **singleton de sesión** es un singleton compartido pero con una instancia única para todos los procesos en la [sesión](../API/SessionClass.md). Los singletons de sesión son compartidos dentro de una sesión completa, pero varían entre sesiones. En el contexto de un cliente-servidor o una aplicación web, los singletons de sesión hacen posible crear y utilizar una instancia diferente para cada sesión, y por lo tanto para cada usuario. Los singletons de sesión son particularmente apropiados con [aplicaciones Qodly](https://developer.4d.com/qodly/).

:::info

Las clases Singleton no están soportadas por las [clases ORDA](../ORDA/ordaClasses.md).

:::

La siguiente tabla indica el alcance de una instancia singleton dependiendo de donde se creó:

| Singleton creado en | Alcance del proceso singleton                                                                                   | Alcance del singleton compartido | Alcance del singleton de sesión                                                |
| ------------------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------ |
| **4D monopuesto**   | Proceso                                                                                                         | Aplicación                       | Aplicación o sesión Web/REST                                                   |
| **4D Server**       | Proceso                                                                                                         | Máquina 4D Server                | Sesión cliente/servidor o sesión Web/REST o sesión de procedimiento almacenado |
| **Modo remoto 4D**  | Proceso (*nota*: los singletons no están sincronizados en el proceso gemelo) | Máquina remota 4D                | Máquina remota 4D o sesión Web/REST                                            |

Una vez instanciado, existe una clase singleton (y su singleton) siempre que exista una referencia a ella en algún lugar de la aplicación que se ejecuta en la máquina.

### Crear y utilizar singletons

Se declaran clases singleton añadiendo la(s) palabra(s) clave(s) apropiada(s) antes del [`Class constructor`](#class-constructor):

- Para declarar una clase singleton (proceso), escriba `singleton Class constructor()`.
- Para declarar una clase singleton compartida, escribe `shared singleton Class constructor()`.
- Para declarar una clase singleton de sesión, escriba `session singleton Class constructor()`.

:::note

- Los singletons de sesión son automáticamente singletons compartidos (no hay necesidad de usar la palabra clave `shared` en el constructor de clases).
- Las funciones compartidas Singleton soportan [palabra clave `onHTTPGet`](../ORDA/ordaClasses.md#onhttpget-keyword).

:::

La clase singleton está instanciada en la primera llamada de la propiedad [`cs.<class>.me`](../API/ClassClass.md#me). El singleton instanciado de la clase se devuelve siempre cuando se utiliza la propiedad [`me`](../API/ClassClass.md#me).

Si necesita instanciar un singleton con parámetros, también puede llamar la función [`new()`](../API/ClassClass.md#new). En este caso, se recomienda instanciar el singleton en algún código ejecutado al inicio de la aplicación.

La propiedad [`isSingleton`](../API/ClassClass.md#issingleton) de los objetos Clase permite saber si la clase es un singleton.

La propiedad [`.isSessionSingleton`](../API/ClassClass.md#issessionsingleton) de los objetos Class permite saber si la clase es un singleton de sesión.

### Funciones singleton expuestas

Las funciones singleton compartidas y de sesión soportan la [palabra clave `exposed`](../ORDA/ordaClasses.md#exposed-vs-non-exposed-functions). Una función singleton expuesta puede ser llamada directamente por peticiones REST. Esta función es útil para diseñar [páginas Qodly que llamen a las funciones 4D](https://developer.4d.com/qodly/4DQodlyPro/pageLoaders/events/bindingActionToEvents#class-functions).

### Ejemplos

#### Singleton Proceso

```4d
	//class: ProcessTag
singleton Class constructor()
 This.tag:=Random
```

Para utilizar el singleton:

```4d
	//en otro proceso
var $mySingleton := cs.ProcessTag.me //Primera instanciación
	//$mySingleton.tag = 5425 por ejemplo  
...  
var $myOtherSingleton := cs.ProcessTag.me
	//$myOtherSingleton.tag = 5425

```

```4d
	//en otro proceso
var $mySingleton := cs.ProcessTag.me //Primera instanciación
	//$mySingleton.tag = 14856 por ejemplo  
...  
var $myOtherSingleton := cs.ProcessTag.me  
	//$myOtherSingleton.tag = 14856
```

#### Singleton compartido

```4d
//Class VehicleFactory

property vehicleBuilt : Integer

shared singleton Class constructor()
  This.vehicleBuilt := 0 //Número de vehículos construidos por la fábrica

shared Function buildVehicle ($type : Text) -> $vehicle : cs.Vehicle

  Case of
    : $type="car"
      $vehicle:=cs.Car.new()
    : $type="truck"
      $vehicle:=cs.Truck.new()
    : $type="sport car"
      $vehicle:=cs.SportCar.new()
    : $type="motorbike"
      $vehicle:=cs.Motorbike.new()
  Else
    $vehicle:=cs.Car.new()
  End case
  This.vehicleBuilt+=1
```

Luego puede llamar al singleton **cs.VehicleFactory** para obtener un nuevo vehículo desde cualquier lugar de la aplicación en su máquina con una sola línea:

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("truck")
```

Dado que la función *buildVehicle()* modifica el singleton **cs.VehicleFactory** (incrementando `This.vehicleBuilt`), debe agregar la palabra clave `shared`.

#### Singleton de sesión

En una aplicación de inventario, desea implementar un inventario de artículos utilizando singletons de sesión.

```4d
//class ItemInventory

property itemList : Collection:=[]

session singleton Class constructor()

shared function addItem($item:object)
    This.itemList.push($item)
```

Al definir la clase ItemInventory como un singleton de sesión, asegúrese de que cada sesión y por lo tanto cada usuario tiene su propio inventario. Acceder al inventario del usuario es tan simple como:

```4d
//en una sesión usuario
$myList := cs.ItemInventory.me.itemList
//lista de elemento del usuario actual

```

:::tip Entradas de blog relacionadas

[Singletons en 4D](https://blog.4d.com/singletons-in-4d)  
[Presentación de los Singletons de sesión](https://blog.4d.com/introducing-session-singletons)

:::

## `local` y `server`

In [client/server architecture](../Desktop/clientServer.md), `local` and `server` keywords allow you to specify where you want the function to be executed: client-side, or server-side. Controlar la ubicación de ejecución es útil por razones de rendimiento o para implementar características de lógica de negocio.

La sintaxis formal es:

```4d
// declare a function to execute on a client in client/server
local Function <functionName>   
```

```4d
// declare a function to execute on the server in client/server
server Function <functionName>   
```

`local` and `server` keywords are only available for the functions of the following classes:

- [ORDA data model](../ORDA/ordaClasses.md) classes
- clases [singleton compartidas o de sesión](#singleton-classes).

:::tip Entrada de blog relacionada

[A new way to execute business logic on the server](https://blog.4d.com/a-new-way-to-execute-business-logic-on-the-server)

:::

### Generalidades

Supported functions have a **default execution location** when no location keyword is used. No obstante, puede insertar una palabra clave `local` o `server` para modificar la ubicación de ejecución, o para hacer el código más explícito.

| Supported functions                               | Ejecución por defecto | with `local` keyword                                          | con la palabra clave `server`                                                                                                                                                               |
| ------------------------------------------------- | --------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ORDA data model](../ORDA/ordaClasses.md)         | en el servidor        | La función se ejecuta en el cliente si se llama en el cliente |                                                                                                                                                                                             |
| [Shared or session singleton](#singleton-classes) | Local                 |                                                               | La función se ejecuta en el servidor en la instancia de servidor del singleton. <br/>If there is no instance of the singleton on the server, it is created. |

If `local` and `server` keywords are used in another context, an error is returned.

:::note

Para una descripción general de dónde se ejecuta realmente el código en cliente/servidor, consulte [esta sección](../Desktop/clientServer.md#code-execution-location).

::::

### `local`

In a [client/server architecture](../Desktop/clientServer.md), the `local` keyword specifies that the function must be executed **on the machine from where it is called**.

:::note Recordatorio

The `local` keyword is useless for [shared or session singleton functions](#singleton-classes), which are executed locally by default.

:::

By default, [ORDA data model functions](../ORDA/ordaClasses.md) are executed on the server. Suele ofrecer el mejor rendimiento, ya que sólo se envían por la red la petición de función y el resultado. However, [for optimization reasons](../ORDA/client-server-optimization.md#using-the-local-keyword), you could want to execute a data model function on client. A continuación, puede utilizar la palabra clave `local`.

#### Ejemplo: cálculo de la edad

Dada una entidad con un atributo *birthDate*, queremos definir una función `age()` que sería llamada en un list box. Esta función puede ejecutarse en el cliente, lo que evita lanzar una petición al servidor para cada línea del list box.

En la classe *StudentsEntity*:

```4d
Class extends Entity

local Function age() -> $age: Variant

If (This.birthDate#!00-00-00!)
    $age:=Year of(Current date)-Year of(This.birthDate)
Else
    $age:=Null
End if
```

### `server`

En una [arquitectura cliente/servidor](../Desktop/clientServer.md), la palabra clave `server` especifica que la función debe ejecutarse **en el lado del servidor**.

:::note Recordatorio

La palabra clave `server` es inútil para las [funciones del modelo de datos ORDA](../ORDA/ordaClasses.md), que se ejecutan en el servidor por defecto.

:::

Los parámetros y el resultado de la función `server` deben ser [**streamable**](./dt_object.md#streaming-support). For example, [4D.Datastore](../API/DataStoreClass.md), [File handle](../API/FileHandleClass.md), or [WebServer](../API/WebServerClass.md) are non-streamable classes but [4D.File](../API/FileClass.md) is streamable.

This feature is particularly useful in the context of [remote user sessions](../Desktop/sessions.md#remote-user-sessions), allowing you to implement the business logic in a [session singleton](../Concepts/classes.md#session-singleton) to share it accross all the processes of the session, thus extending the functionalities of the [`Session`](../commands/session) command. En este caso, es posible que desee que la lógica de negocio relevante se ejecute **en el servidor** para que toda la información de la sesión se recopile en el servidor.

Por defecto, las funciones singleton compartidas o de sesión se ejecutan localmente. Añadir la palabra clave `server` en la definición de la función de la clase hace que 4D utilice la instancia singleton en el servidor. Tenga en cuenta que esto puede dar lugar a una instanciación del singleton en el servidor si aún no existe ninguna instancia.

For [sessions singletons](#singleton-classes), the function is executed on the server in the corresponding singleton instance, i.e. the instance of the singleton for the current session.

:::note

Si declara una `server Function` en un singleton compartido, entonces:

- instancia un singleton *S1* en el cliente (llamado *s1*),
- ejecuta *s1.function()* en el cliente.

If no instance of *S1* exists on the server at that moment, *S1* is instantiated on the server (the constructor is executed), and *function()* runs on that server instance. As a result, two instances of *S1* can coexist (client-side and server-side), with distinct property values. In this case, *s1.property* is always accessed locally. It cannot be accessed on the server, for example from server-side code using direct dot notation (an error is returned).

:::

#### Ejemplo: singleton Administration

El singleton compartido *Administration* tiene una función "server" que ejecuta el comando [`Process activity`](../commands/process-activity). This singleton is instantiated on a remote 4D but the function returns the server activity on the server.

```4d
  // Administration class

shared singleton Class constructor

  // This function is executed on the server
server Function processActivity() : Object
  return Process activity


Function localProcessActivity() : Object
  return Process activity
```

Code running on the client:

```4d
var $localActivity; $serverActivity : Object
var $administration : cs.Administration

// The Administration singleton is instantiated on the 4D Client
$administration:=cs.Administration.me

// Get processes running on the remote 4D
$localActivity:=$administration.localProcessActivity()

// Get processes and sessions running on 4D Server
$serverActivity:=$administration.processActivity()

```

#### Ejemplo: singleton de sesión

You store your users in a Users table and handle a custom authentication. Utiliza un singleton de sesión para la autenticación:

```4d
// UserSession session singleton class

server Function checkUser($credentials : Object) : Boolean
	
var $user : cs.UsersEntity
var $result:=False
	
If ($credentials#Null)
	$user:=ds.Users.query("Email === :1"; $credentials.identifier).first()
		
	If (($user#Null) && (Verify password hash($credentials.password; $user.Password)))
		Use (Session.storage)
			Session.storage.userInfo:=New shared object("userId"; $user.ID)
		End use 
			
		$result:=True
	End if 
End if 
	
return $result
```

Para proporcionar el usuario actual a los clientes 4D, el singleton expone una propiedad calculada del usuario obtenida del servidor:

```4d
server Function get user() : cs.UsersEntity
	return ds.Users.get(Session.storage.userInfo.userId)
```

