---
id: classes
title: Clases
---


## Generalidades

El lenguaje 4D soporta el concepto de **clases**. En un lenguaje de programación, el uso de una clase permite definir el comportamiento de un objeto con propiedades y funciones asociadas.

Cada objeto es una instancia de su clase. Una vez definida una clase usuario, puede **instanciar** los objetos de esta clase en cualquier parte de su código. Una clase puede extenderse a otra clase con la palabra clave [`extender`](#class-extends-classname) y entonces hereda sus [funciones](#function) y sus propiedades ([declarada](#property) y [calculada](#function-get-and-function-set)).

> El modelo de clases en 4D es similar al de las clases en JavaScript, y se basa en una cadena de prototipos.

Por ejemplo, puede crear una clase `Person` con la siguiente definición:

```4d  
//Clase: Person.4dm
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

## Gestión de clases

### Definición de una clase

Una clase usuario en 4D está definida por un archivo [método ](methods.md) específico (.4dm), almacenado en la carpeta `/Project/Sources/Classes/`. El nombre del archivo es el nombre de la clase.

Al nombrar las clases, debe tener en cuenta las siguientes reglas:

- Un [nombre de clase](identifiers.md#classes) debe cumplir con [reglas de denominación de las propiedades](identifiers.md#object-properties).
- .
- No se recomienda dar el mismo nombre a una clase y a una tabla de la base, para evitar conflictos.

Por ejemplo, si quiere definir una clase llamada "Polygon", tiene que crear el siguiente archivo:

```
Project folder Project Sources Classes Polygon.4dm
```


### Borrar una clase

Para eliminar una clase existente, puede:

- en su disco, elimine el archivo de clase .4dm de la carpeta "Classes",
- en el Explorador 4D, seleccionar la clase y hacer clic en ![](../assets/en/Users/MinussNew.png) o elegir **Mover a la papelera** en el menú contextual.

### Utilizar la interfaz 4D

Los archivos de clase se almacenan automáticamente en la ubicación adecuada cuando se crean a través de la interfaz de 4D, ya sea a través del menú **Archivo** o del Explorador.

#### Menú Archivo y barra de herramientas

Puede crear un nuevo archivo de clase para el proyecto seleccionando **Nueva > Clase...** en el menú **Archivo** de 4D Developer o en la barra de herramientas.

También puede utilizar el atajo **Ctrl+Mayús+Alt+k**.

#### Explorador

En la página **Métodos** del Explorador, las clases se agrupan en la categoría **Clases**.

Para crear una nueva clase, puede:

- seleccione la categoría **Clases** y haga clic en el botón ![](../assets/en/Users/PlussNew.png).
- seleccione **Nueva clase...** en el menú de acciones de la parte inferior de la ventana del Explorador, o en el menú contextual del grupo Clases. ![](../assets/en/Concepts/newClass.png)
- seleccione **Nueva > Clase...** en el menú contextual de la página de inicio del Explorador.

#### Soporte del código de clase

En las diferentes ventanas 4D (editor de código, compilador, depurador, explorador de ejecución), el código de la clase se maneja básicamente como un método proyecto con algunas especificidades:

- En el editor de código:
  - una clase no puede ser ejecutada
  - una función de clase es un bloque de código
  - **Ir a la definición** en un objeto miembro busca las declaraciones de función de clase; por ejemplo, "$o.f()" encontrará "Function f".
  - **Buscar referencias** en la declaración de función de clase busca la función utilizada como miembro de objeto; por ejemplo, "Function f" encontrará "$o.f()".
- En el explorador de Ejecución y Depurador, las funciones clase se muestran con el formato `<ClassName>` constructor o `<ClassName>.<FunctionName>`.

## Class stores

Las clases disponibles son accesibles desde sus class stores. Hay dos class stores disponibles:



- `cs` para el class store usuario
- `4D` para el class store integrado

### `cs`


<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->


<!-- REF #_command_.cs.Params -->
| Parámetros | Tipo   |    | Descripción                                                                  |
| ---------- | ------ | -- | ---------------------------------------------------------------------------- |
| classStore | Object | <- | Class store usuario para el proyecto o componente|<!-- END REF -->

|

El comando `cs` <!-- REF #_command_.cs.Summary -->devuelve el almacén de clases de usuario del proyecto o componente actual<!-- END REF -->. Devuelve todas las clases de usuario [definidas](#class-definition) en el proyecto o componente abierto. Por defecto, sólo las [clases ORDA](ORDA/ordaClasses.md) están disponibles.

#### Ejemplo

Quiere crear una nueva instancia de un objeto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->
| Parámetros | Tipo   |    | Descripción                               |
| ---------- | ------ | -- | ----------------------------------------- |
| classStore | Object | <- | Class store 4D|<!-- END REF -->

|

El comando `4D` <!-- REF #_command_.4D.Summary -->devuelve el almacén de clases para las clases integradas disponibles en 4D<!-- END REF -->. Ofrece acceso a las APIs específicas como [CryptoKey](API/CryptoKeyClass.md).

#### Ejemplo

Quiere crear una nueva llave en la clase `CryptoKey`:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## El objeto clase

Cuando una clase es [definida](#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto de la [clase "Class"](API/ClassClass.md). Un objeto clase tiene las siguientes propiedades y funciones:

- cadena [`name`](API/ClassClass.md#name)
- objeto [`superclass`](API/ClassClass.md#superclass) (null si ninguno)
- función [`new()`](API/ClassClass.md#new), que permite instanciar objetos clase
- propiedad [`isShared`](API/ClassClass.md#isshared), true si la clase es [compartida](#shared-classes)
- [`isSingleton`](API/ClassClass.md#issingleton) property, true if the class defines a [singleton](#singleton-classes).
- [`me`](API/ClassClass.md#me) property, allowing to instantiate and access [singletons](#singleton-classes).

Además, un objeto clase puede hacer referencia a un objeto [`constructor`](#class-constructor) (opcional).

A class object itself is a [shared object](shared.md) and can therefore be accessed from different 4D processes simultaneously.

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

### `Function`

#### Sintaxis

```4d
{shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Las funciones de clase son propiedades específicas de la clase. They are objects of the [4D.Function](API/FunctionClass.md) class. In the class definition file, function declarations use the `Function` keyword followed by the function name.

If the function is declared in a [shared class](#shared-classes), you can use the `shared` keyword so that the function could be called without [`Use...End use` structure](shared.md#useend-use). For more information, refer to the [Shared functions](#shared-functions) paragraph below.

The function name must be compliant with [object naming rules](Concepts/identifiers.md#object-properties).

:::note

Since properties and functions share the same namespace, using the same name for a property and a function of the same class is not allowed (an error is thrown in this case).

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

- utilización del operador `()`. Por ejemplo, `myObject.methodName("hello")`
- utilización de un método miembro de la clase "4D.Function":
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Advertencia de seguridad del hilo

If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:
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

También puede declarar el parámetro de retorno añadiendo sólo`: type` y utilizar la expresión [`retorno`](parameters.md#return-expression) (también terminará la ejecución de la función). Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
 // algo de código
 return $x+$y
```

#### Ejemplo 1

```4d
property name : Text
property height; width : Integer

// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Function definition
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

Este ejemplo utiliza la [`expresión retorno`](parameters.md#return-expression):

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Class Constructor`

#### Sintaxis

```4d
// Clase: MyClass
{shared} {singleton} Class Constructor({$parameterName : type; ...})
// code
```

Una función constructora de clase acepta [parámetros](#parameters) opcionales y puede ser utilizada para crear e inicializar objetos de la clase del usuario.

Cuando se llama a la función [`new()`](API/ClassClass.md#new), el constructor de clase es llamado con los parámetros opcionalmente pasados a la función `new()`.

Sólo puede haber una función constructora en una clase (de lo contrario se devuelve un error). Un constructor puede utilizar la palabra clave [`Super`](#super) para llamar al constructor de la superclase.

Puede crear y escribir propiedades de instancia dentro del constructor (ver ejemplo). Alternativamente, si los valores de sus propiedades de instancia no dependen de parámetros pasados al constructor, puede definirlos utilizando la palabra clave [`property`](#property).

Using the `shared` keyword creates a **shared class**, used to only instantiate shared objects. For more information, refer to the [Shared classes](#shared-classes) paragraph.

Using the `singleton` keyword creates a **singleton**, used to create a single instance. For more information, refer to the [Singleton classes](#singleton-classes) paragraph.


#### Ejemplo

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text ; $age : Integer)
 This.name:=$name
 This.age:=$age
```

```4d
// En un método proyecto
// Se puede instanciar un objeto
var $o : cs.MyClass
$o:=cs.MyClass.new("John";42)  
// $o = {"name":"HelloWorld";"age":42}
```


### `property`

#### Sintaxis

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

La palabra clave`property` se puede utilizar para declarar una propiedad dentro de una clase usuario. Una propiedad de clase tiene un nombre y un tipo.

La declaración de propiedades de clase mejora las sugerencias del editor de código, las funciones de tecleo predictivo y la detección de errores.

Las propiedades se declaran para los objetos nuevos cuando se llama a la función [`new()`](API/ClassClass.md#new), sin embargo no se añaden automáticamente a los objetos (sólo se añaden cuando se les asigna un valor).

:::note

A property is automatically added to the object when it is [inititalized in the declaration line](#initializing-the-property-in-the-declaration-line).

:::

Los nombres de las propiedades deben cumplir [las normas de denominación de propiedades](Concepts/identifiers.md#object-properties).

:::note

Since properties and functions share the same namespace, using the same name for a property and a function of the same class is not allowed (an error is thrown in this case).

:::


El tipo de propiedad puede ser uno de los siguientes tipos soportados:

| propertyType                             | Contenido                                                        |
| ---------------------------------------- | ---------------------------------------------------------------- |
| `Text`                                   | Valor texto                                                      |
| `Fecha`                                  | Valor fecha                                                      |
| `Hora`                                   | Valor Hora                                                       |
| `Boolean`                                | Valor booleano                                                   |
| `Integer`                                | Valor entero largo                                               |
| `Real`                                   | Valor real                                                       |
| `Puntero`                                | Valor puntero                                                    |
| `Picture`                                | Valor imagen                                                     |
| `Blob`                                   | Valeor Blob escalar                                              |
| `Collection`                             | Valor colección                                                  |
| `Variant`                                | Valor variant                                                    |
| `Object`                                 | Objeto con clase por defecto (4D.object)                         |
| `4D.<className>`                   | Objeto del nombre de la clase 4D                                 |
| `cs.<className>`                   | Objeto del nombre de la clase usuario                            |
| `cs.<namespace>.<className>` | Objeto del nombre de la clase del componente `<namespace>` |


If you omit the type in the declaration line, the property is created as a variant.

:::info

La palabra clave `property` sólo puede utilizarse en métodos clase y fuera de cualquier bloque `Function` o `Class Constructor`.

:::




#### Initializing the property in the declaration line

When declaring a property, you have the flexibility to specify its data type and provide its value in one statement. The supported syntax is:

`property <propertyName> { : <propertyType>} := <Propertyvalue>`

:::note

When using this syntax, you cannot declare several properties in the declaration line.

:::

You can omit the type in the declaration line, in which case the type will be inferred when possible. Por ejemplo:

```4d
// Class: MyClass

property name : Text := "Smith"
property age : Integer := 42

property birthDate := !1988-09-29! //date is inferred
property fuzzy //variant
```

When you initialize a property in its declaration line, it is added to the class object after its instantiation with the [`new()`](API/ClassClass.md#new) function but before the constructor is called.

If a class [extends](#class-extends-classname) another class, the properties of the parent class are instantiated before the properties of the child class.

#### Ejemplo

```4d
// Class: MyClass

property name : Text
property age : Integer
property color : Text := "Blue"
```

En un método:

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{"color" : "Blue"}
$o.name:="John" //$o:{"color" : "Blue"; "name" : "John"}
$o.age:="Smith"  //error with check syntax
```


### `Function get` y `Function set`

#### Sintaxis

```4d
{shared} Function get <name>()->$result : type
// código
```

```4d
{shared} Function set <name>($parameterName : type)
// código
```

`Function get` y `Function set` son accesos que definen las **propiedades calculadas** en la clase. Una propiedad calculada es una propiedad nombradas con un tipo de datos que enmascara un cálculo. Cuando se accede a un valor de propiedad calculado, 4D sustituye el código del accesor correspondiente:

- cuando se lee la propiedad, `Function get` se ejecuta,
- cuando se escribe la propiedad, `Function get` se ejecuta.

Si no se accede a la propiedad, el código nunca se ejecuta.

Las propiedades calculadas están diseñadas para manejar datos que no necesitan ser guardados en memoria. Generalmente se basan en propiedades persistentes. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property.

En el archivo de definición de la clase, las declaraciones de propiedades calculadas utilizan las palabras claves `Function get` (*getter*) y `Function set` (*setter*) seguido por el nombre de la propiedad. El nombre debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties).

`Función get` devuelve un valor del tipo de la propiedad y `Function set` toma un parámetro del tipo de la propiedad. Ambos argumentos deben cumplir con los [parámetros de función](#parameters) estándar.

Cuando ambas funciones están definidas, la propiedad calculada es **read-write**. Si solo se define una `Function get`, la propiedad calculada es **de solo lectura**. En este caso, se devuelve un error si el código intenta modificar la propiedad. If only a `Function set` is defined, 4D returns *undefined* when the property is read.

The type of the computed property is defined by the `$return` type declaration of the *getter*.

The type of the computed property is defined by the `$return` type declaration of the *getter*.

Si las funciones se declaran en una [clase compartida](#shared-class-constructor), puede utilizar la palabra clave `shared` con ellas para que puedan ser llamadas sin [estructura`Use...End use`](shared.md#useend-use). Para obtener más información, consulte el párrafo [Funciones compartidas](#shared-functions) a continuación.

El tipo de la propiedad calculada es definido por la declaración de tipo `$return` del *getter *. Puede ser de cualquier [tipo de propiedad válido](dt_object.md).

> Asignar *undefined* a una propiedad de objeto limpia su valor mientras se preserva su tipo. Para ello, la `Function get` es llamada primero para recuperar el tipo de valor, luego `Function set` es llamado con un valor vacío de ese tipo.

#### Ejemplo 1

```4d  
//Class: Person.4dm
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
//Class: Square

//path: Classes/Square.4dm

Class extends Polygon

Class constructor ($side : Integer)

 // It calls the parent class's constructor with lengths
 // provided for the Polygon's width and height
 Super($side;$side)
 // In derived classes, Super must be called before you
 // can use 'This'
 This.name:="Square"



 Function getArea() -> $area : Integer
  $area:=This.height*This.width
```



### `Super`

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->
| Parámetros | Tipo   |    | Descripción                                           |
| ---------- | ------ | -- | ----------------------------------------------------- |
| param      | any    | -> | Parámetro(s) a pasar al constructor de la clase padre |
| Result     | Object | <- | Padre del objeto|<!-- END REF -->

|

La palabra clave `Super` <!-- REF #_command_.Super.Summary -->permite realizar llamadas a la `superclase`, es decir, a la clase padre<!-- END REF -->.

`Super` tiene dos propósitos diferentes:

1. Dentro de un código [constructor](#class-constructor), `Super` es un comando que permite llamar al constructor de la superclase. Cuando se utiliza en un constructor, el comando `Super` aparece solo y debe ser usado antes de usar la palabra clave `This`.

- Si todos los class constructors en el árbol de herencia no son llamados correctamente, se genera el error -10748. Es responsabilidad del desarrollador 4D asegurarse de que las llamadas sean válidas.
- Si el comando `This` es llamado en un objeto cuyas superclases no han sido construidas, se genera el error -10743.
- Si se llama a `Super` fuera de un contexto de objeto, o en un objeto cuyo constructor de superclase ya ha sido llamado, se genera el error -10746.

```4d
// dentro del constructor myClass
var $text1; $text2 : Texto
Super($text1) //llamada del constructor de la superclase con un parámetro texto
Este. aram:=$text2 // usar un segundo parámetro
```

2. Dentro de una [función de clase](#class-function), `Super` designa el prototipo de la superclase y permite llamar a una función de la jerarquía de superclases.

```4d
Super.doSomething(42) //llama a la función "doSomething"  
//declarada en superclases
```

#### Ejemplo 1

Este ejemplo ilustra el uso de `Super` en un class constructor. El comando es llamado para evitar duplicar las partes del constructor que son comunes entre las clases `Rectangle` y `Square`.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea()
 var $0 : Integer

 $0:=(This.height)*(This.width)

// Function definition
Function getArea()
 var $0 : Integer

 $0:=(This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

 // Llama al class constructor de la clase padre con longitudes
 // proporcionadas para el ancho y alto del rectángulo
 Super($side;$side)
 // En las clases derivadas, Super debe ser llamado antes de que 
 // pueda utilizar 'This'
 This. ame:="Square"

Function getArea()
 C_LONGINT($0)
 $0:=This.height*This.width
```

#### Ejemplo 2

Este ejemplo ilustra el uso de `Super` en un método miembro clase. Ha creado la clase `Rectangle` con una función:

```4d
//Class: Rectangle

Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

También creó la clase `Square` con una función que llama a la función superclase:

```4d
//Class: Square

Class extends Rectangle

Function description()
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

Entonces puede escribir en un método proyecto:

```4d
var $square : Objeto
var $message : Texto
$square:=cs.Square.new()
$message:=$square.description() //tengo 4 lados iguales
```

### `This`


<!-- REF #_command_.This.Syntax -->**This** : Object<!-- END REF -->

<!-- REF #_command_.This.Params -->
| Parámetros | Tipo   |    | Descripción                              |
| ---------- | ------ | -- | ---------------------------------------- |
| Result     | Object | <- | Objeto actual|<!-- END REF -->

|

La palabra clave `This` <!-- REF #_command_.This.Summary -->devuelve una referencia al objeto procesado actualmente<!-- END REF -->.

En la mayoría de los casos, el valor de `This` está determinado por cómo se llama una función. No se puede definir por asignación durante la ejecución, y puede ser diferente cada vez que se llame a la función.

Cuando se llama a una [fórmula](../API/FunctionClass.md) como método miembro de un objeto, su `This` se define en el objeto sobre el que se llama al método. Por ejemplo:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

Cuando se utiliza una función [class constructor](#class-constructor) (con la función [`new()`](API/ClassClass.md#new)), su `This` está vinculado al nuevo objeto que se está construyendo.

```4d
//Class: ob

Class Constructor  

    // Crear las propiedades en This 
    // asignándolas
    This.a:=42
```

```4d
// en un método 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```


> Al llamar a la superclase del constructor en un constructor utilizando la palabra clave [Super](#super), tenga en cuenta que `This` no debe ser llamado antes del constructor de la superclase, de lo contrario se genera un error. Ver [este ejemplo](#example-1).

En todos los casos, `This` se refiere al objeto sobre el que se ha llamado el método, como si el método fuera una función del objeto.

```4d
//Class: ob

Function f()
 $0:=This.a+This.b
```

Entonces puede escribir en un método proyecto:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8

```

En este ejemplo, el objeto asignado a la variable $o no tiene su propia propiedad *f*, la hereda de su clase. Como *f* es llamado como un método de $o, su `This` se refiere a $o.


## Comandos de clases

Varios comandos del lenguaje 4D permiten manejar las funcionalidades de las clases.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` devuelve la clase del objeto pasado como parámetro.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` devuelve `true` si `object` pertenece a la `class` o a una de las clases heredadas y `false` de lo contrario.


## Clases compartidas

You can create **shared classes**. A shared class is a user class that instantiates a [shared object](shared.md) when the [`new()`](../API/ClassClass.md#new) function is called on the class. Una clase compartida sólo puede crear objetos compartidos.

Shared classes also support **shared functions** that can be called without [`Use...End use`](shared.md#useend-use) structures.

The [`.isShared`](../API/ClassClass.md#isshared) property of Class objects allows to know if the class is shared.

:::info

- A class [inheriting](#class-extends-classname) from a non-shared class cannot be defined as shared.
- Shared classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::


### Creación de una clase compartida

To create a shared class, add the `shared` keyword before the [Class Constructor](#class-constructor). Por ejemplo:

```4d
    //clase compartida: Person
shared Class Constructor($firstname : Text; $lastname : Text)
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

If a function defined inside a shared class modifies objects of the class, it should call [`Use...End use`](shared.md#useend-use) structure to protect access to the shared objects. However, to simplify the code, you can define the function as **shared** so that it automatically triggers internal `Use...End use` when executed.

To create a shared function, add the `shared` keyword before the [Function](#function) keyword in a shared class. Por ejemplo:

```4d
    //shared class Foo
shared Class Constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //no need to call use/end use
```

:::note

If the `shared` function keyword is used in a non-shared user class, it is ignored.

:::


## Singleton classes

A **singleton class** is a user class that only produces a single instance. For more information on singletons, please see the [Wikipedia page about singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

The class singleton is instantiated at the first call of the [`cs.<class>.me`](../API/ClassClass.md#me) property. The instantiated class singleton is then always returned when the [`me`](../API/ClassClass.md#me) property is used.

If you need to instantiate a singleton with parameters, you can also call the [`new()`](../API/ClassClass.md#new) function. In this case, it is recommended to instantiate the singleton in some code executed at application startup.

The scope of a singleton instance can be the current process or all processes. A *process* singleton has a unique value for the process in which it is instantiated, while an *interprocess* singleton has a unique value for all processes of the application. Singletons are useful to define values that need to be available from anywhere in an application or process.


The [`.isSingleton`](../API/ClassClass.md#issingleton) property of Class objects allows to know if the class is a singleton.


:::info

Singleton classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::




### Creating a process singleton

To create a process singleton class, add the `singleton` keyword before [`Class Constructor`](#class-constructor). Por ejemplo:

```4d
    //clase: ProcessTag
singleton Class Constructor()
 This.tag:=Random
```

To use the process singleton:

```4d
    //en un proceso
var $mySingleton := cs.ProcessTag.me //Primera instanciación
    //$mySingleton.tag = 5425 por ejemplo  
...  
var $myOtherSingleton := cs.ProcessTag.me
    //$myOtherSingleton.tag = 5425

```
```4d
    //in another process
var $mySingleton := cs.ProcessTag.me //First instantiation
    //$mySingleton.tag = 14856 for example  
...  
var $myOtherSingleton := cs.ProcessTag.me  
    //$myOtherSingleton.tag = 14856
```



### Creating an interprocess singleton

To create an interprocess singleton, add the `shared singleton` keywords before the [Class Constructor](#class-constructor). Por ejemplo:

```4d
//Class VehicleFactory

property vehicleBuilt : Integer

shared singleton Class constructor()
  This.vehicleBuilt := 0 //Number of vehicles built by the factory

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

You can the call the **cs.VehicleFactory** singleton to get a new vehicle from everywhere in your application with a single line:

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("truck")
```

Since the *buildVehicle()* function modifies the **cs.VehicleFactory** (by incrementing `This.vehicleBuilt`) you need to add the `shared` keyword to it.

#### Ver también

Ver también [esta entrada de blog](https://blog.4d.com/singleton) para más detalles.
