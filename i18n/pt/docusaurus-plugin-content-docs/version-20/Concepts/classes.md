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

```4d
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

### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object <!-- END REF -->

<!-- REF #_command_.cs.Params -->
| Parâmetro  | Tipo   |    | Descrição                                                                      |
| ---------- | ------ | -- | ------------------------------------------------------------------------------ |
| classStore | Object | <- | Class store de usuário para o projeto ou componente|<!-- END REF -->

|

O comando `cs` <!-- REF #_command_.cs.Summary -->O comando cs devolve a loja de classes de utilizadores para o projecto ou componente actual<!-- END REF -->. Devolve todas as classes de usuários [definidas](#class-definition) no projecto ou componente aberto. Como padrão, apenas as classes ORDA do projecto [](ORDA/ordaClasses.md) estão disponíveis.


#### Exemplo

Se quiser criar uma nova instância de um objecto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->
| Parâmetro  | Tipo   |    | Descrição                                 |
| ---------- | ------ | -- | ----------------------------------------- |
| classStore | Object | <- | Class store 4D|<!-- END REF -->

|

O comando `4D` <!-- REF #_command_.4D.Summary -->retorna a loja de classe para classes embutidas<!-- END REF -->. Fornece acesso a APIs específicas, tais como [CryptoKey](API/CryptoKeyClass.md).

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
- // Class: MyClass Class Constructor({$parameterName : type; ...}) // code // code
- `Class constructor` to define the properties of the objects.
- Sintaxe
- `A classe estende-se a <ClassName>` para definir a herança.

### `Function`

#### Sintaxe

```4d
Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

:::note

There is no ending keyword for function code. A linguagem 4D detecta automaticamente o fim do código de uma função pela próxima palavra-chave `Function` ou pelo fim do arquivo de classe.

:::

As funções de classe são propriedades específicas da classe. São objetos da classe [4D.Function](API/FunctionClass.md).

