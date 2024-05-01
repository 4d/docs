---
id: quick-tour
title: Un recorrido rápido
sidebar_label: Un recorrido rápido
---

Utilizando el lenguaje 4D, la impresión del tradicional mensaje "Hello, world!" en pantalla puede hacerse de varias maneras. Lo más sencillo es probablemente escribir la siguiente línea única en un método de proyecto:

```4d
ALERT("Hello, World!")
```

Este código mostrará una caja de diálogo de alerta estándar de la plataforma con el mensaje "Hello, World!", que contiene un botón de OK. Para ejecutar el código, basta con hacer clic en el botón de ejecución en el editor de código:

![hello-world](../assets/en/Concepts/helloworld.png)

O bien, podría adjuntar este código a un botón de formulario y ejecutarlo, en cuyo caso al hacer clic en el botón se mostraría la caja de diálogo de alerta. En todo caso, ¡acaba de ejecutar su primera línea de código 4D!

## Asignar los valores

Los datos pueden introducirse y copiarse en variables, campos, elementos de arrays... Poner datos en una variable se llama asignar los datos a la variable y se hace con el operador de asignación (:=). El operador de asignación también se utiliza para asignar datos a campos o elementos de arrays.

```4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element
MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //assigns a date literal
$myHour:=?08:12:55? //assigns a time literal
```

Debe distinguir el operador de asignación := de los demás operadores. En lugar de combinar expresiones en una nueva expresión, el operador de asignación copia el valor de la expresión a la derecha del operador de asignación en la variable o campo a la izquierda del operador.

**Important:** Do NOT confuse the assignment operator := with the equality comparison operator =. Se ha elegido deliberadamente un operador de asignación diferente (y no =) para evitar los problemas y la confusión que suelen producirse con == o === en otros lenguajes de programación. Estos errores son a menudo difíciles de reconocer por el compilador y conducen a una solución de problemas que requiere mucho tiempo.

## Variables

El lenguaje 4D es estricto con los tipos de datos, aunque se permite cierta flexibilidad en muchos casos. You create a typed variable using the `var` keyword. Se crea una variable digitada utilizando la palabra clave <code>var</code>.

```4d
var MyDate : Date
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```4d
var myPerson : cs.Person
//variable de la clase usuario Person
```

Aunque no se suele recomendar, se pueden declarar variables simplemente utilizándolas; no es necesario definirlas formalmente. Por ejemplo, si desea una variable que contenga la fecha actual más 30 días, puede escribir:

```4d
MyOtherDate:=Current date+30
```

La línea de código dice "MyOtherDate obtiene la fecha actual más 30 días" Esta línea declara la variable, la asigna con el tipo de fecha (temporal) y un contenido. Esta línea declara la variable, la asigna con el tipo de fecha (temporal) y un contenido. Una variable declarada por asignación se interpreta como sin tipo, es decir, puede ser asignada con otros tipos en otras líneas y entonces cambia el tipo dinámicamente. A variable typed with `var` cannot change the type. In [compiled mode](interpreted.md) however, the type can never be changed, regardless of how the variable was declared.

## Comandos

Los comandos 4D son métodos integrados para realizar una acción. Los comandos se utilizan a menudo con parámetros, que se pasan entre corchetes () y separados por punto y coma (;). Ejemplo:

```4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

Algunos comandos se adjuntan a colecciones u objetos, en cuyo caso son funciones temporales que se utilizan con la notación de puntos. Por ejemplo:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

Puede utilizar los plug-ins o los componentes 4D que añaden nuevos comandos a su entorno de desarrollo 4D.

Hay muchos plug-ins propuestos por la comunidad de usuarios de 4D o por desarrolladores terceros. For example, using the [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) on macOS:

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

