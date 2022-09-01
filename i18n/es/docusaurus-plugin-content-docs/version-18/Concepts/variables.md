---
id: variables
title: Variables
---

Los datos en 4D se almacenan de dos formas fundamentalmente diferentes. **Los campos** almacenan los datos permanentemente en el disco; **las variables** almacenan los datos en la memoria de forma temporal.

Cuando define su base, especifique a 4D los nombres y los tipos de campos que desea utilizar. Las variables son muy parecidas, también se les da nombres y tipos diferentes (ver [Tipos de datos](Concepts/data-types.md)).

Las variables son objetos del lenguaje; puede crear y utilizar variables que nunca aparecerán en la pantalla. En sus formularios, puede mostrar variables en la pantalla (excepto de los punteros y de los BLOB), introducir datos en ellas e imprimirlas en informes. De este modo, las variables de área introducibles y no introducibles actúan igual que los campos, y los mismos controles integrados están disponibles al crearlos. Las variables de formulario también pueden controlar botones, list boxes, áreas de desplazamiento, botones imagen, etc., o mostrar los resultados de cálculos que no necesitan ser guardados.

## Creación de variables

Las variables se crean declarándolas mediante uno de los comandos de los temas "Compilador" o "Arrays".

**Nota:**los arrays son un tipo particular de variables. Un array es una serie ordenada de variables del mismo tipo. Para más información, consulte [Arrays](Concepts/arrays.md).

Por ejemplo, si se quiere definir una variable de tipo texto, se escribe:

```4d
 C_TEXT(myText)
```

**Note:** aunque no se suele recomendar, se pueden crear variables simplemente utilizándolas; no es necesario definirlas formalmente como se hace con los campos. Por ejemplo, si desea crear una variable que contenga la fecha actual más 30 días, puede escribir:

```4d
 MyDate:=Current date+30 //MyDate se crea y obtiene la fecha actual más 30 días
```

Una vez creada, puede utilizar una variable en el lugar que necesite en su base de datos. Por ejemplo, podría necesitar almacenar la variable texto en un campo del mismo tipo:

```4d
 [MyTable]MyField:=MyText
```

A continuación se presentan algunas declaraciones de variables básicas:

```4d

 C_BLOB(vxMyBlob) // La variable proceso vxMyBlob se declara como una variable de tipo BLOB
 C_DATE($vdCurDate) // La variable local $vdCurDate se declara como una variable de tipo Fecha
 C_LONGINT(vg1;vg2;vg3) // Las 3 variables de proceso vg1, vg2 y vg3 se declaran como variables de tipo Entero largo
 C_OBJECT($vObj) // La variable local $vObj se declara como una variable de tipo Objeto
 C_COLLECTION($vCol) // La variable local $vCol se declara como una variable de tipo Colección
 ARRAY LONGINT(alAnArray;10) //La variable del proceso alAnArray se declara como un array Entero largo de 10 elementos
```

## Asignar los valores

Los datos pueden introducirse y copiarse en variables y arrays. Poner datos en una variable se llama **asignar los datos a la variable** y se hace con el operador de asignación (:=). El operador de asignación también se utiliza para asignar datos a campos.

El operador de asignación es la principal forma de crear una variable y de introducir datos en ella. Se escribe el nombre de la variable que se quiere crear a la izquierda del operador de asignación. Por ejemplo:

```4d
MyNumber:=3
```

crea la variable _MyNumber_ y pone en ella el número 3. Si MyNumber ya existe, entonces toma el valor 3.

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

Cuando se trabaja en una base con muchos métodos y variables, a menudo se encuentra que se necesita utilizar una variable sólo dentro del método en el que se está trabajando. Puede crear y utilizar una variable local en el método sin preocuparse de si ha utilizado el mismo nombre de variable en otro lugar.

Frequently, in a database, small pieces of information are needed from the user. El comando `Request` puede obtener esta información. Muestra una caja de diálogo con un mensaje que solicita al usuario una respuesta. Cuando el usuario introduce la respuesta, el comando devuelve la información que el usuario introdujo. Generalmente no es necesario mantener esta información en sus métodos durante mucho tiempo. Esta es una forma típica de utilizar una variable local. Aquí un ejemplo:

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

Las variables interproceso están disponibles en toda la base y son compartidas por todos los procesos cooperativos. Se utilizan principalmente para compartir información entre procesos.

> No se recomienda el uso de variables interproceso, ya que no están disponibles para los procesos apropiativos y tienden a hacer que el código sea menos mantenible.

The name of an interprocess variable always begins with the symbols (`<>`) — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

En modo cliente/servidor, cada máquina (cliente y servidor) comparten la misma definición de las variables interproceso, pero cada máquina tiene una instancia diferente para cada variable.
