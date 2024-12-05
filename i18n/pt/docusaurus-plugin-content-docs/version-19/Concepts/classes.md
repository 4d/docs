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
var $person : cs.Person //object of Person class  
var $hello : Text
$person:=cs.Person.new("John";"Doe")
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

- Pasta Project
  - Project
    - Sources
      - Classes
        - Polygon.4dm

### Eliminação de uma classe

Para eliminar uma classe existente, pode:

- no seu disco, remover o arquivo de classe .4dm da pasta "Classes",
- no Explorador 4D, selecionar a classe e clicar em ![](../assets/en/Users/MinussNew.png) ou escolher **Mover para Lixo** a partir do menu contextual.

### Utilização da interface 4D

Os arquivos de classe são automaticamente armazenados no local apropriado quando criados através da interface 4D, quer através do menu **File** , quer através do Explorer.

#### Menu Arquivo e barra de ferramentas

Pode criar um novo arquivo de classe para o projecto seleccionando **Novo > Class...** no menu 4D Developer **File** ou a partir da barra de ferramentas.

Também pode utilizar o atalho **Ctrl+Shift+Alt+k** .

#### Explorador

Na página de **Métodos** do Explorador, as classes são agrupadas na categoria **Classes**.

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

| Parâmetro  | Tipo   |    | Descrição                                           |
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