4D ofrece un conjunto extensivo de constantes predefinidas, cuyos valores son accesibles por nombre. Permiten escribir un código más legible. For example, `Read Mode` is a constant (value 2).

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // abrir el documento en modo de sólo lectura
```

> Las constantes predefinidas aparecen <u>subrayadas</u> por defecto en el editor de código 4D.

## Métodos

4D provides a large number of built-in methods (or commands) but also lets you can create your own **project methods**. Los métodos de proyecto son métodos definidos por el usuario que contienen comandos, operadores y otras partes del lenguaje.
Los métodos proyecto son métodos genéricos, pero hay otros tipos de métodos: métodos objeto, métodos formulario, métodos tabla (Triggers) y métodos base.

Un método se compone de varias líneas de instrucciones, cada una de las cuales consta de una línea en el método. Una línea de instrucción realiza una acción, y puede ser simple o compleja.

Por ejemplo, la siguiente línea es una sentencia que mostrará una caja de diálogo de confirmación:

```4d
CONFIRM("¿Realmente quiere cerrar esta cuenta?"; "Sí"; "No")
```

Un método también contiene pruebas y bucles que controlan el flujo de ejecución. 4D methods support `If...Else...End if` and `Case of...Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each...End for each`:

El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:

```4d
For($vlChar;1;Length(vtSomeText))
	//Do something with the character if it is a TAB


	If(Character code(vtSomeText[[$vlChar]])=Tab)
		//...
	End if
End for
```

Un método proyecto puede llamar a otro método proyecto con o sin parámetros (argumentos). Los parámetros se pasan al método entre paréntesis, a continuación del nombre del método. Cada parámetro está separado del siguiente por un punto y coma (;). Los parámetros están disponibles directamente en el método llamado si se han declarado. Un método puede devolver un único valor en un parámetro, que debe ser declarado. Cuando se llama a un método, sólo hay que escribir su nombre:

```4d
$myText:="hello"
$myText:=Do_Something($myText) //Call the Do_Something method
ALERT($myText) //"HELLO"

  //Here the code of the method Do_Something  
#DECLARE ($in : Text) -> $out : Text
$out:=Uppercase($in)
```

## Tipos de datos

En el lenguaje, los distintos tipos de datos que se pueden manejar se denominan tipos de datos. Existen tipos de datos básicos (cadena, numérico, fecha, hora, booleano, imagen, punteros, arrays), y también tipos de datos compuestos (BLOBs, objetos, colecciones).

Tenga en cuenta que los datos de tipo cadena y numérico pueden asociarse a más de un tipo de campo. Cuando se introducen datos en un campo, el lenguaje convierte automáticamente los datos en el tipo correcto para el campo. Por ejemplo, si se utiliza un campo entero, sus datos se tratan automáticamente como numéricos. En otras palabras, no tiene que preocuparse por mezclar tipos de campos similares al utilizar el lenguaje; éste los gestionará por usted.

Sin embargo, al utilizar el lenguaje es importante no mezclar los diferentes tipos de datos. Del mismo modo que no tiene sentido almacenar "ABC" en un campo de fecha, tampoco tiene sentido poner "ABC" en una variable utilizada para fechas. En la mayoría de los casos, 4D es muy tolerante y tratará de dar sentido a lo que está haciendo. Por ejemplo, si añade un número a una fecha, 4D asumirá que quiere añadir ese número de días a la fecha, pero si intenta añadir una cadena a una fecha, 4D le dirá que la operación no puede funcionar.

Hay casos en los que es necesario almacenar datos como un tipo y utilizarlos como otro. El lenguaje contiene un conjunto completo de comandos que permiten convertir de un tipo de datos a otro. Por ejemplo, es posible que necesite crear un número de pieza que empiece por un número y termine con caracteres como "abc". En este caso, podría escribir:

```4d
[Products]Part Number:=String(Number)+"abc"
```

If _Number_ is 17, then _[Products]Part Number_ will get the string “17abc”.

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

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

Tenga en cuenta que si el valor de la propiedad del objeto es un objeto que encapsula un método (una fórmula), debe añadir paréntesis () al nombre de la propiedad para ejecutar el método:

```
$f:=New object
$f.message:=Formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
```

Para acceder a un elemento de la colección, debe pasar el número del elemento entre corchetes:

```4d
var myColl : Collection
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //acceso al 4º elemento de la colección
```

## Clases

El lenguaje 4D soporta las clases de objetos. Add a `myClass.4dm` file in the Project/Sources/Classes folder of a project to create a class named "myClass".

To instantiate an object of the class in a method, call the user class from the _class store_ (`cs`) and use the `new()` member function. Se pueden pasar parámetros.

```4d
// en un método 4D
$o:=cs.myClass.new()
```

In the `myClass` class method, use the `Function <methodName>` statement to define the _methodName_ class member function. A class member function can receive and return parameters like any method, and use `This` as the object instance.

```4d

