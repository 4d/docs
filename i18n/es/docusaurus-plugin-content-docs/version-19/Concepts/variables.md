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

Generalmente se crean variables declarándolas. El lenguaje 4D ofrece dos formas de declarar las variables:

- utilizando la palabra clave `var` (recomendado, especialmente si su código utiliza objetos y clases),
- utilizando uno de los comandos del lenguaje 4D del tema "Compilador" o "Arrays" (sintaxis heredada).

Cuando se declaran las variables, se inicializan con el [**valor por defecto correspondiente a su tipo**](data-types.md#default-values), que mantendrán durante la sesión mientras no se les haya [asignado](#assigning-data).

:::note

Aunque no es recomendable, puede crear variables simplemente utilizándolas; no es necesario declararlas formalmente. Por ejemplo, para crear una variable que mantenga la fecha actual más 30 días, puede escribir:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

Cuando una variable se crea antes de ser declarada, no se inicializa en el paso de declaración.

:::



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

`varName`es el nombre de la variable, debe cumplir con las [reglas 4D](Concepts/identifiers.md) sobre identificadores.   
Esta sintaxis sólo admite declaraciones de [variables locales y proceso](#local-process-and-interprocess-variables), por lo que se excluyen las [variables interprocesos](#interprocess-variables) y los [arrays](Concepts/arrays.md).

`varType` puede ser:

- un [tipo básico](Concepts/data-types.md), en cuyo caso la variable contiene un valor del tipo declarado,
- una [referencia de clase](Concepts/classes.md) (clase 4D o clase usuario), en cuyo caso la variable contiene una referencia a un objeto de la clase definida.

Si `varType` se omite, una variable de tipo **variant** se crea.

La siguiente tabla enumera todos los valores `varType` soportados:

| varType                | Contenido                                  |
| ---------------------- | ------------------------------------------ |
| `Text`                 | Valor texto                                |
| `Fecha`                | Valor fecha                                |
| `Hora`                 | Valor Hora                                 |
| `Boolean`              | Valor booleano                             |
| `Integer`              | Valor entero largo                         |
| `Real`                 | Valor real                                 |
| `Puntero`              | Valor puntero                              |
| `Picture`              | Valor imagen                               |
| `Blob`                 | Valor BLOB                                 |
| `Collection`           | Valor colección                            |
| `Variant`              | Valor variant                              |
| `Object`               | Objeto con clase por defecto (`4D.object`) |
| `4D.<className>` | Objeto del nombre de la clase 4D           |
| `cs.<className>` | Objeto del nombre de la clase usuario      |

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


### Utilizando un C_ directive

> **Nota:** los parámetros $1, $2... pasados a los métodos son variables locales. Se recomienda utilizar la palabra clave [var](#using-the-var-keyword).

Las directivas del tema "Compilador" permiten declarar variables de tipos básicos.

Por ejemplo, si se quiere definir una variable de tipo texto, se escribe:

```4d
 C_TEXT(myText)
```

A continuación se presentan algunas declaraciones de variables básicas:

```4d
 C_BLOB(vxMyBlob) // La variable proceso vxMyBlob se declara como una variable de tipo BLOB 
C_DATE($vdCurDate) // La variable local $vdCurDate se declara como una variable de tipo Fecha
 C_LONGINT(vg1;vg2;vg3) // Las 3 variables de proceso vg1, vg2 y vg3 se declaran como variables de tipo Entero largo
 C_OBJECT($vObj) // La variable local $vObj se declara como una variable de tipo Objeto
 C_COLLECTION($vCol) // La variable local $vCol se declara como una variable de tipo Colección
```

**Nota:** los array son un tipo particular de variables (un array es una serie ordenada de variables del mismo tipo). Los arrays se declaran con comandos específicos, como `ARRAY LONGINT(alAnArray;10)`. Para más información, consulte [Arrays](Concepts/arrays.md).


## Asignar los valores

Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama **asignar los datos a la variable** y se hace con el operador de asignación (:=). El operador de asignación también se utiliza para asignar datos a campos.

El operador de asignación es un primer medio para crear una variable e introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignación. Por ejemplo:

```4d
MyNumber:=3
```

crea la variable _MyNumber_ y pone en ella el número 3. Si MyNumber ya existe, entonces toma el valor 3.

> Normalmente no se recomienda crear variables sin [declarar su tipo](#creating-variables).

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

Puedes crear tres tipos de variables: **local**, **proceso**, e **interproceso**. La diferencia entre los tres tipos de elementos es su alcance, o los objetos para los que están disponibles.

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
 $vsID:=Request("Introduzca su identificación:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

Este método simplemente pide al usuario que introduzca un ID. Pone la respuesta en una variable local, $vsID, y luego busca el ID que el usuario introdujo. Cuando este método termina, la variable local $vsID se borra de la memoria. Este funcionamiento está bien, porque la variable se necesita sólo una vez y sólo en este método.

**Nota de compatibilidad:** no se recomienda esta funcionalidad para declarar variables dentro de métodos. Se recomienda utilizar la palabra clave [var](#using-the-var-keyword).

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

:::warning Obsoleto

No se recomienda el uso de variables interproceso, ya que no están disponibles para los procesos apropiativos y tienden a hacer que el código sea menos mantenible.

:::

Las variables interproceso están disponibles en todo el proyecto y son compartidas por todos los procesos cooperativos. Se utilizan principalmente para compartir información entre procesos.

El nombre de una variable interproceso siempre comienza con los símbolos `<>` — un signo "menor que" seguido de un signo "mayor que"- seguido de 31 caracteres.

En modo cliente/servidor, cada máquina (cliente y servidor) comparten la misma definición de las variables interproceso, pero cada máquina tiene una instancia diferente para cada variable.


## Variables del sistema

El lenguaje 4D maneja varias **variables sistema**, las cuales le permiten controlar la ejecución de diferentes operaciones. Puedes probar sus valores y usarlos como cualquier variable. Todas las variables del sistema son [variables proceso](#process-variables).

Las variables del sistema son utilizadas por los comandos 4D. Consulte el párrafo "Variables del sistema y conjuntos" en la descripción de un comando para averiguar si afecta a una variable del sistema.


| Nombre de la variable del sistema                      | Tipo          | Descripción                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `OK`                                                   | Integer       | Normalmente se establece en 1 después de que un comando haya mostrado una caja de diálogo y el usuario haya hecho clic en el botón **Aceptar**, y en 0 si hizo clic en **Cancelar**. Algunos comandos también modifican el valor de la variable del sistema `OK` cuando se ejecuta una operación con éxito.                 |
| `Document`                                             | Text          | Contiene el "nombre largo" (ruta completa+nombre) del último archivo abierto o creado mediante comandos como [Open document](https://doc.4d.com/4dv20/help/command/en/page264.html) o [SELECT LOG FILE](https://doc.4d.com/4dv20/help/command/en/page345.html).                                                             |
| `FldDelimit`, `RecDelimit`                             | Text          | Contienen los códigos de caracteres que se utilizarán respectivamente como separador de campos (por defecto es **Tabulación** (9)) y separador de registros (por defecto es **retorno de carro** (13)) al importar o exportar texto. Para utilizar un separador diferente, asigne un nuevo valor a la variable del sistema. |
| `Error`, `Error method`, `Error line`, `Error formula` | Text, Longint | Utilizado en un método de captura de errores instalado por el comando [`ON ERR CALL`](https://doc.4d.com/4dv20/help/command/en/page155.html). Ver [Gestión de errores dentro del método](../Concepts/error-handling.md#handling-errors-within-the-method).                                                                  |
| `MouseDown`                                            | Integer       | Utilizado en un método instalado por el comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Toma el valor 1 cuando se presiona el botón del ratón, de lo contrario 0.                                                                                                                         |
| `MouseX`, `MouseY`                                     | Integer       | Utilizado en un método instalado por el comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). <li>En un evento `MouseDown=1`, `MouseX` y `MouseY` se establecen respectivamente en las coordenadas verticales y horizontales del clic. Ambos valores se expresan en píxeles y utilizan el sistema de coordenadas local de la ventana. </li><li>En el caso de un campo imagen o variable, `MouseX` y `MouseY` devuelven las coordenadas locales de un clic de ratón en los eventos de formulario [`On Clicked`](../Events/onClicked.md), [`On Double Clicked`](../Events/onDoubleClicked.md) y [`On Mouse Up`](../Events/onMouseUp.md). Las coordenadas locales del cursor del ratón también se retornan en los eventos formulario [`On Mouse Enter`](../Events/onMouseEnter.md) y [`On Mouse Move`](../Events/onMouseMove.md). Para obtener más información, consulte la sección [Coordenadas del ratón en una imagen](../FormEditor/pictures.md#coordenadas-del-ratón-en-una-imagen).</li>                                                                                                                                                 |
| `KeyCode`                                              | Integer       | Utilizado en un método instalado por el comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Define el código de carácter de la tecla que se acaba de presionar. Si la tecla es una tecla de función, `KeyCode` se establece como un código especial.                                          |
| `Modifiers`                                            | Integer       | Utilizado en un método instalado por el comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Establece las teclas modificadoras del teclado (Ctrl/Command, Alt/Option, Shift, Caps Lock).                                                                                                      |
| `MouseProc`                                            | Integer       | Utilizado en un método instalado por el comando [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html). Define el número de proceso en el que tuvo lugar el último evento                                                                                                                                 |


:::note

Por lo tanto, no se puede crear una variable, método o función usando ninguno de estos nombres de variables.

:::
