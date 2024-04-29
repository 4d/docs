---
id: methods
title: Métodos
---

Un método es básicamente un trozo de código que ejecuta una o varias acciones. Un método se compone de instrucciones.

Una línea de instrucción realiza una acción, y puede ser simple o compleja. Each statement usually consists of one line in the method (if necessary, it can however be [split using the `\` character](quick-tour.md#code-on-several-lines)).

El tamaño máximo de un método está limitado a 2 GB de texto o 32.000 líneas de código.

## Tipos de métodos

En el lenguaje 4D, hay varias categorías de métodos. La categoría depende de cómo se les pueda llamar:

| Tipo                                                | Contexto de llamada                                                                                                            | Acepta los parámetros               | Descripción                                                                                                                                                                                                               |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**                                | On demand, when the project method name is called (see [Calling project methods](#calling-project-methods)) | Sí                                  | Puede contener código para ejecutar acciones personalizadas. Una vez creado un método proyecto, pasa a formar parte del lenguaje del proyecto.                                            |
| **Object (widget) method**       | Automático, cuando un evento involucra al objeto al que se asocia el método                                                    | No                                  | Propiedad de un objeto formulario (también llamado widget)                                                                                                                                             |
| **Método formulario**                               | Automático, cuando un evento involucra al formulario al que se asocia el método                                                | No                                  | Propiedad de un formulario. Puede utilizar un método formulario para gestionar datos y objetos, pero generalmente es más sencillo y eficiente utilizar un método objeto para estos fines. |
| **Trigger** (aka _Table method_) | Automático, cada vez que se manipulan los registros de una tabla (Añadir, Eliminar y Modificar)             | No                                  | Propiedad de una tabla. Los triggers son métodos que pueden evitar operaciones "ilegales" con los registros de su base.                                                                   |
| **Método base**                                     | Automático, cuando se produce un evento de la sesión de trabajo                                                                | Sí (predefinido) | Hay 16 métodos base en 4D.                                                                                                                                                                                |
| **Class**                                           | [**Class functions**](classes.md#function) are called in the context of an object instance                                     | sí                                  | Class functions can be built-in (_e.g._ `collection.orderBy()` or `entity.save()`), or created by the 4D developer. See [**Classes**](classes.md)      |

## Métodos proyecto

Un método proyecto puede tener uno de los siguientes papeles, dependiendo de cómo se ejecute y utilice:

- Subrutina
- Objeto fórmula
- Método de menú
- Método de gestión de proceso
- Métodos de gestión de eventos o errores

También puede ejecutar los métodos de su proyecto manualmente, por ejemplo, para realizar pruebas.

### Subrutinas

Una subrutina es un método proyecto que puede considerarse como un ayudante. Realiza aquellas tareas que otros métodos le solicitan. Una función es una subrutina que devuelve un valor al método que la llamó.

Cuando crea un método proyecto, éste pasa a formar parte del lenguaje del proyecto en el que lo crea. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. Un método proyecto utilizado de este manera se llama una subrutina.

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

Si no utiliza subrutinas, tendrá que escribir el código cada vez que quiera modificar el registro de un cliente. Si no utiliza subrutinas, tendrá que escribir el código cada vez que quiera modificar el registro de un cliente. Si utiliza subrutinas, sólo tendrá que escribirlas una vez. Esta es la primera ventaja de las subrutinas: reducir la cantidad de código.

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. Por ejemplo, para modificar el registro de un cliente y luego imprimir el registro, se escribiría este método:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

Esta posibilidad simplifica enormemente sus métodos. In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. Esta es la segunda razón para utilizar subrutinas: clarificar sus métodos. De este modo, sus métodos se convierten en extensiones del lenguaje 4D.

Si necesita cambiar su método de búsqueda de clientes en este proyecto de ejemplo, tendrá que cambiar sólo un método, no diez. Esta es la siguiente razón para utilizar subrutinas: facilitar los cambios en sus métodos.

Utilizando las subrutinas, hace que su código sea modular. Esto significa simplemente dividir el código en módulos (subrutinas), cada una de las cuales realiza una tarea lógica. Considere el siguiente código de un proyecto de de cuentas corrientes:

```4d
 FIND_CLEARED_CHECKS //Buscar los cheques emitidos
 RECONCILE_ACCOUNT //Reconciliar la cuenta
 PRINT_CHECK_BOOK_REPORT //Imprimir un informe de la chequera
```

Incluso para alguien que no conozca el proyecto, está claro lo que hace este código. No es necesario examinar cada subrutina. Cada subrutina puede tener muchas líneas y realizar algunas operaciones complejas, pero aquí sólo es importante que realice su tarea. Le recomendamos que divida su código en tareas lógicas, o módulos, siempre que sea posible.

### Objeto fórmula

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. Permite implementar métodos objetos personalizados.

To execute a method stored in an object property, use the **()** operator after the property name. Por ejemplo:

```4d
//myAlert
ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```4d
var $o : Object
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //muestra "Hello world!"
```

También se admite la sintaxis con paréntesis:

```4d
$o["custom_Alert"]() //muestra "Hello world!"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//método fullName 
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

You can encapsulate `fullName` in an object:

```4d
var $o : Object
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
//equivalente a $result:=fullName("param1";"param2")
```

Combined with the `This`function, such object methods allow writing powerful generic code. Por ejemplo:

```4d
//método fullName2
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Luego el método actúa como un nuevo atributo calculado que se puede añadir a otros atributos:

```4d
var $o : Object
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //añade el método

$result:=$o.fullName() 
//$result = "Jim Wesson"
```

Note that, even if it does not have parameters, an object method to be executed must be called with `()` parenthesis. Llamar sólo a la propiedad del objeto devolverá una nueva referencia a la fórmula (y no la ejecutará):

```4d
$o:=$f.message //devuelve el objeto fórmula en $o
```

### Métodos de menú

Un método de menú se llama cuando se selecciona el comando de menú personalizado al que está asociado. El método se asigna al comando del menú utilizando el editor de menús o un comando del tema "Menús". El método se ejecuta cuando se elige el comando del menú. Al crear menús personalizados con métodos de menú que realizan acciones específicas, usted crea interfaces personalizadas para sus aplicaciones de escritorio.

Los comandos de menú personalizados pueden hacer que se realicen una o varias actividades. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

La automatización de secuencias de actividades es una capacidad muy poderosa del lenguaje de programación. Utilizando los menús personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer más orientación a los usuarios de la aplicación.

### Métodos de gestión de proceso

A **process method** is a project method that is called when a process is started. El proceso dura sólo mientras el método continúa ejecutándose, excepto si se trata de un proceso Worker. Note that a menu method attached to a menu command with _Start a New Process_ property is also the process method for the newly started process.

### Métodos de gestión de eventos y errores

An **event catching method** runs in a separate process as the process method for catching events. Generalmente, para la gestión de eventos, 4D se encarga de la mayor parte. Por ejemplo, durante la entrada de datos, 4D detecta las pulsaciones de las teclas y los clics, y luego llama a los métodos objeto y formulario correspondientes para que usted pueda responder adecuadamente a los eventos desde estos métodos. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Se llama cada vez que se produce un error o una excepción. For more information, see the [Error handling](error-handling.md) section.

### Execution mode

Los métodos proyecto escritos en su aplicación suelen ser llamados automáticamente durante el uso de la aplicación a través de comandos de menú, botones, otros métodos, etc. En cuanto a los métodos base, se ejecutan en relación con eventos específicos que ocurren en la aplicación.

Sin embargo, para propósitos de prueba y depuración, 4D le permite ejecutar manualmente los métodos proyecto y ciertos métodos de la base de datos en el modo Diseño. En este caso, es posible ejecutar el método en un nuevo proceso y/o directamente en modo Depuración, para comprobar su ejecución paso a paso.

Están disponibles los siguientes modos de ejecución:

- El método A puede llamar al método B que puede llamar a A, por lo que A volverá a llamar a B y así sucesivamente.
- Un método puede llamarse a sí mismo.

#### Desde el Editor de código

Each [**Code Editor**](../code-editor/write-class-method.md) window has a button that can be used to run the current method. Mediante el menú asociado a este botón, se puede elegir el tipo de ejecución deseado.

Este botón sólo está activo para los métodos proyecto y para los siguientes métodos base de datos:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

For more information, see [Toolbar](../code-editor/write-class-method.md#toolbar).

#### De la caja de diálogo Ejecutar método

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

Esta caja de diálogo lista todos los métodos proyecto de la base de datos, incluyendo los métodos proyecto compartidos de los componentes. Por otra parte, los métodos proyecto que han sido declarados invisibles no aparecerán.

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. Si el método está realizando una tarea que requiere mucho tiempo, como la impresión de un gran conjunto de registros, puede seguir trabajando con su base de datos, añadiendo registros a una tabla, creando un gráfico para mostrar los datos, etc. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D _Language Reference_ manual.

**4D Server Notes**:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call a _stored procedure_, is created on the server machine in order to execute the method. Esta opción puede utilizarse para reducir el tráfico de red y optimizar el funcionamiento de 4D Server, en particular para los métodos que llaman a los datos almacenados en el disco. Todos los tipos de métodos pueden ejecutarse en la máquina servidor o en otra máquina cliente, excepto los que modifican la interfaz de usuario. En este caso, los procedimientos almacenados son ineficaces.
- También puede optar por ejecutar el método en otra estación de trabajo cliente. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4dv19/help/command/en/page648.html).

By default, the **locally** option is selected. Con la versión 4D monousuario, esta es la única opción disponible.

## Métodos proyecto recursivos

Los métodos proyecto pueden llamarse a sí mismos. Por ejemplo:

- El método A puede llamar al método B que puede llamar a A, por lo que A volverá a llamar a B y así sucesivamente.
- Un método puede llamarse a sí mismo.

Esto se llama recursividad. El lenguaje 4D soporta totalmente la recursividad.

Aquí un ejemplo. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:

- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

Para este ejemplo, suponemos que los valores de los campos son únicos (no hay dos personas con el mismo nombre). A partir de un nombre, quiere escribir la frase "Un amigo mío, Juan, que es hijo de Pablo, que es hijo de Juana, que es hijo de Roberto, que es hijo de Leonor, se gana la vida así":

1. Puede proceder de esta manera:

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

2. También puede proceder así:

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

Cuando implemente el código para casos como el del ejemplo anterior, es importante tener en cuenta que siempre puede escribir métodos utilizando los algoritmos iterativos o recursivos. Normalmente, la recursividad ofrece un código más conciso, legible y mantenible, pero su uso no es obligatorio.

En 4D, algunos usos típicos de la recursividad son:

- Tratar los registros dentro de las tablas que se relacionan entre sí de la misma manera que en el ejemplo.
- Browsing documents and folders on your disk, using the commands `FOLDER LIST` and `DOCUMENT LIST`. Una carpeta puede contener carpetas y documentos, las subcarpetas pueden a su vez contener carpetas y documentos, y así sucesivamente.

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Sin esta prueba condicional, el método se llamaría a sí mismo indefinidamente; eventualmente, 4D devolvería un error "Pila llena" porque ya no tendría espacio para "apilar" las llamadas (así como los parámetros y las variables locales utilizadas en el método).
