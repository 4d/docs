---
id: parameters
title: Parámetros
---


## Utilizar paramétros

A menudo encontrará que necesita pasar datos a sus métodos. Esto se hace fácilmente con parámetros.

**Los parámetros** (o **argumentos**) son piezas de datos que un método necesita para realizar su tarea. Los términos *parámetros* y *argumentos* se utilizan indistintamente en este manual. Los parámetros también se pasan a los comandos integrados de 4D. En este ejemplo, la cadena "Hello" es un argumento para el comando integrado `ALERT`:

```4d
ALERT("Hello")
```

Los parámetros se pasan a los métodos de la misma manera. Por ejemplo, si un método proyecto llamado DO SOMETHING acepta tres parámetros, una llamada al método podría tener la siguiente forma:

```4d
DO SOMETHING(WithThis;AndThat;ThisWay)
```
Los parámetros están separados por punto y coma (;). Su valor se evalúa al momento de la llamada.

En la subrutina (el método llamado), el valor de cada parámetro se copia automáticamente en variables locales numeradas secuencialmente: $1, $2, $3, etc. La numeración de las variables locales representa el orden de los parámetros.

```4d
  //Código del método DO SOMETHING
  //Asumiendo que todos los parámetros son de tipo texto
 C_TEXT($1;$2;$3)
 ALERT("I received "+$1+" and "+$2+" and also "+$3)
  //$1 contiene el parámetro WithThis
  //$2 contiene el parámetro AndThat
  //$3 contiene el parámetro ThisWay
```

Dentro de la subrutina, puede utilizar los parámetros $1, $2... de la misma manera que utilizaría cualquier otra variable local. Sin embargo, en el caso de que utilice comandos que modifiquen el valor de la variable pasada como parámetro (por ejemplo `Find in field`), los parámetros $1, $2, etc. no pueden utilizarse directamente. Primero debe copiarlos en las variables locales estándar (por ejemplo: `$myvar:=$1`).

Los mismos principios se aplican cuando los métodos se ejecutan a través de comandos dedicados, por ejemplo:

```4d
EXECUTE METHOD IN SUBFORM("Cal2";"SetCalendarDate";*;!05/05/10!)  
//pass the !05/05/10! date as parameter to the SetCalendarDate  
// in the context of a subform  
//pase la fecha !05/05/10! como parámetro del SetCalendarDate  
// en el contexto de un subformulario
```

