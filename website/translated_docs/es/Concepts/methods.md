---
id: methods
title: Métodos
---


A method is basically a piece of code that executes one or several actions. A method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks).

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.

## Method Types

In the 4D Language, there are several categories of methods. The category depends on how they can be called:

| Tipo                             | Calling context                                                                                             | Accepts parameters | Descripción                                                                                                                                                          |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Project method**               | On demand, when the project method name is called (see [Calling project methods](#calling-project-methods)) | Sí                 | Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project.                                |
| **Object (widget) method**       | Automatic, when an event involves the object to which the method is attached                                | No                 | Property of a form object (also called widget)                                                                                                                       |
| **Form method**                  | Automatic, when an event involves the form to which the method is attached                                  | No                 | Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. |
| **Trigger** (aka *Table method*) | Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)                    | No                 | Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.                                                   |
| **Database method**              | Automatic, when a working session event occurs                                                              | Yes (predefined)   | There are 16 database methods in 4D. See Database methods section                                                                                                    |


> The 4D Language also supports **Class functions**, that can be called in the context of an object instance. Class functions can be built-in (*e.g.* `collection.orderBy()` or `entity.save()`), or [created by the 4D developer](classes.md#class-function).


## Métodos proyecto

A project method can have one of the following roles, depending on how it is executed and used:

- Subroutine
- Object formula
- Menu method
- Process method
- Event or Error catching method

### Subroutines

A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it.

When you create a project method, it becomes part of the language of the project in which you create it. You can then call the project method from another method (project method, object method...) in the same way that you call 4D’s built-in commands. A project method used in this way is called a subroutine.

You use subroutines to:

- Reduce repetitive coding
- Clarify your methods
- Facilitate changes to your methods
- Modularize your code

For example, let’s say you have a project of customers. As you customize the project, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. If there are ten places in your project where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines—to reduce the amount of code.

If the previously described code was a method called `MODIFY_CUSTOMER`, you would execute it simply by using the name of the method in another method. For example, to modify a customer’s record and then print the record, you would write this method:

```4d
 MODIFY_CUSTOMER
 PRINT SELECTION([Customers])
```

This capability simplifies your methods dramatically. In the example, you do not need to know how the `MODIFY_CUSTOMER` method works, just what it does. This is the second reason for using subroutines—to clarify your methods. In this way, your methods become extensions to the 4D language.

If you need to change your method of finding customers in this example project, you will need to change only one method, not ten. This is the next reason to use subroutines—to facilitate changes to your methods.

Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account project:

```4d
 FIND_CLEARED_CHECKS //Find the cleared checks
 RECONCILE_ACCOUNT //Reconcile the account
 PRINT_CHECK_BOOK_REPORT //Print a checkbook report
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

Esto se llama recursividad. The 4D language fully supports recursion.

Here is an example. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:
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

**Important:** Recursive calls should always end at some point. In the example, the method `Genealogy of` stops calling itself when the query returns no records. Without this condition test, the method would call itself indefinitely; eventually, 4D would return a “Stack Full” error becuase it would no longer have space to “pile up” the calls (as well as parameters and local variables used in the method).
