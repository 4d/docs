---
id: classes
title: Classes
---

## Visão Geral

A linguagem 4D é compatível com o conceito de classes\*\*. Numa linguagem de programação, a utilização de uma classe permite definir um comportamento do objecto com propriedades e funções associadas.

Uma vez que uma classe de usuário é definida, você pode **instanciar** objetos dessa classe em qualquer lugar do seu código. Cada objecto é uma instância da sua classe. Uma classe pode [`extend`](#class-extends-classname) outra classe e herda suas [funções](#function) e propriedades ([declaradas](#property) e [computadas](#function-get-and-function-set)).

> O modelo de classe em 4D é semelhante às classes em JavaScript, e baseado numa cadeia de protótipos.

Por exemplo, você poderia criar uma classe `Pessoa` com a seguinte definição:

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

Uma classe de usuário em 4D é definida por um arquivo [method](methods.md) (.4dm), armazenado na pasta `/Project/Sources/Classes/` específico. O nome do arquivo é o nome da classe.

Ao nomear classes, deve ter em mente as seguintes regras:

- Um [nome de classe](identifiers.md#classes) deve estar em conformidade com as [regras de nomenclatura das propriedades](identifiers.md#object-properties).
- Nomes de classe diferenciam minúsculas de maiúsculas.
- Não se recomenda dar o mesmo nome a uma classe e a uma tabela de base de dados, a fim de evitar qualquer conflito.

Por exemplo, se quiser definir uma classe chamada "Polígono", precisa  criar o seguinte arquivo:

```
Project folder
```

### Eliminação de uma classe

Para eliminar uma classe existente, pode:

- no seu disco, remover o arquivo de classe .4dm da pasta "Classes",
- no Explorador 4D, selecione a classe e clique ![](../assets/en/Users/MinussNew.png) ou escolha **Mover para Lixo** no menu contextual.

### Using 4D interface

Os arquivos de classe são automaticamente armazenados no local apropriado quando criados através da interface 4D, quer através do menu **File**, quer através do Explorer.

#### Menu Arquivo e barra de ferramentas

Você pode criar um novo arquivo de classe para o projeto selecionando **Novo > Class...** no menu **File** do 4D Developer ou na barra de ferramentas.

Você também pode usar o atalho **Ctrl+Shift+Alt+k**.

#### Explorador

Na página de **Métodos** do Explorador, as classes são agrupadas na categoria **Classes**.

Para criar uma nova classe, pode:

- selecione a categoria **Classes** e clique no botão ![](../assets/en/Users/PlussNew.png).
- selecione **Nova Classe...** no menu de ação na parte inferior da janela do Explorer, ou no menu contextual do grupo Classes.
  ![](../assets/en/Concepts/newClass.png)
- selecione **Novo > Classe...** a partir do menu contextual da página inicial do Explorador.

#### Suporte de código de classe

Nas várias janelas 4D (editor de código, compilador, depurador, explorador de tempo de execução), o código de classe é basicamente tratado como um método de projecto com algumas especificidades:

- No editor de código:
  - uma aula não pode ser executada
  - uma função de classe é um bloco de código
  - **Ir para a definição** em um membro do objeto procura por declarações da classe Função; por exemplo, "$o.f()" encontrará "Função f".
  - **Procurar referências** na declaração de função da classe procura a função utilizada como membro do objeto; por exemplo, "Função f" irá encontrar "$o.f()".
- No explorador e Depurador de Runtime, as funções de classe são exibidas com o formato `<ClassName>` construtor ou `<ClassName>.<FunctionName>`.

## Lojas de classe

As classes disponíveis são acessíveis a partir das suas class stores. Estão disponíveis duas class stores:

- `cs` para el class store usuario
- `4D` para el class store integrado

### `cs`

<!-- REF #_command_.cs.Syntax -->**cs** : Object<!-- END REF -->

<!-- REF #_command_.cs.Params -->

| Parâmetro  | Tipo   |    | Descrição                                           |                  |
| ---------- | ------ | -- | --------------------------------------------------- | ---------------- |
| classStore | Object | <- | Class store de usuário para o projeto ou componente | <!-- END REF --> |

O comando `cs` <!-- REF #_command_.cs.Summary -->devolve a loja de classes de utilizadores para o projecto ou componente actual<!-- END REF -->. Ele retorna todas as classes de usuários [definidas](#class-definition) no projeto ou componente aberto. Por padrão, apenas as classes [ORDA do projeto](ORDA/ordaClasses.md) estão disponíveis.

#### Exemplo

Se quiser criar uma nova instância de um objecto de `myClass`:

```4d
$instance:=cs.myClass.new()
```

### `4D`

<!-- REF #_command_.4D.Syntax -->**4D** : Object <!-- END REF -->

<!-- REF #_command_.4D.Params -->

| Parâmetro  | Tipo   |    | Descrição      |                  |
| ---------- | ------ | -- | -------------- | ---------------- |
| classStore | Object | <- | Class store 4D | <!-- END REF --> |

O comando `4D` <!-- REF #_command_.4D.Summary -->retorna a classe store para as classes 4D incorporadas disponíveis<!-- END REF -->. Ele permite acesso a APIs específicas como [CryptoKey](API/CryptoKeyClass.md).

#### Exemplo

Se quiser criar uma nova chave na classe `CryptoKey`:

```4d
$key:=4D. CryptoKey.new(New object("type";"ECDSA";"curve";"prime256v1"))
```

## Objecto de classe

Quando uma classe é [definida](#class-definition) no projeto, ela é carregada no ambiente de linguagem 4D. Uma classe é um objeto em si, da classe ["Class" class](API/ClassClass.md). Um objecto classe tem as seguintes propriedades e função:

- [`name`](API/ClassClass.md#name) string
- objeto [`superclass`](API/ClassClass.md#superclass) (nulo se não tiver)
- [`new()`](API/ClassClass.md#new) função, permitindo instanciar objetos de classe
- Propriedade [`isShared`](API/ClassClass.md#isshared), true se a classe é [compartilhada](#classes-compartilhadas)
- Propriedade [`isSingleton`](API/ClassClass.md#issingleton), true se a classe define uma [singleton](#singleton-classes).
- Propriedade [`me`](API/ClassClass.md#me), permitindo instanciar e acessar [singletons](#singleton-classes).

Além disso, um objeto de classe pode fazer referência a um objeto [`construtor`](#class-constructor) (opcional).

Um objeto de classe em si é um [objeto compartilhado](shared.md) e, portanto, pode ser acessado de diferentes processos 4D simultaneamente.

### Herança

Se uma classe herda de outra classe (ou seja, a [palavra-chave Class extends](classes.md#class-extends-classname) é usada em sua definição), a classe pai é a sua [`superclasse`](API/ClassClass.md#superclass).

Quando o 4D não encontra uma função ou uma propriedade em uma classe, ele a procura em sua [`superclasse`](API/ClassClass.md#superclass); se não for encontrada, o 4D continua procurando na superclasse da superclasse e assim por diante até não haver mais superclasse (todos os objetos herdam da superclasse "Objeto").

## Palavras-chave de classe

As palavras-chave 4D específicas podem ser utilizadas nas definições de classes:

- `Função <Name>` para definir as funções de classe dos objetos.
- `Construtor da classe` para inicializar novos objetos da classe.
- `propriedade` para definir as propriedades estáticas dos objetos com um tipo.
- `Função get <Nome>` e `Função set <Nome>` para definir propriedades calculadas dos objetos.
- `Class extends <ClassName>` para definir a herança.

### `Function`

#### Sintaxe

```4d
{shared} Function <name>({$parameterName : type; ...}){->$parameterName : type}
// code
```

As funções de classe são propriedades específicas da classe. Eles são objetos da classe [4D.Function](API/FunctionClass.md). No arquivo de definição de classe, as declarações de funções usam a palavra-chave `Function` seguida pelo nome da função.

Se a função for declarada em uma [classe compartilhada](#shared-classes), você pode usar a palavra-chave `shared` para que a função possa ser chamada sem [`Use. .Finalizar estrutura`](shared.md#useend-use). Para obter mais informações, consulte o parágrafo [Shared functions](#shared-functions) abaixo.

O nome da função deve estar em conformidade com as [regras de nomenclatura de objetos](Concepts/identifiers.md#object-properties).

:::note

Como propriedades e funções compartilham o mesmo espaço de nomes, usar o mesmo nome para uma propriedade e uma função da mesma classe não é permitido (um erro é lançado nesse caso).

:::

:::tip

<strong x-id="1">Dica:</strong> Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D. Por exemplo, se você declarar `Function _myPrivateFunction` em `MyClass`, ela não será proposta no editor de código quando você digitar "cs.MyClass. "\`.

:::

Imediatamente seguindo o nome da função, [parameters](#parâmetros) para a função pode ser declarada com um nome e um tipo de dado atribuído, incluindo o parâmetro de retorno (opcional). Por exemplo:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

Dentro de uma função de classe, o comando `This` é usado como instância de objeto. Por exemplo:

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

Para uma função de classe, o comando `Nome do método atual` retorna: `<NomeDaClasse>.<NomeDaFunção>`, por exemplo "MinhaClasse.minhaFunção".

No código da aplicação, as funções de classe são chamadas como métodos membros das instâncias do objeto e podem receber [parâmetros](#parameters) se existirem. As seguintes sintaxes são suportadas:

- utilização do operador `()`. Por exemplo, `myObject.methodName("olá")`
- use of a "4D. Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Aviso de segurança de thread

Se uma função de classe não for thread-safe e for chamada por um método com o atributo "Pode ser executado num processo preemptivo":

- o compilador não gera qualquer erro (o que é diferente dos métodos normais),
- um erro é lançado por 4D apenas em tempo de execução.

:::

#### Parâmetros

Os parâmetros da função são declarados utilizando o nome do parâmetro e o tipo de parâmetro, separados por dois pontos. O nome do parâmetro deve estar em conformidade com as [regras de nomenclatura de propriedades](Concepts/identifiers.md#object-properties). Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

Se o tipo não for indicado, o parâmetro será definido como `Variant`.

:::

#### Valor retornado

Você declara o parâmetro de retorno (opcional) adicionando uma seta (`->`) e a definição do parâmetro de retorno após a lista de parâmetro(s) de entrada, ou dois pontos (`:`) e somente o tipo do parâmetro de retorno. Por exemplo:

```4d
Function add($x : Variant; $y : Integer)->$result : Integer
 $result:=$x+$y
```

Você também pode declarar o parâmetro de retorno adicionando apenas `: type` e usar a [`return expression`](parameters.md#return-expression) (ele também encerrará a execução da função). Por exemplo:

```4d
Function add($x : Variant; $y : Integer)-&gt;$result : Integer
```

#### Exemplo 1

```4d
property name : Text
property height; width : Integer

// Classe: Rectangle
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

Este exemplo utiliza a expressão [`return`](parameters.md#return-expression):

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

Uma função construtora de classe aceita [parâmetros](#parameters) opcionais e pode ser usada para criar e inicializar objetos da classe de usuário.

Quando você chama a função [`new()`](API/ClassClass.md#new), o construtor da classe é chamado com os parâmetros opcionalmente passados para a função `new()`.

Só pode haver uma função de construtor em uma classe (caso contrário um erro é retornado). Um construtor pode utilizar a palavra-chave [`Super`](#super) para chamar o construtor da superclasse.

É possível criar e digitar propriedades de instância dentro do construtor (ver exemplo). Em alternativa, se os valores das propriedades de instância não dependem dos parâmetros passados ao construtor, você pode defini-los usando a palavra-chave [`property`](#property).

Usando a palavra-chave `compartilhado` cria uma **classe compartilhada**, usada apenas para instanciar objetos compartilhados. Para obter mais informações, consulte o parágrafo [Shared functions](#shared-functions) abaixo.

Usar a palavra-chave `singleton` cria um **singleton**, usado para criar uma única instância. Para obter mais informações, consulte o parágrafo [classes do Singleton](#singleton-classes).

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

A palavra-chave `property` pode ser utilizada para declarar uma propriedade dentro de uma classe usuário. Uma propriedade de classe tem um nome e um tipo.

A declaração de propriedades de classe melhora as sugestões do editor de código, as funcionalidades de antecipação de tipos e a detecção de erros.

As propriedades são declaradas para novos objetos quando você chama a função [`new()`](API/ClassClass.md#new), no entanto elas não são automaticamente adicionadas aos objetos (elas são adicionadas apenas quando lhes é atribuído um valor).

:::note

Uma propriedade é adicionada automaticamente ao objeto quando é [inicializado na linha de declaração](#initializing-the-property-in-the-declaration-line).

:::

O nome do parâmetro deve estar em conformidade com as [regras de nomenclatura de propriedades](Concepts/identifiers.md#object-properties).

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

A palavra-chave `property` só pode ser utilizada em métodos de classe e fora de qualquer bloco `Function` ou `Class Constructor`.

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

property birthDate := !1988-09-29! //data é inferida
property fuzzy //variant
```

Quando você inicializa uma propriedade em sua linha de declaração, ela é adicionada ao objeto da classe após sua instanciação com a função [`new()`](API/ClassClass.md#new), mas antes que o construtor seja chamado.

Se uma classe [estende](#class-extends-classname) outra classe, as propriedades da classe pai são instanciadas antes das propriedades da classe filho.

:::note

If you initialize a property in its declaration line with an object or a collection in a [shared class](#shared-classes), the value is automatically transformed into a shared value:

```4d
// in a shared class
property myCollection := ["something"]
// myCollection will be a shared collection
// equivalent to:
myCollection := New shared collection("something")
```

:::

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

### `Função get` e `Function set`

#### Sintaxe

```4d
{shared} Function get <name>()->$result : type
// código
```

```4d
{shared} Function set <name>($parameterName : type)
// código
```

`Função obter` e `Função definir` são acessores que definem **propriedades computadas** na classe. Uma propriedade calculada é uma propriedade nomeada com um tipo de dados que oculta um cálculo. Quando um valor de propriedade computado é acessado, 4D substitui o código do acessor correspondente:

- quando a propriedade é lida, a `função obter` é executada,
- quando a propriedade é escrita, o `conjunto de função` é executado.

Se a propriedade não for acedida, o código nunca é executado.

As propriedades computadas são concebidas para tratar dados que não precisam de ser guardados na memória. São geralmente baseados em propriedades persistentes. Por exemplo, se um objeto de classe contiver como propriedade persistente o _preço bruto_ e a _taxa de IVA_, o _preço líquido_ poderia ser tratado por uma propriedade calculada.

No arquivo de definição de classe, as declarações de propriedade computadas usam as palavras-chave `Função` (a _getter_) e `Function set` (as _setter_), seguido pelo nome da propriedade. O nome deve estar em conformidade com as [regras de nomenclatura de propriedades](Concepts/identifiers.md#object-properties).

`A função get` devolve um valor do tipo de propriedade e `A função set` recebe um parâmetro do tipo de propriedade. Ambos os argumentos devem estar em conformidade com os [parâmetros de função] padrão (#parâmetros).

Quando ambas as funções são definidas, a propriedade computada é **read-write**. Se apenas uma `Function get` for definida, a propriedade computada será **somente leitura**. Neste caso, é devolvido um erro se o código tentar modificar a propriedade. Se apenas um `Function set` estiver definido, 4D devolve _undefined_ quando a propriedade é lida.

Se as funções forem declaradas em uma [classe compartilhada](#shared-class-constructor), você pode usar a palavra-chave `shared` com elas para que elas possam ser chamadas sem [`Use. .Finalizar estrutura`](shared.md#useend-use). Para obter mais informações, consulte o parágrafo [Shared functions](#shared-functions) abaixo.

O tipo da propriedade calculada é definido pela declaração de tipo `$return` do _getter_. Pode ser de qualquer [tipo de propriedade válida](dt_object.md).

> A atribuição de _undefined_ a uma propriedade de objeto apaga seu valor enquanto preserva seu tipo. Para fazer isso, a `Function get` é chamada primeiro para recuperar o tipo de valor, em seguida, a `Function set` é chamada com um valor vazio desse tipo.

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
// Classe: ChildClass
Classe estende <ParentClass>
```

A palavra-chave `Class extends` é usada na declaração de classe para criar uma classe de usuário que é filho de outra classe de usuário. A classe filha herda todas as funções da classe mãe.

A extensão de classe deve respeitar as seguintes regras:

- Uma classe de usuário não pode estender uma classe embutida (exceto 4D.Object e [classes ORDA](../ORDA/ordaClasses.md) que são estendidas por padrão para classes de usuário).
- Uma classe de usuário não pode estender uma classe de usuário de outro projeto ou componente.
- Uma classe usuário não se pode estender a si própria.
- Não é possível estender classes de forma circular (ou seja, "a" estende "b" que estende "a").
- Não é possível definir uma [classe de usuário compartilhado](#shared-classes) estendida de uma classe de usuário não compartilhada.

A violação de uma regra deste tipo não é detectada pelo editor de código ou pelo interpretador, apenas o compilador e `check syntax` emitirão um erro neste caso.

Uma classe estendida pode chamar o construtor da sua classe pai usando o comando [`Super`](#super).

#### Exemplo

Este exemplo cria uma classe chamada `Square` a partir de uma classe chamada `Polygon`.

```4d
//Class: Square

/path: Classes/Square. dm

Classe estende o construtor Polygon

Classe ($side : Integer)

 // Ele chama o construtor da classe pai com comprimentos
 // fornecido para a largura e a altura
 Super($side;$side)
 // Em classes derivadas, Super deve ser chamado antes de você
 // pode usar 'Isso'
 Isso. ame:="Quadrado"



 Função getArea() -> $area : Integer
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

A palavra-chave `Super` <!-- REF #_command_.Super.Summary -->permite chamadas à `superclasse`, ou seja, a classe pai<!-- END REF -->.

`Super` tem dois objectivos diferentes:

1. Dentro de um [código de construtor](#class-constructor), `Super` é um comando que permite chamar o construtor da superclasse. Quando usado em um construtor, o comando `Super` aparece sozinho e deve ser usado antes que a palavra-chave `This` seja usada.

- Se todos os construtores de classe na árvore de herança não forem correctamente chamados, é gerado o erro -10748. É o programador 4D que se certifica de que as chamadas são válidas.
- Se o comando `This` for chamado em um objeto cujas superclasses não foram construídas, o erro -10743 será gerado.
- Se o `Super` é chamado fora do escopo do objeto, ou em um objeto cujo construtor de superclasse já foi chamado, erro -10746 é gerado.

```4d
// dentro do construtor myClass
var $text1; $text2 : Text
Super($text1) //chama o construtor da superclasse com um parâmetro de texto
This.param:=$text2 // usa o segundo parâmetro
```

2. Dentro de uma [função de membro da classe](#função-de-classe), `Super` designa o protótipo da superclasse e permite chamar uma função da hierarquia da superclasse.

```4d
Super.doSomething(42) //chamada a função "doSomething"  
//declarada em superclasses
```

#### Exemplo 1

Este exemplo ilustra o uso do `Super` em um construtor de classe. O comando é chamado para evitar duplicar as partes do construtor que são comuns entre as classes `Rectangle` e `Square`.

```4d
// Classe: Retângulo
Class constructor($width : Integer; $height : Integer)
 Isso. ame:="Retângulo"
 Isso.height:=$height
 Isso. idth:=$width


Função diz: Name()
 ALERT("Oi, eu sou um "+This.name+". )

// Definição de função
função getArea()
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

Este exemplo ilustra a utilização de `Super` em um método de membro da classe. Você criou a classe `Rectangle` com uma função:

```4d
//Classe: Rectângulo

Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

Você também criou a classe `Square` com uma função que chama a função da superclasse:

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

A palavra-chave `Isso` <!-- REF #_command_.This.Summary -->retorna uma referência ao objeto processado <!-- FIM REF -->.

Na maioria dos casos, o valor de `Isso` é determinado pela forma como uma função é chamada. Não pode ser definido por atribuição durante a execução e pode ser diferente de cada vez que a função é chamada.

Quando um [formula](../API/FunctionClass.md) é chamado como método de membro de um objeto, seu `Isso` está configurado para o objeto no qual o método é chamado. Por exemplo:

```4d
$o:=New object("prop";42;"f";Formula(This.prop))
$val:=$o.f() //42
```

Quando uma função [construtor de classe](#class-constructor) é usada (com a [`new()`](API/ClassClass.md#new)), sua `This` estará ligada ao novo objeto que está sendo construído.

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

> Quando chamar o construtor da superclasse num construtor utilizando a palavra-chave Super , esteja atento que This não deve ser chamado antes do construtor da superclasse, caso contrário é gerado um erro. Veja [este exemplo](#exemplo-1).

Em qualquer caso, `This` refere-se ao objeto em que o método foi chamado, como se o método estivesse no objeto.

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

Neste exemplo, o objeto atribuído à variável $o não tem sua própria propriedade _f_, herda-o de sua classe. Uma vez que _f_ é chamado como um método de $o, o seu `This` refere-se a $o.

## Comandos de classe

Vários comandos da linguagem 4D permitem-lhe lidar com funcionalidades de classe.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` retorna a classe do objeto passada no parâmetro.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance de` retorna `true` se `object` pertence a `class` ou a uma das suas classes herdadas, e `false` caso contrário.

## Classes compartilhadas

Você pode criar **classes compartilhadas**. Uma classe compartilhada é uma classe de usuário que instaura um [objeto compartilhado](shared.md) quando a função [`new()`](../API/ClassClass.md#new) é chamada na classe. Uma classe compartilhada só pode criar objetos compartilhados.

Classes compartilhadas também suportam **funções compartilhadas** que podem ser chamadas sem [`Use...End use`](shared.md#useend-use).

O [`.isShared`](../API/ClassClass.md#isshared) propriedade de objetos de Classe permite saber se a classe é compartilhada.

:::info

- Uma classe [inheriting](#class-extends-classname) de uma classe não compartilhada não pode ser definida como compartilhada.
- Classes compartilhadas não são suportadas por [classes baseadas em ORDA](../ORDA/ordaClasses.md).

:::

### Criação de uma classe compartilhada

Para criar uma classe compartilhada, adicione a palavra-chave `shared` antes do [Construtor de Classe](#class-constructor). Por exemplo:

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

Se uma função definida dentro de uma classe compartilhada modificar objetos da classe, ela deve chamar [`Use. .Fim de uso`](shared.md#useend-use) estrutura para proteger o acesso aos objetos compartilhados. No entanto, para simplificar o código, você pode definir a função como **compartilhada** para que ela acione automaticamente o uso interno `Use...End use` quando executado.

Para criar uma função compartilhada, adicione a palavra-chave `shared` antes da palavra-chave [Function](#function) em uma classe compartilhada. Por exemplo:

```4d
//classe compartilhada Foo
shared Class Constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //não é necessário chamar use/end use
```

:::note

Se a palavra-chave da função `shared` for usada em uma classe de usuário não compartilhada, ela será ignorada.

:::

## Classes Singleton

Uma **classe singleton** é uma classe de usuário que produz apenas uma única instância. Para más información sobre los singletons, por favor consulte la [página Wikipedia sobre los singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

A classe singleton é instanciada na primeira chamada da propriedade [`cs.<class>.me`](../API/ClassClass.md#me). A classe singleton instanciada é então sempre retornada quando a propriedade [`me`](../API/ClassClass.md#me) é usada.

Se você precisar instanciar um singleton com parâmetros, você também pode chamar a função [`new()`](../API/ClassClass.md#new). Nesse caso, é recomendado instanciar o singleton em algum código executado no início da aplicação.

O escopo de uma instância singleton pode ser o processo atual ou todos os processos. A singleton has a unique value for the process in which it is instantiated, while a _shared_ singleton has a unique value for all processes of the application. Singletons são úteis para definir valores que precisam estar disponíveis em qualquer lugar em um aplicativo ou processo.

Once instantiated, a singleton class (and its singleton) exists as long as a reference to it exists somewhere in the application.

O [`.isSingleton`](../API/ClassClass.md#issingleton) propriedade de objetos de classe permite saber se a classe é uma singleton.

:::info

As classes Singleton não são suportadas por [classes baseadas em ORDA](../ORDA/ordaClasses.md).

:::

### Creating a singleton

To create a singleton class, add the `singleton` keyword before [`Class Constructor`](#class-constructor). Por exemplo:

```4d
	//class: ProcessTag
singleton Class Constructor()
 This.tag:=Random
```

To use the singleton:

```4d
	//em um processo
var $mySingleton := cs.ProcessTag.me //Primeira instância
	//$mySingleton.tag = 5425 por exemplo  
...  
var $myOtherSingleton := cs.ProcessTag.me
	//$myOtherSingleton.tag = 5425

```

```4d
	//em outro processo
var $mySingleton := cs.ProcessTag.me //Primeira instância
	//$mySingleton.tag = 14856 por exemplo  
...  
var $myOtherSingleton := cs.ProcessTag.me  
	//$myOtherSingleton.tag = 14856
```

### Creating a shared singleton

To create a singleton shared by all processes of the application, add the `shared singleton` keywords before the [Class Constructor](#class-constructor). Por exemplo:

```4d
//Class VehicleFactory

property vehicleBuilt : Integer

shared singleton Class constructor()
  This.vehicleBuilt := 0 //Número de veículos feitos pela fábrica

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

Você pode então chamar o **cs.VehicleFactory** singleton para obter um novo veículo de qualquer lugar em sua aplicação com uma única linha:

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("caminhão")
```

Como a função _buildVehicle()_ modifica o singleton **cs.VehicleFactory** (ao incrementar `This.vehicleBuilt`) você precisa adicionar a palavra-chave `shared` a ela.

#### Veja também

Veja também [este post de blog](https://blog.4d.com/singleton) para mais detalhes.
