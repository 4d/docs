---
id: methods
title: Methods
---


A method is basically a piece of code that executes one or several actions. In the 4D Language, there are two categories of methods:

- **built-in methods**, which are provided by 4D and that can be called in your code. Built-in methods include:
 - Commands and functions of the 4D API, such as `ALERT` or `Current date`.
 - Methods attached to collections or to ORDA objects, such as `collection.orderBy()` or `entity.save()`.
 - Commands from plug-ins or components, provided by 4D or third-party developers, such as `SVG_New_arc`.
 
- **project methods**, where you can write your own code to execute any custom actions. Once a project method is created, it becomes part of the language of the database in which you create it. You can then call the project method in the same way that you call 4D’s built-in methods.

**Note:** 4D also provides specific methods that are automatically called following events. See XXX  

In the 4D Language, there are two categories of methods:
- **developer methods**, which are places where you write your code; for example, a database method is a developer method. 
- **instance methods**, which are specific functions that you can call on their parent object or collection; for example, `entity.save()` designates an instance method of entity objects. 4D provides a lot of built-in instance methods, but you can add your own functions to your objects.


## Developer Methods

In order to make the commands, operators, and other parts of the language work, you write them in **developer methods**. 

A developer method is composed of statements; each statement consists of one line in the method. A statement performs an action, and may be simple or complex. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks).

**Note:** The maximum size of a developer method is limited to 2 GB of text or 32 000 lines of command. Beyond these limits, a warning message appears, indicating that the extra lines will not be displayed.

There are several types of developer methods in 4D. They support the same code, the main differences between them are how they are called, and if they accept parameters:

|Type|Calling context|Accepts parameters|Description|
|----|-----|-----|----|
|**Object (widget) method**|Automatic, when an event involves the object to which the method is attached|No|Property of a form object (also called widget)|
|**Form method**|Automatic, when an event involves the form to which the method is attached|No|Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes.|
|**Trigger** (aka *Table method*)|Automatic, each time that you manipulate the records of a table (Add, Delete and Modify)|No|Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.|
|**Database method**|Automatic, when a working session event occurs|Yes (predefined)|There are 16 database methods in 4D. See XXX section|
|**Project method**|Manual, wherever needed—from other project methods, other methods, menus, processes (see below)|Yes|When you call a project method, it acts as if you had written the method at the location where you called it. Project methods called from other methods are often referred to as “subroutines.” A project method that returns a result can also be called a function. |

### Calling Project Methods

Project methods are aptly named. Whereas form or object methods are bound to forms and objects, a project method is available anywhere; it is not specifically attached to any particular object of the database. A project method can have one of the following roles, depending on how it is executed and used:

- Menu method
- Subroutine and function
- Process method
- Event or Error catching method

#### Menu Methods
A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. This process is one of the major aspects of customizing a database. By creating custom menus with menu methods that perform specific actions, you personalize your database. 

Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the programming language. Using custom menus, you can automate task sequences and thus provide more guidance to users of the database.

#### Subroutines and functions
A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it.

When you create a project method, it becomes part of the language of the database in which you create it. You can then call the project method in the same way that you call 4D’s built-in commands. A project method used in this way is called a subroutine.

You use subroutines to:

- Reduce repetitive coding
- Clarify your methods
- Facilitate changes to your methods
- Modularize your code

For example, let’s say you have a database of customers. As you customize the database, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. The code to do this might look like this:

```
  ` Look for a customer
 QUERY BY EXAMPLE([Customers])
  ` Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  ` Modify the customer's record
 MODIFY RECORD([Customers])
```

If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. If there are ten places in your custom database where you need to do this, you will have to write the code ten times. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines—to reduce the amount of code.

If the previously described code was a method called `MODIFY CUSTOMER`, you would execute it simply by using the name of the method in another method. For example, to modify a customer’s record and then print the record, you would write this method:

```
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

This capability simplifies your methods dramatically. In the example, you do not need to know how the `MODIFY CUSTOMER` method works, just what it does. This is the second reason for using subroutines—to clarify your methods. In this way, your methods become extensions to the 4D language.

If you need to change your method of finding customers in this example database, you will need to change only one method, not ten. This is the next reason to use subroutines—to facilitate changes to your methods.

Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Consider the following code from a checking account database:

