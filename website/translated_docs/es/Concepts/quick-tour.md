---
id: quick-tour
title: Un recorrido rápido
sidebar_label: Un recorrido rápido
---

Utilizando el lenguaje 4D, la impresión del tradicional mensaje "Hello, world!" en pantalla puede hacerse de varias maneras. Lo más sencillo es probablemente escribir la siguiente línea única en un método de proyecto:

```4d  
ALERT("Hello, World!")
```

Este código mostrará una caja de diálogo de alerta estándar de la plataforma con el mensaje "Hello, World!", que contiene un botón de OK. Para ejecutar el código, basta con hacer clic en el botón de ejecución en el editor de métodos:

![alt-text](assets/en/Concepts/helloworld.png)

O bien, podría adjuntar este código a un botón de formulario y ejecutarlo, en cuyo caso al hacer clic en el botón se mostraría la caja de diálogo de alerta. En todo caso, ¡acaba de ejecutar su primera línea de código 4D!


## Asignar los valores

Los datos pueden introducirse y copiarse en variables, campos, elementos de arrays... Poner datos en una variable se llama asignar los datos a la variable y se hace con el operador de asignación (:=). El operador de asignación también se utiliza para asignar datos a campos o elementos de arrays.

```4d
$MyNumber:=3 //asigna 3 a la variable MyNumber 
[Products]Size:=$MyNumber //asigna la variable MyNumber al campo [Products]Size
arrDays{2}:="Tuesday" //asigna la cadena "Tuesday" al segundo elemento de arrDays
MyVar:=Length("Acme") //asigna el resultado de la función (4) a MyVar
$myDate:=!2018/01/21! //asigna una fecha literal
$myHour:=?08:12:55? //asigna una hora literal
```

Debe distinguir el operador de asignación := de los demás operadores. En lugar de combinar expresiones en una nueva expresión, el operador de asignación copia el valor de la expresión a la derecha del operador de asignación en la variable o campo a la izquierda del operador.

**Importante:** no confunda el operador de asignación (:=) con el signo igual (=). Se ha elegido deliberadamente un operador de asignación diferente (y no =) para evitar los problemas y la confusión que suelen producirse con == o === en otros lenguajes de programación. Estos errores son a menudo difíciles de reconocer por el compilador y conducen a una solución de problemas que requiere mucho tiempo.

## Variables

El lenguaje 4D es estricto con los tipos de datos, aunque se permite cierta flexibilidad en muchos casos. Se crea una variable digitada utilizando la palabra clave `var`. Por ejemplo, para crear una variable de tipo fecha, puede escribir:

```4d
var MyDate : Date 
```

La palabra clave `var` permite declarar variables objeto de un tipo de clase definido, por ejemplo:

```4d
var myPerson : cs.Person 
//de la clase de usuario Person
```


Aunque no se suele recomendar, se pueden declarar variables simplemente utilizándolas; no es necesario definirlas formalmente. Por ejemplo, si desea una variable que contenga la fecha actual más 30 días, puede escribir:

```4d
MyOtherDate:=Current date+30
```

La línea de código dice "MyOtherDate obtiene la fecha actual más 30 días" Esta línea declara la variable, la asigna con el tipo de fecha (temporal) y un contenido. Una variable declarada por asignación se interpreta como sin tipo, es decir, puede ser asignada con otros tipos en otras líneas y entonces cambia el tipo dinámicamente. Una variable digitada con `var` no puede cambiar de tipo. Sin embargo, en [modo compilado](interpreted.md), el tipo nunca puede cambiarse, independientemente de cómo se haya declarado la variable.

## Comandos

Los comandos 4D son métodos integrados para realizar una acción. Todos los comandos 4D, como `CREATE RECORD`, o `ALERT`, se describen en el manual _Lenguaje de 4D_, agrupados por temas. Los comandos se utilizan a menudo con parámetros, que se pasan entre corchetes () y separados por punto y coma (;). Ejemplo:

```4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

Algunos comandos se adjuntan a colecciones u objetos, en cuyo caso son métodos temporales que se utilizan con la notación de puntos. Por ejemplo:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

Puede utilizar los plug-ins o los componentes 4D que añaden nuevos comandos a su entorno de desarrollo 4D.

Hay muchos plug-ins propuestos por la comunidad de usuarios de 4D o por desarrolladores terceros. Por ejemplo, utilizando el [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) en macOS:

```4d
PDF REMOVE PAGE(path;page)
```

4D SVG es un ejemplo de componente utilitario que aumenta las capacidades de su aplicación:

```4d
//hacer un dibujo
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```
4D SVG está incluido en 4D.

## Constantes

4D ofrece un conjunto extensivo de constantes predefinidas, cuyos valores son accesibles por nombre. Por ejemplo, `Read Mode` es una constante (valor 2). Las constantes predefinidas aparecen subrayadas por defecto en el editor de métodos 4D. Permiten escribir un código más legible.

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // abrir el documento en modo de sólo lectura
```

