---
id: parameters
title: Parámetros
---

A menudo encontrará que necesita pasar datos a sus métodos y funciones. Esto se hace fácilmente con parámetros.

## Generalidades

**Parameters** (or **arguments**) are pieces of data that a method or a class function needs in order to perform its task. The terms _parameter_ and _argument_ are used interchangeably throughout this manual. Los parámetros también se pasan a los comandos integrados de 4D. In this example, the string “Hello” is an argument to the `ALERT` built-in command:

```4d
ALERT("Hello")
```

Los parámetros se pasan de la misma manera a los métodos o las funciones de clase. For example, if a class function named `getArea()` accepts two parameters, a call to the class function might look like this:

```4d
$area:=$o.getArea(50;100)
```

Or, if a project method named `DO_SOMETHING` accepts three parameters, a call to the method might look like this:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

Los parámetros de entrada están separados por punto y coma (;).

Los mismos principios se aplican cuando los métodos se ejecutan a través de comandos dedicados, por ejemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform
```

Data can also be **returned** from methods and class functions. For example, the following line is a statement that uses the built-in command, `Length`, to return the length of a string. The statement puts the value returned by `Length` in a variable called _MyLength_. Esta es la instrucción:

```4d
MyLength:=Length("How did I get here?")
```

Toda subrutina puede devolver un valor. Sólo se puede declarar un único parámetro de salida por método o función de clase.

Input and output values are [evaluated](#values-or-references) at the moment of the call and copied into or from local variables within the called class function or method. Variable parameters must be [declared](#declaring-parameters) in the called code.

:::info Compatibilidad

Throughout the 4D documentation, you might see examples where parameters are automatically copied in sequentially numbered local variables ($0, $1, etc.) and declared using compiler directives. Ex: `C_TEXT($1;$2)`. Esta sintaxis heredada sigue siendo compatible, pero ya no se recomienda.

:::

## Declaración de parámetros

En los métodos llamados o en las funciones de clase, los valores de los parámetros se asignan a las variables locales. You usually declare parameters using a **parameter name** along with a **parameter type**, separated by colon.

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

Se aplican las siguientes reglas:

- La línea de declaración debe ser la primera línea del código del método o de la función, de lo contrario se mostrará un error (sólo los comentarios o los saltos de línea pueden preceder la declaración).
- Parameter names must start with a `$` character and be compliant with [property naming rules](identifiers.md#object-properties).
- Múltiples parámetros (y tipos) están separados por punto y coma (;).
- Las sintaxis multilínea están soportadas (utilizando el carácter "\\").

For example, when you call a `getArea()` function with two parameters:

```4d
$area:=$o.getArea(50;100)
```

En el código de la función clase, el valor de cada parámetro se copia en el parámetro declarado correspondiente:

```4d
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
	$area:=$width*$height
```

> If the type is not defined, the parameter will be defined as [`Variant`](dt_variant.md).

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

### Valor devuelto

You declare the return parameter of a function by adding an arrow (->) and the parameter definition after the input parameter(s) list. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it can be handled by a [return statement](#return-expression). Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
	return $x+$y
```

:::warning

Los parámetros, que incluyen el valor devuelto, deben declararse una sola vez. En particular, no se puede declarar el mismo parámetro como entrada y salida, incluso con el mismo tipo. Por ejemplo:

```qs
	//invalid declaration
Function myTransform ($x : Integer) -> $x : Integer 
	//error: $x is declared twice
```

:::

### Tipos de datos soportados

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects. Por ejemplo:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

:::note

