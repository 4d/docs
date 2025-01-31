---
id: variables
title: Variables
---

Data in 4D is stored in two fundamentally different ways. **Fields** store data permanently on disk; **variables** store data temporarily in memory.

When you set up your 4D database, you specify the names and types of fields that you want to use. Variables are much the same—you also give them names and different types (see [Data types](data-types.md)).

Once created, you can use a variable wherever you need it in your application. For example, you might need to store a text variable in a field of same type:

```4d
 [MyTable]MyField:=MyText
```

Variables are language objects; you can create and use variables that will never appear on the screen. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved.

## Declaring Variables

You create variables by declaring them using the `var` keyword.

When variables are declared, they are initialized to the [**default value corresponding to their type**](data-types.md#default-values), which they will keep during the session as long as they have not been [assigned](#assigning-data). Alternatively, when declaring variables, you can [initialize](#initializing-variables-in-the-declaration-line) their value along with their data type all within one line.

:::note

Although it is not recommended, you can create variables simply by using them; you do not necessarily need to formally declare them. For example, to create a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

When a variable is created before being declared, it is not initialized at the declaration step.

:::

To declare a variable of any type, use the following syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

For example:

```4d
var $myText : Text  //a text variable
var myDate1; myDate2 : Date  //several date variables
var $myFile : 4D.File  //a file class object variable
var $myVar //a variant variable
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers.
This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) (deprecated) and [arrays](Concepts/arrays.md).

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

The following table lists all supported `varType` values:

|varType|Contents|
|---|---|
|`Text`|Text value|
|`Date`|Date value|
|`Time`|Time value|
|`Boolean`|Boolean value|
|`Integer`|Long integer value|
|`Real`|Real value|
|`Pointer`|Pointer value|
|`Picture`|Picture value|
|`Blob`|Scalar Blob value|
|`Collection`|Collection value|
|`Variant`|Variant value|
|`Object`|Object with default class|
|`4D.<className>`|Object of the 4D class name|
|`cs.<className>`|Object of the user class name|
|`cs.<namespace><className>`|Object of the `<namespace>` component class name|


:::note Compatibility

The legacy syntax using `C_XXX` commands is deprecated as of 4D 20 R7.

:::


### Examples

- To declare local and process basic variables:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalent to:  
var $o : 4D.Object
//also equivalent to C_OBJECT($o)
```

- To declare object variables of 4D class:

```4d
var $myFolder : 4D.Folder
var $myFile : 4D.File
```

- To declare object variables of user class:

```4d
var $myClass : cs.MyClass
var $dataclass : cs.Employee
var $entity : cs.EmployeeEntity
```

## Initializing Variables in the Declaration Line

When declaring variables, you have the flexibility to specify their data type and provide an initial value in one statement. Here are some examples:

```4d
var $a : Text:="hello"
var $b : Date:=!2023-09-12!
var $c : Object:=New object()
var $d : cs.Customer:=cs.Customer.new()
```

Variables can also be declared and initialized without explicitly mentioning their data type, in which case their type will be inferred by 4D. Here are some examples:

```4d
var $text:="hello"  // Inferred as Text
var $number:=20  // Inferred as Real
var $obj:={}  // Inferred as an Object
var $mycol:=[]  // Inferred as a Collection  

```

:::note

The inferred type might be different between [interpreted and compiled mode](interpreted.md) if the evaluation of the value is too ambiguous. In this case, a warning is generated by the compiler and a variant type is used. For example, in the following *$a* type will be correctly inferred in interpreted mode (Text), but the syntax checking will generate a warning and *$a* will be typed as a variant for the compiled mode.

```4d
var $class:={test: "a"}
var $a:=$class.test

```

:::

4D tries to deduce the most general type. For instance, it uses the Real type rather than the Integer type when a variable is initialized with an integer value (e.g., `var $a:=10 //Real type is inferred`). In such cases, or when initializing a variable with a complex type such as class instantiation, it is recommended to pass the type explicitly.

In most cases, all variable types are automatically determined. The exception is when you assign a value to a process or interprocess variable, which then triggers a warning message.

:::note

Multiple assignments in one line are not supported:

```4d
var $a; $b : Integer:=15 //error

```

:::

## Assigning Data

Data can be put into and copied out of variables and arrays. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields.

The assignment operator is a primary way to create a variable and to put data into it. You write the name of the variable that you want to create on the left side of the assignment operator. For example:

```4d
MyNumber:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it.

> It is usually not recommended to create variables without [declaring their type](#declaring-variables).

Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Products]Size:=MyNumber
```

In this case, _[Products]Size_ would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language.


## Local, Process, and Interprocess variables

You can create three types of variables: **local**, **process**, and **interprocess**. The difference between the three types of elements is their scope, or the objects to which they are available.

### Local variables

A local variable is, as its name implies, local to a method—accessible only within the method in which it was created and not accessible outside of that method. Being local to a method is formally referred to as being “local in scope.” Local variables are used to restrict a variable so that it works only within the method.

You may want to use a local variable to:

- Avoid conflicts with the names of other variables
- Use data temporarily
- Reduce the number of process variables

The name of a local variable always starts with a dollar sign ($) and can contain up to 31 additional characters. If you enter a longer name, 4D truncates it to the appropriate length.

When you are working in an application project with many methods and variables, you often find that you need to use a variable only within the method on which you are working. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else.

Frequently, in an application, small pieces of information are needed from the user. The `Request` command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. Here is an example:

```4d
 $vsID:=Request("Please enter your ID:")
 If(OK=1)
    QUERY([People];[People]ID =$vsID)
 End if
```

This method simply asks the user to enter an ID. It puts the response into a local variable, $vsID, and then searches for the ID that the user entered. When this method finishes, the $vsID local variable is erased from memory. This is fine, because the variable is needed only once and only in this method.

**Note:** Parameters $1, $2... passed to methods are local variables. For more information, please refer to [Parameters](Concepts/parameters.md).

### Process variables

A process variable is available only within a process. It is accessible to the process method and any other method called from within the process.

A process variable does not have a prefix before its name. A process variable name can contain up to 31 characters.

In interpreted mode, variables are maintained dynamically; they are created and erased from memory “on the fly.” In compiled mode, all processes you create (user processes) share the same definition of process variables, but each process has a different instance for each variable. For example, the variable myVar is one variable in the process P_1 and another one in the process P_2.

A process can “peek and poke” process variables from another process using the commands `GET PROCESS VARIABLE` and `SET PROCESS VARIABLE`. It is good programming practice to restrict the use of these commands to the situation for which they were added to 4D:

- Interprocess communication at specific places or your code
- Handling of interprocess drag and drop
- In Client/Server, communication between processes on client machines and the stored procedures running on the server machines

For more information, see the chapter **Processes** and the description of these commands.

### Interprocess variables

:::warning Deprecated

Use of interprocess variables is not recommended since they are not available from [preemptive processes](../Develop/preemptive.md) and tend to make the code less maintainable.  

:::

Interprocess variables are available throughout the project and are shared across all cooperative processes. They are primarily used to share information between processes.

The name of an interprocess variable always begins with the symbols `<>` — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.


## System Variables

The 4D language manages several **system variables**, which allow you to control the execution of different operations. You can test their values and use them as any variable. All system variables are [process variables](#process-variables).

System variables are used by [4D commands](../commands/command-index.md). Refer to the "System variables and sets" paragraph in the description of a command to find out whether it affects a system variable.


|System variable name|Type|Description|
|---|---|---|
|`OK`|Integer|Usually set to 1 after a command has displayed a dialog box and the user clicked the **OK** button, and 0 if they clicked **Cancel**. Some commands also modify the value of the `OK` system variable when a operation is successfully executed.
|`Document`|Text|Contains the "long name" (full path+name) of the last file opened or created using commands such as [Open document](https://doc.4d.com/4dv20/help/command/en/page264.html) or [SELECT LOG FILE](https://doc.4d.com/4dv20/help/command/en/page345.html).|
|`FldDelimit`, `RecDelimit`|Text|Contain the character codes that will be used respectively as a field separator (default is **Tab** (9)) and record separator (default is **carriage return** (13)) when importing or exporting text. To use a different separator, assign a new value to the system variable.|
|`Error`, `Error method`, `Error line`, `Error formula`|Text, Longint|Used in an error-catching method installed by the [`ON ERR CALL`](https://doc.4d.com/4dv20/help/command/en/page155.html) command. See [Handling errors within the method](../Concepts/error-handling.md#handling-errors-within-the-method).|
|`MouseDown`|Integer|Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to 1 when the mouse button is pushed, otherwise set to 0. |
|`MouseX`, `MouseY`|Integer|Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. <li>In a `MouseDown=1` event, `MouseX` and `MouseY` are respectively set to the vertical and horizontal coordinates of the click. Both values are expressed in pixels and use the local coordinate system of the window. </li><li>In case of a picture field or variable, `MouseX` and `MouseY` return the local coordinates of a mouse click in the [`On Clicked`](../Events/onClicked.md), [`On Double Clicked`](../Events/onDoubleClicked.md) and [`On Mouse Up`](../Events/onMouseUp.md) form events. Local coordinates of the mouse cursor are also returned in the [`On Mouse Enter`](../Events/onMouseEnter.md) and [`On Mouse Move`](../Events/onMouseMove.md) form events. For more information, see the [Mouse Coordinates in a picture](../FormEditor/pictures.md#mouse-coordinates-in-a-picture) section.</li>|
|`KeyCode`|Integer|Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to the character code of the key that was just pressed. If the key is a function key, `KeyCode` is set to a special code.|
|`Modifiers`|Integer|Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to the keyboard modifier keys (Ctrl/Command, Alt/Option, Shift, Caps Lock).|
|`MouseProc`|Integer|Used in a method installed by the [`ON EVENT CALL`](https://doc.4d.com/4dv20/help/command/en/page190.html) command. Set to the process number in which the last event took place|


:::note

Therefore, you cannot create a variable, method, or function using any of these variable names.

:::
