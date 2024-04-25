---
id: classes
title: Classes
---

## Visão Geral

The 4D language supports the concept of **classes**. Numa linguagem de programação, a utilização de uma classe permite definir um comportamento do objecto com propriedades e funções associadas.

Once a user class is defined, you can **instantiate** objects of this class anywhere in your code. Cada objecto é uma instância da sua classe. A class can [`extend`](#class-extends-classname) another class, and then inherits from its [functions](#function) and properties ([declared](#property) and [computed](#function-get-and-function-set)).

> O modelo de classe em 4D é semelhante às classes em JavaScript, e baseado numa cadeia de protótipos.

For example, you could create a `Person` class with the following definition:

```4d
//Class: Person.4dm
Class constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function get fullName() -> $fullName : Text
 $fullName:=This.firstName+" "+This.lastName

Function sayHello() -> $welcome : Text

 $welcome:="Hello "+This.fullName
```

Ou em um método, criar uma "Pessoa":

```4d
var $person : cs. Person //object of Person class  
var $hello : Text
$person:=cs. Person.new("John";"Doe")
// $person:{firstName: "John"; lastName: "Doe" }
$hello:=$person.sayHello() //"Hello John Doe"
```

## Gestão de classes

### Definição de classe

A user class in 4D is defined by a specific [method](methods.md) file (.4dm), stored in the `/Project/Sources/Classes/` folder. O nome do arquivo é o nome da classe.

Ao nomear classes, deve ter em mente as seguintes regras:

- A [class name](identifiers.md#classes) must be compliant with [property naming rules](identifiers.md#object-properties).
- Nomes de classe diferenciam minúsculas de maiúsculas.
- Não se recomenda dar o mesmo nome a uma classe e a uma tabela de base de dados, a fim de evitar qualquer conflito.

Por exemplo, se quiser definir uma classe chamada "Polígono", precisa  criar o seguinte arquivo:

```
Project folder
```

### Eliminação de uma classe

Para eliminar uma classe existente, pode:

- no seu disco, remover o arquivo de classe .4dm da pasta "Classes",
- in the 4D Explorer, select the class and click ![](../assets/en/Users/MinussNew.png) or choose **Move to Trash** from the contextual menu.

### Using 4D interface

Class files are automatically stored at the appropriate location when created through the 4D interface, either via the **File** menu or the Explorer.

#### Menu Arquivo e barra de ferramentas

You can create a new class file for the project by selecting **New > Class...** in the 4D Developer **File** menu or from the toolbar.

You can also use the **Ctrl+Shift+Alt+k** shortcut.

#### Explorador

In the **Methods** page of the Explorer, classes are grouped in the **Classes** category.

Para criar uma nova classe, pode:

- select the **Classes** category and click on the ![](../assets/en/Users/PlussNew.png) button.
- select **New Class...** from the action menu at the bottom of the Explorer window, or from the contexual menu of the Classes group.
  ![](../assets/en/Concepts/newClass.png)
- select **New > Class...** from the contexual menu of the Explorer's Home page.

#### Suporte de código de classe

Nas várias janelas 4D (editor de código, compilador, depurador, explorador de tempo de execução), o código de classe é basicamente tratado como um método de projecto com algumas especificidades:

- No editor de código:
  - uma aula não pode ser executada
  - uma função de classe é um bloco de código
  - **Goto definition** on an object member searches for class Function declarations; for example, "$o.f()" will find "Function f".
  - **Search references** on class function declaration searches for the function used as object member; for example, "Function f" will find "$o.f()".
- In the Runtime explorer and Debugger, class functions are displayed with the `<ClassName>` constructor or `<ClassName>.<FunctionName>` format.

## Lojas de classe

As classes disponíveis são acessíveis a partir das suas class stores. Estão disponíveis duas class stores:

- `cs` for user class store
- `4D` for built-in class store

### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->

<!-- REF #_command_.cs.Params -->

| Parâmetro  | Tipo   |    | Descrição                                           |                  |
| ---------- | ------ | -- | --------------------------------------------------- | ---------------- |
| classStore | Object | <- | Class store de usuário para o projeto ou componente | <!-- END REF --> |

The `cs` command <!-- REF #_command_.cs.Summary -->returns the user class store for the current project or component<!-- END REF -->. It returns all user classes [defined](#class-definition) in the opened project or component. By default, only project [ORDA classes](ORDA/ordaClasses.md) are available.

#### Exemplo

You want to create a new instance of an object of `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->

| Parâmetro  | Tipo   |    | Descrição      |                  |
| ---------- | ------ | -- | -------------- | ---------------- |
| classStore | Object | <- | Class store 4D | <!-- END REF --> |

The `4D` command <!-- REF #_command_.4D.Summary -->returns the class store for available built-in 4D classes<!-- END REF -->. It provides access to specific APIs such as [CryptoKey](API/CryptoKeyClass.md).

#### Exemplo

You want to create a new key in the `CryptoKey` class:

```4d
$key:=4D. CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## Objecto de classe

When a class is [defined](#class-definition) in the project, it is loaded in the 4D language environment. A class is an object itself, of ["Class" class](API/ClassClass.md). Um objecto classe tem as seguintes propriedades e função:

- [`name`](API/ClassClass.md#name) string
- [`superclass`](API/ClassClass.md#superclass) object (null if none)
- [`new()`](API/ClassClass.md#new) function, allowing to instantiate class objects
- [`isShared`](API/ClassClass.md#isshared) property, true if the class is [shared](#shared-classes)
- [`isSingleton`](API/ClassClass.md#issingleton) property, true if the class defines a [singleton](#singleton-classes).
- [`me`](API/ClassClass.md#me) property, allowing to instantiate and access [singletons](#singleton-classes).

In addition, a class object can reference a [`constructor`](#class-constructor) object (optional).

A class object itself is a [shared object](shared.md) and can therefore be accessed from different 4D processes simultaneously.

### Herança

If a class inherits from another class (i.e. the [Class extends](classes.md#class-extends-classname) keyword is used in its definition), the parent class is its [`superclass`](API/ClassClass.md#superclass).

When 4D does not find a function or a property in a class, it searches it in its [`superclass`](API/ClassClass.md#superclass); if not found, 4D continues searching in the superclass of the superclass, and so on until there is no more superclass (all objects inherit from the "Object" superclass).

## Palavras-chave de classe

As palavras-chave 4D específicas podem ser utilizadas nas definições de classes:

- `Function <Name>` to define class functions of the objects.
- `Class constructor` to initialize new objects of the class.
- `property` to define static properties of the objects with a type.
- `Function get <Name>` and `Function set <Name>` to define computed properties of the objects.
- `Class extends <ClassName>` to define inheritance.

### `Function`

#### Sintaxe

```4d
{shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

As funções de classe são propriedades específicas da classe. They are objects of the [4D.Function](API/FunctionClass.md) class. In the class definition file, function declarations use the `Function` keyword followed by the function name.

If the function is declared in a [shared class](#shared-classes), you can use the `shared` keyword so that the function could be called without [`Use...End use` structure](shared.md#useend-use). For more information, refer to the [Shared functions](#shared-functions) paragraph below.

The function name must be compliant with [object naming rules](Concepts/identifiers.md#object-properties).

:::note

Como propriedades e funções compartilham o mesmo espaço de nomes, usar o mesmo nome para uma propriedade e uma função da mesma classe não é permitido (um erro é lançado nesse caso).

:::

:::tip

<strong x-id="1">Dica:</strong> Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs.MyClass. "`.

:::

Immediately following the function name, [parameters](#parameters) for the function can be declared with an assigned name and data type, including the return parameter (optional). Por exemplo:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Within a class function, the `This` command is used as the object instance. Por exemplo:

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

For a class function, the `Current method name` command returns: `<ClassName>.<FunctionName>`, for example "MyClass.myFunction".

In the application code, class functions are called as member methods of the object instance and can receive [parameters](#parameters) if any. As seguintes sintaxes são suportadas:

- use of the `()` operator. For example, `myObject.methodName("hello")`
- use of a "4D. Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Thread-safety warning

Se uma função de classe não for thread-safe e for chamada por um método com o atributo "Pode ser executado num processo preemptivo":

- o compilador não gera qualquer erro (o que é diferente dos métodos normais),
- um erro é lançado por 4D apenas em tempo de execução.

:::

#### Parâmetros

Os parâmetros da função são declarados utilizando o nome do parâmetro e o tipo de parâmetro, separados por dois pontos. The parameter name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties). Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

If the type is not stated, the parameter will be defined as `Variant`.

:::

#### Valor retornado

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list, or a colon (`:`) and the return parameter type only. Por exemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

You can also declare the return parameter by adding only `: type` and use the [`return expression`](parameters.md#return-expression) (it will also end the function execution). Por exemplo:

```4d
Function add($x : Variant; $y : Integer)-&gt;$result : Integer
```

#### Exemplo 1

```4d
property name : Text
property height; width : Integer

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

This example uses the [`return expression`](parameters.md#return-expression):

```4d
Function getRectArea($width : Integer; $height : Integer) : Integer
 If ($width > 0 && $height > 0)
  return $width * $height
 Else
  return 0
 End if
```

### `Class constructor`

#### Sintaxe

```4d
// Class: MyClass
{shared} {singleton} Class Constructor({$parameterName : type; ...})
// code
```

A class constructor function accepts optional [parameters](#parameters) and can be used to create and initialize objects of the user class.

When you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

Só pode haver uma função de construtor em uma classe (caso contrário um erro é retornado). A constructor can use the [`Super`](#super) keyword to call the constructor of the super class.

É possível criar e digitar propriedades de instância dentro do construtor (ver exemplo). Alternatively, if your instance properties' values do not depend on parameters passed to the constructor, you can define them using the [`property`](#property) keyword.

Using the `shared` keyword creates a **shared class**, used to only instantiate shared objects. For more information, refer to the [Shared classes](#shared-classes) paragraph.

Using the `singleton` keyword creates a **singleton**, used to create a single instance. For more information, refer to the [Singleton classes](#singleton-classes) paragraph.

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

### `propriedade`

#### Sintaxe

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

The `property` keyword can be used to declare a property inside a user class. Uma propriedade de classe tem um nome e um tipo.

A declaração de propriedades de classe melhora as sugestões do editor de código, as funcionalidades de antecipação de tipos e a detecção de erros.

Properties are declared for new objects when you call the [`new()`](API/ClassClass.md#new) function, however they are not automatically added to objects (they are only added when they are assigned a value).

:::note

A property is automatically added to the object when it is [inititalized in the declaration line](#initializing-the-property-in-the-declaration-line).

:::

Property names must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

:::note

Como propriedades e funções compartilham o mesmo espaço de nomes, usar o mesmo nome para uma propriedade e uma função da mesma classe não é permitido (um erro é lançado nesse caso).

:::

O tipo de propriedade pode ser um dos seguintes tipos suportados:

| Sintaxe                      | Conteúdos                                                                |
| ---------------------------- | ------------------------------------------------------------------------ |
| `Text`                       | Valor texto                                                              |
| `Date`                       | Valor data                                                               |
| `Time`                       | Valor Hora                                                               |
| `Boolean`                    | Valor booleano                                                           |
| `Integer`                    | Valor inteiro longo                                                      |
| `Real`                       | Valor real                                                               |
| `Pointer`                    | Valor ponteiro                                                           |
| `Picture`                    | Valor imagem                                                             |
| `Blob`                       | Valor BLOB                                                               |
| `Collection`                 | Valor colecção                                                           |
| `Variant`                    | Valor variant                                                            |
| `Object`                     | Object with default class (4D.Object) |
| `4D.<className>`             | Objecto do nome da classe 4D                                             |
| `cs.<className>`             | Objeto do nome da classe usuário                                         |
| `cs.<namespace>.<className>` | Objeto do nome da classe do componente `<namespace>`                     |

Se você omitir o tipo na linha de declaração, a propriedade é criada como uma variante.

:::info

The `property` keyword can only be used in class methods and outside any `Function` or `Class Constructor` block.

:::

#### Inicializando a propriedade na linha de declaração

Ao declarar uma propriedade, você tem a flexibilidade de especificar seu tipo de dados e fornecer seu valor em uma única instrução. A sintaxe suportada é:

`property <propertyName> { : <propertyType>} := <Propertyvalue>`

:::note

Ao usar essa sintaxe, você não pode declarar várias propriedades na linha de declaração.

:::

Você pode omitir o tipo na linha da declaração, caso em que o tipo será inferido quando possível. Por exemplo:

```4d
// Class: MyClass

property name : Text := "Smith"
property age : Integer := 42

property birthDate := !1988-09-29! //date is inferred
property fuzzy //variant
```

When you initialize a property in its declaration line, it is added to the class object after its instantiation with the [`new()`](API/ClassClass.md#new) function but before the constructor is called.

If a class [extends](#class-extends-classname) another class, the properties of the parent class are instantiated before the properties of the child class.

#### Exemplo

```4d
// Class: MyClass

property name : Text
property age : Integer
property color : Text := "Blue"
```

Num método:

```4d
var $o : cs.MyClass
$o:=cs.MyClass.new() //$o:{"color" : "Blue"}
$o.name:="John" //$o:{"color" : "Blue"; "name" : "John"}
$o.age:="Smith"  //error com a sintaxe checada
```

### `Function get` and `Function set`

#### Sintaxe

```4d
{shared} Function get <name>()->$result : type
// code
```

```4d
{shared} Function set <name>($parameterName : type)
// código
```

`Function get` and `Function set` are accessors defining **computed properties** in the class. Uma propriedade calculada é uma propriedade nomeada com um tipo de dados que oculta um cálculo. Quando um valor de propriedade computado é acessado, 4D substitui o código do acessor correspondente:

- when the property is read, the `Function get` is executed,
- when the property is written, the `Function set` is executed.

Se a propriedade não for acedida, o código nunca é executado.

As propriedades computadas são concebidas para tratar dados que não precisam de ser guardados na memória. São geralmente baseados em propriedades persistentes. For example, if a class object contains as persistent property the _gross price_ and the _VAT rate_, the _net price_ could be handled by a computed property.

In the class definition file, computed property declarations use the `Function get` (the _getter_) and `Function set` (the _setter_) keywords, followed by the name of the property. The name must be compliant with [property naming rules](Concepts/identifiers.md#object-properties).

`Function get` returns a value of the property type and `Function set` takes a parameter of the property type. Both arguments must comply with standard [function parameters](#parameters).

When both functions are defined, the computed property is **read-write**. If only a `Function get` is defined, the computed property is **read-only**. Neste caso, é devolvido um erro se o código tentar modificar a propriedade. If only a `Function set` is defined, 4D returns _undefined_ when the property is read.

If the functions are declared in a [shared class](#shared-class-constructor), you can use the `shared` keyword with them so that they could be called without [`Use...End use` structure](shared.md#useend-use). For more information, refer to the [Shared functions](#shared-functions) paragraph below.

The type of the computed property is defined by the `$return` type declaration of the _getter_. It can be of any [valid property type](dt_object.md).

> Assigning _undefined_ to an object property clears its value while preserving its type. In order to do that, the `Function get` is first called to retrieve the value type, then the `Function set` is called with an empty value of that type.

#### Exemplo 1

```4d
//Class: Person.4dm
property firstName; lastName : Text

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

### `Class extends <ClassName>`

#### Sintaxe

```4d
// Class: ChildClass
Class extends <ParentClass>
```

The `Class extends` keyword is used in class declaration to create a user class which is a child of another user class. A classe filha herda todas as funções da classe mãe.

A extensão de classe deve respeitar as seguintes regras:

- A user class cannot extend a built-in class (except 4D.Object and [ORDA classes](../ORDA/ordaClasses.md) which are extended by default for user classes).
- Uma classe de usuário não pode estender uma classe de usuário de outro projeto ou componente.
- Uma classe usuário não se pode estender a si própria.
- Não é possível estender classes de forma circular (ou seja, "a" estende "b" que estende "a").
- It is not possible to define a [shared user class](#shared-classes) extended from a non-shared user class.

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



 Function getArea() -> $area : Integer
  $area:=This.height*This.width
```

### `Super`

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->

| Parâmetro  | Tipo   |    | Descrição                                                      |
| ---------- | ------ | -- | -------------------------------------------------------------- |
| param      | any    | -> | Parâmetro(s) a passar para o construtor pai |
| Resultados | Object | <- | Pai do objecto                                                 |

<!-- END REF -->

The `Super` keyword <!-- REF #_command_.Super.Summary -->allows calls to the `superclass`, i.e. the parent class<!-- END REF -->.

`Super` serves two different purposes:

1. Inside a [constructor code](#class-constructor), `Super` is a command that allows to call the constructor of the superclass. When used in a constructor, the `Super` command appears alone and must be used before the `This` keyword is used.

- Se todos os construtores de classe na árvore de herança não forem correctamente chamados, é gerado o erro -10748. É o programador 4D que se certifica de que as chamadas são válidas.
- If the `This` command is called on an object whose superclasses have not been constructed, error -10743 is generated.
- If `Super` is called out of an object scope, or on an object whose superclass constructor has already been called, error -10746 is generated.

```4d
// dentro do construtor myClass
var $text1; $text2 : Text
Super($text1) //chama o construtor da superclasse com um parâmetro de texto
This.param:=$text2 // usa o segundo parâmetro
```

2. Inside a [class member function](#class-function), `Super` designates the prototype of the superclass and allows to call a function of the superclass hierarchy.

```4d
Super.doSomething(42) //chamada a função "doSomething"  
//declarada em superclasses
```

#### Exemplo 1

This example illustrates the use of `Super` in a class constructor. The command is called to avoid duplicating the constructor parts that are common between `Rectangle` and `Square` classes.

```4d
// Class: Rectangle
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Function definition
Function getArea()
 var $0 : Integer

 $0:=(This.height)*(This.width)
```

```4d
//Classe: Square

Classe extends Rectangle

Construtor da classe ($side : Integer)

 // Chama o construtor da classe pai com comprimentos
 // fornecidos para a largura e altura do Rectangle
 Super($side;$side)
 // Em classes derivadas, Super tem de ser chamado antes de
 // poder usar 'This'
 This.name:="Square"

Function getArea()
 C_LONGINT($0)
 $0:=This.height*This.width
```

#### Exemplo 2

This example illustrates the use of `Super` in a class member method. You created the `Rectangle` class with a function:

```4d
//Classe: Rectângulo

Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

You also created the `Square` class with a function calling the superclass function:

```4d
//Classe: Quadrado

Class extends Rectangle

Function description()
 var $0 : Text
 $0:=Super.nbSides()+" que são todos iguais"
```

Depois pode escrever num método projecto:

```4d
Parâmetros
```

### `This`

<!-- REF #_command_.This.Syntax -->**This** : Object<!-- END REF -->

<!-- REF #_command_.This.Params -->

| Parâmetro  | Tipo   |    | Descrição      |
| ---------- | ------ | -- | -------------- |
| Resultados | Object | <- | Objecto actual |

<!-- END REF -->

The `This` keyword <!-- REF #_command_.This.Summary -->returns a reference to the currently processed object<!-- END REF -->.

In most cases, the value of `This` is determined by how a function is called. Não pode ser definido por atribuição durante a execução e pode ser diferente de cada vez que a função é chamada.

When a [formula](../API/FunctionClass.md) is called as a member method of an object, its `This` is set to the object the method is called on. Por exemplo:

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

> When calling the superclass constructor in a constructor using the [Super](#super) keyword, keep in mind that `This` must not be called before the superclass constructor, otherwise an error is generated. See [this example](#example-1).

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

In this example, the object assigned to the variable $o doesn't have its own _f_ property, it inherits it from its class. Since _f_ is called as a method of $o, its `This` refers to $o.

## Comandos de classe

Vários comandos da linguagem 4D permitem-lhe lidar com funcionalidades de classe.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` returns the class of the object passed in parameter.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` returns `true` if `object` belongs to `class` or to one of its inherited classes, and `false` otherwise.

## Classes compartilhadas

You can create **shared classes**. A shared class is a user class that instantiates a [shared object](shared.md) when the [`new()`](../API/ClassClass.md#new) function is called on the class. Uma classe compartilhada só pode criar objetos compartilhados.

Shared classes also support **shared functions** that can be called without [`Use...End use`](shared.md#useend-use) structures.

The [`.isShared`](../API/ClassClass.md#isshared) property of Class objects allows to know if the class is shared.

:::info

- A class [inheriting](#class-extends-classname) from a non-shared class cannot be defined as shared.
- Shared classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::

### Criação de uma classe compartilhada

To create a shared class, add the `shared` keyword before the [Class Constructor](#class-constructor). Por exemplo:

```4d
	//shared class: Person
shared Class Constructor($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

```

```4d
//myMethod
var $person := cs.Person.new("John"; "Smith")
OB Is shared($person) // true
cs.Person.isShared //true
```

### Funções compartilhadas

If a function defined inside a shared class modifies objects of the class, it should call [`Use...End use`](shared.md#useend-use) structure to protect access to the shared objects. However, to simplify the code, you can define the function as **shared** so that it automatically triggers internal `Use...End use` when executed.

To create a shared function, add the `shared` keyword before the [Function](#function) keyword in a shared class. Por exemplo:

```4d
	//shared class Foo
shared Class Constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //no need to call use/end use
```

:::note

If the `shared` function keyword is used in a non-shared user class, it is ignored.

:::

## Classes Singleton

A **singleton class** is a user class that only produces a single instance. For more information on singletons, please see the [Wikipedia page about singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

The class singleton is instantiated at the first call of the [`cs.<class>.me`](../API/ClassClass.md#me) property. The instantiated class singleton is then always returned when the [`me`](../API/ClassClass.md#me) property is used.

If you need to instantiate a singleton with parameters, you can also call the [`new()`](../API/ClassClass.md#new) function. Nesse caso, é recomendado instanciar o singleton em algum código executado no início da aplicação.

O escopo de uma instância singleton pode ser o processo atual ou todos os processos. A _process_ singleton has a unique value for the process in which it is instantiated, while an _interprocess_ singleton has a unique value for all processes of the application. Singletons são úteis para definir valores que precisam estar disponíveis em qualquer lugar em um aplicativo ou processo.

The [`.isSingleton`](../API/ClassClass.md#issingleton) property of Class objects allows to know if the class is a singleton.

:::info

Singleton classes are not supported by [ORDA-based classes](../ORDA/ordaClasses.md).

:::

### Criação de um singleton process

To create a process singleton class, add the `singleton` keyword before [`Class Constructor`](#class-constructor). Por exemplo:

```4d
	//class: ProcessTag
singleton Class Constructor()
 This.tag:=Random
```

Para usar o singleton process:

```4d
	//in a process
var $mySingleton := cs.ProcessTag.me //First instantiation
	//$mySingleton.tag = 5425 for example  
...  
var $myOtherSingleton := cs.ProcessTag.me
	//$myOtherSingleton.tag = 5425

```

```4d
	//in another process
var $mySingleton := cs.ProcessTag.me //First instantiation
	//$mySingleton.tag = 14856 for example  
...  
var $myOtherSingleton := cs.ProcessTag.me  
	//$myOtherSingleton.tag = 14856
```

### Criação de um singleton interprocesso

To create an interprocess singleton, add the `shared singleton` keywords before the [Class Constructor](#class-constructor). Por exemplo:

```4d
//Class VehicleFactory

property vehicleBuilt : Integer

shared singleton Class constructor()
  This.vehicleBuilt := 0 //Number of vehicles built by the factory

shared Function buildVehicle ($type : Text) -> $vehicle : cs.Vehicle

  Case of
    : $type="car"
      $vehicle:=cs.Car.new()
    : $type="truck"
      $vehicle:=cs.Truck.new()
    : $type="sport car"
      $vehicle:=cs.SportCar.new()
    : $type="motorbike"
      $vehicle:=cs.Motorbike.new()
  Else
    $vehicle:=cs.Car.new()
  End case
  This.vehicleBuilt+=1
```

You can then call the **cs.VehicleFactory** singleton to get a new vehicle from everywhere in your application with a single line:

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("caminhão")
```

Since the _buildVehicle()_ function modifies the **cs.VehicleFactory** singleton (by incrementing `This.vehicleBuilt`) you need to add the `shared` keyword to it.

#### Veja também

See also [this blog post](https://blog.4d.com/singleton) for more details.
