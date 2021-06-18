---
id: parameters
title: Parámetros
---


You'll often find that you need to pass data to your methods and functions. This is easily done with parameters.

## Generalidades

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms *parameter* and *argument* are used interchangeably throughout this manual. Parameters are also passed to built-in 4D commands. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

Parameters are passed to methods or class functions in the same way. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```
$area:=$o.getArea(50;100)
```

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

The input parameters are separated by semicolons (;).

The same principles are used when methods are executed through dedicated commands, for example:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Data can also be **returned** from methods and class functions. Data can be returned from methods. The statement puts the value returned by `Length` in a variable called *MyLength*. Here is the statement:

```4d
MyLength:=Length("How did I get here?")
```

Any subroutine can return a value. Only one single output parameter can be declared per method or class function.

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into local variables within the called class function or method. Two syntaxes are proposed to declare variable parameters in the called code:

- [named variables](#named-parameters) (recommended in most cases) or
- [sequentially numbered variables](#sequential-parameters).


Both [named](#named-parameters) and [sequential](#sequential-parameters) variables syntaxes can be mixed with no restriction to declare parameters. Por ejemplo:

```4d
Function add($x : Integer)
    var $0;$2 : Integer
    $0:=$x+$2
```




## Named parameters

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into local variables within the called class function or method. Two syntaxes are proposed to declare variable parameters in the called code:

- For class functions, parameters are declared along with the `Function` keyword.
- For methods (project methods, form object methods, database methods, and triggers), parameters are declared using the `#DECLARE` keyword at the beginning of the method code.

Ejemplos:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```
```4d  
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```


The following rules apply:

- The declaration line must be the first line of the method or function code, otherwise an error is displayed (only comments or line breaks can precede the declaration).
- Parameter names must start with a `$` character and be compliant with [property naming rules](dt_object.md#object-property-identifiers).
- Multiple parameters (and types) are separated by semicolons (;).
- Multiline syntaxes are supported (using "\\" character).


For example, when you call a `getArea()` function with two parameters:

```
$area:=$o.getArea(50;100)
```

In the class function code, the value of each parameter is copied into the corresponding declared parameter:

```4d    
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
```
> If the type is not defined, the parameter will be defined as `Variant`.

All 4D method kinds support the `#DECLARE` keyword, including database methods. For example, in the `On Web Authentication` database method, you can declare named parameters:

```4d    
    // On Web Authentication database method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Check hash password...
```

### Returned value

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through `$0` ([see sequential syntax below](#returned-value-1)). Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```


### Supported data types

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects.  Por ejemplo:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```





## Sequential parameters

As an alternative to [named parameters](#named-parameters) syntax, you can declare parameters using sequentially numbered variables: **$1**, **$2**, **$3**, and so on. La numeración de las variables locales representa el orden de los parámetros.

> Although this syntax is supported by class functions, it is recommended to use [named parameters](#named-parameters) syntax in this case.

For example, when you call a `DO_SOMETHING` project method with three parameters:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

In the method code, the value of each parameter is automatically copied into $1, $2, $3 variables:

```4d
  //Code of the method DO_SOMETHING
  //Assuming all parameters are of the text type
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contains the $WithThis parameter
  //$2 contains the $AndThat parameter
  //$3 contains the $ThisWay parameter
```


### Returned value

The value to be returned is automatically put into the local variable `$0`.


For example, the following method, called `Uppercase4`, returns a string with the first four characters of the string passed to it in uppercase:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

The following is an example that uses the Uppercase4 method:

```4d
$NewPhrase:=Uppercase4("This is good.")
```

In this example, the variable *$NewPhrase* gets “THIS is good.”

The returned value, `$0`, is a local variable within the subroutine. Puede utilizarse como tal dentro de la subrutina. For example, you can write:

```4d
// Do_something
$0:=Uppercase($1)
ALERT($0)
```

In this example, `$0` is first assigned the value of `$1`, then used as parameter to the `ALERT` command. Dentro de la subrutina, puede utilizar `$0` de la misma manera que utilizaría cualquier otra variable local. Es 4D quien devuelve el valor de `$0` (tal y como está cuando la subrutina termina) al método llamado.


### Supported data types

You can use any [expression](quick-tour.md#expression-types) as sequential parameter, except:

- tables
- arrays

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

### Parameter indirection

Los métodos proyecto 4D aceptan un número variable de parámetros del mismo tipo, empezando por la derecha. Este principio se llama **la indirección de parámetros**. Al utilizar el comando `Count parameters` puede dirigirse a esos parámetros con un bucle `For...End for` y la sintaxis de indirección de parámetros.

> Parameter indirection can only be used with the [sequential](#sequential-parameters) syntax.

En el siguiente ejemplo, el método proyecto `SEND PACKETS` acepta un parámetro de tiempo seguido de un número variable de parámetros de texto:

```4d
  //Método proyecto SEND PACKETS
  //SEND PACKETS ( Time ; Text { ; Text2... ; TextN } )
  //SEND PACKETS ( docRef ; Data { ; Data2... ; DataN } )

 C_TIME($1)
 C_TEXT(${2})
 C_LONGINT($vlPacket)

 For($vlPacket;2;Count parameters)
    SEND PACKET($1;${$vlPacket})
 End for
```

La indirección de parámetros se gestiona mejor si se respeta la siguiente convención: si sólo algunos de los parámetros se dirigen por indirección, deben pasarse después de los demás. Dentro del método, una dirección de indirección tiene el formato: ${$i}, donde $i es una variable numérica. ${$i} se denomina **parámetro genérico**.

Por ejemplo, considere una función que suma valores y devuelve la suma formateada según un formato que se pasa como parámetro. Cada vez que se llama a este método, el número de valores a sumar puede variar. Debemos pasar los valores como parámetros al método y el formato en forma de cadena de caracteres. El número de valores puede variar de una llamada a otra.

Esta función se llama de la siguiente manera:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)

```

En este caso, el método que llama obtendrá la cadena "182,70", que es la suma de los números, con el formato especificado. Los parámetros de la función deben pasarse en el orden correcto: primero el formato y luego los valores.

Aquí está la función, llamada `MySum`:
```4d
 $Sum:=0
 For($i;2;Count parameters)
    $Sum:=$Sum+${$i}
 End for
 $0:=String($Sum;$1)
```

Esta función puede llamarse ahora de varias formas:

```4d
 Result:=MySum("##0.00";125,2;33,5;24)
 Result:=MySum("000";1;18;4;23;17)
```


Al igual que con otras variables locales, no es obligatorio declarar los parámetros genéricos mediante una directiva del compilador. Sin embargo, se recomienda para evitar toda ambigüedad. Para declarar estos parámetros, se utiliza una directiva del compilador a la que se pasa ${N} como parámetro, donde N especifica el primer parámetro genérico.

```4d
 C_LONGINT(${4})
```

Este comando significa que a partir del cuarto parámetro (incluido), el método puede recibir un número variable de parámetros de tipo entero largo. $1, $2 y $3 pueden ser de cualquier tipo de datos. Sin embargo, si se utiliza $2 por indirección, el tipo de datos utilizado será el tipo genérico. Así, será del tipo de datos Entero largo, aunque para usted fuera, por ejemplo, del tipo de datos Real.

> The number in the declaration has to be a constant and not a variable.


### Declaring parameters for compiled mode

Even if it is not mandatory in [interpreted mode](interpreted.md), you must declare each parameter in the called methods or functions to prevent any trouble.

When using the [named variable syntax](#named-parameters), parameters are automatically declared through the `#DECLARE` keyword or `Function` prototype. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
    // all parameters are declared with their type
```


When using the sequential variable syntax, you need to make sure all parameters are properly declared. En el siguiente ejemplo, el método `Capitalize` proyecto acepta un parámetro texto y devuelve un resultado texto:

```4d
  // Método proyecto Mayusculas
  // Mayusculas( Texto ) -> Texto
  // Mayusculas( Cadena fuente ) -> Cadena con la primera letra en mayúscula

 C_TEXT($0;$1)
 $0:=Uppercase(Substring($1;1;1))+Lowercase(Substring($1;2))
```

La utilización de comandos tales como `New process` con métodos proceso que aceptan parámetros también requiere que los parámetros se declaren explícitamente en el método llamado. Por ejemplo:

```4d
C_TEXT($string)
C_LONGINT($idProc;$int)
C_OBJECT($obj)

$idProc:=New process("foo_method";0;"foo_process";$string;$int;$obj)
```

Este código puede ser ejecutado en modo compilado sólo si "foo_method" declara sus parámetros:

```4d
//foo_method
C_TEXT($1)
C_LONGINT($2)
C_OBJECT($3)
...
```

> For compiled mode, you can group all local variable parameters for project methods in a specific method with a name starting with "Compiler". Dentro de este método, se pueden predeclarar los parámetros de cada método, por ejemplo:
```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```
See [Interpreted and compiled modes](interpreted.md) page for more information.

La declaración de parámetros también es obligatoria en los siguientes contextos (estos contextos no soportan la declaración en un método "Compiler"):

- Database methods - For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. At the beginning of the database method, you must write (even if all parameters are not used):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

> You can also use [named parameters](#named-parameters) with the `#DECLARE` keyword.

- Triggers - The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the trigger itself.

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Nevertheless, if you want to declare it, you must do so in the object method. **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. Por ejemplo:

```4d
 C_LONGINT($0)
 If(Form event=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
````




## Using object properties as named parameters 

Using objects as parameters allow you to handle **named parameters**. Este estilo de programación es simple, flexible y fácil de leer. 

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

En el método `ChangeAge` puede escribir:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

Esto ofrece una poderosa manera de definir [parámetros opcionales](#optional-parameters) (ver también abajo). Para manejar los parámetros que faltan, puede:
- check if all expected parameters are provided by comparing them to the `Null` value, or
- preset parameter values, or
- use them as empty values.

En el método `ChangeAge` anterior, las propiedades Age y Name son obligatorias y producirían errores si faltaran. Para evitar este caso, puede escribir simplemente:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=Num($para.Age)+10
 ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```
Entonces ambos parámetros son opcionales; si no se llenan, el resultado será " is 10 years old", pero no se generará ningún error.

Por último, con los parámetros con nombre, el mantenimiento o la reproducción de las aplicaciones es muy sencillo y seguro. Imagine que más adelante se da cuenta de que añadir 10 años no siempre es apropiado. Necesita otro parámetro para definir cuántos años hay que añadir. Escriba:

```4d
$person:=New object("Name";"Smith";"Age";40;"toAdd";10)
ChangeAge($person)

//ChangeAge
var $1;$para : Object
$para:=$1  
If ($para.toAdd=Null)
    $para.toAdd:=10
End if
$para.Age:=Num($para.Age)+$para.toAdd
ALERT(String($para.Name)+" is "+String($para.Age)+" years old.")
```

El poder aquí es que no tendrá que cambiar su código existente. Siempre funcionará como en la versión anterior, pero si es necesario, puede utilizar otro valor que no sea 10 años.

Con las variables con nombre, cualquier parámetro puede ser opcional. En el ejemplo anterior, todos los parámetros son opcionales y se puede dar cualquiera, en cualquier orden.




## Input/Output variables

Dentro de la subrutina, puede utilizar los parámetros $1, $2... de la misma manera que utilizaría cualquier otra variable local. Sin embargo, en el caso de que utilice comandos que modifiquen el valor de la variable pasada como parámetro (por ejemplo `Find in field`), los parámetros $1, $2, etc. no pueden utilizarse directamente. Primero debe copiarlos en las variables locales estándar (por ejemplo: `$myvar:=$1`).




## Optional parameters

En el manual *Lenguaje de 4D*, los caracteres { } (llaves) indican parámetros opcionales. Por ejemplo, `ALERT (message{; okButtonTitle})` significa que el parámetro *okButtonTitle* puede omitirse al llamar al comando. Se puede llamar de las siguientes maneras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parámetros
ALERT("Time is over") //1 parámetro
```

Los métodos proyecto 4D también aceptan estos parámetros opcionales, empezando por la derecha. El problema con los parámetros opcionales es cómo manejar el caso en que algunos de ellos falten en el método llamado, nunca debería producir un error. Una buena práctica es asignar valores por defecto a los parámetros no utilizados.

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

Utilizando el comando `Count parameters` desde dentro del método llamado, puede detectar el número real de parámetros y realizar diferentes operaciones dependiendo de lo que haya recibido.

El siguiente ejemplo muestra un mensaje de texto y puede insertar el texto en un documento en el disco o en un área de 4D Write Pro:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 Method($message : Text; $path : Text; $wpArea : Object)

 ALERT($message)
 If(Count parameters>=3)
    WP SET TEXT($wpArea;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($path;$message)
    End if
 End if
```
Después de añadir este método proyecto a su aplicación, puede escribir:

```4d  
APPEND TEXT(vtSomeText) //Sólo mostrará el mensaje
APPEND TEXT(vtSomeText;$path) //Muestra el mensaje y el anexo al documento en $path
APPEND TEXT(vtSomeText;"";$wpArea) //Muestra el mensaje y lo escribe en $wpArea
```




## Values or references

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. Las variables/parámetros locales no son los campos, variables o expresiones reales pasados por el método que llama; sólo contienen los valores que se han pasado. The local variables/parameters are not the actual fields, variables, or expressions passed by the calling method; they only contain the values that have been passed. Por ejemplo:

```4d
    //Esta es una parte del código del método MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)

    //Este es el código del método DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

La caja de alerta mostrada por `DO_SOMETHING` dirá "WILLIAMS" y la caja de alerta mostrada por `MY_METHOD` dirá "williams". El método cambió localmente el valor del parámetro $1, pero esto no afecta al valor del campo `[People]Name` pasado como parámetro por el método `MY_METHOD`.

Hay dos formas de hacer que el método `DO_SOMETHING` cambie el valor del campo:

1. Rather than passing the field to the method, you pass a pointer to it, so you would write:

```4d
  //Esta es una parte del código del método MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Este es el código del método DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Aquí el parámetro no es el campo, sino un puntero al mismo. Por lo tanto, dentro del método `DO SOMETHING`, $1 ya no es el valor del campo sino un puntero al campo. El objeto **referenciado** por $1 ($1-> en el código anterior) es el campo real. Por lo tanto, cambiar el objeto referenciado va más allá del alcance de la subrutina, y el campo real se ve afectado. En este ejemplo, las dos cajas de alerta dirán "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Thus you would write:

```4d
    //Esta es una parte del código del método MY_METHO
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Este es el código del método DO_SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Esta segunda técnica de retornar un valor por una subrutina se llama " utilizar una función" This is described in the [Returning values](#returning-values) paragraph.


### Particular cases: objects and collections

Debe prestar atención al hecho de que los tipos de datos Objeto y Colección sólo pueden manejarse a través de una referencia (es decir, un *puntero* interno).

Por consiguiente, cuando se utilizan estos tipos de datos como parámetros, `$1, $2...` no contienen *valores* sino *referencias*. La modificación del valor de los parámetros `$1, $2...` dentro de la subrutina se propagará a cualquier lugar donde se utilice el objeto o colección fuente. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

Por ejemplo, considere el método `CreatePerson` que crea un objeto y lo envía como parámetro:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

El método `ChangeAge` añade 10 al atributo Age del objeto recibido

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

Cuando se ejecuta el método `CreatePerson`, las dos cajas de alerta dirán "50" ya que la misma referencia de objeto es manejada por ambos métodos.

**4D Server:** cuando se pasan parámetros entre métodos que no se ejecutan en la misma máquina (utilizando por ejemplo la opción "Ejecutar en el servidor"), las referencias no son utilizables. En estos casos, se envían copias de los parámetros de objetos y colecciones en lugar de referencias.


