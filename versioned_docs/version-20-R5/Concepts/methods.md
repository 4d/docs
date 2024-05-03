---
id: methods
title: Methods
---


A method is basically a piece of code that executes one or several action(s). A method is composed of statements. 

A statement performs an action, and may be simple or complex. Each statement usually consists of one line in the method (if necessary, it can however be [split using the `\` character](quick-tour.md#code-on-several-lines)). 

The maximum size of a method is limited to 2 GB of text or 32,000 lines of code.  

## Method Types

In the 4D Language, there are several categories of methods. The category depends on how they can be called:

|Type|Calling context|Accepts parameters|Description|
|----|-----|-----|----|
|**Project method**|On demand, when the project method name is called (see [Calling project methods](#calling-project-methods))|Yes|Can contain any code to execute any custom actions. Once a project method is created, it becomes part of the language of the project.|
|**Object (widget) method**|Automatic, when an event involves the object to which the method is attached|No|Property of a form object (also called widget)|
|**Form method**|Automatic, when an event involves the form to which the method is attached|No|Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes.|
|**Trigger** (aka *Table method*)|Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)|No|Property of a table. Triggers are methods that can prevent "illegal" operations with the records of your database.|
|**Database method**|Automatic, when a working session event occurs|Yes (predefined)|There are 16 database methods in 4D. |
|**Class**|[**Class functions**](classes.md#function) are called in the context of an object instance|yes|Class functions can be built-in (*e.g.* `collection.orderBy()` or `entity.save()`), or created by the 4D developer. See [**Classes**](classes.md) |


## Calling Project Methods

A project method can have one of the following roles, depending on how it is executed and used:

- Subroutine
- Object formula
- Menu method
- Process method
- Event or Error catching method

You can also execute your project methods manually, for testing purpose for example.

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

Even for someone who doesn’t know the project, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible.

### Object formulas

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods.

To execute a method stored in an object property, use the **()** operator after the property name. For example:

```4d
//myAlert
ALERT("Hello world!")
```

Then `myAlert` can be encapsulated in any object and called:

```4d
var $o : Object
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
var $o : Object
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith") 
//$result = "John Smith"
//equivalent to $result:=fullName("param1";"param2")
```

Combined with the `This`function, such object methods allow writing powerful generic code. For example:

```4d
//fullName2 method
C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```

Then the method acts like a new, calculated attribute that can be added to other attributes:

```4d
var $o : Object
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //add the method  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```

Note that, even if it does not have parameters, an object method to be executed must be called with `()` parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```4d
$o:=$f.message //returns the formula object in $o
```

### Menu Methods

A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. By creating custom menus with menu methods that perform specific actions, you create custom interfaces for your desktop applications.

Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the application.

### Process Methods

A **process method** is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with *Start a New Process* property is also the process method for the newly started process.

### Event and Error catching Methods

An **event catching method** runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. It is called each time an error or an exception occurs. For more information, see the [Error handling](error-handling.md) section.

### Manual Execution

Project methods written in your application are usually called automatically during the use of the application via menu commands, buttons, other methods, and so on. As for database methods, they are executed in relation to specific events that occur in the application.

However, for testing and debugging purposes, 4D lets you manually execute project methods and certain database methods in Design mode. In this case, it is possible to run the method in a new process and/or directly in Debug mode, in order to check its execution step by step.

You can execute methods in two ways:

- From the Code Editor window,
- From the Execute Method dialog box (project methods only).

#### From the Code Editor

Each [**Code Editor**](../code-editor/write-class-method.md) window has a button that can be used to run the current method. Using the menu associated with this button, you can choose the type of execution desired.

This button is only active for project methods and for the following database methods:

- On Startup
- On Exit
- On Server Startup
- On Server Shutdown

For more information, see [Toolbar](../code-editor/write-class-method.md#toolbar).

#### From the Execute Method dialog box  

When you select the **Method...** command of the **Run** menu,  displays the **Execute Method** dialog.

This dialog box lists all the project methods of the database, including shared project methods of components. On the other hand, project methods that have been declared invisible will not appear.

To execute a project method, simply select its name in the list and click on **Execute**. To run a method step by step in Debug mode, click on **Debug**. For more information about the 4D debugger, refer to the [Debugging](../Debugging/basics.md) section.

If you check the **New Process** check box, the method you selected executes in another process. If the method is performing a time-consuming task such as printing a large set of records, you can continue to work with your database, adding records to a table, creating a graph to display data, and so on. For more information about processes, refer to [Processes](https://doc.4d.com/4Dv19R5/4D/19-R5/Processes.300-5830912.en.html) the 4D *Language Reference* manual.

**4D Server Notes**:

- If you want the method to be executed on the server machine rather than on the client machine, select the **On 4D Server** option in the To be executed menu. In this case, a new process, call a *stored procedure*, is created on the server machine in order to execute the method. This option can be used to reduce network traffic and optimize the functioning of 4D Server, in particular for methods that call data stored on the disk. All types of methods can be executed on the server machine or on another client machine, except for those that modify the user interface. In this case, stored procedures are ineffective.
- You can also choose to run the method on another client workstation. Other client workstations will not appear in the menu, unless they have been previously "registered" (for more information, refer to the description of the [REGISTER CLIENT](https://doc.4d.com/4dv19/help/command/en/page648.html).

By default, the **locally** option is selected. With the 4D single-user version, this is the only option available.

## Recursive Project Methods

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