Se uma classe herdar de outra classe (ou seja, a classe [estende a palavra-chave](classes.md#class-extends-classname) é utilizada na sua definição), a classe mãe é a sua superclasse [``](API/ClassClass.md#superclass).

Quando 4D não encontrar uma função ou uma propriedade numa classe, procura-a na sua [`superclasse`](API/ClassClass.md#superclass); se não for encontrada, 4D continua a procurar na superclasse da superclasse, e assim sucessivamente até não haver mais superclasse (todos os objectos herdados da superclasse "Objecto").

## Palavras-chave de classe

As palavras-chave 4D específicas podem ser utilizadas nas definições de classes:

- `Função <Name>` para definir as funções de classe dos objectos.
- `Class constructor` para definir as propriedades dos objetos.
- `A classe estende-se a <ClassName>` para definir a herança.

### Function

#### Sintaxe

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

:::note

There is no ending keyword for function code. The 4D language automatically detects the end of a function's code by the next `Function` keyword or the end of the class file.

:::


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

> **Aviso de segurança de thread:** Se uma função de classe não for thread-safe e for chamada por um método com o atributo "Pode ser executado num processo preemptivo":
> 
> - o compilador não gera qualquer erro (o que é diferente dos métodos normais),
> - um erro é lançado por 4D apenas em tempo de execução.

#### Parâmetros

Os parâmetros da função são declarados utilizando o nome do parâmetro e o tipo de parâmetro, separados por dois pontos. O nome do parâmetro deve estar em conformidade com as [regras de nomenclatura de propriedades](Concepts/identifiers.md#object-properties). Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).

```4d  
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```
> Se o tipo não for indicado, o parâmetro será definido como `Variant`.

You declare the return parameter (optional) by adding an arrow (`->`) and the return parameter definition after the input parameter(s) list. Por exemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
```

You can also declare the return parameter only by adding `: type`, in which case it will automatically be available through $0. Por exemplo:

```4d
Function add($x : Variant; $y : Integer): Integer
 $0:=$x+$y
```

A [sintaxe 4D clássica](parameters.md#sequential-parameters) para parâmetros de métodos pode ser utilizada para declarar parâmetros de funções de classe. Ambas as sintaxes podem ser misturadas. Por exemplo:

```4d
Function add($x : Integer)
 var $2; $value : Integer
 var $0 : Text
 $value:=$x+$2
 $0:=String($value)
```

#### Exemplo

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

### Class constructor

#### Sintaxe

```4d
// Class: MyClass
// Class constructor of MyClass
// código
```

:::note

There is no ending keyword for class constructor function code. The 4D language automatically detects the end of a function's code by the next `Function` keyword or the end of the class file.

:::


Uma função class constructor, que pode aceitar [parâmetros](#parameters), pode ser usada para definir uma classe usuário.

In that case, when you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

For a class constructor function, the `Current method name` command returns:  `<ClassName>:constructor`, for example "MyClass:constructor".

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

### Class extends `<ClassName>`

#### Sintaxe

```4d
// Class: ChildClass Class extends <ParentClass>
```

A palavra-chave `Class extends` é utilizada na declaração da classe para criar uma classe de utilizador que é filha de outra classe de utilizador. A classe filha herda todas as funções da classe mãe.

A extensão de classe deve respeitar as seguintes regras:

- Uma classe de usuário não pode estender uma classe incorporada (excepto as classes 4D.Object e [ORDA](../ORDA/ordaClasses.md) que são estendidas por defeito para as classes de utilizador).
- Uma classe de usuário não pode estender uma classe de usuário de outro projeto ou componente.
- Uma classe usuário não se pode estender a si própria.
- Não é possível estender classes de forma circular (ou seja, "a" estende "b" que estende "a").

A violação de uma regra deste tipo não é detectada pelo editor de código ou pelo intérprete, apenas o compilador e o `verificam a sintaxe` e, neste caso, emitem um erro.

Uma classe estendida pode chamar o construtor de sua classe pai usando o comando [`Super`](#super).

#### Exemplo

Este exemplo cria uma classe chamada `Square` a partir de uma classe chamada `Polygon`.

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

| Parâmetro  | Tipo   |    | Descrição                                   |
| ---------- | ------ | -- | ------------------------------------------- |
| param      | misto  | -> | Parâmetro(s) a passar para o construtor pai |
| Resultados | object | <- | Pai do objecto                              |

A palavra-chave `Super` permite efectuar chamadas para a superclasse ``, ou seja, a classe-mãe.

`Super` tem dois objectivos diferentes:

1. Dentro de um código de construtor [](#class-constructor), `Super` é um comando que permite chamar o construtor da superclasse. Quando utilizado num construtor, o comando `Super` aparece sozinho e deve ser utilizado antes da palavra-chave `This` ser utilizada.

- Se todos os construtores de classe na árvore de herança não forem correctamente chamados, é gerado o erro -10748. É o programador 4D que se certifica de que as chamadas são válidas.
- Se o comando `This` for chamado num objecto cujas superclasses não tenham sido construídas, é gerado o erro -10743.
- Se `Super` for chamado fora do âmbito de um objecto ou num objecto cujo construtor de superclasse já tenha sido chamado, é gerado o erro -10746.

```4d
// dentro do construtor myClass
var $text1; $text2 : Text
Super($text1) //chama o construtor da superclasse com um parâmetro de texto
This.param:=$text2 // usa o segundo parâmetro
```

2. No interior de uma função de membro da classe [](#class-function), `Super` designa o protótipo da superclasse e permite chamar uma função da hierarquia da superclasse.

```4d
Super.doSomething(42) //chamada a função "doSomething"  
//declarada em superclasses
```

#### Exemplo 1

Este exemplo ilustra a utilização de `Super` num construtor de classe. O comando é chamado para evitar a duplicação das partes do construtor que são comuns às classes `Rectangle` e `Square` .

```4d
// Classe: Rectângulo
Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width


Function sayName()
 ALERT("Hi, I am a "+This.name+".")

// Definição da função
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

Este exemplo ilustra a utilização de `Super` num método de membro da classe. Criou a classe `Rectangle` com uma função:

```4d
//Classe: Rectângulo

Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

Também criou a classe `Square` com uma função que chama a função da superclasse:

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

### This

#### Sintaxe

```4d
This -> Object
```

| Parâmetro  | Tipo   |    | Descrição      |
| ---------- | ------ | -- | -------------- |
| Resultados | object | <- | Objecto actual |

A palavra-chave `This` devolve uma referência ao objecto actualmente processado. Em 4D, ele pode ser usado em [contextos diferentes](https://doc.4d.com/4Dv18/4D/18/This.301-4504875.en.html).

Na maioria dos casos, o valor de `This` é determinado pela forma como uma função é chamada. Não pode ser definido por atribuição durante a execução e pode ser diferente de cada vez que a função é chamada.

Quando uma fórmula é chamada como método membro de um objecto, o seu `This` é definido como o objecto ao qual o método é chamado. Por exemplo:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

Quando se utiliza uma função [construtora de classe](#class-constructor) (com a função [`new()`](API/ClassClass.md#new) ), a sua `Esta` está ligada ao novo objecto que está a ser construído.

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

> Quando chamar o construtor da superclasse num construtor utilizando a palavra-chave [Super](#super) , esteja atento que `This` não deve ser chamado antes do construtor da superclasse, caso contrário é gerado um erro. Ver [este exemplo](#example-1).

Em qualquer caso, `This` refere-se ao objecto em que o método foi chamado, como se o método estivesse no objecto.

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

Neste exemplo, o objecto atribuído à variável $o não tem a sua própria propriedade *f* , herda-a da sua classe. Uma vez que *f* é chamado como um método de $o, o seu `Este` refere-se a $o.

## Comandos de classe

Vários comandos da linguagem 4D permitem-lhe lidar com funcionalidades de classe.

### OB Class

#### OB Class ( object ) -> Object | Null

`OB Class` devolve a classe do objecto passado como parâmetro.

### OB Instance of

#### OB Instance of ( object ; class ) -> Boolean

`OB Instância de` devolve `true` se o objecto `` pertencer à classe `` ou a uma das suas classes herdadas, e `false` caso contrário.