//in the myClass.4dm file
Function hello -> $welcome : Text
  $welcome:="Hello "+This.who
```

To execute a class member function, just use the `()` operator on the member function of the object instance.

```4d
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message: "Hello World"
```

Optionally, use the `Class constructor` keyword to declare properties of the object.

```4d
//en el archivo Rectangle.4dm
Class constructor ($width : Integer; $height : Integer)
This.height:=$height
This.width:=$width
This.name:="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. Por ejemplo:

```4d
//en el archivo Square.4dm
Class extends rectangle

Class constructor ($length : Integer)
  // Llama al constructor de la clase padre con las longitudes   
  // ofrecidas para el ancho y alto del rectángulo
Super($length;$length)

This.name:="Square"
```

## Operadores

Cuando se utiliza el lenguaje, es raro que se quiera simplemente un dato. Es más probable que quiera hacer algo con esos datos. Estos cálculos se realizan con operadores. Los operadores, en general, toman dos datos y realizan una operación sobre ellos que da como resultado un nuevo dato. Usted ya conoce a la mayoría de los operadores. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3.

| Operador | Operación      | Ejemplo    |
| -------- | -------------- | ---------- |
| -        | Adición        | 1 + 2 = 3  |
| –        | Resta          | 3 - 2 = 1  |
| *        | Multiplicación | 2 \* 3 = 6 |
| /        | División       | 6 / 2 = 3  |

Los operadores numéricos son sólo un tipo de operador disponible. 4D soporta múltiples tipos de datos, como números, texto, fechas e imágenes, por lo que existen operadores que realizan operaciones con estos diferentes tipos de datos.

Los mismos símbolos se utilizan a menudo para diferentes operaciones, dependiendo del tipo de datos. Por ejemplo, el signo más (+) realiza diferentes operaciones con diferentes datos:

| Tipos de datos | Operación        | Ejemplo                                                                                                           |
| -------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| Number         | Adición          | 1 + 2 suma los números y da como resultado 3                                                                      |
| String         | Concatenación    | "Hola" + "a todos" concatena (une) las cadenas y da como resultado "Hola a todos"              |
| Fecha y Número | Adición de fecha | !1989-01-01! !1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989 |

## Expresiones

En pocas palabras, las expresiones devuelven un valor. De hecho, al utilizar el lenguaje 4D, se utilizan expresiones todo el tiempo y se tiende a pensar en ellas sólo en términos del valor que representan. Las expresiones también se llaman fórmulas.

Las expresiones se componen de casi todas las demás partes del lenguaje: comandos, operadores, variables, campos, propiedades de objetos y elementos de colección. Se utilizan expresiones para escribir líneas de código, que a su vez se utilizan para construir métodos. El lenguaje utiliza expresiones siempre que necesita un dato.

Las expresiones son rara vez "autónomas." Hay varios lugares en 4D donde una expresión puede ser utilizada por sí misma. Incluye:

- Editor de fórmulas (apply formula, query with formula, order by formula)
- The `EXECUTE FORMULA` command
- La lista de propiedades, donde se puede utilizar una expresión como fuente de datos para la mayoría de los widgets
- Depurador donde se puede comprobar el valor de las expresiones
- En el editor de informes rápidos como fórmula para una columna

### Tese de expresiones

Se hace referencia a una expresión por el tipo de datos que devuelve. Hay varios tipos de expresiones. En la siguiente tabla se dan ejemplos de cada tipo de expresión.

