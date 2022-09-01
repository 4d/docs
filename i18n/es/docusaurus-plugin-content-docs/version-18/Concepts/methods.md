---
id: methods
title: Métodos
---


Un método es básicamente un trozo de código que ejecuta una o varias acciones. En el lenguaje 4D, hay dos categorías de métodos:

- **Los métodos integrados**, que son suministrados por 4D o por desarrolladores externos y que sólo pueden ser llamados en su código. Los métodos integrados incluyen:
    - Comandos y funciones de 4D API, como `ALERT` o `Current date`.
    - Los métodos asociados a las colecciones o a los objetos nativos, como `collection.orderBy()` o `entity.save()`.
    - Los comandos de los plug-ins o componentes, suministrados por 4D o por desarrolladores de terceros, comos `SVG_New_arc`.

    Los métodos integrados se detallan en el manual *Lenguaje 4D* o en los manuales dedicados a los plug-ins o componentes.

- Los **métodos proyecto**, donde puede escribir su propio código para ejecutar toda acción personalizada. Una vez creado un método proyecto, pasa a formar parte del lenguaje de la base en la que se crea. Un método proyecto se compone de varias líneas de instrucciones, cada una de las cuales consta de una línea en el método. Una línea de instrucción realiza una acción, y puede ser simple o compleja. Aunque una instrucción es siempre una línea, esa línea puede ser tan larga como sea necesario (hasta 32.000 caracteres, lo que probablemente sea suficiente para la mayoría de las tareas). A statement performs an action, and may be simple or complex.

**Nota:** 4D también ofrece métodos específicos que se ejecutan automáticamente en función de los eventos de la base o de los eventos formulario. Ver [Métodos especializados](#specialized-methods).


## Métodos proyecto

Un método proyecto puede tener uno de los siguientes papeles, dependiendo de cómo se ejecute y utilice:

- Subrutina y función
- Método asociado a un objeto
- Método de menú
- Método de gestión de proceso
- Métodos de gestión de eventos o errores

### Subrutinas y funciones
Una subrutina es un método proyecto que puede considerarse como un ayudante. Realiza aquellas tareas que otros métodos le solicitan. Una función es una subrutina que devuelve un valor al método que la llamó.

Cuando crea un método proyecto, éste pasa a formar parte del lenguaje de la base en la que lo crea. Entonces puede llamar al método proyecto desde otros métodos proyecto, o desde [métodos predefinidos](#predefined-methods) de la misma manera que llama a los comandos integrados de 4D. Un método proyecto utilizado de este manera se llama una subrutina.

Se utilizan subrutinas para:

- Reducción del código repetitivo
- Clarificación de los métodos
- Facilitar los cambios en sus métodos
- Modularizar el código

Por ejemplo, supongamos que tiene una base de clientes. Al personalizar la base, se da cuenta de que hay algunas tareas que realiza reiteradamente, como la búsqueda de un cliente y la modificación de su registro. El código para hacer esto podría ser:

```4d
  // Búsqueda de un cliente
 QUERY BY EXAMPLE([Customers])
  // Selección del formulario entrada
 FORM SET INPUT([Customers];"Data Entry")
  // Modificación del registro del cliente
 MODIFY RECORD([Customers])
```

Si no utiliza subrutinas, tendrá que escribir el código cada vez que quiera modificar el registro de un cliente. If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. Si utiliza subrutinas, sólo tendrá que escribirlas una vez. Esta es la primera ventaja de las subrutinas: reducir la cantidad de código.

Si el código descrito anteriormente fuera un método llamado `MODIFICAR CLIENTE`, se ejecutaría simplemente utilizando el nombre del método en otro método. Por ejemplo, para modificar el registro de un cliente y luego imprimir el registro, se escribiría este método:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

Esta posibilidad simplifica enormemente sus métodos. This capability simplifies your methods dramatically. Esta es la segunda razón para utilizar subrutinas: clarificar sus métodos. De este modo, sus métodos se convierten en extensiones del lenguaje 4D.

Si necesita cambiar su método de búsqueda de clientes en esta base de ejemplo, tendrá que cambiar sólo un método, no diez. Esta es la siguiente razón para utilizar subrutinas: facilitar los cambios en sus métodos.

Utilizando las subrutinas, hace que su código sea modular. Esto significa simplemente dividir el código en módulos (subrutinas), cada una de las cuales realiza una tarea lógica. Considere el siguiente código de una base de de cuentas corrientes:

```4d
 FIND CLEARED CHECKS ` Buscar los cheques emitidos
 RECONCILE ACCOUNT ` Reconciliar la cuenta
 PRINT CHECK BOOK REPORT ` Imprimir un informe de la chequera
```

Incluso para alguien que no conozca la base, está claro lo que hace este código. No es necesario examinar cada subrutina. Cada subrutina puede tener muchas líneas y realizar algunas operaciones complejas, pero aquí sólo es importante que realice su tarea. Le recomendamos que divida su código en tareas lógicas, o módulos, siempre que sea posible.

### Métodos asociados a los objetos

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
Un método de menú se llama cuando se selecciona el comando de menú personalizado al que está asociado. El método se asigna al comando del menú utilizando el editor de menús o un comando del tema "Menús". El método se ejecuta cuando se elige el comando del menú. Este proceso es uno de los principales aspectos de la personalización de una base de datos. Al crear menús personalizados con métodos de menú que realizan acciones específicas, usted personaliza su base.

Los comandos de menú personalizados pueden hacer que se realicen una o varias actividades. Por ejemplo, un comando de menú de entrada de registros puede llamar a un método que realice dos tareas: mostrar el formulario de entrada apropiado y llamar al comando `ADD RECORD` hasta que el usuario cancele la actividad de entrada de datos.

La automatización de secuencias de actividades es una capacidad muy poderosa del lenguaje de programación. Utilizando los menús personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer más orientación a los usuarios de la base.


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
    End if
 End if
```

con la función recursiva `Genealogy of` siguiente:

```4d
  ` Método proyecto Genealogy of
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


## Métodos especializados

Además de los **métodos proyecto**, 4D soporta varios tipos de métodos específicos, que se llaman automáticamente en función de los eventos:

| Type                           | Contexto de llamada                                                                             | Acepta los parámetros | Descripción                                                                                                                                                                               |
| ------------------------------ | ----------------------------------------------------------------------------------------------- | --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Método objeto (widget)**     | Automático, cuando un evento involucra al objeto al que se asocia el método                     | No                    | Propiedad de un objeto formulario (también llamado widget)                                                                                                                                |
| **Método formulario**          | Automático, cuando un evento involucra al formulario al que se asocia el método                 | No                    | Propiedad de un formulario. Puede utilizar un método formulario para gestionar datos y objetos, pero generalmente es más sencillo y eficiente utilizar un método objeto para estos fines. |
| **Trigger** (o *método tabla*) | Automático, cada vez que se manipulan los registros de una tabla (Añadir, Eliminar y Modificar) | No                    | Propiedad de una tabla. Los triggers son métodos que pueden evitar operaciones "ilegales" con los registros de su base.                                                                   |
| **Método base**                | Automático, cuando se produce un evento de la sesión de trabajo                                 | Sí (predefinido)      | Hay 16 métodos base en 4D. Véase la sección métodos base                                                                                                                                  |
