---
id: methods
title: Métodos
---


Un método es básicamente un trozo de código que ejecuta una o varias acciones. Un método se compone de varias líneas de instrucciones, cada una de las cuales consta de una línea en el método. Una línea de instrucción realiza una acción, y puede ser simple o compleja. Aunque una instrucción es siempre una línea, esa línea puede ser tan larga como sea necesario (hasta 32.000 caracteres, lo que probablemente sea suficiente para la mayoría de las tareas).

El tamaño máximo de un método está limitado a 2 GB de texto o 32.000 líneas de código.

## Tipos de métodos

En el lenguaje 4D, hay varias categorías de métodos. La categoría depende de cómo se les pueda llamar:

| Tipo                           | Contexto de llamada                                                                                                      | Acepta los parámetros | Descripción                                                                                                                                                                  |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**           | Por demanda, cuando se llama al nombre del método proyecto (ver [Llamando a métodos proyecto](#calling-project-methods)) | Sí                    | Puede contener código para ejecutar acciones personalizadas. Una vez creado un método proyecto, pasa a formar parte del lenguaje del proyecto.                               |
| **Método objeto (widget)**     | Automático, cuando un evento involucra al objeto al que se asocia el método                                              | No                    | Propiedad de un objeto formulario (también llamado widget)                                                                                                                   |
| **Método formulario**          | Automático, cuando un evento involucra al formulario al que se asocia el método                                          | No                    | Propiedad de un formulario. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. |
| **Trigger** (o *método tabla*) | Automático, cada vez que se manipulan los registros de una tabla (Añadir, Eliminar y Modificar)                          | No                    | Propiedad de una tabla. Los triggers son métodos que pueden evitar operaciones "ilegales" con los registros de su base.                                                      |
| **Método base**                | Automático, cuando se produce un evento de la sesión de trabajo                                                          | Sí (predefinido)      | Hay 16 métodos base en 4D. Véase la sección métodos base                                                                                                                     |


> El Lenguaje 4D también soporta **Funciones de clase**, que pueden ser llamadas en el contexto de una instancia objeto. Las funciones de clase pueden estar integradas (*por ejemplo,* `collection.orderBy()` o `entity.save()`), o [creadas por el desarrollador 4D](classes.md#class-function).


## Métodos proyecto

Un método proyecto puede tener uno de los siguientes papeles, dependiendo de cómo se ejecute y utilice:

- Subrutina
- Objeto fórmula
- Método de menú
- Método de gestión de proceso
- Métodos de gestión de eventos o errores

### Subrutinas

Una subrutina es un método proyecto que puede considerarse como un ayudante. Realiza aquellas tareas que otros métodos le solicitan. Una función es una subrutina que devuelve un valor al método que la llamó.

Cuando crea un método proyecto, éste pasa a formar parte del lenguaje del proyecto en el que lo crea. Entonces puede llamar al método proyecto desde otros métodos (método proyecto, método objeto, etc.), de la misma manera que llama a los comandos integrados de 4D. Un método proyecto utilizado de este manera se llama una subrutina.

Se utilizan subrutinas para:

- Reducción del código repetitivo
- Clarificación de los métodos
- Facilitar los cambios en sus métodos
- Modularizar el código

Por ejemplo, supongamos que tiene un proyecto de clientes. Al personalizar el proyecto, se da cuenta de que hay algunas tareas que realiza reiteradamente, como la búsqueda de un cliente y la modificación de su registro. El código para hacer esto podría ser:

```4d
  // Búsqueda de un cliente
 QUERY BY EXAMPLE([Customers])
  // Selección del formulario entrada
 FORM SET INPUT([Customers];"Data Entry")
  // Modificación del registro del cliente
 MODIFY RECORD([Customers])
```

Si no utiliza subrutinas, tendrá que escribir el código cada vez que quiera modificar el registro de un cliente. Si hay diez lugares en su proyecto donde necesita hacer esto, tendrá que escribir el código diez veces. Si utiliza subrutinas, sólo tendrá que escribirlas una vez. Esta es la primera ventaja de las subrutinas: reducir la cantidad de código.

Si el código descrito anteriormente fuera un método llamado `MODIFY_CUSTOMER`, se ejecutaría simplemente utilizando el nombre del método en otro método. Por ejemplo, para modificar el registro de un cliente y luego imprimir el registro, se escribiría este método:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Esta posibilidad simplifica enormemente sus métodos. En el ejemplo, no es necesario saber cómo funciona el método `MODIFY_CUSTOMER`, sólo lo que hace. Esta es la segunda razón para utilizar subrutinas: clarificar sus métodos. De este modo, sus métodos se convierten en extensiones del lenguaje 4D.

Si necesita cambiar su método de búsqueda de clientes en este proyecto de ejemplo, tendrá que cambiar sólo un método, no diez. Esta es la siguiente razón para utilizar subrutinas: facilitar los cambios en sus métodos.

Utilizando las subrutinas, hace que su código sea modular. Esto significa simplemente dividir el código en módulos (subrutinas), cada una de las cuales realiza una tarea lógica. Considere el siguiente código de un proyecto de de cuentas corrientes:

```4d
 FIND_CLEARED_CHECKS //Buscar los cheques emitidos
 RECONCILE_ACCOUNT //Reconciliar la cuenta
 PRINT_CHECK_BOOK_REPORT //Imprimir un informe de la chequera
```

Incluso para alguien que no conozca el proyecto, está claro lo que hace este código. No es necesario examinar cada subrutina. Cada subrutina puede tener muchas líneas y realizar algunas operaciones complejas, pero aquí sólo es importante que realice su tarea. Le recomendamos que divida su código en tareas lógicas, o módulos, siempre que sea posible.


### Objeto fórmula

Puede encapsular los métodos de su proyecto en objetos **fórmula** y llamarlos desde sus objetos.

Los comandos `Formula` o `Formula from string` permiten crear objetos de fórmula nativos que se pueden encapsular en las propiedades de los objetos. Permite implementar métodos objetos personalizados.

Para ejecutar un método almacenado en una propiedad objeto, utilice el operador **( )** después del nombre de la propiedad. Por ejemplo:

```4d
//myAlert
ALERT("Hello world!")
```

Luego `myAlert` puede encapsularse en cualquier objeto y llamarse:

```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //muestra "Hello world!"
```

También se admite la sintaxis con paréntesis:

```4d
$o["custom_Alert"]() //muestra "Hello world!"
```

También puede [pasar parámetros](Concepts/parameters.md) a su fórmula cuando la llame utilizando $1, $2... al igual que con los métodos proyecto 4D:

```4d
//método fullName 
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

Puede encapsular `fullName` en un objeto:

```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```

Combinados con la función `This`, estos métodos objetos permiten escribir un código genérico muy poderoso. Por ejemplo:

```4d
//método fullName2
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Luego el método actúa como un nuevo atributo calculado que se puede añadir a otros atributos:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //añadir el método  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```



Tenga en cuenta que, aunque no tenga parámetros, un método objeto a ejecutar debe ser llamado con paréntesis ( ). Llamar sólo a la propiedad del objeto devolverá una nueva referencia a la fórmula (y no la ejecutará):

```4d
$o:=$f.message //devuelve el objeto fórmula en $o
```

### Métodos de menú
Un método de menú se llama cuando se selecciona el comando de menú personalizado al que está asociado. El método se asigna al comando del menú utilizando el editor de menús o un comando del tema "Menús". El método se ejecuta cuando se elige el comando del menú. Al crear menús personalizados con métodos de menú que realizan acciones específicas, usted crea interfaces personalizadas para sus aplicaciones de escritorio.

Los comandos de menú personalizados pueden hacer que se realicen una o varias actividades. Por ejemplo, un comando de menú de entrada de registros puede llamar a un método que realice dos tareas: mostrar el formulario de entrada apropiado y llamar al comando `ADD RECORD` hasta que el usuario cancele la actividad de entrada de datos.

La automatización de secuencias de actividades es una capacidad muy poderosa del lenguaje de programación. Utilizando los menús personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer más orientación a los usuarios de la aplicación.


### Métodos de gestión de proceso

Un **método proyecto** es un método proyecto que se llama cuando se inicia un proceso. El proceso dura sólo mientras el método continúa ejecutándose, excepto si se trata de un proceso Worker. Tenga en cuenta que un método de menú asociado a un comando de menú con la propiedad *Iniciar un nuevo proceso* es también el método de gestión de proceso para el proceso recién creado.

### Métodos de gestión de eventos y errores
Un **método de gestión de eventos** es un método dedicado a la gestión de eventos, que se ejecuta en un proceso diferente del método de gestión de procesos. Generalmente, para la gestión de eventos, 4D se encarga de la mayor parte. Por ejemplo, durante la entrada de datos, 4D detecta las pulsaciones de las teclas y los clics, y luego llama a los métodos objeto y formulario correspondientes para que usted pueda responder adecuadamente a los eventos desde estos métodos. Para más información, consulte la descripción del comando `ON EVENT CALL`.

Un **método de gestión de errores** es un método proyecto basado en interrupciones. Cada vez que se produce un error o una excepción, se ejecuta dentro del proceso en el que se instaló. Para más información, consulte la descripción del comando `ON ERR CALL`.

## Métodos proyecto recursivos

Los métodos proyecto pueden llamarse a sí mismos. Por ejemplo:

- El método A puede llamar al método B que puede llamar a A, por lo que A volverá a llamar a B y así sucesivamente.
- Un método puede llamarse a sí mismo.

Esto se llama recursividad. El lenguaje 4D soporta totalmente la recursividad.

Aquí un ejemplo. Digamos que tiene una tabla `[Friends and Relatives]` compuesta por este conjunto de campos extremadamente simplificado:
- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence “A friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!”:

1. You can build the sentence in this way:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       $vtTheWholeStory:="A friend of mine, "+$vsName
       Repeat
          QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$vsName)
          $vlQueryResult:=Records in selection([Friends and Relatives])
          If($vlQueryResult>0)
             $vtTheWholeStory:=$vtTheWholeStory+" who is the child of "+[Friends and Relatives]Name
             $vsName:=[Friends and Relatives]Name
          End if
       Until($vlQueryResult=0)
       $vtTheWholeStory:=$vtTheWholeStory+", does this for a living!"
       ALERT($vtTheWholeStory)
    End if
 End if
```

2. You can also build it this way:

```4d
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

with the recursive function `Genealogy of` listed here:

```4d
  ` Genealogy of project method
  ` Genealogy of ( String ) -> Text
  ` Genealogy of ( Name ) -> Part of sentence

 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Note the `Genealogy of` method which calls itself.

The first way is an **iterative algorithm**. The second way is a **recursive algorithm**.

When implementing code for cases like the previous example, it is important to note that you can always write methods using iteration or recursion. Typically, recursion provides more concise, readable, and maintainable code, but using it is not mandatory.

Some typical uses of recursion in 4D are:

- Treating records within tables that relate to each other in the same way as in the example.
- Browsing documents and folders on your disk, using the commands `FOLDER LIST` and `DOCUMENT LIST`. A folder may contain folders and documents, the subfolders can themselves contain folders and documents, and so on.

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Sin esta prueba condicional, el método se llamaría a sí mismo indefinidamente; eventualmente, 4D devolvería un error "Pila llena" porque ya no tendría espacio para "apilar" las llamadas (así como los parámetros y las variables locales utilizadas en el método).