No ficheiro de definição de classe, as declarações de função utilizam a palavra-chave `Função` , e o nome da função. O nome da função deve estar em conformidade com as [regras de nomeação de propriedades](Concepts/identifiers.md#object-properties).

:::tip

**Dica:** Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D. For example, if you declare `Function _myPrivateFunction` in `MyClass`, it will not be proposed in the code editor when you type in `"cs. MyClass. "`.

:::

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

No código da aplicação, as funções de classe são chamadas como métodos membros das instâncias do objeto e podem receber [parâmetros](#parameters) se existirem. As seguintes sintaxes são suportadas:

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



#### Valor retornado

Você declara o parâmetro de retorno (opcional) adicionando uma seta (`->`) e a definição do parâmetro de retorno após a lista de parâmetro(s) de entrada, ou dois pontos (`:`) e somente o tipo do parâmetro de retorno. Por exemplo:

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
property name : Text
property height; width : Integer

Class constructor($width : Integer; $height : Integer)
 This.name:="Rectangle"
 This.height:=$height
 This.width:=$width

// Definição da função
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

### `Class constructor`

#### Sintaxe

```4d
// Class: MyClass
// Class constructor of MyClass
// código
```

:::note

There is no ending keyword for class constructor function code. A linguagem 4D detecta automaticamente o fim do código de uma função pela próxima palavra-chave `Function` ou pelo fim do arquivo de classe.

:::


Uma função construtora de classe aceita [parâmetros](#parameters) opcionais e pode ser usada para criar e inicializar objetos da classe de usuário.

Quando você chama a função [`new()`](API/ClassClass.md#new), o construtor da classe é chamado com os parâmetros opcionalmente passados para a função `new()`.

Só pode haver uma função de construtor em uma classe (caso contrário um erro é retornado). Um construtor pode utilizar a palavra-chave [`Super`](#super) para chamar o construtor da superclasse.

É possível criar e digitar propriedades de instância dentro do construtor (ver exemplo). Em alternativa, se os valores das propriedades de instância não dependerem de parâmetros passados ao construtor, pode defini-los utilizando a palavra-chave [`property`](#property).


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


### `property`

#### Sintaxe

`property <propertyName>{; <propertyName2>;...}{ : <propertyType>}`

A palavra-chave `property` pode ser utilizada para declarar uma propriedade dentro de uma classe usuário. Uma propriedade de classe tem um nome e um tipo.

A declaração de propriedades de classe melhora as sugestões do editor de código, as funcionalidades de antecipação de tipos e a detecção de erros.

As propriedades são declaradas para novos objectos quando se chama a função [`new()`](API/ClassClass.md#new). No entanto, não são automaticamente adicionadas aos objectos (só são adicionadas quando lhes é atribuído um valor).

Os nomes de propriedades devem estar em conformidade com as [regras de nomeação de propriedades](Concepts/identifiers.md#object-properties).


O tipo de propriedade pode ser um dos seguintes tipos suportados:

| Sintaxe                                  | Conteúdos                                                                                                                                         |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Text`                                   | Valor texto                                                                                                                                       |
| `Date`                                   | Valor data                                                                                                                                        |
| `Hora`                                   | Valor Hora                                                                                                                                        |
| `Parâmetros`                             | Valor booleano                                                                                                                                    |
| `Integer`                                | Valor inteiro longo                                                                                                                               |
| `Real`                                   | Valor real                                                                                                                                        |
| `Ponteiro`                               | Valor ponteiro                                                                                                                                    |
| `Imagem`                                 | Valor imagem                                                                                                                                      |
| `Blob`                                   | Valor BLOB                                                                                                                                        |
| `Collection`                             | Valor colecção                                                                                                                                    |
| `Diferente de`                           | Valor variant                                                                                                                                     |
| `Object`                                 | Object with default class (4D.Object)                                                                                                             |
| `4D.<className>`                   | Objecto do nome da classe 4D                                                                                                                      |
| `cs.<className>`                   | Objeto do nome da classe usuário                                                                                                                  |
| `cs.<namespace>.<className>` | For a class constructor function, the `Current method name` command returns:  `<ClassName>:constructor`, for example "MyClass:constructor". |

:::info

A palavra-chave `property` só pode ser utilizada em métodos classe e fora de qualquer bloco `Function` ou `Class Constructor`.

:::


#### Exemplo

```4d
Sintaxe
```

Num método:

```4d
var $o : cs. MyClass
$o:=cs. MyClass.new() //$o:{}
$o.name:="John" //$o:{"name" : "John"}
$o.age:="Smith" //erro com a sintaxe de verificação
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

`As funções obter` e `conjunto de funções` são acessores que definem **propriedades computadas** na classe. Uma propriedade calculada é uma propriedade nomeada com um tipo de dados que oculta um cálculo. Quando um valor de propriedade computado é acessado, 4D substitui o código do acessor correspondente:

- quando a propriedade for lida, a função `get` é executada,
- quando a propriedade for escrita, o conjunto de funções `` é executado.

Se a propriedade não for acedida, o código nunca é executado.

As propriedades computadas são concebidas para tratar dados que não precisam de ser guardados na memória. São geralmente baseados em propriedades persistentes. Por exemplo, se um objecto de classe contém como propriedade persistente o *preço bruto* e o *taxa de IVA*, o *preço líquido* pode ser tratado por uma propriedade computada.

No arquivo de definição da classe, as declarações de propriedades computadas utilizam as palavras-chave `Function get` (o getter **) e `Function set` (o setter **), seguidas do nome da propriedade. Os nomes de propriedades devem seguir as [regras de nomeação de propriedades](Concepts/identifiers.md#object-properties).

`A função get` devolve um valor do tipo de propriedade e `A função set` recebe um parâmetro do tipo de propriedade. Ambos os argumentos devem estar em conformidade com os parâmetros da função [](#parameters).

Quando ambas as funções são definidas, a propriedade calculada é **read-write**. Se apenas for definida uma `Function get`, a propriedade calculada é **só de leitura**. Neste caso, é devolvido um erro se o código tentar modificar a propriedade. Se apenas um `Function set` estiver definido, 4D devolve *undefined* quando a propriedade é lida.

O tipo da propriedade calculada é definido pela declaração de tipo `$return` do *getter *. Pode ser de qualquer [tipo de propriedade válida](dt_object.md).

> Atribuir *undefined* a uma propriedade de objecto apaga o seu valor, preservando o seu tipo. Para o efeito, a função `get` é chamada primeiro para obter o tipo de valor e, em seguida, a função `set` é chamada com um valor vazio desse tipo.

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
//Classe: Square

//path: Classes/Square.4dm

Class extends Polygon


Construtor da classe ($side : Integer)

 // Chama o construtor da classe pai com comprimentos
 // fornecidos para a largura e altura do Polygon
 Super($side;$side)
 // Em classes derivadas, Super tem de ser chamado antes de
 // poder usar 'This'
 This.name:="Square"

 Function getArea()
  C_LONGINT($0)
  $0:=This.height*This.width
```



### `Super`

<!-- REF #_command_.Super.Syntax -->**Super**( ...param : any )<br/>**Super** : Object<!-- END REF -->

<!-- REF #_command_.Super.Params -->
| Parâmetro  | Tipo   |    | Descrição                                   |
| ---------- | ------ | -- | ------------------------------------------- |
| param      | any    | -> | Parâmetro(s) a passar para o construtor pai |
| Resultados | Object | <- | Pai do objecto|<!-- END REF -->

|

A palavra-chave `Super` <!-- REF #_command_.Super.Summary -->permite chamadas para a superclasse ``, ou seja, a classe pai<!-- END REF -->.

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

### `This`

<!-- REF #_command_.This.Syntax -->**This** : Object<!-- END REF -->

<!-- REF #_command_.This.Params -->
| Parâmetro  | Tipo   |    | Descrição                                 |
| ---------- | ------ | -- | ----------------------------------------- |
| Resultados | Object | <- | Objecto actual|<!-- END REF -->

|

A palavra-chave `This` <!-- REF #_command_.This.Summary -->devolve uma referência ao objeto atualmente processado<!-- END REF -->.

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

### `OB Class`

#### `OB Class ( object ) -&#062; Object | Null`

`OB Class` devolve a classe do objecto passado como parâmetro.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -&#062; Boolean`

`OB Instância de` devolve `true` se o objecto `` pertencer à classe `` ou a uma das suas classes herdadas, e `false` caso contrário.
