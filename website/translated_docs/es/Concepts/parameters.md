---
id: parameters
title: Parámetros
---


A menudo encontrará que necesita pasar datos a sus métodos y funciones. Esto se hace fácilmente con parámetros.

## Generalidades

**Los parámetros** (o **argumentos**) son piezas de datos que un método o una función de clase necesita para realizar su tarea. Los términos *parámetros* y *argumentos* se utilizan indistintamente en este manual. Los parámetros también se pasan a los comandos integrados de 4D. En este ejemplo, la cadena "Hello" es un argumento para el comando integrado `ALERT`:

```4d
ALERT("Hello")
```

Los parámetros se pasan de la misma manera a los métodos o las funciones de clase. Por ejemplo, si una función de clase llamada `getArea()` acepta dos parámetros, una llamada a la función de clase podría verse así:

```
$area:=$o.getArea(50;100)
```

O, si un método proyecto llamado `DO_SOMETHING` acepta tres parámetros, una llamada al método podría verse así:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

Los parámetros de entrada están separados por punto y coma (;).

Los mismos principios se aplican cuando los métodos se ejecutan a través de comandos dedicados, por ejemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/20!)  
//pase la fecha !05/05/20! como parámetro de SetCalendarDate  
//en el contexto de un subformulario
```

Los datos también pueden ser **devueltos**desde métodos y funciones de clase. Por ejemplo, la siguiente línea de instrucción utiliza el comando integrado, `Length`, para devolver la longitud de una cadena. La instrucción pone el valor devuelto por `Length` en una variable llamada *MyLength*. Esta es la instrucción:

```4d
MyLength:=Length("How did I get here?")
```

Any subroutine can return a value. Sólo se puede declarar un único parámetro de salida por método o función de clase.

Los valores de entrada y salida son [evaluados](#values-or-references) en el momento de la llamada y copiados en variables locales dentro de la función o método de la clase llamada. Se proponen dos sintaxis para declarar los parámetros de las variables en el código llamado:

- [named variables](#named-parameters) (recomendado en la mayoría de los casos) o
- [variables numeradas secuencialmente](#sequential-parameters).


Both [named](#named-parameters) and [sequential](#sequential-parameters) syntaxes can be mixed with no restriction to declare parameters. Por ejemplo:

```4d
```4d
  Function add($x : Integer)
    var $0;$2 : Integer
    $0:=$x+$2
```




## Parámetro con nombre

En los métodos y funciones de clase llamados, los valores de los parámetros se asignan a variables locales. Puedes declarar parámetros utilizando un **nombre de parámetro** con un **tipo de parámetro**, separados por dos puntos.

- Para las funciones de clase, los parámetros se declaran junto con la palabra clave `Function`.
- Para los métodos (métodos proyecto, métodos objeto formulario, métodos base y triggers), los parámetros se declaran utilizando la palabra clave `#DECLARE` al principio del código del método.

Ejemplos:

```4d
Function getArea($width : Integer; $height : Integer) -> $area : Integer
```

```4d  
 //myProjectMethod
#DECLARE ($i : Integer) -> $myResult : Object
```


The following rules apply:

- La línea de declaración debe ser la primera línea del código del método o de la función, de lo contrario se mostrará un error (sólo los comentarios o los saltos de línea pueden preceder la declaración).
- Los nombres de los parámetros deben comenzar con un carácter `$` y cumplir con [reglas de denominación de las propiedades](dt_object.md#object-property-identifiers).
- Múltiples parámetros (y tipos) están separados por punto y coma (;).
- Las sintaxis multilínea están soportadas (utilizando el carácter "\\").


Por ejemplo, cuando se llama a una función `getArea()` con dos parámetros:

```4d
$area:=$o.getArea(50;100)
```

En el código de la función clase, el valor de cada parámetro se copia en el parámetro declarado correspondiente:

```4d    
// Class: Polygon
Function getArea($width : Integer; $height : Integer)-> $area : Integer
    $area:=$width*$height
```
> Si no se define el tipo, el parámetro se definirá como [`Variant`](dt_variant.md).

Todos los tipos de métodos de 4D soportan la palabra clave `#DECLARE`, incluidos los métodos base. Por ejemplo, en el método base `On Web Authentication`, puede declarar parámetros temporales:

```4d    
    // Método base On Web Authentication
#DECLARE ($url : Text; $header : Text; \
  $BrowserIP : Text; $ServerIP : Text; \
  $user : Text; $password : Text) \
  -> $RequestAccepted : Boolean
$entitySelection:=ds.User.query("login=:1"; $user)
// Verificar la contraseña hash...
```

### Valor devuelto

El parámetro de retorno de una función se declara añadiendo una flecha (->) y la definición del parámetro después de la lista de parámetros de entrada. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer) -> $result : Integer
```

También puedes declarar el parámetro de retorno sólo añadiendo `: type`, en cuyo caso estará disponible automáticamente a través de `$0` ([ver sintaxis secuencial más abajo](#returned-value-1)). Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
    $0:=$x+$y
```


