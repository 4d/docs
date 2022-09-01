---
id: quick-tour
title: A Quick Tour
sidebar_label: A Quick Tour
---

Usando a linguagem 4D, imprimir a mensagem tradicional ""Hello, world!" na tela pode ser feito de várias maneiras. A maneira mais simples é provavelmente escrever a linha única abaixo em um método de projeto:

```4d  
ALERT("Hello, World!")
```

Esse código vai exibir um alerta normal de plataforma com a mensagem "hello world" contendo um botão OK. Para executar o código, precisa clicar no botão de execução do editor de Método:

![alt-text](../assets/en/Concepts/helloworld.png)

Ou poderia anexar esse código a um botão em um formulário e executar o formulário, nesse caso, clicar no botão exibira a caixa de diálogo de alerta. Em qualquer caso, acabou de executar sua primeira linha de código 4D!


## Atribuir valores

Dados podem ser colocado ou copiados de ou em variáveis, campos, elementos arrays... Colocar dados em uma variável é chamado atribuiindo os dados a uma variável e é feito com o operador de atribuição (:=). O operador de atribuição também é usado para atribuir dados para elementos campos ou arrays.

```4d
$MyNumber:=3 //assigns 3 to MyNumber variable  
[Products]Size:=$MyNumber //assigns MyNumber variable to [Products]Size field
arrDays{2}:="Tuesday" //assigns "Tuesday" string to the 2nd arrDays element MyVar:=Length("Acme") //assigns the result of the function (4) to MyVar
$myDate:=!2018/01/21! //atribui uma data literal
$myHour:=?08:12:55? //atribui uma hora literal
```

Você DEVE diferenciar o operador atribuição := dos outros operadores. Ao invés de combinar expressões a uma nova, o operador de atribuição copia o valor da expressão para a direita do operador de atribuição para a variável ou campo para a esquerda do operador.

**Importante:** Não confunda o operador de atribuição := com o operador de comparação de igualdade =. Um operador de atribuição diferente (e não =) foi escolhido deliberadamente para evitar problemas e confusão que ocorrem frequentemente em outras linguagens com operadores como == ou ===. Esses erros são geralmente difíceis de reconhecer pelo compilador e geram problemas trabalhosos.

## Variáveis

A linguagem 4D é baseada em tipos, mas com alguma flexibilidade. You create a typed variable using the `var` keyword. Por exemplo, para criar uma variável do tipo dados, pode escrever:

```4d
var MyDate : Date 
```

The `var` keyword allows declaring object variables of a defined class type, for example:

```4d
var myPerson : cs. Person 
//variable of the Person user class
```


Even if it is usually not recommended, you can declare variables simply by using them; you do not necessarily need to formally define them. Por exemplo, se quiser criar uma variável que contenha a data atual mais 30 dias, pode escrever:

```4d
MyOtherDate:=Current date+30
```

A linha de código lê “MyOtherDate gets the current date plus 30 days.” This line declares the variable, assigns it with both the (temporary) date type and a content. A variable declared by assignment is interpreted as typeless, that is, it can be assigned with other types in other lines and then changes the type dynamically. A variable typed with `var` cannot change the type. In [compiled mode](interpreted.md) however, the type can never be changed, regardless of how the variable was declared.

## Comandos

Os comandos 4D são métodos integrados para realizar uma ação. Todos os comandos 4D, como `CREATE RECORD`, o `ALERT`, se descrevem no manual _Linguagem de 4D_, agrupados por temas. Comandos são frequentemente usados com parâmetros, que são passados em parênteses () e separados por ponto e vírgula (;). Exemplo:

```4d
COPY DOCUMENT("folder1\\name1";"folder2\\" ; "new")
```

Alguns comandos são anexados à coleções ou objetos, em cujo caso são métodos temporais que se utilizam com a notação de pontos. Por exemplo:

```4d
$c:=New collection(1;2;3;4;5)
$nc:=$c.slice(0;3) //$nc=[1,2,3]  

$lastEmployee:=$employee.last()
```

Pode utilizar os plug-ins ou os componentes 4D que adicionem novos comandos a seu entorno de desenvolvimento 4D.