| Expression                                                                                                                                                                                                                                                                                                                                                                                          | Tipo                   | Descripción                                                                                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Hello”                                                                                                                                                                                                                                                                                                                                                                                             | String                 | La palabra Hola es una constante cadena, indicada por las comillas dobles.                                                                                                                                                           |
| “Hello ” + “there”                                                                                                                                                                                                                                                                                                                                                                                  | String                 | Dos cadenas, "Hola" y "a todos", se suman (concatenan) con el operador de concatenación de cadenas (+). Se devuelve la cadena "Hola".                                          |
| “Sr. ” + [People]Name                                                                                                                                                                                                                                                                                                           | String                 | Se concatenan dos cadenas: la cadena "Sr." y el valor actual del campo Nombre de la tabla Personas. Si el campo contiene "Smith", la expresión devuelve "Mr. Smith". |
| Uppercase("smith")                                                                                                                                                                                                                                                                                                                                                               | String                 | This expression uses `Uppercase`, a command from the language, to convert the string “smith” to uppercase. Devuelve “SMITH”.                                                                                         |
| 4                                                                                                                                                                                                                                                                                                                                                                                                   | Number                 | Se trata de una constante numérica, 4.                                                                                                                                                                                               |
| 4 \* 2                                                                                                                                                                                                                                                                                                                                                                                              | Number                 | Dos números, 4 y 2, se multiplican utilizando el operador de multiplicación (\*). El resultado es el número 8.                                                                                    |
| myButton                                                                                                                                                                                                                                                                                                                                                                                            | Number                 | Es una variable asociada a un botón. Devuelve el valor actual del botón: 1 si se ha hecho clic, 0 si no.                                                                                             |
| !1997-01-25!                                                                                                                                                                                                                                                                                                                                                                                        | Fecha                  | Esta es una constante fecha para la fecha 1/25/97 (25 de enero de 1997).                                                                                                                                          |
| Current date+ 30                                                                                                                                                                                                                                                                                                                                                                                    | Fecha                  | This is a date expression that uses the `Current date` command to get today’s date. Añade 30 días a la fecha de hoy y devuelve la nueva fecha.                                                                       |
| ?8:05:30?                                                                                                                                                                                                                                                                                                                                                           | Hora                   | Es una constante hora que representa 8 horas, 5 minutos y 30 segundos.                                                                                                                                                               |
| ?2:03:04? + ?1:02:03? ?2:03:04? + ?1:02:03? ?2:03:04? + ?1:02:03? ?2:03:04? + ?1:02:03? + ?1:02:03? | Hora                   | Esta expresión suma dos horas y devuelve la hora 3:05:07.                                                                                                                                            |
| True                                                                                                                                                                                                                                                                                                                                                                                                | Boolean                | Este comando devuelve el valor booleano TRUE.                                                                                                                                                                                        |
| 10 # 20                                                                                                                                                                                                                                                                                                                                                                                             | Boolean                | Se trata de una comparación lógica entre dos números. El símbolo número (#) significa "es diferente de". Como 10 "es diferente de" 20, la expresión devuelve TRUE.                |
| “ABC” = “XYZ”                                                                                                                                                                                                                                                                                                                                                                                       | Boolean                | Se trata de una comparación lógica entre dos cadenas. Son diferentes, por lo que la expresión devuelve FALSE.                                                                                                        |
| My Picture + 50                                                                                                                                                                                                                                                                                                                                                                                     | Picture                | Esta expresión toma la imagen en My Picture, la mueve 50 píxeles a la derecha y devuelve la imagen resultante.                                                                                                                       |
| ->[People]Name                                                                                                                                                                                                                                                                                                                                  | Puntero                | Esta expresión devuelve un puntero al campo llamado [People]Name.                                                                                                                |
| Table (1)                                                                                                                                                                                                                                                                                                                                                                        | Puntero                | Este es un comando que devuelve un puntero a la primera tabla.                                                                                                                                                                       |
| JSON Parse (MyString)                                                                                                                                                                                                                                                                                                                                                            | Object                 | Este es un comando que devuelve MyString como un objeto (si el formato es el adecuado)                                                                                                                                            |
| JSON Parse (MyJSONArray)                                                                                                                                                                                                                                                                                                                                                         | Collection             | Este es un comando que devuelve MyJSONArray en forma de colección (si el formato es el adecuado)                                                                                                                                  |
| Form.pageNumber                                                                                                                                                                                                                                                                                                                                                                     | Propiedad objeto       | Una propiedad objeto es una expresión que puede ser de todo tipo soportado                                                                                                                                                                           |
| Col[5]                                                                                                                                                                                                                                                                                                                                          | Elementos de colección | Un elemento de colección es una expresión que puede ser de todo tipo soportado                                                                                                                                                                       |
| $entitySel[0]                                                                                                                                                                                                                                                                                                                                   | Entity                 | Un elemento de una selección de entidades ORDA es una expresión de tipo entidad. This kind of expression is **non-assignable**                                                                                                       |

