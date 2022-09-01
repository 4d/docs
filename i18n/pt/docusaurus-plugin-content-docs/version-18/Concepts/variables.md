---
id: variables
title: Variáveis
---

Os dados em 4D são armazenados de duas formas fundamentalmente diferentes. **Os campos** armazenam os dados permanentemente no disco; **as variáveis** armazenam os dados na memória de forma temporal.

Quando cria a sua base de dados 4D, especifica os nomes e tipos de campos que pretende utilizar. Com as variáveis é mais ou menos a mesma coisa, também se lhes dá nomes e tipos diferentes (ver [Tipos de dados](Concepts/data-types.md)).

As variáveis são objetos da linguagem; pode criar e utilizar variables que nunca aparecerão na tela. In your forms, you can display variables (except Pointer and BLOB) on the screen, enter data into them, and print them in reports. In this way, enterable and non-enterable area variables act just like fields, and the same built-in controls are available when you create them. Form variables can also control buttons, list boxes, scrollable areas, picture buttons, and so on, or display results of calculations that do not need to be saved.

## Criação de variáveis

Você cria as variáveis declarando-as mediante um dos comandos dos temas "Compilador" ou "Arrays".

**Nota:**os arrays são um tipo particular de variáveis. Um array é uma série ordenada de variáveis do mesmo tipo. For more information, please refer to [Arrays](Concepts/arrays.md).

For example, if you want to define a text variable, you write:

```4d
 C_TEXT(myText)
```

**Nota:** apesar de não recomendado, pode criar variáveis simplesmente usando-as; não precisa definir as variáveis formalmente como se faz com os campos. Por exemplo, se quiser criar uma variável que contenha a data atual mais 30 dias, pode escrever:

```4d
 MyDate:=Current date+30 //MyDate é criada e obtém a data atual mais  30 días
```

Após a criação pode usar a variável onde quiser no seu banco de dados. Por exemplo, pode precisar armazenar a variável texto em um campo do mesmo tipo

```4d
 [MyTable]MyField:=MyText
```

The following are some basic variable declarations:

```4d

 C_BLOB(vxMyBlob) // A variável processo vxMyBlob se declara como uma variável de tipo BLOB
 C_DATE($vdCurDate) // A variável local $vdCurDate se declara como uma variável de tipo Data
 C_LONGINT(vg1;vg2;vg3) // As 3 variáveis de processo vg1, vg2 y vg3 se declaram como variáveis de tipo Inteiro longo
 C_OBJECT($vObj) // A variável local $vObj se declara como uma variável de tipo Objeto
 C_COLLECTION($vCol) // A variável local $vCol se declara como uma variáve de tipo Coleção
 ARRAY LONGINT(alAnArray;10) //A variável do processo alAnArray se declara como um array Inteiro longo de 10 elementos
```

## Assigning Data

Data can be put into and copied out of variables and arrays. Putting data into a variable is called **assigning the data to the variable** and is done with the assignment operator (:=). The assignment operator is also used to assign data to fields.

O operador de atribuição é a maneira mais importante de criar uma variável e jogar dados nela. You write the name of the variable that you want to create on the left side of the assignment operator. Por exemplo:

```4d
MyNumber:=3
```

creates the variable _MyNumber_ and puts the number 3 into it. If MyNumber already exists, then the number 3 is just put into it.

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

Quando trabalhar em um banco de dados com muitos métodos e variáveis, geralmente só precisa usar uma variável dentro do método no qual trabalha. You can create and use a local variable in the method without worrying about whether you have used the same variable name somewhere else.

Frequentemente, em um banco de dados, pequenas pedaços de informação são necessários do usuário. The `Request` command can obtain this information. It displays a dialog box with a message prompting the user for a response. When the user enters the response, the command returns the information the user entered. You usually do not need to keep this information in your methods for very long. This is a typical way to use a local variable. This is a typical way to use a local variable. Aqui um exemplo simples:

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

Variáveis interprocessos estão disponíveis pelo banco de dados e são partilhados entre os processos cooperativos. They are primarily used to share information between processes.

> Use of interprocess variables is not recommended since they are not available from preemptive processes and tend to make the code less maintainable.

The name of an interprocess variable always begins with the symbols (`<>`) — a “less than” sign followed by a “greater than” sign— followed by 31 characters.

In Client/Server, each machine (Client machines and Server machine) share the same definition of interprocess variables, but each machine has a different instance for each variable.
