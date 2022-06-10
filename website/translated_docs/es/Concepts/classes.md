---
id: clases
title: Clases
---


## Generalidades

El lenguaje 4D soporta el concepto de **clases**. En un lenguaje de programación, el uso de una clase permite definir el comportamiento de un objeto con propiedades y funciones asociadas.

Cada objeto es una instancia de su clase. Una vez definida una clase usuario, puede **instanciar** los objetos de esta clase en cualquier parte de su código. Una clase puede extenderse a otra clase con la palabra clave [`extender`](#class-extends-classname) y entonces hereda sus [funciones](#function) y sus propiedades ([static](#class-constructor) y [computed](#function-get-and-function-set)).

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

El comando `4D` devuelve la class store 4D integrada disponible. Ofrece acceso a las APIs específicas como [CryptoKey](API/CryptoKeyClass.md).

#### Ejemplo

Quiere crear una nueva llave en la clase `CryptoKey`:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## El objeto clase

Cuando una clase es [definida](#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. Una clase es un objeto de la [clase "Class"](API/ClassClass.md). Una clase es un objeto en sí mismo, de ["Class" class](API/classClass.md).

- cadena [`name`](API/ClassClass.md#name)
- objeto [`superclass`](API/ClassClass.md#superclass) (null si ninguno)
- función [`new()`](API/ClassClass.md#new), que permite instanciar objetos de clase.

Además, un objeto clase puede hacer referencia a un objeto [`constructor`](#class-constructor) (opcional).

Un objeto de clase es un [objeto compartido](shared.md) y, por tanto, se puede acceder a él desde diferentes procesos de 4D simultáneamente.

### Herencia

Si una clase hereda de otra clase (es decir, se utiliza la palabra clave [Class extends](classes.md#class-extends-classname) en su definición), la clase padre es su [`superclass`](API/ClassClass.md#superclass).

Cuando 4D no encuentra una función o una propiedad en una clase, la busca en su [`superclass`](API/ClassClass.md#superclass); si no la encuentra, 4D sigue buscando en la superclase de la superclase, y así sucesivamente hasta que no haya más superclase (todos los objetos heredan de la superclase "Object").


## Palabras clave de clase

En las definiciones de clase se pueden utilizar palabras claves específicas de 4D:

- `Function <Name>` para definir las funciones de clase de los objetos.
- `Function get <Name>` y `Function set <Name>` para definir las propiedades calculadas de los objetos.
- `Class constructor` para definir las propiedades estáticas de los objetos.
- `Class extends <ClassName>` para definir la herencia.


### `Function`

#### Sintaxis

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Las funciones de clase son propiedades específicas de la clase. Son objetos de la clase [4D.Function](API/FunctionClass.md#about-4dfunction-objects).

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

Para una función clase, el comando `Current method name` devuelve: `<ClassName>.<FunctionName>`, por ejemplo "MyClass.myFunction".

En el código de la aplicación, las funciones de clases se llaman como los métodos miembros de las instancias de objetos y pueden recibir [parámetros](#class-function-parameters) si los hay. Se soportan las siguientes sintaxis:

- utilización del operador `()`. Por ejemplo, `myObject.methodName("hello")`
- uso de un método miembro de la clase "4D.Function":
    - [`apply()`](API/FunctionClass.md#apply)
    - [`call()`](API/FunctionClass.md#call)

> **Thread-safety:** Si una función de clase no es hilo seguro y es llamada por un método con el atributo "Puede ser ejecutado en un proceso apropiativo": - el compilador no genera ningún error (lo que es diferente en comparación con los métodos regulares), - 4D lanza un error sólo en tiempo de ejecución.



#### Parámetros

Los parámetros de las funciones se declaran utilizando el nombre del parámetro y su tipo, separados por dos puntos. El nombre del parámetro debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties). Múltiples parámetros (y tipos) están separados por punto y coma (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> Si no se declaró el tipo, el parámetro se definirá como `Variant`.



La [sintaxis 4D clásica](parameters.md#sequential-parameters) para los parámetros de métodos puede utilizarse para declarar los parámetros de las funciones de clases. Ambas sintaxis pueden mezclarse. Por ejemplo:

```4d
Function add($x : Integer)
    var $2; $value : Integer
    var $0 : Text
    $value:=$x+$2
    $0:=String($value)
```

#### Valor devuelto

Se declara el parámetro de retorno (opcional) añadiendo una flecha (`->`) y la definición del parámetro de retorno después de la lista de parámetros de entrada, o dos puntos (`:`) y el tipo de parámetro de retorno únicamente. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
    $result:=$x+$y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](parameters.md#return-expression) (it will also end the function execution). Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
    // algún código
    return $x+$y
```


#### Ejemplo 1

```4d
// Class: Rectangle
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

This example uses the [`return expression`](parameters.md#return-expression):

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
    If ($width > 0 && $height > 0)
        return $width * $height
    Else
        return 0
    End if
```




### `Function get` y `Function set`

#### Sintaxis

```4d
Function get <name>()->$result : type
// código
```

```4d
Function set <name>($parameterName : type)
// código
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. A computed property is a named property with a data type that masks a calculation. When a computed property value is accessed, 4D substitutes the corresponding accessor's code:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

If the property is not accessed, the code never executes.

Computed properties are designed to handle data that do not necessary need to be kept in memory. They are usually based upon persistent properties. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. In this case, an error is returned if the code tries to modify the property. If only a `Function set` is defined, 4D returns *undefined* when the property is read.

The type of the computed property is defined by the `$return` type declaration of the *getter*.

The type of the computed property is defined by the `$return` type declaration of the *getter*.

The type of the computed property is defined by the `$return` type declaration of the *getter*. It can be of any [valid property type](dt_object.md).

> Assigning *undefined* to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

#### Ejemplo 1

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

### `Class Constructor`

#### Sintaxis

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: `<ClassName>:constructor`, for example "MyClass:constructor".



#### Ejemplo:

```4d
// Class: MyClass
// Class constructor de MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// En un método proyecto
// Se puede instanciar un objeto
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### `Class extends <ClassName>`

#### Sintaxis

```4d
// Class hijo
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

#### Ejemplo

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

#### Sintaxis

```4d
Super {( param{;...;paramN} )} {-> Object}
```

| Parámetros | Tipo   |    | Descripción                                           |
| ---------- | ------ | -- | ----------------------------------------------------- |
| param      | mixto  | -> | Parámetro(s) a pasar al constructor de la clase padre |
| Resultado  | objeto | <- | Padre del objeto                                      |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.

- If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// inside myClass constructor
var $text1; $text2 : Text
Super($text1) //calls superclass constructor with a text param
This.param:=$text2 // use second param
```

2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //calls "doSomething" function  
//declared in superclasses
```

#### Ejemplo 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

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

    // It calls the parent class's constructor with lengths
    // provided for the Rectangle's width and height
    Super($side;$side)
    // In derived classes, Super must be called before you
    // can use 'This'
    This.name:="Square"

Function getArea()
    C_LONGINT($0)
    $0:=This.height*This.width
```

#### Ejemplo 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

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

#### Sintaxis

```4d
This -> Object
```

| Parámetros | Tipo   |    | Descripción   |
| ---------- | ------ | -- | ------------- |
| Resultado  | objeto | <- | Objeto actual |

The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv19/help/command/page1470.html).

In most cases, the value of `This` is determined by how a function is called. No se puede definir por asignación durante la ejecución, y puede ser diferente cada vez que se llame a la función.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. Por ejemplo:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/ClassClass.md#new) function), its `This` is bound to the new object being constructed.

```4d
//Class: ob

Class Constructor  

    // Create properties on This as
    // desired by assigning to them
    This.a:=42 
```

```4d
// en un método 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. Ver [este ejemplo](#example-1).


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


## Comandos de clases

Varios comandos del lenguaje 4D permiten manejar las funcionalidades de las clases.


### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` devuelve la clase del objeto pasado como parámetro.


### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` devuelve `true` si `object` pertenece a la `class` o a una de las clases heredadas y `false` de lo contrario.