### Tipos de datos soportados

With named parameters, you can use the same data types as those which are [supported by the `var` keyword](variables.md#using-the-var-keyword), including class objects.  Por ejemplo:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```





## Parámetros secuenciales

As an alternative to [named parameters](#named-parameters) syntax, you can declare parameters using sequentially numbered variables: **$1**, **$2**, **$3**, and so on. La numeración de las variables locales representa el orden de los parámetros.

> Although this syntax is supported by class functions, it is recommended to use [named parameters](#named-parameters) syntax in this case.

Por ejemplo, cuando se llama a un método proyecto `DO_SOMETHING` con tres parámetros:

```4d
DO_SOMETHING($WithThis;$AndThat;$ThisWay)
```

En el código del método, el valor de cada parámetro se copia automáticamente en las variables $1, $2, $3:

```4d
  //Código del método DO_SOMETHING
  //Asumiendo que todos los parámetros son de tipo texto
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contiene el parámetro $WithThis
  //$2 contiene el parámetro $AndThat
  //$3 contiene el parámetro $ThisWay
```


### Valor devuelto

El valor a devolver se pone automáticamente en la variable local `$0`.


Por ejemplo, el siguiente método, llamado `Uppercase4`, devuelve una cadena con los cuatro primeros caracteres de la cadena que se han pasado en mayúsculas:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

El siguiente es un ejemplo que utiliza el método Uppercase4:

```4d
$NewPhrase:=Uppercase4("This is good.")
```

En este ejemplo, la variable *$NewPhrase* recibe “THIS is good.”

El valor devuelto, `$0`, es una variable local dentro de la subrutina. Puede utilizarse como tal dentro de la subrutina. For example, you can write:

```4d
// Do_something
$0:=Uppercase($1)
ALERT($0)
```

En este ejemplo, `$0` se le asignó primero el valor de `$1`, y luego se usó como parámetro del comando `ALERT`. Dentro de la subrutina, puede utilizar `$0` de la misma manera que utilizaría cualquier otra variable local. Es 4D quien devuelve el valor de `$0` (tal y como está cuando la subrutina termina) al método llamado.


### Tipos de datos soportados

Puede utilizar toda [expresión](quick-tour.md#expression-types) como parámetro secuencial, excepto:

- tablas
- arrays

Las expresiones de tablas o arrays sólo pueden pasarse [como referencia utilizando un puntero](dt_pointer.md#pointers-as-parameters-to-methods).

## Indirección de parámetros (${N})

4D project methods accept a variable number of parameters. You can address those parameters with a `For...End for` loop, the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command and the **parameter indirection syntax**. Within the method, an indirection address is formatted `${N}`, where `N` is a numeric expression. `${N}` is called a **generic parameter**.



### Using generic parameters

For example, consider a method that adds values and returns the sum formatted according to a format that is passed as a parameter. Cada vez que se llama a este método, el número de valores a sumar puede variar. Debemos pasar los valores como parámetros al método y el formato en forma de cadena de caracteres. El número de valores puede variar de una llamada a otra.

Aquí está el método, llamado `MySum`:

```4d
 #DECLARE($format : Text) -> $result : Text
 $sum:=0
 For($i;2;Count parameters)
    $sum:=$sum+${$i}
 End for
 $result:=String($sum;$format)
```

The method's parameters must be passed in the correct order, first the format and then a variable number of values:

```4d
 Result:=MySum("##0.00";125,2;33,5;24) //"182.70"
 Result:=MySum("000";1;2;200) //"203"
```

Note that even if you declared 0, 1, or more parameters in the method, you can always pass the number of parameters that you want. Parameters are all available within the called method through the `${N}` syntax and extra parameters type is [Variant](dt_variant.md) by default (you can declare them using a [compiler directive](#declaring-generic-parameters)). You just need to make sure parameters exist, thanks to the [`Count parameters`](https://doc.4d.com/4dv19/help/command/en/page259.html) command. Por ejemplo:

```4d
//método foo
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
    ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

Este método se puede llamar:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed //extra parameters are passed
```

> La indirección de parámetros se gestiona mejor si se respeta la siguiente convención: si sólo algunos de los parámetros se dirigen por indirección, deben pasarse después de los demás.


### Declaración de parámetros genéricos

Al igual que con otras variables locales, no es obligatorio declarar los parámetros genéricos mediante una directiva del compilador. Sin embargo, se recomienda para evitar toda ambigüedad. Non-declared generic parameters automatically get the [Variant](dt_variant.md) type.

To declare generic parameters, you use a compiler directive to which you pass ${N} as a parameter, where N specifies the first generic parameter.

```4d
 C_TEXT(${4})
```

> Declaring generic parameters can only be done with the [sequential syntax](#sequential-parameters).

This command means that starting with the fourth parameter (included), the method can receive a variable number of parameters of text type. $1, $2 y $3 pueden ser de cualquier tipo de datos. Sin embargo, si se utiliza $2 por indirección, el tipo de datos utilizado será el tipo genérico. $1, $2 y $3 pueden ser de cualquier tipo de datos.

> El número en la declaración tiene que ser una constante y no una variable.





## Declaración de los parámetros para el modo compilado

Aunque no sea obligatorio en [modo interpretado](interpreted.md), debe declarar cada parámetro en los métodos o funciones llamados para evitar problemas.

When using the [named variable syntax](#named-parameters), parameters are automatically declared through the `#DECLARE` keyword or `Function` prototype. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
    // todos los parámetros se declaran con su tipo
```


When using the [sequential variable syntax](#sequential-parameters), you need to make sure all parameters are properly declared. En el siguiente ejemplo, el método `Capitalize` proyecto acepta un parámetro texto y devuelve un resultado texto:

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

> En modo compilado, puede agrupar todos los parámetros de las variables locales de los métodos proyecto en un método específico con un nombre que empiece por "Compiler". Dentro de este método, se pueden predeclarar los parámetros de cada método, por ejemplo:
```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```
Ver la página [Modos interpretado y compilado](interpreted.md) para más información.

La declaración de parámetros también es obligatoria en los siguientes contextos (estos contextos no soportan la declaración en un método "Compiler"):

- Métodos base - Por ejemplo, el `método base On Web Connection` recibe seis parámetros, de $1 a $6, de tipo Texto. Al principio del método base, debe escribir (incluso si no se utilizan todos los parámetros):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

> You can also use [named parameters](#named-parameters) with the `#DECLARE` keyword.

- Triggers - El parámetro $0 (Entero largo), que es el resultado de un trigger, será digitado por el compilador si el parámetro no ha sido declarado explícitamente. Sin embargo, si quiere declararlo, debe hacerlo en el propio trigger.

- Objetos formulario que aceptan el evento formulario `On Drag Over` - El parámetro $0 (Entero largo), que es el resultado del evento formulario `On Drag Over`, será digitado por el compilador si el parámetro no ha sido declarado explícitamente. Sin embargo, si quiere declararlo, debe hacerlo en el propio método proyecto. **Nota:** el compilador no inicializa el parámetro $0. Por lo tanto, tan pronto como utilice el evento formulario `On Drag Over`, debe inicializar $0. Por ejemplo:

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
```

## Tipo de parámetro equivocado

Calling a parameter with an wrong type is an [error](error-handling.md) that prevents correct execution. For example, if you write the following methods:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //wrong type, text expected
```

This case is handled by 4D depending on the context:

- in [compiled projects](interpreted.md), an error is generated at the compilation step whenever possible. Otherwise, an error is generated when the method is called.
- in interpreted projects:
    + if the parameter was declared using the [named syntax](#named-parameters) (`#DECLARE` or `Function`), an error is generated when the method is called.
    + if the parameter was declared using the [sequential syntax](#sequential-parameters) (`C_XXX`), no error is generated, the called method receives an empty value of the expected type.





## Variables de entrada/salida

Dentro de la subrutina, puede utilizar los parámetros $1, $2... de la misma manera que utilizaría cualquier otra variable local. Sin embargo, en el caso de que utilice comandos que modifiquen el valor de la variable pasada como parámetro (por ejemplo `Find in field`), los parámetros $1, $2, etc. no pueden utilizarse directamente. Primero debe copiarlos en las variables locales estándar (por ejemplo: `$myvar:=$1`).



## Utilización de las propiedades de objeto como parámetros con nombre

La utilización de objetos como parámetros permite manejar **parámetros con nombre**. Este estilo de programación es simple, flexible y fácil de leer.

Por ejemplo, utilizando el método `CreatePerson`:

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
- verificar si se suministran todos los parámetros esperados comparándolos con el valor `Null`, o
- predefinir los valores de los parámetros, o
- utilizarlos como valores vacíos.

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



## Parámetros opcionales

En el manual *Lenguaje de 4D*, los caracteres { } (llaves) indican parámetros opcionales. Por ejemplo, `ALERT (message{; okButtonTitle})` significa que el parámetro *okButtonTitle* puede omitirse al llamar al comando. Se puede llamar de las siguientes maneras:

```4d
ALERT("Are you sure?";"Yes I am") //2 parámetros
ALERT("Time is over") //1 parámetro
```

Los métodos proyecto 4D también aceptan estos parámetros opcionales, empezando por la derecha. El problema con los parámetros opcionales es cómo manejar el caso en que algunos de ellos falten en el método llamado, nunca debería producir un error. Una buena práctica es asignar valores por defecto a los parámetros no utilizados.

> Cuando los parámetros opcionales son necesarios en sus métodos, también puede considerar el uso de [propiedades de objeto como parámetros con nombre](#using-objects-properties-as-named-parameters) que ofrecen una forma flexible de manejar un número variable de parámetros.

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




## Valores o referencias

Cuando pasa un parámetro, 4D siempre evalúa la expresión del parámetro en el contexto del método que llama y define el **valor resultante** en las variables locales en la función de clase o la subrutina. Las variables/parámetros locales no son los campos, variables o expresiones reales pasados por el método que llama; sólo contienen los valores que se han pasado. Como su alcance es local, si el valor de un parámetro se modifica en la función/subrutina de la clase, no cambia el valor en el método que lo llama. Por ejemplo:

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

1. En lugar de pasar el campo al método, se pasa un puntero al mismo, por lo que se escribiría:

```4d
  //Esta es una parte del código del método MY_METHOD
 DO_SOMETHING(->[People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Last Name)

  //Este es el código del método DO_SOMETHING
 $1->:=Uppercase($1->)
 ALERT($1->)
```

Aquí el parámetro no es el campo, sino un puntero al mismo. Por lo tanto, dentro del método `DO SOMETHING`, $1 ya no es el valor del campo sino un puntero al campo. El objeto **referenciado** por $1 ($1-> en el código anterior) es el campo real. Por lo tanto, cambiar el objeto referenciado va más allá del alcance de la subrutina, y el campo real se ve afectado. En este ejemplo, las dos cajas de alerta dirán "WILLIAMS".

2. En lugar de que el método `DO_SOMETHING` "haga algo", puede reescribir el método para que devuelva un valor. Por lo tanto, escribiría:

```4d
    //Esta es una parte del código del método MY_METHO
 [People]Name:=DO_SOMETHING([People]Name) //Let's say [People]Name value is "williams"
 ALERT([People]Name)

    //Este es el código del método DO_SOMETHING
 $0:=Uppercase($1)
 ALERT($0)
```

Esta segunda técnica de retornar un valor por una subrutina se llama " utilizar una función" Se describe en el párrafo [Valores devueltos](#returning-values).


### Casos particulares: objetos y colecciones

Debe prestar atención al hecho de que los tipos de datos Objeto y Colección sólo pueden manejarse a través de una referencia (es decir, un *puntero* interno).

Por consiguiente, cuando se utilizan estos tipos de datos como parámetros, `$1, $2...` no contienen *valores* sino *referencias*. La modificación del valor de los parámetros `$1, $2...` dentro de la subrutina se propagará a cualquier lugar donde se utilice el objeto o colección fuente. Este es el mismo principio que para [los punteros](dt_pointer.md#pointers-as-parameters-to-methods), excepto que los parámetros `$1, $2...` no necesitan ser desreferenciados en la subrutina.

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