```
 FIND CLEARED CHECKS ` Find the cleared checks
 RECONCILE ACCOUNT ` Reconcile the account
 PRINT CHECK BOOK REPORT ` Print a checkbook report
```

Even for someone who doesn’t know the database, it is clear what this code does. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible. 

#### Process Methods 

A **process method** is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with *Start a New Process* property is also the process method for the newly started process.

#### Event and Error catching methods
An **event catching method** runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. In other circumstances, you may want to handle events directly. For example, if you run a lengthy operation (such as ```For...End for``` loop browsing records), you may want to be able to interrupt the operation by typing **Ctrl-Period** (Windows) or **Cmd-Period** (macOS). In this case, you should use an event catching method to do so. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command `ON ERR CALL`.

### Recursive Project Methods

Project methods can call themselves. For example:

- The method A may call the method B which may call A, so A will call B again and so on.
- A method can call itself.

This is called recursion. The 4D language fully supports recursion.

Here is an example. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:
- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

For this example, we assume the values in the fields are unique (there are no two persons with the same name). Given a name, you want to build the sentence “A friend of mine, John who is the child of Paul who is the child of Jane who is the child of Robert who is the child of Eleanor, does this for a living!”:

1. You can build the sentence in this way:

```
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

```
 $vsName:=Request("Enter the name:";"John")
 If(OK=1)
    QUERY([Friends and Relatives];[Friends and Relatives]Name=$vsName)
    If(Records in selection([Friends and Relatives])>0)
       ALERT("A friend of mine, "+Genealogy of($vsName)+", does this for a living!")
    End if
 End if
```

with the recursive function `Genealogy of` listed here:

```
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


## Instance Methods

Instance methods are functions that are associated with an object or a collection. 4D proposes a large number of built-in instance methods. For example, **ORDA** objects such as datastores, dataclasses, entity selections, and entities, define classes of objects providing instance methods to directly interact with them. 

Thanks to **object notation**, instance methods can be applied to references using the following syntax:

```
{$result:=}myCollection.memberFunction( {params} )  
{$result:=}myObject.memberFunction( {params} )
```

Note that, even if it does not have parameters, an instance method must be called with () parenthesis, otherwise a syntax error is generated.

For example, the `query()` method is a dataclass instance method. If you have stored a dataclass object in the *$myClass* variable, you can write:

```
 $myClass.query("name = smith")
```

Examples with collections:

```
 $newCol:=$col.copy() //deep copy of $col to $newCol
 $col.push(10;100) //add 10 and 100 to the collection
``` 

Some instance methods return the original object/collection after modification, so that you can run the calls in a sequence:

```
 $col:=New collection(5;20)
 $col2:=$col.push(10;100).sort() //$col2=[5,10,20,100]
```

> **Warning:** When using instance methods, you must use ECMA Script compliant property paths, i.e. you cannot use ".", "[ ]", or spaces in property names. For example, according to the Object property identifiers rules, property names such as $o["My.special.property"] are supported. However, they will not be usable with instance methods:

```
$vmin:=$col.min("My.special.property") //undefined
$vmin:=$col.min(["My.special.property"]) //error
```

### propertyPath parameter  

Several instance methods accept a *propertyPath* as parameter. This parameter stands for:

- either an object property name, for example "lastName"
- or an object property path, i.e. a hierarchical sequence of sub-properties linked with dot characters, for example "employee.children.firstName". 
Consequently, when a *propertyPath* parameter is expected, using property names containing one or more "." is not supported since it will prevent 4D from correctly parsing the path.
 

### Custom Instance Methods

You can encapsulate your own functions (formulas) and call them from your objects.

The `New formula` or `New formula from string` methods allow you to create native "formula" objects that you can encapsulate in object properties. It allows you to implement custom instance methods:

```
C_OBJECT($f)
$f:=New object
$f.message:=New formula(ALERT("Hello world"))
```

Such properties are "object instance methods", i.e. instance methods which are bound to their parent object. To execute a method stored in an object property, use the ( ) operator after the property name, such as:

```
$f.message() //displays "Hello world"
```

Syntax with brackets is also supported:

```
$f["message"]() //displays "Hello world"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```
 C_OBJECT($f)
 $f:=New object
 $f.message:=New formula(ALERT("Hello "+$1))
 $f.message("John") //displays "Hello John"
```

Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Calling only the object property will return a new reference to the formula (and will not execute it):

```
$o:=$f.message //returns the formula object in $o
```

