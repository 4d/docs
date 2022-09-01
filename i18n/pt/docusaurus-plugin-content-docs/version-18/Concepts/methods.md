---
id: methods
title: Métodos
---


A method is basically a piece of code that executes one or several actions. Na linguagem 4D, há duas categorias de métodos:

- **Os métodos integrados**, que são fornecidos por 4D ou por desenvolvedores externos e que só podem ser chamados em seu código. Os métodos integrados incluem:
    - Comandos e funções de 4D API, como `ALERT` ou `Current date`.
    - Os métodos associados às coleções ou aos objetos nativos, como `collection.orderBy()` ou `entity.save()`.
    - Os comandos dos plug-ins ou componentes, fornecidos por 4D ou por desenvolvedores de terceiros, como `SVG_New_arc`.

    Os métodos integrados são detalhados non manual *Linguagem 4D* ou nos manuais dedicados aos plug-ins ou componentes.

- Os **métodos projeto**, onde pode escrever seu próprio código para executar toda ação personalizada. Quando um método projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado. Um método projeto é composto de várias linhas de instruções, cada uma das quais consta de uma linha no método. Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). A statement performs an action, and may be simple or complex.

**Nota:** 4D também oferece métodos específicos que se executam automaticamente em função dos eventos do banco de dados ou dos eventos formulário. Ver [Métodos especializados](#specialized-methods).


## Métodos proyecto

A project method can have one of the following roles, depending on how it is executed and used:

- Subrotina e função
- Método associado a um objeto
- Menu method
- Process method
- Event or Error catching method

### Subrotinas e funções
A subroutine is a project method that can be thought of as a servant. It performs those tasks that other methods request it to perform. A function is a subroutine that returns a value to the method that called it.

Quando criar um método projeto, este passa a formar parte da lingagem do banco de dados no qual foi criado. Pode daí chamar o método projeto desde outros métodos projeto ou desde [métodos predefinidos](#predefined-methods) da mesma maneira que chama aos comandos integrados de 4D. A project method used in this way is called a subroutine.

You use subroutines to:

- Reduce repetitive coding
- Clarify your methods
- Facilitate changes to your methods
- Modularize your code

Por exemplo, suponha que tenha um banco de dados de clientes. Ao personalizar o banco de dados, pode perceber que ha'tarefas que tem que realizar repetidamente, como achar um cliente e modificar seu registro. The code to do this might look like this:

```4d
  // Look for a customer
 QUERY BY EXAMPLE([Customers])
  // Select the input form
 FORM SET INPUT([Customers];"Data Entry")
  // Modify the customer's record
 MODIFY RECORD([Customers])
```

If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. If you do not use subroutines, you will have to write the code each time you want to modify a customer’s record. If you use subroutines, you will only have to write it once. This is the first advantage of subroutines—to reduce the amount of code.

Se o código descrito anteriormente fosse um método chamado `MODIFICAR CLIENTE`,  executaria simplesmente utilizando o nome do método em outro método. For example, to modify a customer’s record and then print the record, you would write this method:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

This capability simplifies your methods dramatically. This capability simplifies your methods dramatically. This is the second reason for using subroutines—to clarify your methods. In this way, your methods become extensions to the 4D language.

Se precisar mudar seu método de pesquisa de clientes nesse banco de dados de exemplo, terá que mudar apenas um método, não dez. This is the next reason to use subroutines—to facilitate changes to your methods.

Using subroutines, you make your code modular. This simply means dividing your code into modules (subroutines), each of which performs a logical task. Considere o código abaixo de um banco de dados de contas correntes:

```4d
 FIND CLEARED CHECKS ` Buscar os cheques emitidos
 RECONCILE ACCOUNT ` Reconciliar a conta
 PRINT CHECK BOOK REPORT ` Imprimir um relatório da conta
```

Mesmo para alguém que não conheça o banco de dados, é claro o que o código faz. It is not necessary to examine each subroutine. Each subroutine might be many lines long and perform some complex operations, but here it is only important that it performs its task. We recommend that you divide your code into logical tasks, or modules, whenever possible.

### Métodos associados aos objetos

You can encapsulate your project methods in **formula** objects and call them from your objects.

The `Formula` or `Formula from string` commands allow you to create native formula objects that you can encapsulate in object properties. It allows you to implement custom object methods.

To execute a method stored in an object property, use the **( )** operator after the property name. Por exemplo:

```4d
//myAlert ALERT("Hello world!")
```
Then `myAlert` can be encapsulated in any object and called:
```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Também se admite a sintaxe com parênteses:

```4d
$o["custom_Alert"]() //exibe "Hello world!"
```

You can also [pass parameters](Concepts/parameters.md) to your formula when you call it by using $1, $2… just like with 4D project methods:

```4d
//fullName method C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```
You can encapsulate `fullName` in an object:
```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John";"Smith")
//$result = "John Smith"
// equivalente a $result:=fullName("param1";"param2")
```
Combined with the `This`function, such object methods allow writing powerful generic code. Por exemplo:

```4d
//fullName2 method C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```
Then the method acts like a new, calculated attribute that can be added to other attributes:

```4d
C_OBJECT($o)
$o:=New object("firstName";"Jim";"lastName";"Wesson")
$o.fullName:=Formula(fullName2) //adicionar o método  

$result:=$o.fullName()
//$result = "Jim Wesson"
```



Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
$o:=$f.message //devolve o objeto fórmula em $o
```

### Menu Methods
A menu method is invoked when you select the custom menu command to which it is attached. You assign the method to the menu command using the Menu editor or a command of the "Menus" theme. The method executes when the menu command is chosen. Este processo é um dos principais aspectos da personalização de um banco de dados. Ao criar menus personalizados com métodos de menu que realizam ações específicas, pode personalizar seu banco de dados.

Custom menu commands can cause one or more activities to take place. For example, a menu command for entering records might call a method that performs two tasks: displaying the appropriate input form, and calling the `ADD RECORD` command until the user cancels the data entry activity.

Automating sequences of activities is a very powerful capability of the programming language. Usando menus personalizados, pode automatizar sequências de tarefa e fornecer mais orientação aos usuários do banco de dados.


### Process Methods

A **process method** is a project method that is called when a process is started. The process lasts only as long as the process method continues to execute, except if it is a Worker process. Note that a menu method attached to a menu command with *Start a New Process* property is also the process method for the newly started process.

### Event and Error catching Methods
An **event catching method** runs in a separate process as the process method for catching events. Usually, you let 4D do most of the event handling for you. For example, during data entry, 4D detects keystrokes and clicks, then calls the correct object and form methods so you can respond appropriately to the events from within these methods. For more information, see the description of the command `ON EVENT CALL`.

An **error catching method** is an interrupt-based project method. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command `ON ERR CALL`.

## Métodos projeto recursivos

Project methods can call themselves. Por exemplo:

- The method A may call the method B which may call A, so A will call B again and so on.
- A method can call itself.

This is called recursion. The 4D language fully supports recursion.

Aqui um exemplo simples. Let’s say you have a `[Friends and Relatives]` table composed of this extremely simplified set of fields:
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

Além dos **métodos projeto**, 4D oferece vários tipos de métodos específicos, que são chamados automaticamente em função dos eventos:

| Tipo                             | Calling context                                                                          | Accepts parameters | Descrção                                                                                                                                                             |
| -------------------------------- | ---------------------------------------------------------------------------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Object (widget) method**       | Automatic, when an event involves the object to which the method is attached             | No                 | Property of a form object (also called widget)                                                                                                                       |
| **Form method**                  | Automatic, when an event involves the form to which the method is attached               | No                 | Property of a form. You can use a form method to manage data and objects, but it is generally simpler and more efficient to use an object method for these purposes. |
| **Trigger** (aka *Table method*) | Automatic, each time that you manipulate the records of a table (Add, Delete and Modify) | No                 | Property of a table. Triggers are methods that can prevent “illegal” operations with the records of your database.                                                   |
| **Database method**              | Automatic, when a working session event occurs                                           | Yes (predefined)   | There are 16 database methods in 4D. See Database methods section                                                                                                    |
