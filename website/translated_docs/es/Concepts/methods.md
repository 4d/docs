---
id: methods
title: Métodos
---


A method is basically a piece of code that executes one or several actions. En el lenguaje 4D, hay dos categorías de métodos:

- **Los métodos integrados**, que son suministrados por 4D o por desarrolladores externos y que sólo pueden ser llamados en su código. Los métodos integrados incluyen:
    - Comandos y funciones de 4D API, como `ALERT` o `Current date`.
    - Los métodos asociados a las colecciones o a los objetos nativos, como `collection.orderBy()` o `entity.save()`.
    - Los comandos de los plug-ins o componentes, suministrados por 4D o por desarrolladores de terceros, comos `SVG_New_arc`.

    Los métodos integrados se detallan en el manual *Lenguaje 4D* o en los manuales dedicados a los plug-ins o componentes.

- Los **métodos proyecto**, donde puede escribir su propio código para ejecutar toda acción personalizada. Una vez creado un método proyecto, pasa a formar parte del lenguaje de la base en la que se crea. Un método proyecto se compone de varias líneas de instrucciones, cada una de las cuales consta de una línea en el método. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). El tamaño máximo de un método proyecto está limitado a 2 GB de texto o 32.000 líneas de instrucciones.

**Nota:** 4D también ofrece métodos específicos que se ejecutan automáticamente en función de los eventos de la base o de los eventos formulario. Ver [Métodos especializados](#specialized-methods).


## Métodos proyecto

A project method can have one of the following roles, depending on how it is executed and used:

- Subrutina y función
- Método asociado a un objeto
- Menu method
- Process method
- Event or Error catching method

### Subrutinas y funciones
A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it.

Cuando crea un método proyecto, éste pasa a formar parte del lenguaje de la base en la que lo crea. Entonces puede llamar al método proyecto desde otros métodos proyecto, o desde [métodos predefinidos](#predefined-methods) de la misma manera que llama a los comandos integrados de 4D. A project method used in this way is called a subroutine.

You use subroutines to:

- Reduce repetitive coding
- Clarify your methods
- Facilitate changes to your methods
- Modularize your code

Por ejemplo, supongamos que tiene una base de clientes. Al personalizar la base, se da cuenta de que hay algunas tareas que realiza reiteradamente, como la búsqueda de un cliente y la modificación de su registro. The code to do this might look like this:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. Si hay diez lugares en su base personalizada donde necesita hacer esto, tendrá que escribir el código diez veces. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines—to reduce the amount of code.

Si el código descrito anteriormente fuera un método llamado `MODIFICAR CLIENTE`, se ejecutaría simplemente utilizando el nombre del método en otro método. For example, to modify a customer’s record and then print the record, you would write this method:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

This capability simplifies your methods dramatically. En el ejemplo, no es necesario saber cómo funciona el método `MODIFICAR CLIENTE`, sólo lo que hace. This is the second reason for using subroutines—to clarify your methods. In this way, your methods become extensions to the 4D language.

Si necesita cambiar su método de búsqueda de clientes en esta base de ejemplo, tendrá que cambiar sólo un método, no diez. This is the next reason to use subroutines—to facilitate changes to your methods.

Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Considere el siguiente código de una base de de cuentas corrientes:

```4d
 FIND CLEARED CHECKS ` Buscar los cheques emitidos
 RECONCILE ACCOUNT ` Reconciliar la cuenta
 PRINT CHECK BOOK REPORT ` Imprimir un informe de la chequera
```

Incluso para alguien que no conozca la base, está claro lo que hace este código. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible.

### Métodos asociados a los objetos

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods.

To execute a method stored in an object property, use the **( )** operator after the property name. For example:

```4d
//myAlert
ALERT("Hello world!")
```
Then `myAlert` can be encapsulated in any object and called:
```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Syntax with brackets is also supported:

```4d
$o["custom_Alert"]() //displays "Hello world!"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//fullName method
C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```
You can encapsulate `fullName` in an object:
```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith")
//$result = "John Smith"
// equivalent to $result:=fullName("param1";"param2")
```
Combined with the `This`function, such object methods allow writing powerful generic code. For example:

```4d
//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```
Then the method acts like a new, calculated attribute that can be added to other attributes:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //añadir el método  

$result:=$o.fullName()
//$result = "Jim Wesson"
```



Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```4d
$o:=$f.message //returns the formula object in $o
```

### Menu Methods
A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. Este proceso es uno de los principales aspectos de la personalización de una base de datos. Al crear menús personalizados con métodos de menú que realizan acciones específicas, usted personaliza su base.

Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the programming language. Utilizando los menús personalizados, se pueden automatizar las secuencias de tareas y, por lo tanto, ofrecer más orientación a los usuarios de la base.


### Process Methods

A **process method** is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with *Start a New Process* property is also the process method for the newly started process.

### Event and Error catching Methods
An **event catching method** runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command `ON ERR CALL`.

## Métodos proyecto recursivos

Project methods can call themselves. For example:

- The method A may call the method B which may call A, so A will call B again and so on.
- A method can call itself.

This is called recursion. The 4D language fully supports recursion.

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


## Métodos especializados

Además de los **métodos proyecto**, 4D soporta varios tipos de métodos específicos, que se llaman automáticamente en función de los eventos:

| Type                             | Calling context                                                                          | Accepts parameters | Description                                                                                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Object (widget) method**       | Automatic, when an event involves the object to which the method is attached             | No                 | Property of a form object (also called widget)                                                                                                                       |
| **Form method**                  | Automatic, when an event involves the form to which the method is attached               | No                 | Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. |
| **Trigger** (aka *Table method*) | Automatic, each time that you manipulate the records of a table (Add, Delete and Modify) | No                 | Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.                                                   |
| **Database method**              | Automatic, when a working session event occurs                                           | Yes (predefined)   | There are 16 database methods in 4D. See Database methods section                                                                                                    |