## Métodos

4D ofrece un gran número de métodos (o comandos) integrados, pero también le permite crear sus propios **métodos de proyecto**. Los métodos de proyecto son métodos definidos por el usuario que contienen comandos, operadores y otras partes del lenguaje. Los métodos proyecto son métodos genéricos, pero hay otros tipos de métodos: métodos objeto, métodos formulario, métodos tabla (Triggers) y métodos base.

Un método se compone de varias líneas de instrucciones, cada una de las cuales consta de una línea en el método. Una línea de instrucción realiza una acción, y puede ser simple o compleja.

Por ejemplo, la siguiente línea es una sentencia que mostrará una caja de diálogo de confirmación:

```4d
CONFIRM("¿Realmente quiere cerrar esta cuenta?"; "Sí"; "No")
```

Un método también contiene pruebas y bucles que controlan el flujo de ejecución. Los métodos 4D soportan las estructuras `If...Else...End if` y `Case of...Else...End case`, así como los bucles: `While...End while`, `Repeat...Until`, `For...End for`, y `For each...End for each`:

El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:

```4d
For($vlChar;1;Length(vtSomeText))
    //Hacer algo con el carácter si es un TAB
    If(Character code(vtSomeText[[$vlChar]])=Tab)
        //...
    End if
End for
```

Un método proyecto puede llamar a otro método proyecto con o sin parámetros (argumentos). Los parámetros se pasan al método entre paréntesis, a continuación del nombre del método. Cada parámetro está separado del siguiente por un punto y coma (;). Los parámetros están disponibles dentro del método llamado como variables locales numeradas secuencialmente: $1, $2,..., $n. Un método puede devolver un único valor en el parámetro $0. Cuando se llama a un método, sólo hay que escribir su nombre:

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Llama al método Do_Something
ALERT($myText) //"HELLO"

  //Este es el código del método Do_Something
$0:=Uppercase($1)
```


## Tipos de datos

En el lenguaje, los distintos tipos de datos que se pueden manejar se denominan tipos de datos. Existen tipos de datos básicos (cadena, numérico, fecha, hora, booleano, imagen, punteros, arrays), y también tipos de datos compuestos (BLOBs, objetos, colecciones).

Tenga en cuenta que los datos de tipo cadena y numérico pueden asociarse a más de un tipo de campo. Cuando se introducen datos en un campo, el lenguaje convierte automáticamente los datos en el tipo correcto para el campo. Por ejemplo, si se utiliza un campo entero, sus datos se tratan automáticamente como numéricos. En otras palabras, no tiene que preocuparse por mezclar tipos de campos similares al utilizar el lenguaje; éste los gestionará por usted.

Sin embargo, al utilizar el lenguaje es importante no mezclar los diferentes tipos de datos. Del mismo modo que no tiene sentido almacenar "ABC" en un campo de fecha, tampoco tiene sentido poner "ABC" en una variable utilizada para fechas. En la mayoría de los casos, 4D es muy tolerante y tratará de dar sentido a lo que está haciendo. Por ejemplo, si añade un número a una fecha, 4D asumirá que quiere añadir ese número de días a la fecha, pero si intenta añadir una cadena a una fecha, 4D le dirá que la operación no puede funcionar.

Hay casos en los que es necesario almacenar datos como un tipo y utilizarlos como otro. El lenguaje contiene un conjunto completo de comandos que permiten convertir de un tipo de datos a otro. Por ejemplo, es posible que necesite crear un número de pieza que empiece por un número y termine con caracteres como "abc". En este caso, podría escribir:

```4d
[Products]Part Number:=String(Number)+"abc"
```

Si _Number_ es 17, then _[Products]Part Number_ obtendrá el valor “17abc”.

Los tipos de datos están completamente definidos en la sección [Tipos de datos](Concepts/data-types.md).

## Objetos y colecciones

Puedes manejar objetos y colecciones del lenguaje 4D utilizando la notación objeto para obtener o definir sus valores. Por ejemplo:

```4d
employee.name:="Smith"
```

También puede utilizar una cadena entre corchetes, por ejemplo:

```4d
$vName:=employee["name"]
```

Como el valor de una propiedad de objeto puede ser un objeto o una colección, la notación objeto acepta una secuencia de símbolos para acceder a subpropiedades, por ejemplo:

```4d
$vAge:=employee.children[2].age
```

Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:

```
$f:=New object
$f.message:=New formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
```

To access a collection element, you have to pass the element number embedded in square brackets:

```4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //access to 4th element of the collection
```

## Clases

The 4D language supports object classes. Add a `myClass.4dm` file in the Project/Sources/Classes folder of a project to create a class named "myClass".

To instantiate an object of the class in a method, call the user class from the *class store* (`cs`) and use the `new()` member function. Se pueden pasar parámetros.

```4d  
// en un método 4D
$o:=cs.myClass.new() 
```

In the `myClass` class method, use the `Function <methodName>`  statement to define the *methodName* class member method. A class member method can receive and return parameters like any method, and use `This` as the object instance.

```4d  
//in the myClass.4dm file
Function hello
  C_TEXT($0)
  $0:="Hello "+This.who
