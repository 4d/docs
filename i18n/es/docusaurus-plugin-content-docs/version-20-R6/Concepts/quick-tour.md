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

El lenguaje 4D es estricto con los tipos de datos, aunque se permite cierta flexibilidad en muchos casos. Por ejemplo, para crear una variable de tipo fecha, puede escribir: Se crea una variable digitada utilizando la palabra clave <code>var</code>.

```4d
var MyDate : Date
```

La palabra clave `var` permite declarar variables objeto de un tipo de clase definido, por ejemplo:

```4d
var myPerson : cs.Person
//variable de la clase usuario Person
```

Aunque no se suele recomendar, se pueden crear variables simplemente utilizándolas; no es necesario definirlas formalmente. Por ejemplo, si desea una variable que contenga la fecha actual más 30 días, puede escribir:

```4d
MyOtherDate:=Current date+30
```

La línea de código dice "MyOtherDate obtiene la fecha actual más 30 días" Esta línea declara la variable, la asigna con el tipo de fecha (temporal) y un contenido. Esta línea crea la variable, la asigna con el tipo de fecha (temporal) y un contenido. Una variable creada por asignación se interpreta como sin tipo, es decir, puede ser asignada con otros tipos en otras líneas y cambia el tipo dinámicamente. Esta flexibilidad no se aplica a las variables declaradas con la palabra clave `var` (su tipo no puede cambiar) y en [modo compilado](interpreted.md), donde el tipo nunca puede cambiarse, independientemente de cómo se haya creado la variable.

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

4D ofrece un conjunto extensivo de constantes predefinidas, cuyos valores son accesibles por nombre. Permiten escribir un código más legible. Por ejemplo, `Read Mode` es una constante (valor 2).

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // abrir el documento en modo de sólo lectura
```

> Las constantes predefinidas aparecen <u>subrayadas</u> por defecto en el editor de código 4D.

## Métodos

4D ofrece un gran número de métodos (o comandos) integrados, pero también le permite crear sus propios **métodos de proyecto**. Los métodos de proyecto son métodos definidos por el usuario que contienen comandos, operadores y otras partes del lenguaje.
Los métodos proyecto son métodos genéricos, pero hay otros tipos de métodos: métodos objeto, métodos formulario, métodos tabla (Triggers) y métodos base.

Un método se compone de varias líneas de instrucciones, cada una de las cuales consta de una línea en el método. Una línea de instrucción realiza una acción, y puede ser simple o compleja.

Por ejemplo, la siguiente línea es una sentencia que mostrará una caja de diálogo de confirmación:

```4d
CONFIRM("¿Realmente quiere cerrar esta cuenta?"; "Sí"; "No")
```

Un método también contiene pruebas y bucles que controlan el flujo de ejecución. 4D methods support `If...Else...End if` and `Case of... Else...End case` branching structures as well as looping structures: `While...End while`, `Repeat...Until`, `For...End for`, and `For each... End for each`:

El siguiente ejemplo recorre todos los caracteres del texto vtSomeText:

```4d
For($vlChar;1;Length(vtSomeText))
	//Hacer algo con el carácter si es un TAB


	If(Character code(vtSomeText[[$vlChar]])=Tab)
		//...
	End if
End for
```

Un método proyecto puede llamar a otro método proyecto con o sin parámetros (argumentos). Los parámetros se pasan al método entre paréntesis, a continuación del nombre del método. Cada parámetro está separado del siguiente por un punto y coma (;). Los parámetros están disponibles directamente en el método llamado si se han declarado. Un método puede devolver un único valor en un parámetro, que debe ser declarado. Cuando se llama a un método, sólo hay que escribir su nombre:

```4d
$myText:="hello"
$myText:=Hacer_algo($myText) //Llamar al método Do_Something
ALERT($myText) //"HELLO"

  //Aquí el código del método Do_Something
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

Si *Number* es 17, entonces *[Products]Part Number* obtendrá el valor “17abc”.

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

Tenga en cuenta que si el valor de la propiedad del objeto es un objeto que encapsula un método (una fórmula), debe añadir paréntesis () al nombre de la propiedad para ejecutar el método:

```
$f:=New object
$f.message:=Formula(ALERT("Hello world!"))
$f.message() //muestra "Hello world!"
```

Para acceder a un elemento de la colección, debe pasar el número del elemento entre corchetes:

```4d
var myColl : Collection
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //acceso al 4º elemento de la colección
```

## Clases

El lenguaje 4D soporta las clases de objetos. Añade un archivo `myClass.4dm` en la carpeta Project/Sources/Classes de un proyecto para crear una clase llamada "myClass".

Para instanciar un objeto de la clase en un método, llame la clase usuario desde el *class store* (`cs`) y utilice la función miembro `new()`. Se pueden pasar parámetros.

```4d
// en un método 4D
$o:=cs.myClass.new()
```

En el método clase `myClass`, utilice la instrucción `Function<methodName>` para definir la función miembro clase *methodName*. Una función miembro de clase puede recibir y devolver parámetros como todo método, y utilizar `This` como instancia del objeto.

```4d

//en el archivo myClass.4dm
Function hello -> $welcome : Text
  $welcome:="Hello "+This.who
```

Para ejecutar una función miembro de clase, basta con utilizar el operador `()` en la función miembro de la instancia del objeto.

```4d
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message: "Hello World"
```

Opcionalmente, utilice la palabra clave `Class constructor` para declarar las propiedades del objeto.

