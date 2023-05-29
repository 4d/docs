---
id: classes
title: Classes
---


## Visão Geral

A linguagem 4D é compatível com o conceito de **classes**. Numa linguagem de programação, a utilização de uma classe permite definir um comportamento do objecto com propriedades e funções associadas.

Uma vez definida uma classe de usuário, pode **instanciar** objectos desta classe em qualquer parte do seu código. Cada objecto é uma instância da sua classe. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([static](#class-constructor) and [computed](#function-get-and-function-set)).

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

Project folder

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

**.style**: Integer

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

### `cs`

#### cs -> classStore

| Parâmetro  | Tipo   |    | Descrição                                           |
| ---------- | ------ | -- | --------------------------------------------------- |
| classStore | object | <- | Class store de usuário para o projeto ou componente |

O comando `cs` devolve a loja de classes de utilizadores para o projecto ou componente actual. Devolve todas as classes de usuários [definidas](#class-definition) no projecto ou componente aberto. Como padrão, apenas as classes ORDA do projecto [](ORDA/ordaClasses.md) estão disponíveis.

#### Exemplo

Se quiser criar uma nova instância de um objecto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

#### 4D -> classStore

| Parâmetro  | Tipo   |    | Descrição      |
| ---------- | ------ | -- | -------------- |
| classStore | object | <- | Class store 4D |

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

Se uma classe herdar de outra classe (ou seja, a classe [estende a palavra-chave](classes.md#class-extends-classname) é utilizada na sua definição), a classe mãe é a sua [superclasse](API/ClassClass.md#superclass).

Quando 4D não encontrar uma função ou uma propriedade numa classe, procura-a na sua [`superclasse`](API/ClassClass.md#superclass); se não for encontrada, 4D continua a procurar na superclasse da superclasse, e assim sucessivamente até não haver mais superclasse (todos os objectos herdados da superclasse "Objecto").

## Palavras-chave de classe

As palavras-chave 4D específicas podem ser utilizadas nas definições de classes:

- `Função <Name>` para definir as funções de classe dos objectos.
- Sintaxe
- `Class constructor` to define static properties of the objects.
- `A classe estende-se a <ClassName>` para definir a herança.

### `Function`

#### Sintaxe

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

As funções de classe são propriedades específicas da classe. São objectos da classe [4D. Function](API/FunctionClass.md#about-4dfunction-objects) .

No ficheiro de definição de classe, as declarações de função utilizam a palavra-chave `Função` , e o nome da função. O nome da função deve estar em conformidade com as [regras de nomeação de propriedades](Concepts/identifiers.md#object-properties).

> **Dica:** Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs. MyClass. "`.

Imediatamente a seguir ao nome da função, os [parâmetros ](#parameters) da função podem ser declarados com um nome e um tipo de dados atribuídos, incluindo o parâmetro de retorno (opcional). Por exemplo:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Numa função de classe, o comando `This` é utilizado como instância de objecto. Por exemplo:

```4d  
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myMethod".

No código da aplicação, as funções de classe são chamadas como métodos membros das instâncias do objeto e podem receber [parâmetros](#class-function-parameters) se existirem. As seguintes sintaxes são suportadas:

- utilização do operador `()`. Por exemplo, `myObject.methodName("hello")`
- use of a "4D. Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

> **Thread-safety warning:** If a class function is not thread-safe and called by a method with the "Can be run in preemptive process" attribute:
> 
> - o compilador não gera qualquer erro (o que é diferente dos métodos normais),
> - um erro é lançado por 4D apenas em tempo de execução.

#### Parâmetros

Os parâmetros da função são declarados utilizando o nome do parâmetro e o tipo de parâmetro, separados por dois pontos. O nome do parâmetro deve estar em conformidade com as [regras de nomenclatura de propriedades](Concepts/identifiers.md#object-properties). Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> Se o tipo não for indicado, o parâmetro será definido como `Variant`.

A [sintaxe 4D clássica](parameters.md#sequential-parameters) para parâmetros de métodos pode ser utilizada para declarar parâmetros de funções de classe. Ambas as sintaxes podem ser misturadas. Por exemplo:

```4d
Function add($x : Integer)
 var $2; $value : Integer
 var $0 : Text
 $value:=$x+$2
 $0:=String($value)
```

#### Valor retornado

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list. Por exemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
 $0:=$x+$y
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through $0. Por exemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

#### Exemplo 1

```4d
// Class: Rectangle
 Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Function definition
 Function getArea()->$result : Integer
 $result:=(This.height)*(This.width)
```

```4d
// In a project method

var $rect : cs. Rectangle
var $area : Real

$rect:=cs. Rectangle.new(50;100)  
$area:=$rect.getArea() //5000
```

#### Exemplo 2

Este exemplo utiliza a [expressão return``](parameters.md#return-expression):

```4d
Parâmetros
```

### `Function get` e `Function set`

#### Sintaxe

```4d
Sintaxe
```

```4d
Function set <name>($parameterName : type)
// código
```

`As funções obter` e `conjunto de funções` são acessores que definem **propriedades computadas** na classe. Uma propriedade calculada é uma propriedade nomeada com um tipo de dados que oculta um cálculo. When a computed property value is accessed, 4D substitutes the corresponding accessor's code:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

Se a propriedade não for acedida, o código nunca é executado.

Computed properties are designed to handle data that do not necessary need to be kept in memory. São geralmente baseados em propriedades persistentes. For example, if a class object contains as persistent property the *gross price* and the *VAT rate*, the *net price* could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the *getter*) and `Function set` (the *setter*) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. Neste caso, é devolvido um erro se o código tentar modificar a propriedade. If only a `Function set` is defined, 4D returns *undefined* when the property is read.

The type of the computed property is defined by the `$return` type declaration of the *getter*. It can be of any [valid property type](dt_object.md).

> Assigning *undefined* to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

#### Exemplo 1

```4d  
//Class: Person.4dm

Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function set fullName( $fullName : Text )
 $p:=Position(" "; $fullName)
 This.firstName:=Substring($fullName; 1; $p-1)
 This.lastName:=Substring($fullName; $p+1)
```

```4d
//num método projecto
$fullName:=$person.fullName // A função get fullName() é chamada
$person.fullName:="John Smith" // A função set fullName() é chamada
```

#### Exemplo 2

```4d
Function get fullAddress()->$result : Object

 $result:=New object

 $result.fullName:=This.fullName
 $result.address:=This.address
 $result.zipCode:=This.zipCode
 $result.city:=This.city
 $result.state:=This.state
 $result.country:=This.country 
```

### `Class constructor`

#### Sintaxe

```4d
// Class: MyClass
// Class constructor of MyClass
// code
```

A class constructor function, which can accept [parameters](#parameters), can be used to define a user class.

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns: `<ClassName>:constructor`, for example "MyClass:constructor".

#### Exemplo

```4d
// Class: MyClass
// Class constructor of MyClass
Class Constructor ($name : Text)
 This.name:=$name
```

```4d
// In a project method
// You can instantiate an object
var $o : cs.MyClass
$o:=cs.MyClass.new("HelloWorld")  
// $o = {"name":"HelloWorld"}
```

### `Class extends <ClassName>`

#### Sintaxe

```4d
// Class: ChildClass Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. The child class inherits all functions of the parent class.

Class extension must respect the following rules:

- A user class cannot extend a built-in class (except 4D. Object and [ORDA classes](../ORDA/ordaClasses.md) which are extended by default for user classes).
- A user class cannot extend a user class from another project or component.
- Uma classe utilizador não se pode estender a si própria.
- Não é possível estender classes de forma circular (ou seja, "a" estende "b" que estende "a").

Breaking such a rule is not detected by the code editor or the interpreter, only the compiler and `check syntax` will throw an error in this case.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Exemplo

Este exemplo cria uma classe chamada `Square` a partir de uma classe chamada `Polygon`.

```4d
Polygon.4dm
```

### `Super`

#### Sintaxe

```4d
Super {( param{;...;paramN} )} {-> Object}
```

| Parâmetro  | Tipo   |    | Descrição                                      |
| ---------- | ------ | -- | ---------------------------------------------- |
| param      | misto  | -> | Parameter(s) to pass to the parent constructor |
| Resultados | object | <- | Pai do objecto                                 |

The `Super` keyword allows calls to the `superclass`, i.e. the parent class.

`Super` tem dois objectivos diferentes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.

- If all class constructors in the inheritance tree are not properly called, error -10748 is generated. É o programador 4D que se certifica de que as chamadas são válidas.
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
Parâmetros
```

### `This`

#### Sintaxe

```4d
This -> Object
```

| Parâmetro  | Tipo   |    | Descrição      |
| ---------- | ------ | -- | -------------- |
| Resultados | object | <- | Objecto actual |

A palavra-chave `This` devolve uma referência ao objecto actualmente processado. In 4D, it can be used in [different contexts](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

Na maioria dos casos, o valor de `This` é determinado pela forma como uma função é chamada. Não pode ser definido por atribuição durante a execução e pode ser diferente de cada vez que a função é chamada.

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

Vários comandos da linguagem 4D permitem-lhe lidar com funcionalidades de classe.

### `OB Class`

#### `OB Class ( object ) -&#062; Object | Null`

`OB Class` devolve a classe do objecto passado como parâmetro.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -&#062; Boolean`

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.
