---
id: project-method-properties
title: Métodos proyecto
---

## Roles

Un método proyecto puede tener uno de los siguientes papeles, dependiendo de cómo se ejecute y utilice:

- Subrutina
- Objeto fórmula
- Método de menú
- Método de gestión de proceso
- Métodos de gestión de eventos o errores
- APIs a llamar desde el servidor web, etiquetas de transformación, extensiones...
- También puede ejecutar los métodos de su proyecto manualmente, por ejemplo, para realizar pruebas.

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

The [`Formula`](../commands/formula) or [`Formula from string`](../commands/formula-from-string) commands allow you to create [native formula objects](../API/FormulaClass.md) that you can encapsulate in object properties. Permite implementar métodos objetos personalizados.

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

For more information, see the [`4D.Formula` class description](../API/FormulaClass.md) and the [Using object properties as named parameters](../Concepts/parameters.md#using-object-properties-as-named-parameters) paragraph.

### Métodos de menú

Un método de menú se llama cuando se selecciona el comando de menú personalizado al que está asociado. You assign the method to the menu command using the Menu editor or a [command of the "Menus" theme](../commands/theme/Menus.md). El método se ejecuta cuando se elige el comando del menú. Al crear menús personalizados con métodos de menú que realizan acciones específicas, usted crea interfaces personalizadas para sus aplicaciones de escritorio.

Los comandos de menú personalizados pueden hacer que se realicen una o varias actividades. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the [`ADD RECORD`(../commands/add-record)] command until the user cancels the data entry activity.

La automatización de secuencias de actividades es una capacidad muy poderosa del lenguaje de programación 4D. Utilizando los menús personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer más orientación a los usuarios de la aplicación.

### Métodos de gestión de proceso

Un **método proyecto** es un método proyecto que se llama cuando se inicia un proceso. The process lasts only as long as the process method continues to execute, except if it is a [Worker process](../Develop/processes.md#worker-processes). Note that a menu method attached to a menu command with [*Start a New Process*](../Menus/properties.md#start-a-new-process) property is also the process method for the newly started process.

### Métodos de gestión de eventos y errores

Un **método de gestión de eventos** es un método dedicado a la gestión de eventos, que se ejecuta en un proceso diferente del método de gestión de procesos. Generalmente, para la gestión de eventos, 4D se encarga de la mayor parte. Por ejemplo, durante la entrada de datos, 4D detecta las pulsaciones de las teclas y los clics, y luego llama a los métodos objeto y formulario correspondientes para que usted pueda responder adecuadamente a los eventos desde estos métodos. Para más información, consulte la descripción del comando [`ON EVENT CALL`](../commands/on-event-call).

Un **método de gestión de errores** es un método proyecto basado en interrupciones. Se llama cada vez que se produce un error o una excepción. Para más información, consulte la sección [Gestión de errores](../Concepts/error-handling.md).

### API Methods

Los métodos del proyecto pueden ser llamados desde contextos externos como otras aplicaciones, aplicaciones web, archivos procesados, etc., en cuyo caso pueden ser vistos como API. Such calls include:

- llamadas al servidor web a través de [http request handlers](../WebServer/http-request-handler.md) o [`4DACTION` URLs](../WebServer/httpRequests.md#4daction),
- [procesamiento de etiquetas](../Tags/transformation-tags.md)
- expressions called from extensions ([4D Write Pro](../WritePro/commands/wp-insert-formula.md), [4D View Pro](../ViewPro/formulas.md) or form objects (e.g. [`ST INSERT EXPRESSION`](../commands/st-insert-expression)).

Las llamadas externas a los métodos proyecto deben estar permitidas en las [propiedades de los métodos proyecto](../Project/project-method-properties.md).

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

Si marca la casilla **Nuevo proceso**, el método seleccionado se ejecuta en otro proceso. Si el método está realizando una tarea que requiere mucho tiempo, como la impresión de un gran conjunto de registros, puede seguir trabajando con su base de datos, añadiendo registros a una tabla, creando un gráfico para mostrar los datos, etc. Para más información sobre procesos, consulte [Procesos](../Develop/processes.md).

**Notas Servidor 4D**:

- Si desea que el método se ejecute en el equipo servidor y no en el equipo cliente, seleccione la opción **En 4D Server** en el menú A ejecutar. En este caso, se crea un nuevo proceso, llamado *procedimiento almacenado*, en la máquina servidor para ejecutar el método. Esta opción puede utilizarse para reducir el tráfico de red y optimizar el funcionamiento de 4D Server, en particular para los métodos que llaman a los datos almacenados en el disco. Todos los tipos de métodos pueden ejecutarse en la máquina servidor o en otra máquina cliente, excepto los que modifican la interfaz de usuario. En este caso, los procedimientos almacenados son ineficaces.
- También puede optar por ejecutar el método en otra estación de trabajo cliente. Otras estaciones de trabajo cliente no aparecerán en el menú, a menos que hayan sido previamente "registradas" (para más información, consulte la descripción de la opción [REGISTER CLIENT](../commands/register-client).

Por defecto, está seleccionada la opción **localmente**. Con la versión 4D monousuario, esta es la única opción disponible.

### Métodos proyecto recursivos

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
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       var $vtTheWholeStory:="A friend of mine, "+$vsName
       var $vlQueryResult : Integer
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
 var $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

con la función recursiva `Genealogy of` siguiente:

```4d
  //Genealogy of project method
  //Genealogy of ( String ) -> Text
  //Genealogy of ( Name ) -> Part of sentence
 
 #DECLARE($name : Text) -> $result : Text
 $result:=$name
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$name)
 If(Records in selection([Friends and Relatives])>0)
    $result:=$result+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Note que el método `Genealogy of` se llama a sí mismo.

La primera forma es un **algoritmo iterativo**. La segunda forma es un **algoritmo recursivo**.

Cuando implemente el código para casos como el del ejemplo anterior, es importante tener en cuenta que siempre puede escribir métodos utilizando los algoritmos iterativos o recursivos. Normalmente, la recursividad ofrece un código más conciso, legible y mantenible, pero su uso no es obligatorio.

En 4D, algunos usos típicos de la recursividad son:

- Tratar los registros dentro de las tablas que se relacionan entre sí de la misma manera que en el ejemplo.
- Browsing documents and folders on your disk, using the commands [`FOLDER LIST`](../commands/folder-list) and [`DOCUMENT LIST`](document-list). Una carpeta puede contener carpetas y documentos, las subcarpetas pueden a su vez contener carpetas y documentos, y así sucesivamente.

:::warning

Las llamadas recursivas siempre deben terminar en algún punto. En el ejemplo, el método `Genealogy of` deja de llamarse a sí mismo cuando la consulta no devuelve ningún registro. Sin esta prueba condicional, el método se llamaría a sí mismo indefinidamente; eventualmente, 4D devolvería un error "Pila llena" porque ya no tendría espacio para "apilar" las llamadas (así como los parámetros y las variables locales utilizadas en el método).

:::

## Propiedades

Después de crear un método proyecto, puede cambiar su nombre y modificar sus propiedades. Las propiedades de los métodos proyecto se refieren principalmente a sus condiciones de acceso y de seguridad (acceso de usuarios, servidores integrados o servicios), así como a su modo de ejecución.

Los otros tipos de métodos no tienen propiedades específicas. Sus propiedades están relacionadas con las de los objetos a los que están unidos.

Para mostrar la caja de diálogo **Propiedades del método** para un método proyecto, puede:

- en el [editor de código](../code-editor/write-class-method.md), seleccione el comando **Propiedades del método...** en el menú **Método**,
- o en la página **Métodos** del Explorador, **haga clic derecho** en el método proyecto y seleccione **Propiedades del método...** en el menú contextual o en el menú de opciones.

> Una función de parámetrización global permite modificar una propiedad para todos o parte de los métodos proyecto de la base en una sola operación (ver [Modificar atributos de los métodos globalmente](#batch-setting-for-method-attributes)).

### Nombre

Puede cambiar el nombre de un método proyecto en el área **Nombre** de la ventana **Propiedades del método** o en el Explorador.

El nuevo nombre debe cumplir con las reglas de denominación de 4D (ver [Identificadores](../Concepts/identifiers.md)). Si ya existe un método con el mismo nombre, 4D muestra un mensaje diciendo que el nombre del método ya ha sido utilizado. Si es necesario, 4D ordena de nuevo la lista de métodos.

:::caution

Cambiar el nombre de un método ya utilizado en el proyecto puede invalidar cualquier método o fórmula que utilice el antiguo nombre de método y corre el riesgo de interrumpir el funcionamiento de la aplicación. Se recomienda encarecidamente utilizar la [función de cambio de nombre de los métodos proyecto](../Project/search-replace.md#renaming-project-methods-and-variables). Con esta función, puede actualizar automáticamente el nombre siempre que se llame al método en todo el entorno Diseño.

Con 4D Server, el nombre del método se cambia en el servidor cuando se termina de editar. Si más de un usuario está modificando el nombre del método al mismo tiempo, el nombre final del método será el especificado por el último usuario en terminar de editarlo. Es posible que desee designar un propietario del método para que sólo ciertos usuarios puedan cambiar su nombre.

:::

:::info

Los métodos base no pueden ser renombrados. Lo mismo ocurre con los triggers, los métodos formulario y los métodos objeto, que están vinculados a los objetos y toman sus nombre del objeto en cuestión.

:::

### Atributos

Puede controlar cómo se utilizan y/o llaman los métodos proyecto en diferentes contextos utilizando atributos. Tenga en cuenta que puede definir los atributos globalmente para una selección de métodos proyecto utilizando el Explorador (ver la sección siguiente).

#### Invisible

Si no quiere que los usuarios puedan ejecutar un método proyecto utilizando el comando **Método...** del menú **Ejecución**, puede hacerlo Invisible marcando esta opción. Un método invisible no aparece en la caja de diálogo de ejecución del método.

Cuando se hace invisible un método proyecto, sigue estando disponible para los desarrolladores de la base. Permanece en la lista de métodos del Explorador y del Editor de código.

#### Compartido por los componentes y la base local

Este atributo se utiliza en el marco de los componentes. Cuando está marcada, indica que el método estará disponible para los componentes cuando la aplicación se utilice como base local. Por otro lado, cuando la aplicación se utiliza como un componente, el método estará disponible para las bases locales.

Para más información sobre los componentes, consulte el capítulo [Desarrollo e instalación de componentes 4D](../Extensions/develop-components.md).

#### Ejecutar en el servidor

Este atributo sólo se tiene en cuenta para una aplicación 4D en modo cliente-servidor. Cuando esta opción está marcada, el método del proyecto se ejecuta siempre en el servidor, independientemente de cómo se llame.

Para más información sobre esta opción, consulte [Atributo Ejecutar en el servidor](https://doc.4d.com/4Dv20/4D/20/Execute-on-Server-attribute.300-6330555.en.html).

### Modo Ejecución

Esta opción permite declarar el método elegible para la ejecución en modo apropiativo. Se describe en la [sección Procesos apropiativos](../Develop/preemptive.md).

### Disponibilidad

Los atributos de disponibilidad especifican los servicios externos que pueden llamar explícitamente al método.

#### Web Services

Este atributo le permite publicar el método actual como servicio web accesible a través de peticiones SOAP. Para más información, consulte el capítulo [Publicación y uso de los servicios web](https://doc.4d.com/4Dv20/4D/20.2/Publication-and-use-of-Web-Services.200-6750103.en.html). Cuando esta opción está marcada, se activa la opción **Publicado en WSDL**.

En el explorador, los métodos proyecto que se ofrecen como Servicio web reciben un icono específico.

**Nota:** no es posible publicar un método como servicio web si su nombre incluye caracteres que no cumplen con la nomenclatura XML (por ejemplo espacios). Si el nombre del método no cumple con esto, 4D no asigna la propiedad.

#### Publicado en WSDL

Este atributo sólo está disponible si el atributo "Servicio Web" está marcado. Permite incluir el método actual en el WSDL de la aplicación 4D. Para obtener más información al respecto, consulte [Generación del WSDL](https://doc.4d.com/4Dv20/4D/20.2/Publishing-a-Web-Service-with-4D.300-6750334.en.html#502689).

En el Explorador, los métodos proyecto que se ofrecen como servicio web y se publican en WSDL reciben un icono específico.

#### Etiquetas 4D y URLs (4DACTION...)

Esta opción se utiliza para reforzar la seguridad del servidor web 4D: cuando no está marcada, el método proyecto no puede ejecutarse a través de una petición HTTP que contenga la URL especial [4DACTION](../WebServer/httpRequests.md#4daction) utilizada para llamar a los métodos 4D, ni las etiquetas especiales [4DSCRIPT, 4DTEXT y 4DHTML](../Tags/transformation-tags.md).

En el Explorador, los métodos proyecto con este atributo reciben un icono específico.

Por razones de seguridad, esta opción está desmarcada por defecto. Cada método que pueda ejecutarse utilizando las URLs y las etiquetas especiales debe indicarse individualmente.

#### SQL

Cuando está marcada, esta opción permite que el método proyecto sea ejecutado por el motor SQL de 4D. Por defecto, no está seleccionado, lo que significa que, a menos que se autorice explícitamente, los métodos proyecto de 4D están protegidos y no pueden ser llamados por el motor SQL de 4D.

This property applies to all internal and external SQL queries --- executed via the ODBC driver, SQL code inserted between the [Begin SQL](../commands/begin-sql)/[End SQL](../commands/end-sql)  tags or the [QUERY BY SQL](../commands/query-by-sql) command.

**Notas:**

- Aunque un método tenga el atributo "SQL", los derechos de acceso definidos a nivel de las propiedades de la base y de las propiedades del método se tienen en cuenta para la ejecución del método.
- La función ODBC **SQLProcedure** sólo devuelve los métodos proyecto con el atributo "SQL".

Para más información, consulte [Implementación del motor SQL de 4D](https://doc.4d.com/4Dv20/4D/20/4D-SQL-engine-implementation.300-6342089.en.html) en el manual SQL de 4D.

#### Servidor REST

*Esta opción es obsoleta. La llamada a código a través de llamadas REST sólo es compatible con las [funciones de clase del modelo de datos ORDA](../REST/ClassFunctions.md).*

### Modificar de atributos globalmente

Mediante el cuadro de diálogo "Atributos de los métodos", puede modificar un atributo (Invisible, Ofrecido como servicio web, etc.) para todos o parte de los métodos proyecto base en una sola operación. Esta funcionalidad es especialmente útil para modificar los atributos de un gran número de métodos proyecto. También puede utilizarse durante el desarrollo para aplicar rápidamente los atributos comunes a grupos de métodos similares.

Para la configuración global de los atributos del método:

1. En la página [Métodos](https://doc.4d.com/4Dv20/4D/20.2/Methods-Page.300-6750119.en.html) del Explorador 4D, despliegue el menú de opciones y elija el comando **Modificar atributos globalmente...**. Aparece la caja de diálogo **Atributos de los métodos**.

2. En el área "Nombre del método coincidente:", introduzca una cadena que le permita designar los métodos que desea modificar globalmente.
   La cadena de caracteres se utiliza como criterio de búsqueda para los nombres de los métodos.

Utilice el caracter comodín @ para ayudar a definir los grupos de métodos:

- Para designar métodos cuyos nombres empiezan por..., escriba @ al final de la cadena. Por ejemplo: `web@`
- Para designar los métodos cuyos nombres contengan..., escriba @ en medio de la cadena. Por ejemplo: `web@write`
- Para designar los métodos cuyos nombres terminan en..., escriba @ al inicio de la cadena. Por ejemplo: `@write`
- Para designar todos los métodos, basta con escribir @ en el área.

**Notas:**

- La búsqueda no tiene en cuenta las mayúsculas/minúsculas.
- Puede introducir varios caracteres @ en la cadena, por ejemplo `dtro_@web@pro.@`

3. En el área "Atributo a modificar", elija un atributo de la lista desplegable y, a continuación, haga clic en el botón radio **True** o **False** correspondiente al valor que debe aplicarse.

**Nota:** si el atributo "Publicado en WSDL" se establece como True, sólo se aplicará a los métodos proyecto que ya contengan el atributo "Ofrecido como servicio web".

4. Haga clic en **Aplicar**. La modificación se aplica instantáneamente a todos los métodos proyecto designados por la cadena de caracteres introducida.