```4d
//en el archivo Rectangle.4dm
Class constructor ($width : Integer; $height : Integer)
This.height:=$height
This.width:=$width
This.name:="Rectangle"
```

Una clase puede extender otra clase utilizando `Class extends <ClassName>`. Las superclasses se pueden llamar con el comando `Super`. Por ejemplo:

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
- El comando `EXECUTE FORMULA`
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
| Uppercase("smith")                                                                                                                                                                                                                                                                                                                                                               | String                 | Esta expresión utiliza `Uppercase`, un comando del lenguaje, para convertir la cadena "smith" a mayúsculas. Devuelve “SMITH”.                                                                                        |
| 4                                                                                                                                                                                                                                                                                                                                                                                                   | Number                 | Se trata de una constante numérica, 4.                                                                                                                                                                                               |
| 4 \* 2                                                                                                                                                                                                                                                                                                                                                                                              | Number                 | Dos números, 4 y 2, se multiplican utilizando el operador de multiplicación (\*). El resultado es el número 8.                                                                                    |
| myButton                                                                                                                                                                                                                                                                                                                                                                                            | Number                 | Es una variable asociada a un botón. Devuelve el valor actual del botón: 1 si se ha hecho clic, 0 si no.                                                                                             |
| !1997-01-25!                                                                                                                                                                                                                                                                                                                                                                                        | Fecha                  | Esta es una constante fecha para la fecha 1/25/97 (25 de enero de 1997).                                                                                                                                          |
| Current date+ 30                                                                                                                                                                                                                                                                                                                                                                                    | Fecha                  | Esta es una expresión de tipo Fecha que utiliza el comando `Current date` para obtener la fecha de hoy. Añade 30 días a la fecha de hoy y devuelve la nueva fecha.                                                   |
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
| $entitySel[0]                                                                                                                                                                                                                                                                                                                                   | Entity                 | Un elemento de una selección de entidades ORDA es una expresión de tipo entidad. Este tipo de expresión es **no asignable**                                                                                                          |

### Expresiones asignables y no asignables

Una expresión puede ser simplemente una constante literal, como el número 4 o la cadena "Hello", o una variable como `$myButton`. También puede utilizar los operadores. Por ejemplo, 4 + 2 es una expresión que utiliza el operador de adición para sumar dos números y devolver el resultado 6. En todos los casos, estas expresiones son **no asignables**, lo que significa que no se les puede asignar un valor.
En 4D, las expresiones pueden ser **asignables**. Una expresión es asignable cuando puede utilizarse a la izquierda del operador de asignación. Por ejemplo:

```4d
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write: Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable: Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
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

## Código en varias líneas

Puede escribir una única instrucción en varias líneas terminando cada línea de la instrucción con un caracter barra invertida final `\`. El lenguaje 4D considerará todas las líneas a la vez. Por ejemplo, ambas sentencias son equivalentes:

```4d
$str:=String("hello world!")
```

```4d
$str:=String("hello"+\
" world"+\
"!")
```

## Comentarios

Los comentarios son líneas de instrucciones inactivas. Estas líneas no son interpretadas por el programa 4D y no se ejecutan cuando el código se llama.

Hay dos maneras de crear comentarios:

- `//` para crear una línea de comentario
- `/*...*/` para los bloques de comentarios en línea o multilínea.

Ambos estilos de comentarios pueden utilizarse simultáneamente.

#### Comentarios de una línea (`//comentario`)

Inserte `//` al principio de una línea o después de una instrucción para añadir una línea de comentario. Ejemplo:

```4d
//Este es un comentario
For($vCounter;1;100) //Bucle inicial
  //comentario
  //comentario
  //comentario
End for
```

#### Comentarios en línea o multilínea (`/*comment*/`)

Rodea el contenido con los caracteres `/*` ... `*/` para para crear bloques de comentarios en línea o multilíneas. Tanto los bloques de comentarios en línea como los multilínea comienzan con `/*` y terminan con `*/`.

- Las **líneas de comentarios en línea** se pueden insertar en cualquier parte del código. Ejemplo:

```4d
For /* inline comment */ ($vCounter;1;100)
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
```

## Secuencias de escape

El lenguaje 4D permite utilizar secuencias de escape (también llamadas caracteres de escape). Una secuencia de escape es una secuencia de caracteres que puede utilizarse para sustituir a un caracter "especial".

La secuencia consiste en una barra invertida `\`, seguida de un caracter. Por ejemplo, `\t` es una secuencia de escape para el caracter **Tab**. Las secuencias de escape facilitan la introducción de caracteres especiales: el ejemplo anterior (`\t`) sustituye a la entrada "Caracter(Tab)".

En 4D, se pueden utilizar las siguientes secuencias de escape:

| Secuencias de escape | Carácter reemplazado                      |
| -------------------- | ----------------------------------------- |
| `\n`                | LF (Retorno línea)     |
| `\t`                | HT (Tabulación)        |
| `\r`                | CR (Retorno carro)     |
| `\\`               | `\` (Barra invertida) |
| `\"`                | " (Comillas)           |

> Es posible utilizar mayúsculas o minúsculas en las secuencias de escape.

En el siguiente ejemplo, el caracter **Retorno de carro** (secuencia de escape `\r`) se inserta en una sentencia para obtener un diálogo:

`ALERT("The operation has been completed successfully.\rYou may now disconnect.")`
