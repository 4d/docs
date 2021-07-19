---
id: variables
title: Variables
---

Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. **Los campos** almacenan los datos permanentemente en el disco; **las variables** almacenan los datos en la memoria de forma temporal.

Cuando define su base, especifique a 4D los nombres y los tipos de campos que desea utilizar. Las variables son muy parecidas, también se les da nombres y tipos diferentes (ver [Tipos de datos](Concepts/data-types.md)).

Una vez creada, puede utilizar una variable dondequiera que la necesite en su aplicación. Por ejemplo, podría necesitar almacenar una variable texto en un campo del mismo tipo:

```4d
 [MyTable]MyField:=MyText
```


Las variables son objetos del lenguaje; puede crear y utilizar variables que nunca aparecerán en la pantalla. En sus formularios, puede mostrar variables en la pantalla (excepto de los punteros y de los BLOB), introducir datos en ellas e imprimirlas en informes. De este modo, las variables de área introducibles y no introducibles actúan igual que los campos, y los mismos controles integrados están disponibles al crearlos. Las variables de formulario también pueden controlar botones, list boxes, áreas de desplazamiento, botones imagen, etc., o mostrar los resultados de cálculos que no necesitan ser guardados.

## Declaración de variables

Las variables se crean declarándolas. El lenguaje 4D ofrece dos formas de declarar las variables:

- utilizando la palabra clave `var` (recomendado, especialmente si su código utiliza objetos y clases),
- utilizando uno de los comandos del lenguaje 4D del tema "Compilador" o "Arrays" (lenguaje clásico únicamente).

**Note:** aunque no se suele recomendar, puede crear variables básicas simplemente utilizándolas; no es necesario definirlas formalmente. Por ejemplo, si declara una variable que contenga la fecha actual más 30 días, puede escribir:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```


### Utilizando la palabra clave `var`

Se recomienda declarar las variables utilizando la palabra clave `var` ya que esta sintaxis permite vincular las variables objeto con las clases. Using this syntax enhances code editor suggestions and type-ahead features.

Para declarar una variable de cualquier tipo con la palabra clave `var`, utilice la siguiente sintaxis:

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

If `varType` is omitted, a variable of the **variant** type is created.

La siguiente tabla enumera todos los valores `varType` soportados:

| varType                | Contents                                 |
| ---------------------- | ---------------------------------------- |
| `Texto`                | Valor texto                              |
| `Fecha`                | Valor fecha                              |
| `Hora`                 | Valor Hora                               |
| `Booleano`             | Valor booleano                           |
| `Entero`               | Valor entero largo                       |
| `Real`                 | Valor real                               |
| `Puntero`              | Valor puntero                            |
| `Imagen`               | Valor imagen                             |
| `Blob`                 | Valor BLOB                               |
| `Colección`            | Valor colección                          |
| `Variant`              | Valor variant                            |
| `Objeto`               | Objeto con clase por defecto (4D.object) |
| `4D.<className>` | Objeto del nombre de la clase 4D         |
| `cs.<className>` | Objeto del nombre de la clase usuario    |

#### Ejemplos

- Para declarar variables básicas locales y de proceso:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalente a:  
var $o : 4D.Object
//también equivalente a C_OBJECT($o)
```

- To declare object variables of 4D class:

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- To declare object variables of user class:

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```


### Utilizando un C_ directive

> **Nota de compatibilidad:** no se recomienda esta funcionalidad para declarar variables dentro de métodos. Se recomienda utilizar la palabra clave [var](#using-the-var-keyword).

Directives from the "Compiler" theme commands allow you to declare variables of basic types.

For example, if you want to define a text variable, you write:

```4d
 C_TEXT(myText)
```

The following are some basic variable declarations:

```4d
 C_BLOB(vxMyBlob) // The process variable vxMyBlob is declared as a variable of type BLOB
 C_DATE($vdCurDate) // The local variable $vdCurDate is declared as a variable of type Date
 C_LONGINT(vg1;vg2;vg3) // The 3 process variables vg1, vg2 and vg3 are declared as variables of type longint  
 C_OBJECT($vObj) // The local variable $vObj is declared as a variable of type Object
 C_COLLECTION($vCol) // The local variable $vCol is declared as a variable of type Collection
```

**Note:** Arrays are a particular type of variables (an array is an ordered series of variables of the same type). Arrays are declared with specific commands, such as `ARRAY LONGINT(alAnArray;10)`. Para más información, consulte [Arrays](Concepts/arrays.md).


## Asignar los valores

Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama **asignar los datos a la variable** y se hace con el operador de asignación (:=). El operador de asignación también se utiliza para asignar datos a campos.

El operador de asignación es un primer medio para crear una variable e introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignación. Por ejemplo:

```4d
MyNumber:=3
```

crea la variable _MyNumber_ y pone en ella el número 3. Si MyNumber ya existe, entonces toma el valor 3.

> It is usually not recommended to create variables without [declaring their type](#creating-variables).

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

You can create three types of variables: **local**, **process**, and **interprocess**. The difference between the three types of elements is their scope, or the objects to which they are available.

### Variables locales

A local variable is, as its name implies, local to a method—accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

Es posible que desee utilizar una variable local para:

- Evitar conflictos con los nombres de otras variables
- Utilizar los datos temporalmente
- Reduce the number of process variables

The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length.

When you are working in an application project with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else.

Frequently, in an application, small pieces of information are needed from the user. El comando `Request` puede obtener esta información. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. Generalmente no es necesario mantener esta información en sus métodos durante mucho tiempo. Esta es una forma típica de utilizar una variable local. Aquí un ejemplo:

```4d
 $vsID:=Request("Introduzca su identificación:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Este método simplemente pide al usuario que introduzca un ID. Pone la respuesta en una variable local, $vsID, y luego busca el ID que el usuario introdujo. Cuando este método termina, la variable local $vsID se borra de la memoria. Este funcionamiento está bien, porque la variable se necesita sólo una vez y sólo en este método.

**Nota:** los parámetros $1, $2... pasados a los métodos son variables locales. Para más información, consulte [Parámetros](Concepts/parameters.md).

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

El nombre de una variable interproceso siempre comienza con los símbolos (<>) -un signo "menor que" seguido de un signo "mayor que"- seguido de 31 caracteres.

En modo cliente/servidor, cada máquina (cliente y servidor) comparten la misma definición de las variables interproceso, pero cada máquina tiene una instancia diferente para cada variable.


