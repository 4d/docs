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

```4d
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
//pass the !05/05/20! date as parameter to the SetCalendarDate  
//in the context of a subform  
//pase la fecha !05/05/20! como parámetro de SetCalendarDate  
//en el contexto de un subformulario
```

Los datos también pueden ser **devueltos**desde métodos y funciones de clase. Por ejemplo, la siguiente línea de instrucción utiliza el comando integrado, `Length`, para devolver la longitud de una cadena. La instrucción pone el valor devuelto por `Length` en una variable llamada *MyLength*. Esta es la instrucción:

```4d
MyLength:=Length("How did I get here?")
```

Toda subrutina puede devolver un valor. Sólo se puede declarar un único parámetro de salida por método o función de clase.

Los valores de entrada y salida son [evaluados](#values-or-references) en el momento de la llamada y copiados en o desde variables locales dentro de la función o método de la clase llamada. Los parámetros variables deben ser [declarados](#declaring-parameters) en el código llamado.


:::info Compatibilidad

A lo largo de la documentación de 4D, puede ver ejemplos en los que los parámetros se copian automáticamente en variables locales numeradas secuencialmente ($0, $1, etc.) y se declaran utilizando directivas del compilador. Ej: `C_TEXT($1;$2)`. Esta sintaxis heredada sigue siendo compatible, pero ya no se recomienda.

:::


## Declaración de parámetros

En los métodos llamados o en las funciones de clase, los valores de los parámetros se asignan a las variables locales. Generalmente se declararan los parámetros utilizando un **nombre de parámetro** con un **tipo de parámetro**, separados por dos puntos.

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


Se aplican las siguientes reglas:

- La línea de declaración debe ser la primera línea del código del método o de la función, de lo contrario se mostrará un error (sólo los comentarios o los saltos de línea pueden preceder la declaración).
- Los nombres de los parámetros deben comenzar con un carácter `$` y cumplir con [reglas de denominación de las propiedades](identifiers.md#object-properties).
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

También puede declarar el parámetro de retorno añadiendo sólo `: type`, en cuyo caso puede ser manejado por un [return](#return-expression). Por ejemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
    return $x+$y
```


:::warning

Los parámetros, que incluyen el valor devuelto, deben declararse una sola vez. En particular, no se puede declarar el mismo parámetro como entrada y salida, incluso con el mismo tipo. Por ejemplo:

```qs
    ///declaración inválida
myTransform de función ($x : Integerto) -> $x : Integer 
    //error: $x se declara dos veces
```

:::



### Tipos de datos soportados

Con los parámetros con nombre, puede utilizar los mismos tipos de datos [soportados por la palabra clave `var`](variables.md#using-the-var-keyword), incluidos los objetos de las clases. Por ejemplo:

```4d
Function saveToFile($entity : cs.ShapesEntity; $file : 4D.File)
```

:::note

Las expresiones de tablas o arrays sólo pueden pasarse [como referencia utilizando un puntero](dt_pointer.md#pointers-as-parameters-to-methods).

:::

### Inicialización

Cuando se declaran los parámetros, se inicializan con el valor por defecto [**correspondiente a su tipo**](data-types.md#default-values), que mantendrán durante la sesión mientras no hayan sido asignados.



## `return {expression}`

<details><summary>Histórico</summary>

| Versión | Modificaciones |
| ------- | -------------- |
| v19 R4  | Añadidos       |
</details>

La instrucción `return` finaliza la ejecución de una función o de un método y puede utilizarse para devolver una expresión a quien la llama.

Por ejemplo, la siguiente función devuelve el cuadrado de su argumento, $x, donde $x es un número.

```4d
Function square($x : Integer) 
   return $x * $x
```

> Internamente, `return x` ejecuta `$0:=x` o (si se declara) `myReturnValue:=x`, y devuelve al llamante. Si `return` se utiliza sin una expresión, la función o el método devuelve un valor nulo del tipo de retorno declarado (si lo hay), de lo contrario *undefined*.


La instrucción `return` puede utilizarse junto con la sintaxis estándar para los [valores devueltos](#valor-devuelto) (el valor devuelto debe ser del tipo declarado). Sin embargo, hay que tener en cuenta que termina inmediatamente la ejecución del código. Por ejemplo:


```4d
Function getValue
    $0:=10
    return 20
    // devuelve 20

Function getValue -> $v : Integer
    return 10
    $v:=20 // nunca se ejecuta
    // devuelve 10
```



## Indirección de parámetros (${N})

Los métodos y funciones 4D aceptan un número variable de parámetros. Puede dirigirse a esos parámetros con un bucle `For...End for`, el comando [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html)y **la sintaxis de indirección de parámetros**. Dentro del método, una dirección de indirección tiene el formato `${N}`, donde `N` es una expresión numérica.


### Utilización de parámetros variables

Por ejemplo, considere un método que suma valores y devuelve la suma formateada según un formato que se pasa como parámetro. Cada vez que se llama a este método, el número de valores a sumar puede variar. Debemos pasar los valores como parámetros al método y el formato en forma de cadena de caracteres. El número de valores puede variar de una llamada a otra.

Aquí está el método, llamado `MySum`:

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

Tenga en cuenta que aunque haya declarado 0, 1 o más parámetros, siempre puede pasar el número de parámetros que desee. Los parámetros están todos disponibles dentro del código llamado a través de la sintaxis `${N}` y el tipo de parámetros extra es [Variant](dt_variant.md) por defecto (puede declararlos utilizando la [notación variadic](#declaring-variadic-parameters)). Sólo hay que asegurarse de que los parámetros existen, gracias al comando [`Count parameters`](https://doc.4d.com/4dv20/help/command/en/page259.html). Por ejemplo:

```4d
//método foo
#DECLARE($p1: Text;$p2 : Text; $p3 : Date) 
For($i;1;Count parameters)
    ALERT("param "+String($i)+" = "+String(${$i}))
End for
```

Este método se puede llamar:

```4d
foo("hello";"world";!01/01/2021!;42;?12:00:00?) //extra parameters are passed //se pasan parámetros adicionales
```

> La indirección de parámetros se gestiona mejor si se respeta la siguiente convención: si sólo algunos de los parámetros se dirigen por indirección, deben pasarse después de los demás.


### Declaración de parámetros variables

No es obligatorio declarar parámetros variables. Los parámetros variables no declarados obtienen automáticamente el tipo [Variant](dt_variant.md).

Sin embargo, para evitar errores de correspondencia de tipos durante la ejecución del código, puede declarar un número variable de parámetros utilizando la notación "..." en los prototipos de sus funciones, constructores de clases y métodos (parámetros variables). Especifique el tipo del parámetro siguiendo la notación "..." con el tipo deseado.

```4d
#DECLARE ( ... : Text ) // Número indefinido de parámetros 'Text'

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

Aquí tenemos un método llamado `SumNumbers` que devuelve el total calculado para todos los números pasados como parámetros:

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

$total1:=SumaNúmeros // devuelve 0 
$total2:=SumaNúmeros(1; 2; 3; 4; 5) // devuelve 15
$total3:=SumaNúmeros(1; 2; "hello"; 4; 5) // error

```

:::note Nota de compatibilidad

La sintaxis heredada para declarar parámetros variádicos (`C_TEXT(${4})`) sigue siendo compatible, pero ahora se prefiere la notación variable.

:::

## Método `Compiler_Methods`

Aunque no sea obligatorio en [modo interpretado](interpreted.md), debe declarar cada parámetro en los métodos llamados tan pronto como pretenda compilar su proyecto.

Cuando se utiliza la palabra clave `#DECLARE`, se declaran los parámetros. Por ejemplo:

```4d
#DECLARE($myParam : Text; $myOtherParam : Integer) : Boolean
    // todos los parámetros se declaran con su tipo
```

Sin embargo, el compilador 4D necesita que declare todos sus parámetros en un método específico utilizando una sintaxis especial:

- puede agrupar todos los parámetros de variables locales para métodos de proyecto en uno o más métodos de proyecto
- el(los) nombre(s) del método debe(n) empezar por "**Compiler**", por ejemplo "Compiler_MyParameters".
- dentro de un método de este tipo, puede predeclarar los parámetros de cada método utilizando la siguiente sintaxis: `C_XXX(nombredelmétodo;parámetro)`.

Por ejemplo:

```4d  
 // Compiler_method
 C_REAL(OneMethodAmongOthers;$1) 
```

:::note

Esta sintaxis no es ejecutable en modo interpretado.

:::

Puede crear y rellenar automáticamente un método `Compiler` que contenga todos sus parámetros utilizando el botón [**Métodos Compilador para...**](../Project/compiler.md#compiler-methods-for) **Métodos** del diálogo de Propiedades del compilador.

:::info

Algunos contextos no soportan la declaración en un método "Compiler", por lo que se tratan de forma específica:

- Métodos base - Por ejemplo, el `método base On Web Connection` recibe seis parámetros, de tipo de datos Text. Al principio del método base, debe escribir (incluso si no se utilizan todos los parámetros):

```4d
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Funciones - Los parámetros de función se declaran automáticamente para la compilación en el prototipo de la función. Por ejemplo:

```4d
Function add($x : Variant; $y : Integer)-> $result : Integer
    // todos los parámetros se declaran con su tipo
```

- Triggers - El parámetro $0 (Entero largo), que es el resultado de un trigger, será digitado por el compilador si el parámetro no ha sido declarado explícitamente. Sin embargo, si quiere declararlo, debe hacerlo en el propio trigger.

- Objetos formulario que aceptan el evento formulario `On Drag Over` - El parámetro $0 (Entero largo), que es el resultado del evento formulario `On Drag Over`, será digitado por el compilador si el parámetro no ha sido declarado explícitamente. Sin embargo, si quiere declararlo, debe hacerlo en el propio método proyecto. **Nota:** el compilador no inicializa el parámetro $0. Por lo tanto, tan pronto como utilice el evento formulario `On Drag Over`, debe inicializar $0. Por ejemplo:

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



## Tipo de parámetro equivocado

Llamar a un parámetro con un tipo incorrecto es un [error](error-handling.md) que impide la correcta ejecución. Por ejemplo, si escribe los siguientes métodos:

```4d
// method1
#DECLARE($value : Text)
```

```4d
// method2
method1(42) //tipo incorrecto, texto esperado
```

Este caso es tratado por 4D en función del contexto:

- en [proyectos compilados](interpreted.md), se genera un error en el paso de compilación siempre que sea posible. En caso contrario, se genera un error cuando se llama al método.
- en los proyectos interpretados:
    + si el parámetro se declaró utilizando la [sintaxis nombrada](#named-parameters) (`#DECLARE` o `Function`), se genera un error cuando se llama al método.
    + si el parámetro se declaró utilizando (`C_XXX`), no se genera ningún error, el método llamado recibe un valor vacío del tipo esperado.






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

Los métodos y las funciones 4D también aceptan estos parámetros opcionales. Tenga en cuenta que aunque haya declarado 0, 1 o más parámetros en el método, siempre puede pasar el número de parámetros que desee. Si llama a un método o función con menos parámetros que los declarados, los parámetros que faltan se procesan como valores por defecto en el código llamado, [según su tipo](data-types.md#default-values). Por ejemplo:

```4d
// función "concate" de myClass
Function concate ($param1 : Text ; $param2 : Text)->$result : Text
$result:=$param1+" "+$param2
```
```4d
  // Método llamante
 $class:=cs.myClass.new()
 $class.concate("Hello") // "Hello "
 $class.concate() // Displays " "
```

> También puede llamar a un método o función con más parámetros de los declarados. Estarán disponibles en el código llamado a través de la sintaxis [${N}](#parameter-indirection-n).

Utilizando el comando `Count parameters` desde dentro del método llamado, puede detectar el número real de parámetros y realizar diferentes operaciones dependiendo de lo que haya recibido.

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

> Cuando los parámetros opcionales son necesarios en sus métodos, también puede considerar el uso de [propiedades de objeto como parámetros con nombre](#using-objects-properties-as-named-parameters) que ofrecen una forma flexible de manejar un número variable de parámetros.



## Valores o referencias

Cuando pasa un parámetro, 4D siempre evalúa la expresión del parámetro en el contexto del método que llama y define el **valor resultante** en las variables locales en la función de clase o la subrutina. Las variables/parámetros locales no son los campos, variables o expresiones reales pasados por el método que llama; sólo contienen los valores que se han pasado. Las variables/parámetros locales no son los campos, variables o expresiones reales pasados por el método que llama; sólo contienen los valores que se han pasado. Por ejemplo:

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

Esta segunda técnica de retornar un valor por una subrutina se llama " utilizar una función" Se describe en el párrafo [Funciones](#functions). Se describe en el párrafo [Valores devueltos](#returning-values).


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


