---
id: variables
title: Variables
---

Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. **Fields** store data permanently on disk; **variables** store data temporarily in memory.

Cuando define su base, especifique a 4D los nombres y los tipos de campos que desea utilizar. Variables are much the same—you also give them names and different types (see [Data types](Concepts/data-types.md)).

Una vez creada, puede utilizar una variable dondequiera que la necesite en su aplicación. Por ejemplo, podría necesitar almacenar una variable texto en un campo del mismo tipo:

```4d
 [MyTable]MyField:=MyText
```

Las variables son objetos del lenguaje; puede crear y utilizar variables que nunca aparecerán en la pantalla. En sus formularios, puede mostrar variables en la pantalla (excepto de los punteros y de los BLOB), introducir datos en ellas e imprimirlas en informes. De este modo, las variables de área introducibles y no introducibles actúan igual que los campos, y los mismos controles integrados están disponibles al crearlos. Las variables de formulario también pueden controlar botones, list boxes, áreas de desplazamiento, botones imagen, etc., o mostrar los resultados de cálculos que no necesitan ser guardados.

## Declaración de variables

Generalmente se crean variables declarándolas. El lenguaje 4D ofrece dos formas de declarar las variables:

- using the `var` keyword (recommended specially if your code uses objects and classes, and this syntax enhances code editor suggestions and type-ahead features),
- utilizando uno de los comandos del lenguaje 4D del tema "Compilador" o "Arrays" (sintaxis heredada).

