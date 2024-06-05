---
id: methods
title: Métodos
---

Un método es básicamente un trozo de código que ejecuta una o varias acciones. Un método se compone de instrucciones.

Una línea de instrucción realiza una acción, y puede ser simple o compleja. Cada instrucción generalmente consiste en una línea en el método (si es necesario, puede ser [dividida utilizando el carácter `\`](quick-tour.md#codigo-en-varias-lineas)).

El tamaño máximo de un método está limitado a 2 GB de texto o 32.000 líneas de código.

## Tipos de métodos

En el lenguaje 4D, hay varias categorías de métodos. La categoría depende de cómo se les pueda llamar:

| Tipo                                              | Contexto de llamada                                                                                                                         | Acepta los parámetros               | Descripción                                                                                                                                                                                                               |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**                              | Por demanda, cuando se llama al nombre del método proyecto (ver [Llamando a métodos proyecto](#calling-project-methods)) | Sí                                  | Puede contener código para ejecutar acciones personalizadas. Una vez creado un método proyecto, pasa a formar parte del lenguaje del proyecto.                                            |
| **Método objeto (widget)**     | Automático, cuando un evento involucra al objeto al que se asocia el método                                                                 | No                                  | Propiedad de un objeto formulario (también llamado widget)                                                                                                                                             |
| **Método formulario**                             | Automático, cuando un evento involucra al formulario al que se asocia el método                                                             | No                                  | Propiedad de un formulario. Puede utilizar un método formulario para gestionar datos y objetos, pero generalmente es más sencillo y eficiente utilizar un método objeto para estos fines. |
| **Trigger** (o _método tabla_) | Automático, cada vez que se manipulan los registros de una tabla (Añadir, Eliminar y Modificar)                          | No                                  | Propiedad de una tabla. Los triggers son métodos que pueden evitar operaciones "ilegales" con los registros de su base.                                                                   |
| **Método base**                                   | Automático, cuando se produce un evento de la sesión de trabajo                                                                             | Sí (predefinido) | Hay 16 métodos base en 4D.                                                                                                                                                                                |
| **Class**                                         | [**Las funciones de clases**](classes.md#function) se llaman en el contexto de una instancia de objeto                                      | sí                                  | Las funciones de clases pueden estar integradas (_por ejemplo_ `collection.orderBy()` o `entity.save()`), o creadas por el desarrollador 4D. Ver [**Clases**](classes.md)              |

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

Cuando crea un método proyecto, éste pasa a formar parte del lenguaje del proyecto en el que lo crea. Luego puede llamar al método proyecto desde otro método (método proyecto, método objeto...) de la misma manera que llama a los comandos integrados de 4D. Un método proyecto utilizado de este manera se llama una subrutina.

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

Para ejecutar un método almacenado en una propiedad objeto, utilice el operador **()** después del nombre de la propiedad. Por ejemplo:

```4d
//myAlert
ALERT("Hello world!")
```

Luego `myAlert` puede encapsularse en cualquier objeto y llamarse:

```4d
var $o : Object
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //muestra "Hello world!"
```

También se admite la sintaxis con paréntesis:

```4d
$o["custom_Alert"]() //muestra "Hello world!"
```

También puede [pasar parámetros](Concepts/parameters.md) a su fórmula cuando la llame utilizando $1, $2… así como con los métodos proyecto 4D:

```4d
//método fullName 
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```

Puede encapsular `fullName` en un objeto:

```4d
var $o : Object
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
//equivalente a $result:=fullName("param1";"param2")
```

Combinados con la función `This`, estos métodos objetos permiten escribir un código genérico muy poderoso. Por ejemplo:

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

Tenga en cuenta que, aunque no tenga parámetros, un método objeto que vaya a ejecutarse debe llamarse con paréntesis `()`. Llamar sólo a la propiedad del objeto devolverá una nueva referencia a la fórmula (y no la ejecutará):

```4d
$o:=$f.message //devuelve el objeto fórmula en $o
```

### Métodos de menú

Un método de menú se llama cuando se selecciona el comando de menú personalizado al que está asociado. El método se asigna al comando del menú utilizando el editor de menús o un comando del tema "Menús". El método se ejecuta cuando se elige el comando del menú. Al crear menús personalizados con métodos de menú que realizan acciones específicas, usted crea interfaces personalizadas para sus aplicaciones de escritorio.

Los comandos de menú personalizados pueden hacer que se realicen una o varias actividades. Por ejemplo, un comando de menú de entrada de registros puede llamar a un método que realice dos tareas: mostrar el formulario de entrada apropiado y llamar al comando `ADD RECORD` hasta que el usuario cancele la actividad de entrada de datos.

La automatización de secuencias de actividades es una capacidad muy poderosa del lenguaje de programación. Utilizando los menús personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer más orientación a los usuarios de la aplicación.

### Métodos de gestión de proceso

Un **método proyecto** es un método proyecto que se llama cuando se inicia un proceso. El proceso dura sólo mientras el método continúa ejecutándose, excepto si se trata de un proceso Worker. Tenga en cuenta que un método de menú asociado a un comando de menú con la propiedad _Iniciar un nuevo proceso_ es también el método de gestión de proceso para el proceso recién creado.

### Métodos de gestión de eventos y errores

Un **método de gestión de eventos** es un método dedicado a la gestión de eventos, que se ejecuta en un proceso diferente del método de gestión de procesos. Generalmente, para la gestión de eventos, 4D se encarga de la mayor parte. Por ejemplo, durante la entrada de datos, 4D detecta las pulsaciones de las teclas y los clics, y luego llama a los métodos objeto y formulario correspondientes para que usted pueda responder adecuadamente a los eventos desde estos métodos. Para más información, consulte la descripción del comando `ON EVENT CALL`.

Un **método de gestión de errores** es un método proyecto basado en interrupciones. Se llama cada vez que se produce un error o una excepción. Para más información, consulte la sección [Gestión de errores](error-handling.md).

### Execution mode

Los métodos proyecto escritos en su aplicación suelen ser llamados automáticamente durante el uso de la aplicación a través de comandos de menú, botones, otros métodos, etc. En cuanto a los métodos base, se ejecutan en relación con eventos específicos que ocurren en la aplicación.

Sin embargo, para propósitos de prueba y depuración, 4D le permite ejecutar manualmente los métodos proyecto y ciertos métodos de la base de datos en el modo Diseño. En este caso, es posible ejecutar el método en un nuevo proceso y/o directamente en modo Depuración, para comprobar su ejecución paso a paso.

Están disponibles los siguientes modos de ejecución:

- El método A puede llamar al método B que puede llamar a A, por lo que A volverá a llamar a B y así sucesivamente.
- Un método puede llamarse a sí mismo.

#### Desde el Editor de código

Cada ventana del [**Editor de código**](../code-editor/write-class-method.md) tiene un botón que se puede utilizar para ejecutar el método actual. Mediante el menú asociado a este botón, se puede elegir el tipo de ejecución deseado.

Este botón sólo está activo para los métodos proyecto y para los siguientes métodos base de datos:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

Para más información, consulte [Barra de herramientas](../code-editor/write-class-method.md#toolbar).

#### De la caja de diálogo Ejecutar método

En 4D, algunos usos típicos de la recursividad son:

Esta caja de diálogo lista todos los métodos proyecto de la base de datos, incluyendo los métodos proyecto compartidos de los componentes. Por otra parte, los métodos proyecto que han sido declarados invisibles no aparecerán.

Para ejecutar un método proyecto, basta con seleccionar su nombre en la lista y hacer clic en **Ejecutar**. Para ejecutar un método paso a paso en modo Depuración, haga clic en **Depuración**. Para más información sobre el depurador de 4D, consulte la sección [Depuración](../Debugging/basics.md).

Si marca la casilla **Nuevo proceso**, el método seleccionado se ejecuta en otro proceso. Si el método está realizando una tarea que requiere mucho tiempo, como la impresión de un gran conjunto de registros, puede seguir trabajando con su base de datos, añadiendo registros a una tabla, creando un gráfico para mostrar los datos, etc. Para más información sobre los procesos, consulte [Procesos](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) en el manual _Lenguaje_ 4D.

**Notas Servidor 4D**:

- Si desea que el método se ejecute en el equipo servidor y no en el equipo cliente, seleccione la opción **En 4D Server** en el menú A ejecutar. En este caso, se crea un nuevo proceso, llamado _procedimiento almacenado_, en la máquina servidor para ejecutar el método. Esta opción puede utilizarse para reducir el tráfico de red y optimizar el funcionamiento de 4D Server, en particular para los métodos que llaman a los datos almacenados en el disco. Todos los tipos de métodos pueden ejecutarse en la máquina servidor o en otra máquina cliente, excepto los que modifican la interfaz de usuario. En este caso, los procedimientos almacenados son ineficaces.
- También puede optar por ejecutar el método en otra estación de trabajo cliente. Otras estaciones de trabajo cliente no aparecerán en el menú, a menos que hayan sido previamente "registradas" (para más información, consulte la descripción de la opción [REGISTER CLIENT](https://doc.4d.com/4dv19/help/command/en/page648.html).

Por defecto, está seleccionada la opción **localmente**. Con la versión 4D monousuario, esta es la única opción disponible.

## Métodos proyecto recursivos

Los métodos proyecto pueden llamarse a sí mismos. Por ejemplo:

- El método A puede llamar al método B que puede llamar a A, por lo que A volverá a llamar a B y así sucesivamente.
- Un método puede llamarse a sí mismo.

Esto se llama recursividad. El lenguaje 4D soporta totalmente la recursividad.

Aquí un ejemplo. Digamos que tiene una tabla `[Friends and Relatives]` compuesta por este conjunto de campos extremadamente simplificado:

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

con la función recursiva `Genealogy of` siguiente:

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

Note que el método `Genealogy of` se llama a sí mismo.

La primera forma es un **algoritmo iterativo**. La segunda forma es un **algoritmo recursivo**.

Cuando implemente el código para casos como el del ejemplo anterior, es importante tener en cuenta que siempre puede escribir métodos utilizando los algoritmos iterativos o recursivos. Normalmente, la recursividad ofrece un código más conciso, legible y mantenible, pero su uso no es obligatorio.

En 4D, algunos usos típicos de la recursividad son:

- Tratar los registros dentro de las tablas que se relacionan entre sí de la misma manera que en el ejemplo.
- Navegar por los documentos y las carpetas del disco, utilizando los comandos `FOLDER LIST` y `DOCUMENT LIST`. Una carpeta puede contener carpetas y documentos, las subcarpetas pueden a su vez contener carpetas y documentos, y así sucesivamente.

**Importante:** Las llamadas recursivas deben terminar siempre en algún punto. En el ejemplo, el método `Genealogy of` deja de llamarse a sí mismo cuando la consulta no devuelve ningún registro. Sin esta prueba condicional, el método se llamaría a sí mismo indefinidamente; eventualmente, 4D devolvería un error "Pila llena" porque ya no tendría espacio para "apilar" las llamadas (así como los parámetros y las variables locales utilizadas en el método).
