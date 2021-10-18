---
id: clases
title: Clases
---


## Generalidades

El lenguaje 4D soporta el concepto de **clases**. En un lenguaje de programación, el uso de una clase permite definir el comportamiento de un objeto con propiedades y funciones asociadas.

Una vez definida una clase usuario, puede **instanciar** los objetos de esta clase en cualquier parte de su código. Cada objeto es una instancia de su clase. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([static](#class-constructor) and [computed](#function-get-and-function-set)).

> El modelo de clases en 4D es similar al de las clases en JavaScript, y se basa en una cadena de prototipos.

Por ejemplo, puede crear una clase `Person` con la siguiente definición:

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function get fullName() -> $fullName : text
    $fullName:=This.firstName+" "+This.lastName

Function sayHello()->$welcome : Text
    $welcome:="Hello "+This.fullName
```

En un método, creando una "Persona":

```
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe"; fullName: "John Doe"}
$hello:=$person.sayHello() //"Hello John Doe"
```



## Gestión de clases

### Definición de una clase

Una clase usuario en 4D está definida por un archivo de método específico (.4dm), almacenado en la carpeta `/Project/Sources/Classes/`. El nombre del archivo es el nombre de la clase.

Al nombrar las clases, debe tener en cuenta las siguientes reglas:

- Un [nombre de clase](identifiers.md#classes) debe cumplir con [reglas de denominación de las propiedades](identifiers.md#object-properties).
- Los nombres de clases son sensibles a las mayúsculas y minúsculas.
- No se recomienda dar el mismo nombre a una clase y a una tabla de la base, para evitar conflictos.

Por ejemplo, si quiere definir una clase llamada "Polygon", tiene que crear el siguiente archivo:

- Carpeta Project
    + Project

        * Sources
            - Clases
                + Polygon.4dm

### Borrar una clase

Para eliminar una clase existente, puede:

- en su disco, elimine el archivo de clase .4dm de la carpeta "Classes",
- en el Explorador 4D, seleccionar la clase y hacer clic en ![](assets/en/Users/MinussNew.png) o elegir **Mover a la papelera** en el menú contextual.


### Utilizar la interfaz 4D

Los archivos de clase se almacenan automáticamente en la ubicación adecuada cuando se crean a través de la interfaz de 4D, ya sea a través del menú **Archivo** o del Explorador.

#### Menú Archivo y barra de herramientas

Puede crear un nuevo archivo de clase para el proyecto seleccionando **Nuevo > Clase...** en el menú **Archivo** de 4D Developer o en la barra de herramientas.

También puede utilizar el atajo **Ctrl+Mayús+Alt+k**.

#### Explorador

En la página **Métodos** del Explorador, las clases se agrupan en la categoría **Clases**.

Para crear una nueva clase, puede:

- seleccione la categoría **Clases** y haga clic en el botón ![](assets/en/Users/PlussNew.png).
- seleccione **Nueva clase...** en el menú de acciones de la parte inferior de la ventana del Explorador, o en el menú contextual del grupo Clases. ![](assets/en/Concepts/newClass.png)
- seleccione **Nueva > Clase...** en el menú contextual de la página de inicio del Explorador.

#### Soporte del código de clase

En las diferentes ventanas 4D (editor de código, compilador, depurador, explorador de ejecución), el código de la clase se maneja básicamente como un método proyecto con algunas especificidades:

- En el editor de código:
    - una clase no puede ser ejecutada
    - una función de clase es un bloque de código
    - **Ir a la definición** en un objeto miembro busca las declaraciones de función de clase; por ejemplo, "$o.f()" encontrará "Function f".
    - **Buscar referencias** en la declaración de función de clase busca la función utilizada como miembro de objeto; por ejemplo, "Function f" encontrará "$o.f()".
- En el explorador de ejecución y el depurador, las funciones de clase se muestran con el formato \<ClassName> constructor o \<ClassName>. \<FunctionName> formato.

## Class stores

Las clases disponibles son accesibles desde sus class stores. Hay dos class stores disponibles:


- `cs` para el class store usuario
- `4D` para el class store integrado



### `cs`

#### cs -> classStore

| Parámetros | Tipo   |    | Descripción                                       |
| ---------- | ------ | -- | ------------------------------------------------- |
| classStore | objeto | <- | Class store usuario para el proyecto o componente |

El comando `cs` devuelve la class store usuario para el proyecto o componente actual. Devuelve todas las clases de usuario [definidas](#class-definition) en el proyecto o componente abierto. Por defecto, sólo las [clases ORDA](ORDA/ordaClasses.md) están disponibles.

#### Ejemplo

Quiere crear una nueva instancia de un objeto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

#### 4D -> classStore

| Parámetros | Tipo   |    | Descripción    |
| ---------- | ------ | -- | -------------- |
| classStore | objeto | <- | Class store 4D |

El comando `4D` devuelve la class store 4D integrada disponible. It provides access to specific APIs such as [CryptoKey](API/CryptoKeyClass.md).

#### Ejemplo

Quiere crear una nueva llave en la clase `CryptoKey`:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## El objeto clase

Cuando una clase es [definida](#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Cuando una clase es [definida](#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Un objeto class tiene las propiedades y funciones siguientes:

- [`name`](API/ClassClass.md#name) string
- [`superclass`](API/ClassClass.md#superclass) object (null if none)
- [`new()`](API/ClassClass.md#new) function, allowing to instantiate class objects.

Además, un objeto clase puede hacer referencia a un objeto [`constructor`](#class-constructor) (opcional).

Un objeto de clase es un [objeto compartido](shared.md) y, por tanto, se puede acceder a él desde diferentes procesos de 4D simultáneamente.

### Herencia

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/ClassClass.md#superclass).

When 4D does not find a function or a property in a class, it searches it in its [`superclass`](API/ClassClass.md#superclass); if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).


## Palabras clave de clase

En las definiciones de clase se pueden utilizar palabras claves específicas de 4D:

- `Function <Name>` para definir las funciones de clase de los objetos.
- `Function get <Name>` and `Function set <Name>` to define computed properties of the objects.
- `Class constructor` to define static properties of the objects.
- `Class extends <ClassName>` para definir la herencia.


### `Function`

#### Sintaxis

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Las funciones de clase son propiedades específicas de la clase. Las funciones de clase son propiedades específicas de la clase.

En el archivo de definición de clase, las declaraciones de función utilizan la palabra clave `Function`, y el nombre de la función. El nombre de la función debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties).

> **Consejo:** comenzar el nombre de la función con un carácter de subrayado ("_") excluirá la función de las funcionalidades de autocompletado en el editor de código 4D. Por ejemplo, si declara `Function _myPrivateFunction` en `MyClass`, no se propondrá en el editor de código cuando digite en `"cs.MyClass. "`.

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

Para una función de clase, el comando `Current method name` devuelve: "*\<ClassName>.\<FunctionName>*", por ejemplo "MyClass.myMethod".

En el código de la aplicación, las funciones de clase se llaman como métodos miembros de la instancia del objeto y pueden recibir los [parámetros](#class-function-parameters) si los hay. Se soportan las siguientes sintaxis:

- uso del operador `()`. For example, `myObject.methodName("hello")`
- use of a "4D.Function" class member method:
    - [`apply()`](API/FunctionClass.md#apply)
    - [`call()`](API/FunctionClass.md#call)

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute: - the compiler does not generate any error (which is different compared to regular methods), - an error is thrown by 4D only at runtime.




#### Parameters

Function parameters are declared using the parameter name and the parameter type, separated by a colon. El nombre del parámetro debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties). Múltiples parámetros (y tipos) están separados por punto y coma (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> Si no se indica el tipo, el parámetro se definirá como `Variant`.

Declare el parámetro de retorno (opcional) añadiendo una flecha (->) y la definición del parámetro de retorno después de la lista de parámetros de entrada. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

También puedes declarar el parámetro de retorno sólo añadiendo `: type`, en cuyo caso estará disponible automáticamente vía $0. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```
> La[sintaxis 4D clásica ](parameters.md#sequential-parameters) de los parámetros de método puede utilizarse para declarar los parámetros de las funciones de clase. Ambas sintaxis pueden mezclarse. For example:
> 
> ```4d
> Function add($x : Integer)
>   var $2; $value : Integer
>   var $0 : Text
>   $value:=$x+$2
>   $0:=String($value)
> ```



#### Example

```4d
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
// In a project method

var $rect : cs.Rectangle
var $area : Real

$rect:=cs.Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```


### `Function get` and `Function set`

#### Syntax

```4d
Function get <name>()->$result : type
// code
```

```4d
Function set <name>($parameterName : type)
// code
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, 4D substitutes the corresponding accessor's code:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

If the property is not accessed, the code never executes.

Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. In this case, an error is returned if the code tries to modify the property. If only a `Function set` is defined, 4D returns *undefined* when the property is read.

The type of the computed property is defined by the `$return` type declaration of the *getter*. It can be of any [valid property type](dt_object.md).

> Assigning *undefined* to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

#### Example 1

```4d  
//Class: Person.4dm

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
//in a project method
$fullName:=$person.fullName // Function get fullName() is called
$person.fullName:="John Smith" // Function set fullName() is called
```

#### Example 2

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

### `Class Constructor`

#### Syntax

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

Una función class constructor, que puede aceptar los [parámetros](#parameters), puede utilizarse para definir una clase usuario.  MyClass Class Constructor({$parameterName : type; ...}) // code </code></pre>

Una función class constructor, que puede aceptar los [parámetros](#parameters), puede utilizarse para definir una clase usuario.

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: "*\<ClassName>:constructor*", for example "MyClass:constructor".



#### Example:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// In a project method
// You can instantiate an object
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### `Class extends <ClassName>`

#### Syntax

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object which is extended by default for user classes)
- A user class cannot extend a user class from another project or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Example

This example creates a class called `Square` from a class called `Polygon`.

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

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```

### `Super`


#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                                    |
| --------- | ------ | -- | ---------------------------------------------- |
| param     | mixed  | -> | Parameter(s) to pass to the parent constructor |
| Result    | object | <- | Object's parent                                |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

- inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. Cuando se utiliza en un constructor, el comando `Super` aparece solo y debe utilizarse antes de la palabra clave `This`.
    - Si todos los constructores de clase del árbol de herencia no se llaman correctamente, se genera el error -10748. Es desarrollador de 4D para asegurarse de que las llamadas son válidas.
    - Si se llama al comando `This` en un objeto cuyas superclases no han sido construidas, se genera el error -10743.

    - Si `Super` se llama fuera del alcance de un objeto, o en un objeto cuyo constructor de la superclase ya ha sido llamado, se genera el error.

```4d
// dentro del constructor myClass
var $text1; $text2 : Text
Super($text1) //llama al superclass constructor con un parámetro texto
This.param:=$text2 // utiliza el segundo parámetro
```

- dentro de una [función miembro de clase](#class-function), `Super` designa el prototipo de la superclase y permite llamar una función de la jerarquía de la superclase.

```4d
Super.doSomething(42) //llama a la función "doSomething"  
//declarada en las superclasses
```

#### Ejemplo 1

Este ejemplo ilustra el uso de `Super` en un class constructor. El comando se llama para evitar duplicar las partes del constructor que son comunes entre las clases `Rectangle` y `Square`.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width


Function sayName()
    ALERT("Hi, I am a "+This.name+".")

// Definición de la función
Function getArea()
    var $0 : Integer
    $0:=(This.height)*(This.width)
```

```4d
//Class: Square

Class extends Rectangle

Class constructor ($side : Integer)

    // Llama al constructor de la clase padre con las longitudes
    // suministradas para el ancho y el alto del Rectángulot
    Super($side;$side)
    // En las clases derivadas, Super debe ser llamado antes
    // de que pueda usar 'This'
    This.name:="Square"

Function getArea()
    C_LONGINT($0)
    $0:=This.height*This.width
```

#### Ejemplo 2

Este ejemplo ilustra el uso de `Super` en un método miembro de clase. You created the `Rectangle` class with a function:

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="I have 4 sides"
```


You also created the `Square` class with a function calling the superclass function:

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Then you can write in a project method:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### `This`

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

The `This` keyword returns a reference to the currently processed object. En 4D, se puede utilizar en [diferentes contextos](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

En la mayoría de los casos, el valor de `This` viene determinado por cómo se llama a una función. No se puede definir por asignación durante la ejecución, y puede ser diferente cada vez que se llame a la función.

Cuando se llama a una fórmula como método miembro de un objeto, su `This` se define en el objeto al que se llama el método. Por ejemplo:

```4d
$o:=New object("prop";42; "f";Formula(This.prop))
$val:=$o.f() //42
```

Cuando se utiliza una función [class constructor](#class-constructor) (con la función [`new()`](API/ClassClass.md#new)), su `This` se vincula al nuevo objeto que se está construyendo.

```4d
//Class: ob

Class Constructor  

    // Crear propiedades en This como
    // quiera asignándoles
    This.a:=42 
```

```4d
// en un método 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```

> Cuando se llama al constructor de la superclase en un constructor que utiliza la palabra clave [Super](#super), hay que tener en cuenta que `This` no debe llamarse antes del constructor de la superclase, de lo contrario se genera un error. See [this example](#example-1).


In any cases, `This` refers to the object the method was called on, as if the method were on the object.

```4d
//Class: ob

Function f()
    $0:=This.a+This.b
```

Then you can write in a project method:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8

```
In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of $o, its `This` refers to $o.


## Class commands

Several commands of the 4D language allows you to handle class features.


### `OB Class`

#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter.


### `OB Instance of`

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.


### `OB Instance of`

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