```

To execute a class member method, just use the `()` operator on the member method of the object instance.

```4d
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message: "Hello World"
```

Optionally, use the `Class constructor` keyword to declare properties of the object.

```4d  
//in the Rectangle.4dm file
Class constructor
C_LONGINT($1;$2)
This.height:=$1
This.width:=$2  
This.name:="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. Por ejemplo:

```4d  
//in the Square.4dm file
Class extends rectangle

Class constructor
C_LONGINT($1)

  // It calls the parent class's constructor with lengths   
  // provided for the Rectangle's width and height
Super($1;$1)

This.name:="Square"
```


## Operadores
When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3. This table shows some familiar numeric operators:

| Operador | Operación      | Ejemplo   |
| -------- | -------------- | --------- |
| +        | Adición        | 1 + 2 = 3 |
| –        | Resta          | 3 - 2 = 1 |
| *        | Multiplicación | 2 * 3 = 6 |
| /        | División       | 6 / 2 = 3 |

Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

| Tipos de datos | Operación        | Ejemplo                                                                                              |
| -------------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| Número         | Adición          | 1 + 2 adds the numbers and results in 3                                                              |
| Cadena         | Concatenación    | “Hello ” + “there” concatenates (joins together) the strings and results in “Hello there”            |
| Fecha y Número | Adición de fecha | !1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989 |


## Expresiones

En pocas palabras, las expresiones devuelven un valor. In fact, when using the 4D language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas.

Expressions are made up of almost all the other parts of the language: commands, operators, variables, fields, object properties, and collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data.

Las expresiones son rara vez "autónomas." There are several places in 4D where an expression can be used by itself. It includes:

- Formula editor (apply formula, query with formula, order by formula)
- El comando `EXECUTE FORMULA`
- The Property list, where an expression can be used as a data source for most of widgets
- Debugger where the value of expressions can be checked
- Quick Report editor as a formula for a column


### Tese de expresiones
You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression.