### Expresiones asignables y no asignables

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. También puede utilizar los operadores. Por ejemplo, 4 + 2 es una expresión que utiliza el operador de adición para sumar dos números y devolver el resultado 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them.
In 4D, expressions can be **assignable**. Una expresión es asignable cuando puede utilizarse a la izquierda del operador de asignación. Por ejemplo:

```4d
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write: Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable: Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```

En general, las expresiones que utilizan un operador no son asignables. For example, `[Person]FirstName+" "+[Person]LastName` is not assignable.

## Punteros

El lenguaje 4D ofrece una implementación avanzada de punteros, que permite escribir código poderoso y modular. Puede utilizar punteros para referenciar tablas, campos, variables, arrays y elementos de arrays.

A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.

```4d
MyVar:="Hello"
MyPointer:=->MyVar
ALERT(MyPointer->)
```

## Código en varias líneas

You can write a single statement on several lines by terminating each line of the statement with a trailing backslash `\` character. El lenguaje 4D considerará todas las líneas a la vez. Por ejemplo, ambas sentencias son equivalentes:

```4d
$str:=String("hello world!")
```

```4d
$str:=String("hello"+\
" world"+\
+"!")
```

## Comentarios

Los comentarios son líneas de instrucciones inactivas. Estas líneas no son interpretadas por el programa 4D y no se ejecutan cuando el código se llama.

Hay dos maneras de crear comentarios:

- `//` for single line comments
- `/*...*/` para los bloques de comentarios en línea o multilínea.

Ambos estilos de comentarios pueden utilizarse simultáneamente.

#### Single line comments (`//comment`)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Ejemplo:

```4d
//Este es un comentario
For($vCounter;1;100) //Bucle inicial
  //comentario
  //comentario
  //comentario
End for
```

#### Inline or multiline comments (`/*comment*/`)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Ejemplo:

```4d
For /* inline comment */ ($vCounter;1;100)
	...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Los bloques de comentarios pueden anidarse (útil desde que el editor de código 4D soporta los bloques contraídos). Ejemplo:

```4d
For ($vCounter;1;100)
/*
comments  
	/*
	other comments
	*/
*/
...
End for
```

## Secuencias de escape

El lenguaje 4D permite utilizar secuencias de escape (también llamadas caracteres de escape). Una secuencia de escape es una secuencia de caracteres que puede utilizarse para sustituir a un caracter "especial".

The sequence consists of a backslash `\`, followed by a character. For instance, `\t` is an escape sequence for the **Tab** character. Escape sequences facilitate the entry of special characters: the previous example (`\t`) replaces the entry "Character(Tab)".

En 4D, se pueden utilizar las siguientes secuencias de escape:

| Secuencias de escape | Carácter reemplazado                      |
| -------------------- | ----------------------------------------- |
| `\n`                | LF (Retorno línea)     |
| `\t`                | HT (Tabulación)        |
| `\r`                | CR (Retorno carro)     |
| `\\`               | `\` (Barra invertida) |
| `\"`                | " (Comillas)           |

> Es posible utilizar mayúsculas o minúsculas en las secuencias de escape.

In the following example, the **Carriage return** character (escape sequence `\r`) is inserted in a statement in order to obtain a dialog box:

`ALERT("The operation has been completed successfully.\rYou may now disconnect.")`
