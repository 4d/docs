---
id: classes
title: Classes
---


## Visão Geral

A linguagem 4D é compatível com o conceito de **classes**. Numa linguagem de programação, a utilização de uma classe permite definir um comportamento do objecto com propriedades e funções associadas.

Uma vez definida uma classe de usuário, pode **instanciar** objectos desta classe em qualquer parte do seu código. Cada objecto é uma instância da sua classe. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function).

> O modelo de classe em 4D é semelhante às classes em JavaScript, e baseado numa cadeia de protótipos.

Por exemplo, se criar criar uma classe `Pessoa` com a seguinte definição:

```4d  
//Class: Person.4dm Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname Function sayHello()->$welcome : Text
 $welcome:="Hello "+This.firstName+" "+This.lastName
```

Ou em um método, criar uma "Pessoa":

```
var $person : cs. Person //object of Person class  
var $hello : Text
$person:=cs. Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
$hello:=$person.sayHello() //"Hello John Doe"
```

## Gestão de classes

### Definição de classe

A user class in 4D is defined by a specific method file (.4dm), stored in the `/Project/Sources/Classes/` folder. O nome do arquivo é o nome da classe.

Ao nomear classes, deve ter em mente as seguintes regras:

- Um nome de classe [](identifiers.md#classes) deve estar em conformidade com as regras de  [nomenclatura de propriedade](identifiers.md#object-properties).
- Nomes de classe diferenciam minúsculas de maiúsculas.
- Não se recomenda dar o mesmo nome a uma classe e a uma tabela de base de dados, a fim de evitar qualquer conflito.

Por exemplo, se quiser definir uma classe chamada "Polígono", precisa  criar o seguinte arquivo:

- Project folder
  - Project
    - Sources
      - Classes
        - Polygon.4dm

### Eliminação de uma classe

Para eliminar uma classe existente, pode:

- no seu disco, remover o arquivo de classe .4dm da pasta "Classes",
- no Explorador 4D, selecionar a classe e clicar em ![](../assets/en/Users/MinussNew.png) ou escolher **Mover para Lixo** a partir do menu contextual.

### Using 4D interface

Os arquivos de classe são automaticamente armazenados no local apropriado quando criados através da interface 4D, quer através do menu **File** , quer através do Explorer.

#### Menu Arquivo e barra de ferramentas

Pode criar um novo arquivo de classe para o projecto seleccionando **Novo > Class...** no menu 4D Developer **File** ou a partir da barra de ferramentas.

Também pode utilizar o atalho **Ctrl+Shift+Alt+k** .

#### Explorador

Na página **Métodos** do Explorador, as classes estão agrupadas na categoria **Classes** .

Para criar uma nova classe, pode:

- seleccionar a categoria **Classes** e clicar no botão ![](../assets/en/Users/PlussNew.png) .
- seleccionar **Nova Classe...** no menu de acção na parte inferior da janela do Explorer, ou no menu contextual do grupo Classes. ![](../assets/en/Concepts/newClass.png)
- seleccionar **Novo > Classe...** a partir do menu contextual da página inicial do Explorador.

#### Suporte de código de classe

Nas várias janelas 4D (editor de código, compilador, depurador, explorador de tempo de execução), o código de classe é basicamente tratado como um método de projecto com algumas especificidades:

- No editor de código:
  - uma aula não pode ser executada
  - uma função de classe é um bloco de código
  - **Ir para a definição** sobre um membro objecto procura por declarações de classe Função; por exemplo, "$o.f()" encontrará "Função f".
  - **As referências de pesquisa** na declaração de função de classe procura a função utilizada como membro objecto; por exemplo, "Função f" encontrará "$o.f()".
- No Explorador e Depurador de Tempo de Execução, as funções de classe são exibidas com o `\&#060;ClassName&#062;` construtor ou `\&#060;ClassName&#062;.\&#060;FunctionName&#062;` formato.

## Lojas de classe

As classes disponíveis são acessíveis a partir das suas class stores. Estão disponíveis duas class stores:

- `cs` para class stores dos usuários
- `4D` para class stores incorporadas

### cs

#### cs -> classStore

| Parâmetros | Tipo   |    | Descrição                                           |
| ---------- | ------ | -- | --------------------------------------------------- |
| classStore | object | <- | Class store de usuário para o projeto ou componente |

O comando `cs` devolve a loja de classes de utilizadores para o projecto ou componente actual. Devolve todas as classes de usuários [definidas](#class-definition) no projecto ou componente aberto. Como padrão, apenas as classes ORDA do projecto [](ORDA/ordaClasses.md) estão disponíveis.

#### Exemplo

Se quiser criar uma nova instância de um objecto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

### 4D

#### 4D -> classStore

| Parâmetros | Tipo   |    | Descrição      |
| ---------- | ------ | -- | -------------- |
| classStore | object | <- | 4D class store |

O comando `4D` devolve a classe store para as classes 4D incorporadas disponíveis. Fornece acesso a APIs específicas, tais como [CryptoKey](API/CryptoKeyClass.md).

#### Exemplo

Se quiser criar uma nova chave na classe `CryptoKey` :

```4d
$key:=4D. CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## Objecto de classe

Quando uma classe for [definida](#class-definition) no projeto, ela é carregada no ambiente de linguagem 4D. Uma classe é um objecto em si, de classe["Classe" ](API/ClassClass.md). Um objecto classe tem as seguintes propriedades e função:

- [`nome`](API/ClassClass.md#name) string
- [`objecto superclasse`](API/ClassClass.md#superclass) (nulo se nenhum)
- [`função new()`](API/ClassClass.md#new) , permitindo instanciar objectos de classe.

Além disso, um objecto de classe pode fazer referência a um objecto [`construtor`](#class-constructor) (opcional).

Um objecto de classe é um objecto partilhado [](shared.md) e pode por isso ser acedido a partir de diferentes processos 4D simultaneamente.

### Herança

Se uma classe herdar de outra classe (ou seja, a classe [estende a palavra-chave](classes.md#class-extends-classname) é utilizada na sua definição), a classe mãe é a sua superclasse [``](API/ClassClass.md#superclass).

Quando 4D não encontrar uma função ou uma propriedade numa classe, procura-a na sua [`superclasse`](API/ClassClass.md#superclass); se não for encontrada, 4D continua a procurar na superclasse da superclasse, e assim sucessivamente até não haver mais superclasse (todos os objectos herdados da superclasse "Objecto").

## Palavras-chave de classe

As palavras-chave 4D específicas podem ser utilizadas nas definições de classes:

- `Função <Name>` para definir as funções de classe dos objectos.
- `Class constructor` to define the properties of the objects.
- `A classe estende-se a <ClassName>` para definir a herança.

### Function

#### Sintaxe

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

As funções de classe são propriedades específicas da classe. São objectos da classe [4D.Function](API/FunctionClass.md#about-4dfunction-objects) .

No ficheiro de definição de classe, as declarações de função utilizam a palavra-chave `Função` , e o nome da função. The function name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

> **Tip:** Starting the function name with an underscore character ("_") will exclude the function from the autocompletion features in the 4D code editor. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs. MyClass. "`.

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). Por exemplo:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Within a class function, the `This` command is used as the object instance. Por exemplo:

```4d  
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myMethod".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#class-function-parameters) if any. As seguintes sintaxes são suportadas:

- utilização do operador `()`. Por exemplo, `myObject.methodName("hello")`
- use of a "4D. Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:
> 
> - the compiler does not generate any error (which is different compared to regular methods),
> - an error is thrown by 4D only at runtime.

#### Parâmetros

Function parameters are declared using the parameter name and the parameter type, separated by a colon. The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Multiple parameters (and types) are separated by semicolons (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> If the type is not stated, the parameter will be defined as `Variant`.

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list. Por exemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through $0. Por exemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
 $0:=$x+$y
```

The [classic 4D syntax](parameters.md#sequential-parameters) for method parameters can be used to declare class function parameters. Both syntaxes can be mixed. Por exemplo:

```4d
Function add($x : Integer)
 var $2; $value : Integer
 var $0 : Text
 $value:=$x+$2
 $0:=String($value)
```

#### Exemplo

```4d
// Class: Rectangle Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Function definition Function getArea()->$result : Integer
 $result:=(This.height)*(This.width)
```

```4d
// In a project method

var $rect : cs. Rectangle
var $area : Real

$rect:=cs. Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

### Class constructor

#### Sintaxe

```4d
// Class: MyClass Class Constructor({$parameterName : type; ...})
// code
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns:  `<ClassName>:constructor`, for example "MyClass:constructor".

#### Exemplo

```4d
// Class: MyClass
// Class constructor of MyClass Class Constructor ($name : Text)
 This.name:=$name
```

```4d
// In a project method
// You can instantiate an object
var $o : cs. MyClass
$o:=cs. MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```

### Class extends `\<ClassName>`

#### Sintaxe

```4d
// Class: ChildClass Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D.Object and [ORDA classes](../ORDA/ordaClasses.md) which are extended by default for user classes).
- A user class cannot extend a user class from another project or component.
- A user class cannot extend itself.
- It is not possible to extend classes in a circular way (i.e. "a" extends "b" that extends "a").

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Exemplo

This example creates a class called `Square` from a class called `Polygon`.

```4d
//Class: Square

//path: Classes/Square.4dm 

Class extends Polygon


Class constructor ($side : Integer)

 // It calls the parent class's constructor with lengths
 // provided for the Polygon's width and height
 Super($side;$side)
 // In derived classes, Super must be called before you
 // can use 'This'
 This.name:="Square"

 Function getArea()
  C_LONGINT($0)
  $0:=This.height*This.width
```

### Super

#### Sintaxe

```4d
Super {( param{;...;paramN} )} {-> Object} 
```

| Parâmetros | Tipo   |    | Descrição                                      |
| ---------- | ------ | -- | ---------------------------------------------- |
| param      | misto  | -> | Parameter(s) to pass to the parent constructor |
| Resultados | object | <- | Object's parent                                |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.

- If all class constructors in the inheritance tree are not properly called, error -10748 is generated. It's 4D developer to make sure calls are valid.
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// inside myClass constructor
var $text1; $text2 : Text Super($text1) //calls superclass constructor with a text param This.param:=$text2 // use second param
```

2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //chamada a função "doSomething"  
//declarada em superclasses
```

#### Exemplo 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
// Class: Rectangle Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Function definition

Function getArea()
 var $0 : Integer
 $0:=(This.height)*(This.width)
```

```4d
//Class: Square Class extends Rectangle Class constructor ($side : Integer)

 // It calls the parent class's constructor with lengths
 // provided for the Rectangle's width and height
 Super($side;$side)
 // In derived classes, Super must be called before you
 // can use 'This'
 This.name:="Square" Function getArea()
 C_LONGINT($0)
 $0:=This.height*This.width
```

#### Exemplo 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
//Class: Rectangle Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
//Class: Square Class extends Rectangle Function description()
 var $0 : Text
 $0:=Super.nbSides()+" which are all equal"
```

Depois pode escrever num método projecto:

```4d
var $square : Object
var $message : Text
$square:=cs. Square.new()
$message:=$square.description() //I have 4 sides which are all equal
```

### This

#### Sintaxe

```4d
This -> Object
```

| Parâmetros | Tipo   |    | Descrição      |
| ---------- | ------ | -- | -------------- |
| Resultados | object | <- | Objecto actual |

The `This` keyword returns a reference to the currently processed object. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

In most cases, the value of `This` is determined by how a function is called. It can't be set by assignment during execution, and it may be different each time the function is called.

When a formula is called as a member method of an object, its `This` is set to the object the method is called on. Por exemplo:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

When a [class constructor](#class-constructor) function is used (with the [`new()`](API/ClassClass.md#new) function), its `This` is bound to the new object being constructed.

```4d
//Class: ob Class Constructor  

 // Create properties on This as
 // desired by assigning to them
 This.a:=42 
```

```4d
// num método 4D  
$o:=cs.ob.new()
$val:=$o.a //42
```

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. Ver [este exemplo](#example-1).

In any cases, `This` refers to the object the method was called on, as if the method were on the object.

```4d
//Class: ob Function f()
 $0:=This.a+This.b
```

Depois pode escrever num método projecto:

```4d
$o:=cs.ob.new()
$o.a:=5
$o.b:=3
$val:=$o.f() //8
```

In this example, the object assigned to the variable $o doesn't have its own *f* property, it inherits it from its class. Since *f* is called as a method of $o, its `This` refers to $o.

## Comandos de classe

Several commands of the 4D language allows you to handle class features.

### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` returns the class of the object passed in parameter.

### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