Tables or array expressions can only be passed [as reference using a pointer](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Inicialización

When parameters are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been assigned.

## `return {expression}`

<details><summary>Historia</summary>

| Lanzamiento | Modificaciones |
| ----------- | -------------- |
| 19 R4       | Añadidos       |

</details>

The `return` statement ends function or method execution and can be used to return an expression to the caller.

Por ejemplo, la siguiente función devuelve el cuadrado de su argumento, $x, donde $x es un número.

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internally, `return x` executes `$0:=x` or (if declared) `myReturnValue:=x`, and returns to the caller. If `return` is used without an expression, the function or method returns a null value of the declared return type (if any), otherwise _undefined_.

The `return` statement can be used along with the standard syntax for [returned values](#returned-value) (the returned value must be of the declared type). Sin embargo, hay que tener en cuenta que termina inmediatamente la ejecución del código. Por ejemplo:

```4d
Function getValue
	$0:=10
	return 20
	// returns 20

Function getValue -> $v : Integer
	return 10
	$v:=20 // never executed
	// returns 10
```

## Indirección de parámetros (${N})

Los métodos y funciones 4D aceptan un número variable de parámetros. You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression.

### Utilización de parámetros variables

Por ejemplo, considere un método que suma valores y devuelve la suma formateada según un formato que se pasa como parámetro. Cada vez que se llama a este método, el número de valores a sumar puede variar. Debemos pasar los valores como parámetros al método y el formato en forma de cadena de caracteres. El número de valores puede variar de una llamada a otra.

Here is the method, named `MySum`:

```4d
 #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+${$i}
 End for
 $result:=String($sum;$format)
```

Los parámetros del método deben pasarse en el orden correcto, primero el formato y luego un número variable de valores:

```4d
 Result:=MySum("##0.00";125,2;33,5;24) //"182.70"
 Result:=MySum("000";1;2;200) //"203"
```

Tenga en cuenta que aunque haya declarado 0, 1 o más parámetros, siempre puede pasar el número de parámetros que desee. Parameters are all available within the called code through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using the [variadic notation](#declaring-variadic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html) command. Por ejemplo:

```4d
//foo method
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
	ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

Este método se puede llamar:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed
```

> La indirección de parámetros se gestiona mejor si se respeta la siguiente convención: si sólo algunos de los parámetros se dirigen por indirección, deben pasarse después de los demás.

### Declaración de parámetros variables

No es obligatorio declarar parámetros variables. Non-declared variadic parameters automatically get the [Variant](dt_variant.md) type.

Sin embargo, para evitar errores de correspondencia de tipos durante la ejecución del código, puede declarar un número variable de parámetros utilizando la notación "..." en los prototipos de sus funciones, constructores de clases y métodos (parámetros variables). Especifique el tipo del parámetro siguiendo la notación "..." con el tipo deseado.

```4d
#DECLARE ( ... : Text ) // Undefined number of 'Text' parameters

```

```4d
Function myfunction ( ... : Text)

```

Cuando se declaran varios parámetros, debe emplearse la notación variable en la última posición, por ejemplo:

```4d
#DECLARE ( param: Real ; ... : Text )

```

```4d
Function myfunction (var1: Integer ; ... : Text)
```

#### Ejemplo

Here we have a method called `SumNumbers` that returns the calculated total for all the numbers passed as parameters:

```4d

#DECLARE( ... : Real) : Real 



var $number; $total : Real 

For each ($number; 1; Count parameters)
	$total+=${$number}
End for each 

return $total

```

Este método puede llamarse con un número variable de parámetros Real. En caso de que el tipo de parámetro sea incorrecto, se devolverá un error antes de que se ejecute el método:

```4d

$total1:=SumNumbers // returns 0 
$total2:=SumNumbers(1; 2; 3; 4; 5) // returns 15
$total3:=SumNumbers(1; 2; "hello"; 4; 5) // error

```

:::note Nota de compatibilidad

The legacy syntax for declaring variadic parameters (`C_TEXT(${4})`) is still supported for compatibility but the variadic notation is now preferred.

:::

## Compilación

Even if it is not mandatory in [interpreted mode](interpreted.md), you must make sure that all method and function parameters are properly declared as soon as you intend to compile your project.

:::note

You can delegate the declaration of parameters (as well as all variables) to the compiler by checking the [**Type the variable** compilation path option](../Project/compiler.md#compilation-path). Sin embargo, esta opción aumenta considerablemente el tiempo de compilación.

:::

### Parámetros declarados en prototipos

When using the `#DECLARE` or `Function` keywords, parameters are automatically declared and no additional information is needed for the compiler. Ejemplos:

```4d
#DECLARE($myParam : Text; $myOtherParam : Integer) : Boolean
	// all method parameters are declared with their type
```

```4d
	// On Web Connection Database Method
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text)
```

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
	// all function parameters are declared with their type
```

:::tip

Declarar parámetros en prototipos es una buena práctica, incluso en proyectos no compilados.

:::

### Parámetros de método declarados fuera de los prototipos

It can happen that method parameters are not declared in `#DECLARE` prototypes. Tales afirmaciones pueden encontrarse, en particular, en el código 4D heredado. In this case, you must configure a `Compiler_Methods` method to gather the declarations for these method parameters.

#### Método `Compiler_Methods`

When some method parameters are not declared in `#DECLARE` prototypes, the 4D compiler needs that you declare them in a specific method using a special syntax:

- puede agrupar todos los parámetros de variables locales para métodos de proyecto en uno o más métodos de proyecto
- the method name(s) must start with "**Compiler_**", by default "Compiler_Methods".
- within such a method, you predeclare the parameters for each method using the following syntax: `C_XXX(methodName;parameter)`.

Por ejemplo:

```4d
 // Compiler_Methods
 C_REAL(OneMethodAmongOthers;$1;$2) 
```

:::note

Esta sintaxis no es ejecutable en modo interpretado.

:::

You can create and fill automatically a `Compiler_Methods` method containing all your parameters declared outside prototypes using the [**Compiler Methods for...**](../Project/compiler.md#compiler-methods-for) **Methods** button in the Compiler Settings dialog box.

:::info

#### Casos particulares

Algunos contextos no soportan la declaración en un método "Compiler_", por lo que se tratan de forma específica:

- Triggers - El parámetro $0 (Entero largo), que es el resultado de un trigger, será digitado por el compilador si el parámetro no ha sido declarado explícitamente. Sin embargo, si quiere declararlo, debe hacerlo en el propio trigger.

- Form objects that accept the `On Drag Over` form event - The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Sin embargo, si quiere declararlo, debe hacerlo en el propio método proyecto.
  **Note:** The compiler does not initialize the $0 parameter. So, as soon as you use the `On Drag Over` form event, you must initialize $0. Por ejemplo:

```4d
 C_LONGINT($0)
 If(Form event code=On Drag Over)
    $0:=0
    ...
    If($DataType=Is picture)
       $0:=-1
    End if
    ...
 End if
```

:::

### Conflictos entre declaraciones

- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method, the entry from the  _Compiler__ method is ignored.
- If a parameter is declared in both a `#DECLARE` prototype and a _Compiler__ method but with a different data type, the Code Live Checker generates an error during syntax checking and compilation.

## Tipo de parámetro equivocado

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. Por ejemplo, si escribe los siguientes métodos:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //tipo incorrecto, texto esperado
```

Este caso es tratado por 4D en función del contexto:

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. En caso contrario, se genera un error cuando se llama al método.
- en los proyectos interpretados:
  - if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
  - if the parameter was declared using (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.

## Utilización de las propiedades de objeto como parámetros con nombre

Using objects as parameters allow you to handle **named parameters**. Este estilo de programación es simple, flexible y fácil de leer.

For example, using the `CreatePerson` method:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

In the `ChangeAge` method you can write:

```4d
  //ChangeAge
 var $1; $para : Object
 $para:=$1  
 $para.Age:=$para.Age+10
 ALERT($para.Name+" is "+String($para.Age)+" years old.")
```

This provides a powerful way to define [optional parameters](#optional-parameters) (see also below). Para manejar los parámetros que faltan, puede:

- check if all expected parameters are provided by comparing them to the `Null` value, or
- predefinir los valores de los parámetros, o
- utilizarlos como valores vacíos.

In the `ChangeAge` method above, both Age and Name properties are mandatory and would produce errors if they were missing. Para evitar este caso, puede escribir simplemente:

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

## Parámetros opcionales

In the _4D Language Reference_ manual, the { } characters (braces) indicate optional parameters. For example, `ALERT (message{; okButtonTitle})` means that the _okButtonTitle_ parameter may be omitted when calling the command. Se puede llamar de las siguientes maneras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parámetros
ALERT("Time is over") //1 parámetro
```

Los métodos y las funciones 4D también aceptan estos parámetros opcionales. Tenga en cuenta que aunque haya declarado 0, 1 o más parámetros en el método, siempre puede pasar el número de parámetros que desee. If you call a method or function with less parameters than declared, missing parameters are processed as default values in the called code, [according to their type](data-types.md#default-values). Por ejemplo:

```4d
// "concate" function of myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```

```4d
  // Método llamante
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Displays " "
```

> También puede llamar a un método o función con más parámetros de los declarados. They will be available within the called code through the [${N} syntax](#parameter-indirection-n).

Using the `Count parameters` command from within the called method, you can detect the actual number of parameters and perform different operations depending on what you have received.

El siguiente ejemplo muestra un mensaje de texto y puede insertar el texto en un documento en el disco o en un área de 4D Write Pro:

```4d
// APPEND TEXT Project Method
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )
 
 #DECLARE ($message : Text; $path : Text; $wpArea : Object)
  
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

> When optional parameters are needed in your methods, you might also consider using [object properties as named parameters](#using-objects-properties-as-named-parameters) which provide a flexible way to handle variable numbers of parameters.

## Valores o referencias

When you pass a parameter, 4D always evaluates the parameter expression in the context of the calling method and sets the **resulting value** to the local variables in the class function or subroutine. Las variables/parámetros locales no son los campos, variables o expresiones reales pasados por el método que llama; sólo contienen los valores que se han pasado. Las variables/parámetros locales no son los campos, variables o expresiones reales pasados por el método que llama; sólo contienen los valores que se han pasado. Por ejemplo:

```4d
	//Here is some code from the method MY_METHOD
DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
ALERT([People]Name)
 
	//Here is the code of the method DO_SOMETHING
 $1:=Uppercase($1)
 ALERT($1)
```

The alert box displayed by `DO_SOMETHING` will read "WILLIAMS" and the alert box displayed by `MY_METHOD` will read "williams". The method locally changed the value of the parameter $1, but this does not affect the value of the field `[People]Name` passed as parameter by the method `MY_METHOD`.

There are two ways to make the method `DO_SOMETHING` change the value of the field:

1. En lugar de pasar el campo al método, se pasa un puntero al mismo, por lo que se escribiría:

```4d
  //Here is some code from the method MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)
 
  //Here the code of the method DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Aquí el parámetro no es el campo, sino un puntero al mismo. Therefore, within the `DO SOMETHING` method, $1 is no longer the value of the field but a pointer to the field. The object **referenced** by $1 ($1-> in the code above) is the actual field. Por lo tanto, cambiar el objeto referenciado va más allá del alcance de la subrutina, y el campo real se ve afectado. En este ejemplo, las dos cajas de alerta dirán "WILLIAMS".

2. Rather than having the method `DO_SOMETHING` "doing something," you can rewrite the method so it returns a value. Por lo tanto, escribiría:

```4d
	//Here is some code from the method MY METHOD
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

	//Here the code of the method DO SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Esta segunda técnica de retornar un valor por una subrutina se llama " utilizar una función" Se describe en el párrafo <a href="#functions">Funciones</a>. This is described in the [Returning values](#returning-values) paragraph.

### Casos particulares: objetos y colecciones

You need to pay attention to the fact that Object and Collection data types can only be handled through a reference (i.e. an internal _pointer_).

Consequently, when using such data types as parameters, `$1, $2...` do not contain _values_ but _references_. Modifying the value of the `$1, $2...` parameters within the subroutine will be propagated wherever the source object or collection is used. This is the same principle as for [pointers](dt_pointer.md#pointers-as-parameters-to-methods), except that `$1, $2...` parameters do not need to be dereferenced in the subroutine.

For example, consider the `CreatePerson` method that creates an object and sends it as a parameter:

```4d
  //CreatePerson
 var $person : Object
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

The `ChangeAge` method adds 10 to the Age attribute of the received object

```4d
  //ChangeAge
 #DECLARE ($person : Object)
 $person.Age:=$person.Age+10
 ALERT(String($person.Age))
```

When you execute the `CreatePerson` method, both alert boxes will read "50" since the same object reference is handled by both methods.

**4D Server:** When parameters are passed between methods that are not executed on the same machine (using for example the "Execute on Server" option), references are not usable. En estos casos, se envían copias de los parámetros de objetos y colecciones en lugar de referencias.
