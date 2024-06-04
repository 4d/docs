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

### Utilização da interface 4D

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

## Objeto da classe

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

<strong x-id="1">Dica:</strong> Começar o nome da função com um caractere de sublinhado ("_") excluirá a função dos recursos de preenchimento automático no editor de código 4D. Por ejemplo, si declara `Function _myPrivateFunction` en `MyClass`, no se propondrá en el editor de código cuando digite en `"cs.MyClass. "`.

:::

Inmediatamente después del nombre de la función, los [parámetros](#parameters) de la función se pueden declarar con un nombre y un tipo de datos asignados, incluido el parámetro de retorno (opcional). Por exemplo:

```4d
Function computeArea($width : Integer; $height : Integer)->$area : Integer
```

En una función de clase, el comando `This` se utiliza como instancia del objeto. Por exemplo:

```4d
Function setFullname($firstname : Text; $lastname : Text)
 This.firstName:=$firstname
 This.lastName:=$lastname

Function getFullname()->$fullname : Text
 $fullname:=This.firstName+" "+Uppercase(This.lastName)
```

Para una función clase, el comando `Current method name` devuelve: `<ClassName>.<FunctionName>`, por ejemplo "MyClass.myFunction".

En el código de la aplicación, las funciones de clases se llaman como los métodos miembros de las instancias de objetos y pueden recibir [parámetros](#parameters) si los hay. As seguintes sintaxes são suportadas:

- utilización del operador `()`. Por ejemplo, `myObject.methodName("hello")`
- use of a "4D. Function" class member method:
  - [`apply()`](API/FunctionClass.md#apply)
  - [`call()`](API/FunctionClass.md#call)

:::warning Thread-safety warning

Se uma função de classe não for thread-safe e for chamada por um método com o atributo "Pode ser executado num processo preemptivo":

- o compilador não gera qualquer erro (o que é diferente dos métodos normais),
- um erro é lançado por 4D apenas em tempo de execução.

:::

#### Parâmetros

Os parâmetros da função são declarados utilizando o nome do parâmetro e o tipo de parâmetro, separados por dois pontos. El nombre del parámetro debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties). Os parâmetros (e tipos) múltiplos são separados por ponto e vírgula (;).

```4d
Function add($x; $y : Variant; $z : Integer; $xy : Object)
```

:::note

Si no se declaró el tipo, el parámetro se definirá como `Variant`.

:::

#### Valor retornado

Se declara el parámetro de retorno (opcional) añadiendo una flecha (`->`) y la definición del parámetro de retorno después de la lista de parámetros de entrada, o dos puntos (`:`) y el tipo de parámetro de retorno únicamente. Por exemplo:

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

Una función constructora de clase acepta [parámetros](#parameters) opcionales y puede ser utilizada para crear e inicializar objetos de la clase del usuario.

When you call the [`new()`](API/ClassClass.md#new) function, the class constructor is called with the parameters optionally passed to the `new()` function.

Só pode haver uma função de construtor em uma classe (caso contrário um erro é retornado). A constructor can use the [`Super`](#super) keyword to call the constructor of the super class.

É possível criar e digitar propriedades de instância dentro do construtor (ver exemplo). Alternatively, if your instance properties' values do not depend on parameters passed to the constructor, you can define them using the [`property`](#property) keyword.

Utilizando la palabra clave `shared` se crea una **clase compartida**, utilizada para instanciar únicamente objetos compartidos. Para obtener más información, consulte el párrafo [Clases compartidas](#shared-classes).

Utilizando la palabra clave `singleton` se crea un **singleton**, utilizado para crear una única instancia. Para obtener más información, consulte el párrafo [Clases singleton](#singleton-classes).

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

La palabra clave`property` se puede utilizar para declarar una propiedad dentro de una clase usuario. Uma propriedade de classe tem um nome e um tipo.

A declaração de propriedades de classe melhora as sugestões do editor de código, as funcionalidades de antecipação de tipos e a detecção de erros.

Properties are declared for new objects when you call the [`new()`](API/ClassClass.md#new) function, however they are not automatically added to objects (they are only added when they are assigned a value).

:::note

Una propiedad se añade automáticamente al objeto cuando se [inicializa en la línea de declaración](#initializing-the-property-in-the-declaration-line).

:::

Los nombres de las propiedades deben cumplir [las normas de denominación de propiedades](Concepts/identifiers.md#object-properties).

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

La palabra clave `property` sólo puede utilizarse en métodos clase y fuera de cualquier bloque `Function` o `Class Constructor`.

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

Si una clase [extiende a](#class-extends-classname) otra, las propiedades de la clase padre se instancian antes que las propiedades de la clase hija.

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

### `Function get` y `Function set`

#### Sintaxe

```4d
{shared} Function get <name>()->$result : type
// código
```

```4d
{shared} Function set <name>($parameterName : type)
// código
```

`Function get` y `Function set` son accesos que definen las **propiedades calculadas** en la clase. Uma propriedade calculada é uma propriedade nomeada com um tipo de dados que oculta um cálculo. Quando um valor de propriedade computado é acessado, 4D substitui o código do acessor correspondente:

- cuando se lee la propiedad, `Function get` se ejecuta,
- cuando se escribe la propiedad, `Function get` se ejecuta.

Se a propriedade não for acedida, o código nunca é executado.

As propriedades computadas são concebidas para tratar dados que não precisam de ser guardados na memória. São geralmente baseados em propriedades persistentes. For example, if a class object contains as persistent property the _gross price_ and the _VAT rate_, the _net price_ could be handled by a computed property.</p><p spaces-before="0" line-breaks-before="2">In the class definition file, computed property 

En el archivo de definición de la clase, las declaraciones de propiedades calculadas utilizan las palabras claves `Function get` (_getter_) y `Function set` (_setter_) seguido por el nombre de la propiedad. El nombre debe cumplir con las [reglas de nomenclatura de las propiedades](Concepts/identifiers.md#object-properties).

`Función get` devuelve un valor del tipo de la propiedad y `Function set` toma un parámetro del tipo de la propiedad. Ambos argumentos deben cumplir con los [parámetros de función](#parameters) estándar.

Cuando ambas funciones están definidas, la propiedad calculada es **read-write**. Si solo se define una `Function get`, la propiedad calculada es **de solo lectura**. Neste caso, é devolvido um erro se o código tentar modificar a propriedade. Se apenas um `Function set` estiver definido, 4D devolve _undefined_ quando a propriedade é lida.

If the functions are declared in a [shared class](#shared-class-constructor), you can use the `shared` keyword with them so that they could be called without [`Use...End use` structure](shared.md#useend-use). Para obter mais informações, consulte o parágrafo [Shared functions](#shared-functions) abaixo.

El tipo de la propiedad calculada es definido por la declaración de tipo `$return` del \*getter \*. Puede ser de cualquier [tipo de propiedad válido](dt_object.md).

> Asignar _undefined_ a una propiedad de objeto limpia su valor mientras se preserva su tipo. Para ello, la `Function get` es llamada primero para recuperar el tipo de valor, luego `Function set` es llamado con un valor vacío de ese tipo.

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
// Class hijo
Class extends <ParentClass>
```

La palabra clave `Class extends` se utiliza en la declaración de clase para crear una clase usuario que es hijo de otra clase usuario. A classe filha herda todas as funções da classe mãe.

A extensão de classe deve respeitar as seguintes regras:

- Una clase de usuario no puede extender una clase integrada (excepto las 4D.Object y [clases ORDA](../ORDA/ordaClasses.md) que se extienden por defecto para las clases de usuario).
- Uma classe de usuário não pode estender uma classe de usuário de outro projeto ou componente.
- Uma classe usuário não se pode estender a si própria.
- Não é possível estender classes de forma circular (ou seja, "a" estende "b" que estende "a").
- No es posible definir una [clase usuario compartida](#shared-classes) extendida a partir de una clase usuario no compartida.

La ruptura de tal regla no es detectada por el editor de código o el intérprete, solo el compilador y `comprobar sintaxis` arrojará un error en este caso.

An extended class can call the constructor of its parent class using the [`Super`](#super) command.

#### Exemplo

Este ejemplo crea una clase llamada `Square` de una clase llamada `Polygon`.

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

`Super` tiene dos propósitos diferentes:

1. Dentro de un código [constructor](#class-constructor), `Super` es un comando que permite llamar al constructor de la superclase. Cuando se utiliza en un constructor, el comando `Super` aparece solo y debe ser usado antes de usar la palabra clave `This`.

- Se todos os construtores de classe na árvore de herança não forem correctamente chamados, é gerado o erro -10748. É o programador 4D que se certifica de que as chamadas são válidas.
- Si el comando `This` es llamado en un objeto cuyas superclases no han sido construidas, se genera el error -10743.
- Si se llama a `Super` fuera de un contexto de objeto, o en un objeto cuyo constructor de superclase ya ha sido llamado, se genera el error -10746.

```4d
// dentro do construtor myClass
var $text1; $text2 : Text
Super($text1) //chama o construtor da superclasse com um parâmetro de texto
This.param:=$text2 // usa o segundo parâmetro
```

2. Dentro de una [función de clase](#class-function), `Super` designa el prototipo de la superclase y permite llamar a una función de la jerarquía de superclases.

```4d
Super.doSomething(42) //chamada a função "doSomething"  
//declarada em superclasses
```

#### Exemplo 1

Este ejemplo ilustra el uso de `Super` en un class constructor. El comando es llamado para evitar duplicar las partes del constructor que son comunes entre las clases `Rectangle` y `Square`.

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

Este ejemplo ilustra el uso de `Super` en un método miembro clase. Ha creado la clase `Rectangle` con una función:

```4d
//Classe: Rectângulo

Function nbSides()
 var $0 : Text
 $0:="I have 4 sides"
```

También creó la clase `Square` con una función que llama a la función superclase:

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

En la mayoría de los casos, el valor de `This` está determinado por cómo se llama una función. Não pode ser definido por atribuição durante a execução e pode ser diferente de cada vez que a função é chamada.

Cuando se llama a una [fórmula](../API/FunctionClass.md) como método miembro de un objeto, su `This` se define en el objeto sobre el que se llama al método. Por exemplo:

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

> Al llamar a la superclase del constructor en un constructor utilizando la palabra clave [Super](#super), tenga en cuenta que `This` no debe ser llamado antes del constructor de la superclase, de lo contrario se genera un error. Ver [este ejemplo](#example-1).

En todos los casos, `This` se refiere al objeto sobre el que se ha llamado el método, como si el método fuera una función del objeto.

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

En este ejemplo, el objeto asignado a la variable $o no tiene su propia propiedad _f_, la hereda de su clase. Como _f_ es llamado como un método de $o, su `This` se refiere a $o.

## Comandos de classe

Vários comandos da linguagem 4D permitem-lhe lidar com funcionalidades de classe.

### `OB Class`

#### `OB Class ( object ) -> Object | Null`

`OB Class` devuelve la clase del objeto pasado como parámetro.

### `OB Instance of`

#### `OB Instance of ( object ; class ) -> Boolean`

`OB Instance of` devuelve `true` si `object` pertenece a la `class` o a una de las clases heredadas y `false` de lo contrario.

## Classes compartilhadas

Puede crear **clases compartidas**. A shared class is a user class that instantiates a [shared object](shared.md) when the [`new()`](../API/ClassClass.md#new) function is called on the class. Uma classe compartilhada só pode criar objetos compartilhados.

Shared classes also support **shared functions** that can be called without [`Use...End use`](shared.md#useend-use) structures.

The [`.isShared`](../API/ClassClass.md#isshared) property of Class objects allows to know if the class is shared.

:::info

- Una clase [que hereda](#class-extends-classname) de una clase no compartida no puede definirse como compartida.
- Las clases compartidas no están soportadas por las [clases basadas en ORDA](../ORDA/ordaClasses.md).

:::

### Criação de uma classe compartilhada

Para crear una clase compartida, añada la palabra clave `shared` antes del [Class Constructor](#class-constructor). Por exemplo:

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

If a function defined inside a shared class modifies objects of the class, it should call [`Use...End use`](shared.md#useend-use) structure to protect access to the shared objects. Sin embargo, para simplificar el código, puede definir la función como **compartida**, de modo que active automáticamente un `Use...End use` interno cuando se ejecute.

Para crear una función compartida, añada la palabra clave `shared` antes de la palabra clave [Function](#function) en una clase compartida. Por exemplo:

```4d
	//shared class Foo
shared Class Constructor()
  This.variable:=1

shared Function Bar($value : Integer)
  This.variable:=$value //no need to call use/end use
```

:::note

Si se utiliza la palabra clave `shared` en una clase usuario no compartida, se ignora.

:::

## Classes Singleton

Una **clase singleton** es una clase usuario que sólo produce una única instancia. Para más información sobre los singletons, por favor consulte la [página Wikipedia sobre los singletons](https://en.wikipedia.org/wiki/Singleton_pattern).

The class singleton is instantiated at the first call of the [`cs.<class>.me`](../API/ClassClass.md#me) property. The instantiated class singleton is then always returned when the [`me`](../API/ClassClass.md#me) property is used.

If you need to instantiate a singleton with parameters, you can also call the [`new()`](../API/ClassClass.md#new) function. Nesse caso, é recomendado instanciar o singleton em algum código executado no início da aplicação.

O escopo de uma instância singleton pode ser o processo atual ou todos os processos. Un singleton _process_ tiene un valor único para el proceso en el que se instancia, mientras que un singleton _interprocess_ tiene un valor único para todos los procesos de la aplicación. Singletons são úteis para definir valores que precisam estar disponíveis em qualquer lugar em um aplicativo ou processo.

Once instantiated, a singleton class (and its singleton) exists as long as a reference to it exists somewhere in the application.

The [`.isSingleton`](../API/ClassClass.md#issingleton) property of Class objects allows to know if the class is a singleton.

:::info

Las clases Singleton no están soportadas por las [clases ORDA](../ORDA/ordaClasses.md).

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

Para crear un singleton interprocess, añada las palabras claves `shared singleton` antes del [Class Constructor](#class-constructor). Por exemplo:

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

Luego puede llamar al singleton **cs.VehicleFactory** para obtener un nuevo vehículo desde cualquier lugar de su aplicación con una sola línea:

```4d
$vehicle:=cs.VehicleFactory.me.buildVehicle("caminhão")
```

Dado que la función _buildVehicle()_ modifica el singleton **cs.VehicleFactory** (incrementando `This.vehicleBuilt`), debe agregar la palabra clave `shared`.

#### Veja também

Ver también [esta entrada de blog](https://blog.4d.com/singleton) para más detalles.
