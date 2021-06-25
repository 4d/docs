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

For example, if you want to define a text variable, you write:

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

The following are some basic variable declarations:

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

You can create three types of variables: **local**, **process**, and **interprocess**. The difference between the three types of elements is their scope, or the objects to which they are available.

### Variables locales

A local variable is, as its name implies, local to a method—accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

Es posible que desee utilizar una variable local para:

- Evitar conflictos con los nombres de otras variables
- Utilizar los datos temporalmente
- Reduce the number of process variables

The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length.

Cuando se trabaja en una base con muchos métodos y variables, a menudo se encuentra que se necesita utilizar una variable sólo dentro del método en el que se está trabajando. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else.

Frequently, in a database, small pieces of information are needed from the user. El comando `Request` puede obtener esta información. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Aquí un ejemplo:

```4d
 $vsID:=Request("Introduzca su identificación:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method.

**Note:** Parameters $1, $2... passed to methods are local variables. For more information, please refer to [Parameters](Concepts/parameters.md).

### Variables proceso

A process variable is available only within a process. It is accessible to the process method and any other method called from within the process.

A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:

- Interprocess communication at specific places or your code
- Gestión de arrastrar y soltar interproceso
- In Client/Server, communication between processes on client machines and the stored procedures running on the server machines

For more information, see the chapter **Processes** and the description of these commands.

### Variables interproceso

Las variables interproceso están disponibles en toda la base y son compartidas por todos los procesos cooperativos. They are primarily used to share information between processes.

> Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.

The name of an interprocess variable always begins with the symbols (<>) — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.