**Nota:** para una buena ejecución del código, es necesario asegurarse de que todos los parámetros `$1`, `$2`... estén correctamente declarados dentro de los métodos llamados (ver [Declaración de parámetros](#declaring-parameters) más abajo).


### Expresiones soportadas

Puede utilizar toda [expresión](Concepts/quick-tour.md#expression-types) como parámetro, excepto:

- tablas
- arrays

Las expresiones de tablas o arrays sólo pueden pasarse [como referencia utilizando un puntero](Concepts/dt_pointer.md#pointers-as-parameters-to-methods).


## Funciones

Los datos pueden ser devueltos por los métodos. Un método que devuelve un valor se llama función.

Los comandos de 4D o 4D Plug-in que devuelven un valor también se llaman funciones.

Por ejemplo, la siguiente línea es una sentencia que utiliza la función integrada, `Length`, para devolver la longitud de una cadena. La instrucción pone el valor devuelto por `Length` en una variable llamada *MyLength*. Esta es la instrucción:

```4d
MyLength:=Length("How did I get here?")
```

Toda subrutina puede devolver un valor. El valor a devolver se pone en la variable local `$0`.

Por ejemplo, la siguiente función, llamada `Uppercase4`, devuelve una cadena con los cuatro primeros caracteres de la cadena que se han pasado en mayúsculas:

```4d
$0:=Uppercase(Substring($1;1;4))+Substring($1;5)
```

El siguiente es un ejemplo que utiliza la función Uppercase4:

```4d
NewPhrase:=Uppercase4("This is good.")
```

En este ejemplo, la variable *NewPhrase* recibe “THIS is good.”

El resultado de la función, `$0`, es una variable local dentro de la subrutina. Puede utilizarse como tal dentro de la subrutina. It can be used as such within the subroutine. Dentro de la subrutina, puede utilizar `$0` de la misma manera que utilizaría cualquier otra variable local. Es 4D quien devuelve el valor de `$0` (tal y como está cuando la subrutina termina) al método llamado.


## Declaración de parámetros

Aunque no sea obligatorio en [modo interpretado](Concepts/interpreted.md), debe declarar cada parámetro en los métodos llamados para evitar problemas.

En el siguiente ejemplo, el método proyecto `OneMethodAmongOthers` declara tres parámetros:

```4d
  // Método proyecto OneMethodAmongOthers
  // OneMethodAmongOthers ( Real ; Date { ; Long } )
  // OneMethodAmongOthers ( Amount ; Date { ; Ratio } )

 C_REAL($1) // El primer parámetro es de tipo Real
 C_DATE($2) // El segundo parámetro es de tipo Fecha
 C_LONGINT($3) // El tercer parámetro es de tipo Entero largo
```

En el siguiente ejemplo, el método `Capitalize` proyecto acepta un parámetro texto y devuelve un resultado texto:

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

**Nota:** en modo compilado, puede agrupar todos los parámetros de las variables locales de los métodos proyecto en un método específico con un nombre que empiece por "Compiler". Dentro de este método, se pueden predeclarar los parámetros de cada método, por ejemplo:
```4d
 C_REAL(OneMethodAmongOthers;$1)
```
Ver la página [Modos interpretado y compilado](Concepts/interpreted.md) para más información.

La declaración de parámetros también es obligatoria en los siguientes contextos (estos contextos no soportan la declaración en un método "Compiler"):

- Database methods For example, the `On Web Connection Database Method` receives six parameters, $1 to $6, of the data type Text. Al principio del método base, debe escribir (incluso si no se utilizan todos los parámetros):

```4d
// On Web Connection
C_TEXT($1;$2;$3;$4;$5;$6)
```

- Triggers The $0 parameter (Longint), which is the result of a trigger, will be typed by the compiler if the parameter has not been explicitly declared. Sin embargo, si quiere declararlo, debe hacerlo en el propio trigger.

- Form objects that accept the `On Drag Over` form event The $0 parameter (Longint), which is the result of the `On Drag Over` form event, is typed by the compiler if the parameter has not been explicitly declared. Sin embargo, si quiere declararlo, debe hacerlo en el propio método proyecto. **Nota:** el compilador no inicializa el parámetro $0. Por lo tanto, tan pronto como utilice el evento formulario `On Drag Over`, debe inicializar $0. Por ejemplo:
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

## Valores o referencias

Cuando pasa un parámetro, 4D siempre evalúa la expresión del parámetro en el contexto del método que llama y define el **valor resultante** en las variables locales $1, $2... de la subrutina (ver [Utilización de los parámetros](#using-parameters)). Las variables/parámetros locales no son los campos, variables o expresiones reales pasados por el método que llama; sólo contienen los valores que se han pasado. Como su alcance es local, si el valor de un parámetro se modifica en la subrutina, no cambia el valor en el método que llama. Por ejemplo:

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

Esta segunda técnica de retornar un valor por una subrutina se llama " utilizar una función" Se describe en el párrafo [Funciones](#functions). Se describe en el párrafo [Funciones](#functions).


### Casos particulares: objetos y colecciones

Debe prestar atención al hecho de que los tipos de datos Objeto y Colección sólo pueden manejarse a través de una referencia (es decir, un *puntero* interno).

Por consiguiente, cuando se utilizan estos tipos de datos como parámetros, `$1, $2...` no contienen *valores* sino *referencias*. La modificación del valor de los parámetros `$1, $2...` dentro de la subrutina se propagará a cualquier lugar donde se utilice el objeto o colección fuente. Este es el mismo principio que para [los punteros](Concepts/dt_pointer.md#pointers-as-parameters-to-methods), excepto que los parámetros `$1, $2...` no necesitan ser desreferenciados en la subrutina.

Por ejemplo, considere el método `CreatePerson` que crea un objeto y lo envía como parámetro:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```

El método `ChangeAge` añade 10 al atributo Age del objeto recibido

```4d
  //ChangeAge
 C_OBJECT($1)
 $1.Age:=$1.Age+10
 ALERT(String($1.Age))
```

Cuando se ejecuta el método `CreatePerson`, las dos cajas de alerta dirán "50" ya que la misma referencia de objeto es manejada por ambos métodos.

**4D Server:** cuando se pasan parámetros entre métodos que no se ejecutan en la misma máquina (utilizando por ejemplo la opción "Ejecutar en el servidor"), las referencias no son utilizables. En estos casos, se envían copias de los parámetros de objetos y colecciones en lugar de referencias.


## Parámetro con nombre

La utilización de objetos como parámetros permite manejar **parámetros con nombre**. Este estilo de programación es simple, flexible y fácil de leer.

Por ejemplo, utilizando el método `CreatePerson`:

```4d
  //CreatePerson
 C_OBJECT($person)
 $person:=New object("Name";"Smith";"Age";40)
 ChangeAge($person)
 ALERT(String($person.Age))  
```
En el método `ChangeAge` puede escribir:

```4d
  //ChangeAge
 C_OBJECT($1;$para)
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
 C_OBJECT($1;$para)
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
C_OBJECT($1;$para)
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

> Cuando los parámetros opcionales son necesarios en sus métodos, también puede considerar el uso de [parámetros con nombre](#named-parameters) que ofrecen una forma flexible de manejar un número variable de parámetros.

Utilizando el comando `Count parameters` desde dentro del método llamado, puede detectar el número real de parámetros y realizar diferentes operaciones dependiendo de lo que haya recibido.

El siguiente ejemplo muestra un mensaje de texto y puede insertar el texto en un documento en el disco o en un área de 4D Write Pro:

```4d
// Método proyecto APPEND TEXT
// APPEND TEXT ( Text { ; Text { ; Object } } )
// APPEND TEXT ( Message { ; Path { ; 4DWPArea } } )

 C_TEXT($1;$2)
 C_OBJECT($3)

 ALERT($1)
 If(Count parameters>=3)
    WP SET TEXT($3;$1;wk append)
 Else
    If(Count parameters>=2)
       TEXT TO DOCUMENT($2;$1)
    End if
 End if
```
Después de añadir este método proyecto a su aplicación, puede escribir:

```4d  
APPEND TEXT(vtSomeText) //Sólo mostrará el mensaje
APPEND TEXT(vtSomeText;$path) //Muestra el mensaje y el anexo al documento en $path
APPEND TEXT(vtSomeText;"";$wpArea) //Muestra el mensaje y lo escribe en $wpArea
```


## Indirección de parámetros

Los métodos proyecto 4D aceptan un número variable de parámetros del mismo tipo, empezando por la derecha. Este principio se llama **la indirección de parámetros**. Al utilizar el comando `Count parameters` puede dirigirse a esos parámetros con un bucle `For...End for` y la sintaxis de indirección de parámetros.

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


### Declaración de parámetros genéricos

Al igual que con otras variables locales, no es obligatorio declarar los parámetros genéricos mediante una directiva del compilador. Sin embargo, se recomienda para evitar toda ambigüedad. Para declarar estos parámetros, se utiliza una directiva del compilador a la que se pasa ${N} como parámetro, donde N especifica el primer parámetro genérico.

```4d
 C_LONGINT(${4})
```

Este comando significa que a partir del cuarto parámetro (incluido), el método puede recibir un número variable de parámetros de tipo entero largo. $1, $2 y $3 pueden ser de cualquier tipo de datos. Sin embargo, si se utiliza $2 por indirección, el tipo de datos utilizado será el tipo genérico. $1, $2 and $3 can be of any data type.

**Nota:** el número en la declaración tiene que ser una constante y no una variable.
