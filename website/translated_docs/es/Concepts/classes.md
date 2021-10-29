---
id: clases
title: Clases
---


## Generalidades

El lenguaje 4D soporta el concepto de **clases**. En un lenguaje de programación, el uso de una clase permite definir el comportamiento de un objeto con propiedades y funciones asociadas.

Una vez definida una clase usuario, puede **instanciar** los objetos de esta clase en cualquier parte de su código. Cada objeto es una instancia de su clase. Una clase puede extenderse a otra clase con la palabra clave [`extender`](#class-extends-classname), y entonces hereda sus [funciones](#function).

> El modelo de clases en 4D es similar al de las clases en JavaScript, y se basa en una cadena de prototipos.

Por ejemplo, puede crear una clase `Person` con la siguiente definición:

```4d  
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
    This.firstName:=$firstname
    This.lastName:=$lastname

Function sayHello()->$welcome : Text
    $welcome:="Hello "+This.firstName+" "+This.lastName
```

En un método, creando una "Persona":

```
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
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


### cs

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

### 4D

#### 4D -> classStore

| Parámetros | Tipo   |    | Descripción    |
| ---------- | ------ | -- | -------------- |
| classStore | objeto | <- | Class store 4D |

El comando `4D` devuelve la class store 4D integrada disponible. Ofrece acceso a APIs específicas como [CryptoKey](API/CryptoKeyClass.md).

#### Ejemplo

Quiere crear una nueva llave en la clase `CryptoKey`:

```4d
$key:=4D.CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```




## El objeto clase

Cuando una clase es [definida](#class-definition) en el proyecto, se carga en el entorno del lenguaje 4D. A class is an object itself, of ["Class" class](API/ClassClass.md). Un objeto class tiene las propiedades y funciones siguientes:

- String [`name`](API/ClassClass.md#name)
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
- `Class constructor` para definir las propiedades de los objetos.
- `Class extends <ClassName>` para definir la herencia.


### Function

#### Sintaxis

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

Las funciones de clase son propiedades específicas de la clase. They are objects of the [4D.Function](API/FunctionClass.md#about-4dfunction-objects) class.

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
> La[sintaxis 4D clásica ](parameters.md#sequential-parameters) de los parámetros de método puede utilizarse para declarar los parámetros de las funciones de clase. Ambas sintaxis pueden mezclarse. Por ejemplo:
> 
> ```4d
> Function add($x : Integer)
>   var $2; $value : Integer
>   var $0 : Text
>   $value:=$x+$2
>   $0:=String($value)
> ```



#### Ejemplo

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
    This.name:="Rectangle"
    This.height:=$height
    This.width:=$width

// Definición de la función
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



### Class constructor

#### Sintaxis

```4d
// Class: MyClass
Class Constructor({$parameterName : type; ...})
// code
```

Una función class constructor, que puede aceptar los [parámetros](#parameters), puede utilizarse para definir una clase usuario.

En ese caso, cuando llama a la función [`new()`](API/ClassClass.md#new), se llama al constructor de la clase con los parámetros pasados ​​opcionalmente a la función `new()`.

Para una función class constructor, el comando `Current method name` devuelve: "*\<ClassName>:constructor*", por ejemplo "MyClass:constructor".



#### Ejemplo:

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
    This.name:=$name
```

```4d
// En un método proyecto
// Puede instanciar un objeto
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```




### Class extends \<ClassName>

#### Sintaxis

```4d
// Class: ChildClass
Class extends <ParentClass>
```

La palabra clave `Class extends` se utiliza en la declaración de clase para crear una clase usuario que sea hija de otra clase usuario. La clase hija hereda todas las funciones de la clase padre.

La extensión de clase debe respetar las siguientes reglas:

- Una clase usuario no puede extender una clase integrada (excepto de 4D.Object que se extiende por defecto para las clases usuario)
- Una clase usuario no puede extender una clase usuario a partir de otro proyecto o componente.
- Una clase usuario no puede extenderse a sí misma.
- No es posible extender las clases de forma circular (es decir, "a" extiende "b" que extiende "a").

El incumplimiento de una regla de este tipo no es detectado por el editor de código o el intérprete, sólo el compilador y la `sintaxis de verificación` arrojará un error en este caso.

Una clase extendida puede llamar al constructor de su clase padre utilizando el comando [`Super`](#super).

#### Ejemplo

Este ejemplo crea una clase llamada `Square` a partir de una clase llamada `Polygon`.

```4d
//Class: Square
//path: Classes/Square.4dm 

La clase extendida Polygon

Class constructor ($side : Integer)

    // Llama a la clase constructor padre con largos
    // proporcionados para el ancho y el alto de Polygon
    Super($side;$side)
    // En las clases derivadas, se debe llamar a Super antes de
    // utilizar 'This'
    This.name:="Square"

    Function getArea()
        C_LONGINT($0)
        $0:=This.height*This.width
```

### Super


#### Super {( param{;...;paramN} )} {-> Object}

| Parameter | Type   |    | Description                               |
| --------- | ------ | -- | ----------------------------------------- |
| param     | mixed  | -> | Parámetro(s) a pasar al constructor padre |
| Resultado | objeto | <- | Padre del objeto                          |

La palabra clave`Super` permite llamar a la `superclass`, es decir, a la clase padre.

`Super` sirve para dos propósitos diferentes:

- dentro de un [código constructor](#class-constructor), `Super` es un comando que permite llamar al constructor de la superclase. Cuando se utiliza en un constructor, el comando `Super` aparece solo y debe utilizarse antes de la palabra clave `This`.
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

Este ejemplo ilustra el uso de `Super` en un método miembro de clase. Ha creado la clase `Rectangle` con una función:

```4d
//Class: Rectangle

Function nbSides()
    var $0 : Text
    $0:="tengo 4 lados"
```

También ha creado la clase `Square` con una función que llama a la función de la superclass:

```4d
//Class: Square

Class extends Rectangle

Function description()
    var $0 : Text
    $0:=Super.nbSides()+" which are all equal"
```

Luego puedes escribir en un método del proyecto:

```4d
var $square : Object
var $message : Text
$square:=cs.Square.new()
$message:=$square.description() //Tengo 4 lados que son todos iguales
```

### This

#### This -> Object

| Parameter | Type   |    | Description    |
| --------- | ------ | -- | -------------- |
| Result    | object | <- | Current object |

La palabra clave `This` devuelve una referencia al objeto actualmente procesado. En 4D, se puede utilizar en [diferentes contextos](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

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

> Cuando se llama al constructor de la superclase en un constructor que utiliza la palabra clave [Super](#super), hay que tener en cuenta que `This` no debe llamarse antes del constructor de la superclase, de lo contrario se genera un error. Ver [este ejemplo](#example-1).


En todos los casos, `Esto` se refiere al objeto al que el método fue llamado, como si el método estuviera en el objeto..

```4d
//Class: ob

Function f()
    $0:=This.a+This.b
```

Luego puede escribir en un método proyecto:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```
En este ejemplo, el objeto asignado a la variable $o no tiene su propia propiedad *f*, la hereda de su clase. Como *f* se llama como un método de $o, su `This` hace referencia a $o.


## Comandos de clase

Varios comandos del lenguaje 4D permiten manejar las funcionalidades de clase.


### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` devuelve la clase del objeto pasado como parámetro.


### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` devuelve `true` si `objeto` pertenece a `class` o a una de sus clases heredadas, y `false` de lo contrario,.