| Expresión                | Tipo                   | Descripción                                                                                                                                                                   |
| ------------------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Hello”                  | Cadena                 | The word Hello is a string constant, indicated by the double quotation marks.                                                                                                 |
| “Hello ” + “there”       | Cadena                 | Two strings, “Hello ” and “there”, are added together (concatenated) with the string concatenation operator (+). The string “Hello there” is returned.                        |
| “Sr. ” + [People]Name    | Cadena                 | Two strings are concatenated: the string “Mr. ” and the current value of the Name field in the People table. Si el campo contiene "Smith", la expresión devuelve "Mr. Smith". |
| Uppercase("smith")       | Cadena                 | Esta expresión utiliza `Uppercase`, un comando del lenguaje, para convertir la cadena "smith" a mayúsculas. Devuelve “SMITH”.                                                 |
| 4                        | Número                 | Se trata de una constante numérica, 4.                                                                                                                                        |
| 4 * 2                    | Número                 | Dos números, 4 y 2, se multiplican utilizando el operador de multiplicación (*). El resultado es el número 8.                                                                 |
| myButton                 | Número                 | Es una variable asociada a un botón. Devuelve el valor actual del botón: 1 si se ha hecho clic, 0 si no.                                                                      |
| !1997-01-25!             | Fecha                  | Esta es una constante fecha para la fecha 1/25/97 (25 de enero de 1997).                                                                                                      |
| Current date+ 30         | Fecha                  | Esta es una expresión de tipo Fecha que utiliza el comando `Current date` para obtener la fecha de hoy. Añade 30 días a la fecha de hoy y devuelve la nueva fecha.            |
| ?8:05:30?                | Hora                   | Es una constante hora que representa 8 horas, 5 minutos y 30 segundos.                                                                                                        |
| ?2:03:04? + ?1:02:03?    | Hora                   | Esta expresión suma dos horas y devuelve la hora 3:05:07.                                                                                                                     |
| True                     | Booleano               | Este comando devuelve el valor booleano TRUE.                                                                                                                                 |
| 10 # 20                  | Booleano               | Se trata de una comparación lógica entre dos números. El símbolo número (#) significa "es diferente de". Como 10 "es diferente de" 20, la expresión devuelve TRUE.            |
| “ABC” = “XYZ”            | Booleano               | Se trata de una comparación lógica entre dos cadenas. Son diferentes, por lo que la expresión devuelve FALSE.                                                                 |
| My Picture + 50          | Imagen                 | Esta expresión toma la imagen en My Picture, la mueve 50 píxeles a la derecha y devuelve la imagen resultante.                                                                |
| ->[People]Name           | Puntero                | Esta expresión devuelve un puntero al campo llamado [People]Name.                                                                                                             |
| Table (1)                | Puntero                | Este es un comando que devuelve un puntero a la primera tabla.                                                                                                                |
| JSON Parse (MyString)    | Objeto                 | Este es un comando que devuelve MyString como un objeto (si el formato es el adecuado)                                                                                        |
| JSON Parse (MyJSONArray) | Colección              | Este es un comando que devuelve MyJSONArray en forma de colección (si el formato es el adecuado)                                                                              |
| Form.pageNumber          | Propiedad objeto       | Una propiedad objeto es una expresión que puede ser de todo tipo soportado                                                                                                    |
| Col[5]                   | Elementos de colección | Un elemento de colección es una expresión que puede ser de todo tipo soportado                                                                                                |
| $entitySel[0]            | Entity                 | Un elemento de una selección de entidades ORDA es una expresión de tipo entidad. Este tipo de expresión es **no asignable**                                                   |

### Expresiones asignables y no asignables

Una expresión puede ser simplemente una constante literal, como el número 4 o la cadena "Hello", o una variable como `$myButton`. También puede utilizar los operadores. Por ejemplo, 4 + 2 es una expresión que utiliza el operador de adición para sumar dos números y devolver el resultado 6. En todos los casos, estas expresiones son **no asignables**, lo que significa que no se les puede asignar un valor. En 4D, las expresiones pueden ser **asignables**. Una expresión es asignable cuando puede utilizarse a la derecha de una asignación. Por ejemplo:

```4d  
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write:  
Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable:
Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```
En general, las expresiones que utilizan un operador no son asignables. Por ejemplo, `[Person]FirstName+" "+[Person]LastName` no es asignable.


## Punteros

El lenguaje 4D ofrece una implementación avanzada de punteros, que permite escribir código poderoso y modular. Puede utilizar punteros para referenciar tablas, campos, variables, arrays y elementos de arrays.

Un puntero a un elemento se crea añadiendo un símbolo "->" antes del nombre del elemento, y se puede desreferenciar añadiendo el símbolo "->" después del nombre del puntero.

```4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## Comentarios

Los comentarios son líneas de instrucciones inactivas. Estas líneas no son interpretadas por el programa 4D y no se ejecutan cuando el código se llama.

Hay dos maneras de crear comentarios:

- `//` para crear una línea de comentario
- `/*...*/` para los bloques de comentarios en línea o multilínea.

Ambos estilos de comentarios pueden utilizarse simultáneamente.

#### Línea de comentario (//)

Inserte `//` al principio de una línea o después de una instrucción para añadir una línea de comentario. Ejemplo:

```4d
//Este es un comentario
For($vCounter;1;100) //Inicio del bucle
  //comment
  //comment
  //comment
 End for
```

#### Comentarios en línea o multilínea (/* */)

Rodea el contenido con los caracteres `/*` ... `*/` para crear comentarios en línea o bloques de comentarios multilínea. Tanto los bloques de comentarios en línea como los multilínea comienzan con `/*` y terminan con `*/`.

- Las **líneas de comentarios en línea** se pueden insertar en cualquier parte del código. Ejemplo:

```4d
For /* línea de comentario */ ($vCounter;1;100)
    ...
End for
```

- Los **bloques de comentarios multilíneas** permiten comentar un número ilimitado de líneas. Los bloques de comentarios pueden anidarse (útil desde que el editor de código 4D soporta los bloques contraídos). Ejemplo:

```4d
For ($vCounter;1;100)
/*
comentarios  
    /* 
    otros comentarios
    */
*/
...
End for
```