When variables are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been [assigned](#assigning-data). Alternatively, when declaring variables, you can [initialize](#initializing-variables-in-the-declaration-line) their value along with their data type all within one line.

:::note

Aunque no es recomendable, puede crear variables simplemente utilizándolas; no es necesario declararlas formalmente. Por ejemplo, para crear una variable que mantenga la fecha actual más 30 días, puede escribir:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

Cuando una variable se crea antes de ser declarada, no se inicializa en el paso de declaración.

:::

Para declarar una variable de cualquier tipo, utilice la siguiente sintaxis:

`var <varName>{; <varName2>;...}{ : <varType>}`

Por ejemplo:

```4d
var $myText : Text  //una variable texto
var myDate1; myDate2 : Date  //varias variables fecha
var $myFile : 4D.File  //una variable objeto clase archivo
var $myVar //una variable variant
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varType` puede ser:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

Si se omite `varType`, se crea una variable de tipo **variant**.

La siguiente tabla enumera todos los valores `varType` soportados:

| varType                     | Contenido                                                   |
| --------------------------- | ----------------------------------------------------------- |
| `Text`                      | Valor texto                                                 |
| `Date`                      | Valor fecha                                                 |
| `Time`                      | Valor Hora                                                  |
| `Boolean`                   | Valor booleano                                              |
| `Integer`                   | Valor entero largo                                          |
| `Real`                      | Valor real                                                  |
| `Pointer`                   | Valor puntero                                               |
| `Picture`                   | Valor imagen                                                |
| `Blob`                      | Valeor Blob escalar                                         |
| `Collection`                | Valor colección                                             |
| `Variant`                   | Valor variant                                               |
| `Object`                    | Objeto con clase por defecto (4D.object) |
| `4D.<className>`            | Objeto del nombre de la clase 4D                            |
| `cs.<className>`            | Objeto del nombre de la clase usuario                       |
| `cs.<namespace><className>` | Object of the `<namespace>` component class name            |

### Ejemplos

- Para declarar variables básicas locales y de proceso:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalente a:  
var $o : 4D.Object
//también equivalente a C_OBJECT($o)
```

- Para declarar las variables objeto de la clase 4D:

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- Para declarar las variables objeto de la clase usuario:

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```

## Inicialización de variables en la línea de declaración

Al declarar variables, tiene la flexibilidad de especificar su tipo de datos y proporcionar un valor inicial en una sola declaración. He aquí algunos ejemplos:

```4d
var $a : Text:="hello"
var $b : Date:=!2023-09-12!
var $c : Object:=New object()
var $d : cs.Customer:=cs.Customer.new()
```

Las variables también pueden ser declaradas e inicializadas sin mencionar explícitamente su tipo de datos, en cuyo caso su tipo será inferido por 4D. He aquí algunos ejemplos:

```4d
var $text:="hello" // Inferido como Texto 
var $number:=20 // Inferido como Real 
var $obj:={}  // Inferido como Objeto 
var $mycol:=[] // Inferido como Colección  

```

:::note

El tipo inferido podría ser diferente entre [modo interpretado y compilado](interpreted.md) si la evaluación del valor es demasiado ambigua. En este caso, el compilador genera una advertencia y se utiliza un tipo variable. Por ejemplo, en el siguiente $a el tipo se inferirá correctamente en modo interpretado (Texto), pero la comprobación sintáctica generará una advertencia y $a se escribirá como una variable para el modo compilado.

```4d
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D intenta deducir el tipo más general. Por ejemplo, utiliza el tipo Real en lugar del tipo Entero cuando una variable se inicializa con un valor entero (por ejemplo, `var $a:=10 //Se infiere el tipo Real`). En tales casos, o cuando se inicializa una variable con un tipo complejo como la instanciación de una clase, se recomienda pasar el tipo explícitamente.

En la mayoría de los casos, todos los tipos de variables se determinan automáticamente. La excepción es cuando se asigna un valor a una variable de proceso o interproceso, lo que desencadena un mensaje de advertencia.

:::note

No se admiten asignaciones múltiples en una línea:

```4d
var $a; $b : Integer:=15 //error

```

:::

## Asignar los valores

Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama **asignar los datos a la variable** y se hace con el operador de asignación (:=). El operador de asignación también se utiliza para asignar datos a campos.

El operador de asignación es un primer medio para crear una variable e introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignación. Por ejemplo:

```4d
MyNumber:=3
```

crea la variable _MyNumber_ y pone el número 3 en ella. Si MyNumber ya existe, entonces toma el valor 3.

> Normalmente no se recomienda crear variables sin [declarar su tipo](#declaring-variables).

Por supuesto, las variables no serían muy útiles si no se pudieran obtener valores de ellas. Una vez más, se utiliza el operador de asignación. Si necesita poner el valor de MyNumber en un campo llamado [Products]Size, escribiría _MyNumber_ a la derecha del operador de asignación:

```4d
[Products]Size:=MyNumber
```

En este caso, _[Products]Size_ sería igual a 3. Este ejemplo es bastante sencillo, pero ilustra la forma fundamental en que se transfieren los datos de un lugar a otro utilizando el lenguaje.

Los valores se asignan a los elementos del array utilizando llaves ({...}):

```4d
atNames{1}:="Richard"
```

## Variables locales, proceso e interproceso

Puede crear tres tipos de variables: **local**, **proceso** e interproceso\*\*. La diferencia entre los tres tipos de elementos es su alcance, o los objetos para los que están disponibles.

### Variables locales

Una variable local, como su nombre indica, es local a un método, accesible sólo dentro del método en el que fue creada y no accesible fuera de ese método. Ser local a un método se conoce formalmente como ser de "alcance local." Las variables locales se utilizan para restringir una variable para que funcione sólo dentro del método.

Es posible que desee utilizar una variable local para:

- Evitar conflictos con los nombres de otras variables
- Utilizar los datos temporalmente
- Reducir el número de variables proceso

El nombre de una variable local siempre comienza por el signo dólar ($) y puede contener hasta 31 caracteres adicionales. Si introduce un nombre más largo, 4D lo trunca a la longitud adecuada.

Cuando se trabaja en un proyecto de aplicación con muchos métodos y variables, a menudo se encuentra que se necesita utilizar una variable sólo dentro del método en el que se está trabajando. Puede crear y utilizar una variable local en el método sin preocuparse de si ha utilizado el mismo nombre de variable en otro lugar.

Con frecuencia, en una aplicación, se necesitan pequeñas piezas de información del usuario. El comando `Request` puede obtener esta información. Muestra una caja de diálogo con un mensaje que solicita al usuario una respuesta. Cuando el usuario introduce la respuesta, el comando devuelve la información que el usuario introdujo. Generalmente no es necesario mantener esta información en sus métodos durante mucho tiempo. Esta es una forma típica de utilizar una variable local. Aquí un ejemplo:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Este método simplemente pide al usuario que introduzca un ID. Pone la respuesta en una variable local, $vsID, y luego busca el ID que el usuario introdujo. Cuando este método termina, la variable local $vsID se borra de la memoria. Este funcionamiento está bien, porque la variable se necesita sólo una vez y sólo en este método.

**Nota:** los parámetros $1, $2... pasadas a los métodos son variables locales. Para más información, consulte [Parámetros](Concepts/parameters.md).

### Variables proceso

Una variable proceso sólo está disponible dentro de un proceso. Es accesible al método del proceso y a todos los métodos llamados desde el proceso.

Una variable proceso no tiene un prefijo antes de su nombre. Un nombre de variable proceso puede contener hasta 31 caracteres.

En modo interpretado, las variables se mantienen dinámicamente; se crean y se borran de la memoria "sobre la marcha". En modo compilado, todos los procesos que se crean (procesos usuario) comparten la misma definición de variables proceso, pero cada proceso tiene una instancia diferente para cada variable. Por ejemplo, la variable miVar es una variable en el proceso P_1 y otra en el proceso P_2.

Un proceso puede leer y escribir las variables proceso de otro proceso utilizando los comandos `GET PROCESS VARIABLE` y `SET PROCESS VARIABLE`. Es una buena práctica de programación restringir el uso de estos comandos a la situación para la que fueron creados en 4D:

- Comunicación interprocesos en lugares específicos de su código
- Gestión de arrastrar y soltar interproceso
- En Cliente/Servidor, la comunicación entre los procesos en las máquinas cliente y los procedimientos almacenados ejecutados en las máquinas servidoras

Para más información, consulte el capítulo **Procesos** y la descripción de estos comandos.

### Variables interproceso

Las variables interproceso están disponibles en todo el proyecto y son compartidas por todos los procesos cooperativos. Se utilizan principalmente para compartir información entre procesos.

> No se recomienda el uso de variables interproceso, ya que no están disponibles para los procesos apropiativos y tienden a hacer que el código sea menos mantenible.

El nombre de una variable interproceso siempre comienza con los símbolos `<>` — un signo "menor que" seguido de un signo "mayor que"— seguido de 31 caracteres.

En modo cliente/servidor, cada máquina (cliente y servidor) comparten la misma definición de las variables interproceso, pero cada máquina tiene una instancia diferente para cada variable.