Há vários plug-ins propostos pela comunidade de usuários 4D ou desenvolvedores de terceira parte no mercado. Por exemplo, usar [4d-plugin-pdf-pages](https://github.com/miyako/4d-plugin-pdf-pages) em macOS:

```4d
PDF REMOVE PAGE(path;page)
```

4D SVG é um exemplo de componente utilitário que aumenta as capacidades de sua aplicação:

```4d
//desenhar uma imagem
svgRef:=SVG_New
objectRef:=SVG_New_arc(svgRef;100;100;90;90;180)
```
4D SVG é incluído em 4D.

## Constantes

4D oferece um conjunto extensivo de constantes predefinidas, cujos valores são acessíveis por nome. Isso permite escrever código mais legível. Por exemplo, `Read Mode` é uma constante (valor 2).

```4d
vRef:=Open document("PassFile";"TEXT";Read Mode) // abre documento em modo apenas leitura
```

> Predefined constants appear <u>underlined</u> by default in the 4D Method editor.

## Métodos

4D oferece un grande número de métodos (ou comandos) integrados, mas também lhe permite criar seus próprios **métodos de projeto**. Os métodos de projeto são métodos definidos pelo usuário que contenham comandos, operadores e outras partes da linguaje. Los métodos projeto são métodos genéricos, mas há outros tipos de métodos: métodos objeto, métodos formulário, métodos tabela (Triggers) e métodos base.

Um método projeto é composto de várias linhas de instruções, cada uma das quais consta de uma linha no método. Uma linha de instrução realiza uma ação e pode ser simples ou complexa.

Por exemplo, a linha abaixo é uma declaração que mostará uma caixa de diálogo de confirmação:

```4d
CONFIRM("Quer realmente fechar esta conta?"; "Sím"; "Não")
```

Um método também contém testes e loops que controlam o fluxo da execução. 4D methods support `If... End if` and `Case of... End case` branching structures as well as looping structures: `While... End while`, `Repeat... Until`, `For... End for`, and `For each... End for each`:

O exemplo abaixo recorre todos os caracteres do texto vtSomeText:

```4d
For ($vCounter;1;100)
/*
comments  
    /* 
    other comments
    */
*/
...
    End for
```

Um método projeto pode chamar a outro método projeto com ou sem parâmetros (argumentos). Os parâmetros se passam ao método entre parêntesis, depois do nome do método. Cada parâmetro está separado do próximo por um ponto e vírgula (;). The parameters are available within the called method as consecutively numbered local variables: $1, $2,…, $n. A method can return a single value in the $0 parameter. Um método pode devolver um único valor no parâmetro $0. Quando chamar um método, apenas digite seu nome:

```4d
$f:=New object
$f.message:=New formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
```


## Tipos de dados

Na linguagem, os diferentes tipos de dados que podem ser manejados são denominados tipos de dados. Existem tipos de dados básicos (string, numérico, data, hora, booleano, imagem, ponteiros, arrays), e também tipos de dados compostos (BLOBs, objetos, coleções).

Lembre que os dados de tipo string e numérico podem ser associados a mais de um tipo de campo. Quando são introduzidos dados em um campo, a linguagem converte automaticamente os dados no tipo correto para o campo. Por exemplo, se um campo inteiro for usado, seus dados são tratados automaticamente como numéricos. Em outras palavras não precisa se preocupar sobre misturar tipos de campos similares quando usando a linguagem; vai ser gerenciada por você.

Entretanto, quando usar a linguagem é importante que não misture diferentes tipos de dados. Da mesma forma que não tem sentido armazenar "ABC" em um campo de data, tampouco tem sentido por "ABC" em uma variável utilizada para datas. Na maioria dos casos, 4D é muito tolerante e tentará dar sentido ao que está fazendo. For example, if you add a number to a date, 4D will assume that you want to add that number of days to the date, but if you try to add a string to a date, 4D will tell you that the operation cannot work.

There are cases in which you need to store data as one type and use it as another type. The language contains a full complement of commands that let you convert from one data type to another. For example, you may need to create a part number that starts with a number and ends with characters such as “abc”. In this case, you might write:

```4d
[Products]Part Number:=String(Number)+"abc"
```

If _Number_ is 17, then _[Products]Part Number_ will get the string “17abc”.

The data types are fully defined in the section [Data Types](Concepts/data-types.md).

## Objects and collections

You can handle 4D language objects and collections using the object notation to get or to set their values. Por exemplo:

```4d
employee.name:="Smith"
```

You can also use a string within square brackets, for example:

```4d
$vName:=employee["name"]
```

Uma vez que um valor de propriedade de objeto pode ser um objeto ou uma coleção, a notação de objeto aceita uma sequência de símbolos para acessar subpropriedades, por exemplo:

```4d
$vAge:=employee.children[2].age
```

Note that if the object property value is an object that encapsulates a method (a formula), you need to add parenthesis () to the property name to execute the method:

```
$o:=cs.myClass.new()
$o.who:="World"
$message:=$o.myClass.hello()  
//$message:
"Hello World"
```

To access a collection element, you have to pass the element number embedded in square brackets:

```4d
C_COLLECTION(myColl)
myColl:=New collection("A";"B";1;2;Current time)
myColl[3]  //access to 4th element of the collection
```

## Classes

The 4D language supports object classes. Add a `myClass.4dm` file in the Project/Sources/Classes folder of a project to create a class named "myClass".

To instantiate an object of the class in a method, call the user class from the *class store* (`cs`) and use the `new()` member function. You can pass parameters.

```4d  
// in a 4D method
$o:=cs.myClass.new() 
```

In the `myClass` class method, use the `Function <methodName>`  statement to define the *methodName* class member method. A class member method can receive and return parameters like any method, and use `This` as the object instance.

```4d  
//in the myClass.4dm file Function hello
  C_TEXT($0)
  $0:="Hello "+This.who
```

To execute a class member method, just use the `()` operator on the member method of the object instance.

```4d
$f:=New object
$f.message:=New formula(ALERT("Hello world!"))
$f.message() //displays "Hello world!"
```

Optionally, use the `Class constructor` keyword to declare properties of the object.

```4d  
//in the Rectangle.4dm file Class constructor C_LONGINT($1;$2)
This.height:=$1 This.width:=$2 This.name:="Rectangle"
```

A class can extend another class by using `Class extends <ClassName>`. Superclasses can be called using the `Super` command. Por exemplo:

```4d  
//in the Square.4dm file Class extends rectangle Class constructor C_LONGINT($1)

  // It calls the parent class's constructor with lengths   
  // provided for the Rectangle's width and height Super($1;$1) This.name:="Square"
```


## Operadores
When you use the language, it is rare that you will simply want a piece of data. It is more likely that you will want to do something to or with that data. You perform such calculations with operators. Operators, in general, take two pieces of data and perform an operation on them that results in a new piece of data. You are already familiar with many operators. You are already familiar with many operators. For example, 1 + 2 uses the addition (or plus sign) operator to add two numbers together, and the result is 3.

| Operator | Operação      | Exemplo            |
| -------- | ------------- | ------------------ |
| +        | Adição        | 1 + 2 results in 3 |
| –        | Subtração     | 3 – 2 results in 1 |
| *        | Multiplicação | 2 * 3 results in 6 |
| /        | Divisão       | 6 / 2 results in 3 |

Numeric operators are just one type of operator available to you. 4D supports many different types of data, such as numbers, text, dates, and pictures, so there are operators that perform operations on these different data types.

The same symbols are often used for different operations, depending on the data type. For example, the plus sign (+) performs different operations with different data:

| Tipo de dados   | Operação      | Exemplo                                                                                              |
| --------------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| Número          | Adição        | 1 + 2 adds the numbers and results in 3                                                              |
| String          | Concatenation | “Hello ” + “there” concatenates (joins together) the strings and results in “Hello there”            |
| Date and Number | Date addition | !1989-01-01! + 20 adds 20 days to the date January 1, 1989, and results in the date January 21, 1989 |


## Expressions

Simply put, expressions return a value. In fact, when using the 4D language, you use expressions all the time and tend to think of them only in terms of the value they represent. Expressions are also sometimes referred to as formulas.

Expressions are made up of almost all the other parts of the language: commands, operators, variables, fields, object properties, and collection elements. You use expressions to build statements (lines of code), which in turn are used to build methods. The language uses expressions wherever it needs a piece of data.

Expressions rarely “stand alone.” There are several places in 4D where an expression can be used by itself. It includes:

- Formula editor (apply formula, query with formula, order by formula)
- The `EXECUTE FORMULA` command
- The Property list, where an expression can be used as a data source for most of widgets
- Debugger where the value of expressions can be checked
- Quick Report editor as a formula for a column


### Expression types
You refer to an expression by the data type it returns. There are several expression types. The following table gives examples of each type of expression.

| Expression               | Tipo               | Descrção                                                                                                                                                                        |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| “Hello”                  | String             | The word Hello is a string constant, indicated by the double quotation marks.                                                                                                   |
| “Hello ” + “there”       | String             | Two strings, “Hello ” and “there”, are added together (concatenated) with the string concatenation operator (+). The string “Hello there” is returned.                          |
| “Mr. ” + [People]Name    | String             | Two strings are concatenated: the string “Mr. ” and the current value of the Name field in the People table. If the field contains “Smith”, the expression returns “Mr. Smith”. |
| Uppercase("smith")       | String             | This expression uses `Uppercase`, a command from the language, to convert the string “smith” to uppercase. It returns “SMITH”.                                                  |
| 4                        | Número             | This is a number constant, 4.                                                                                                                                                   |
| 4 * 2                    | Número             | Two numbers, 4 and 2, are multiplied using the multiplication operator (*). The result is the number 8.                                                                         |
| myButton                 | Número             | This is a variable associated to a button. It returns the current value of the button: 1 if it was clicked, 0 if not.                                                           |
| !1997-01-25!             | Date               | This is a date constant for the date 1/25/97 (January 25, 1997).                                                                                                                |
| Current date+ 30         | Date               | This is a date expression that uses the `Current date` command to get today’s date. It adds 30 days to today’s date and returns the new date.                                   |
| ?8:05:30?                | Hora               | This is a time constant that represents 8 hours, 5 minutes, and 30 seconds.                                                                                                     |
| ?2:03:04? + ?1:02:03?    | Hora               | This expression adds two times together and returns the time 3:05:07.                                                                                                           |
| True                     | Booleano           | This command returns the Boolean value TRUE.                                                                                                                                    |
| 10 # 20                  | Booleano           | This is a logical comparison between two numbers. The number sign (#) means “is not equal to”. Since 10 “is not equal to” 20, the expression returns TRUE.                      |
| “ABC” = “XYZ”            | Booleano           | This is a logical comparison between two strings. They are not equal, so the expression returns FALSE.                                                                          |
| My Picture + 50          | Imagem             | This expression takes the picture in My Picture, moves it 50 pixels to the right, and returns the resulting picture.                                                            |
| ->[People]Name           | Ponteiro           | This expression returns a pointer to the field called [People]Name.                                                                                                             |
| Table(1)                 | Ponteiro           | This is a command that returns a pointer to the first table.                                                                                                                    |
| JSON Parse (MyString)    | Objeto             | This is a command that returns MyString as an object (if proper format)                                                                                                         |
| JSON Parse (MyJSONArray) | Collection         | This is a command that returns MyJSONArray as a collection (if proper format)                                                                                                   |
| Form.pageNumber          | Object property    | An object property is an expression that can be of any supported type                                                                                                           |
| Col[5]                   | Collection element | A collection element is an expression that can be of any supported type                                                                                                         |
| $entitySel[0]            | Entity             | A element of an ORDA entity selection is an expression of the entity type. This kind of expression is **non-assignable**                                                        |

### Assignable vs non-assignable expressions

An expression can simply be a literal constant, such as the number 4 or the string "Hello", or a variable like `$myButton`. It can also use operators. For example, 4 + 2 is an expression that uses the addition operator to add two numbers together and return the result 6. In any cases, these expressions are **non-assignable**, which means that you cannot assign a value to them. In 4D, expressions can be **assignable**. An expression is assignable when it can be used on the left side of an assignation. Por exemplo:

```4d  
//$myVar variable is assignable, you can write:  
$myVar:="Hello" //assign "Hello" to myVar
//Form.pageNumber is assignable, you can write: Form.pageNumber:=10 //assign 10 to Form.pageNumber
//Form.pageTotal-Form.pageNumber is not assignable: Form.pageTotal- Form.pageNumber:=10 //error, non-assignable
```
In general, expressions that use an operator are non-assignable. For example, `[Person]FirstName+" "+[Person]LastName` is not assignable.


## Ponteiro

The 4D language provides an advanced implementation of pointers, that allow writing powerful and modular code. You can use pointers to reference tables, fields, variables, arrays, and array elements.

A pointer to an element is created by adding a "->" symbol before the element name, and can be dereferenced by adding the "->" symbol after the pointer name.

```4d
MyVar:="Hello" MyPointer:=->MyVar ALERT(MyPointer->)
```

## Comentários

Comments are inactive lines of code. These lines are not interpreted by the 4D language and are not executed when the code is called.

There are two ways to create comments:

- `//` for single line comments
- `/*...*/` for inline or multiline commnents.

Both styles of comments can be used simultaneously.

#### Single line comments (//)

Insert `//` at the beginning of a line or after a statement to add a single line comment. Exemplo:

```4d
//This is a comment For($vCounter;1;100) //Starting loop
  //comment
  //comment
  //comment
 End for
```

#### Inline or multiline comments (/* */)

Surround contents with `/*` ... `*/` characters to create inline comments or multiline comment blocks. Both inline and multiline comment blocks begin with `/*` and end with `*/`.

- **Inline comments** can be inserted anywhere in the code. Exemplo:

```4d
For /* inline comment */ ($vCounter;1;100)
    ...
End for
```

- **Multiline comment blocks** allows commenting an unlimited number of lines. Comment blocks can be nested (useful since the 4D code editor supports block collapsing). Exemplo:

```4d
For ($vCounter;1;100)
/*
comentarios  
    /*
    outros comentarios
    */
*/
...
End for
```