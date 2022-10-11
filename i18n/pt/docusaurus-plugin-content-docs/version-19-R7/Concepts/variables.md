---
id: variables
title: Variáveis
---

Os dados em 4D são armazenados de duas formas fundamentalmente diferentes. **Os campos** armazenam os dados permanentemente no disco; **as variáveis** armazenam os dados na memória de forma temporal.

Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as variáveis é mais ou menos a mesma coisa, também se lhes dá nomes e tipos diferentes (ver [Tipos de dados](Concepts/data-types.md)).

Após a criação pode usar a variável onde quiser na sua aplicação. Por exemplo, pode precisar armazenar uma variável texto em um campo do mesmo tipo

```4d
 [MyTable]MyField:=MyText
```

As variáveis são objetos da linguagem; pode criar e utilizar variables que nunca aparecerão na tela. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved.

## Declaring Variables

You create variables by declaring them. The 4D language offers two ways to declare variables:

- using the `var` keyword (recommended, specially if your code uses objects and classes),
- using one of the "Compiler" or "Arrays" theme 4D language commands (classic language only).

**Note:** Although it is usually not recommended, you can create basic variables simply by using them; you do not necessarily need to formally define them. For example, to declare a variable that will hold the current date plus 30 days, you can write:

```4d
 MyDate:=Current date+30 //MyDate is created  
 // 4D guesses it is of date type  
 // and assigns the current date plus 30 days
```

### Using the `var` keyword

Declaring variables using the `var` keyword is recommended since this syntax allows you to bind object variables with classes. Using this syntax enhances code editor suggestions and type-ahead features.

To declare a variable of any type with the `var` keyword, use the following syntax:

`var <varName>{; <varName2>;...}{ : <varType>}`

Por exemplo:

```4d
var $myText : Text  //a text variable
var myDate1; myDate2 : Date  //several date variables
var $myFile : 4D. File  //a file class object variable
var $myVar //a variant variable
```

`varName` is the variable name, it must comply with the [4D rules](Concepts/identifiers.md) about identifiers. This syntax only supports [local and process variables](#local-process-and-interprocess-variables) declarations, thus excluding [interprocess variables](#interprocess-variables) and [arrays](Concepts/arrays.md).

`varType` can be:

- a [basic type](Concepts/data-types.md), in which case the variable contains a value of the declared type,
- a [class reference](Concepts/classes.md) (4D class or user class), in which case the variable contains a reference to an object of the defined class.

If `varType` is omitted, a variable of the **variant** type is created.

The following table lists all supported `varType` values:

| varType                | Conteúdos                              |
| ---------------------- | -------------------------------------- |
| `Text`                 | Text value                             |
| `Date`                 | Date value                             |
| `Hora`                 | Time value                             |
| `Booleano`             | Boolean value                          |
| `Integer`              | Long integer value                     |
| `Real`                 | Real value                             |
| `Ponteiro`             | Pointer value                          |
| `Imagem`               | Picture value                          |
| `Blob`                 | Scalar Blob value                      |
| `Collection`           | Collection value                       |
| `Variant`              | Variant value                          |
| `Objeto`               | Object with default class (4D. Object) |
| `4D.<className>` | Object of the 4D class name            |
| `cs.<className>` | Object of the user class name          |

#### Exemplos

- To declare local and process basic variables:

```4d
var $myText; myText; $vt : Text
var myVar //variant

var $o : Object    
//equivalent to:  
var $o : 4D. Object
//also equivalent to C_OBJECT($o)
```

- To declare object variables of 4D class:

```4d
var $myFolder : 4D. Folder
var $myFile : 4D. File
```

- To declare object variables of user class:

```4d
var $myClass : cs. MyClass
var $dataclass : cs. Employee
var $entity : cs. EmployeeEntity
```

### Using a C_ directive

> **Compatibility Note:** This feature is not recommended to declare variables inside methods. It is recommended to use the [var](#using-the-var-keyword) keyword.

Directives from the "Compiler" theme commands allow you to declare variables of basic types.

For example, if you want to define a text variable, you write:

```4d
 C_TEXT(myText)
```

The following are some basic variable declarations:

```4d
 C_BLOB(vxMyBlob) // The process variable vxMyBlob is declared as a variable of type BLOB
 C_DATE($vdCurDate) // The local variable $vdCurDate is declared as a variable of type Date
 C_LONGINT(vg1;vg2;vg3) // The 3 process variables vg1, vg2 and vg3 are declared as variables of type longint  
 C_OBJECT($vObj) // The local variable $vObj is declared as a variable of type Object
 C_COLLECTION($vCol) // The local variable $vCol is declared as a variable of type Collection
```

**Note:** Arrays are a particular type of variables (an array is an ordered series of variables of the same type). Arrays are declared with specific commands, such as `ARRAY LONGINT(alAnArray;10)`. For more information, please refer to [Arrays](Concepts/arrays.md).

## Assigning Data

Data can be put into and copied out of variables and arrays. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields.

The assignment operator is a primary way to create a variable and to put data into it. You write the name of the variable that you want to create on the left side of the assignment operator. Por exemplo:

```4d
MyNumber:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it.

> It is usually not recommended to create variables without [declaring their type](#creating-variables).

Of course, variables would not be very useful if you could not get data out of them. Once again, you use the assignment operator. If you need to put the value of MyNumber in a field called [Products]Size, you would write _MyNumber_ on the right side of the assignment operator:

```4d
[Products]Size:=MyNumber
```

In this case, _[Products]Size_ would be equal to 3. This example is rather simple, but it illustrates the fundamental way that data is transferred from one place to another by using the language.

You assign data to array elements by using curly braces ({...}):

```4d
atNames{1}:="Richard"
```

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

Frequently, in an application, small pieces of information are needed from the user. The `Request` command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. This is a typical way to use a local variable. Aqui um exemplo simples:

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

Interprocess variables are available throughout the project and are shared across all cooperative processes. They are primarily used to share information between processes.

> Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.

The name of an interprocess variable always begins with the symbols `<>` — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.
