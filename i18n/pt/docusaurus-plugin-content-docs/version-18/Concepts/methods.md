---
id: methods
title: Página Métodos
---


Um método é basicamente um pedaço de código que executa uma ou várias ações. Na linguagem 4D, há duas categorias de métodos:

- **built-in methods**, which are provided by 4D or third-party developers and can be only called in your code. Os métodos incorporados incluem:
    - Commands and functions of the 4D API, such as `ALERT` or `Current date`.
    - Methods attached to collections or native objects, such as `collection.orderBy()` or `entity.save()`.
    - Commands from plug-ins or components, provided by 4D or third-party developers, such as `SVG_New_arc`.

    Built-in methods are detailed in the *4D Language reference* manual or dedicated manuals for plug-ins or components.

- **project methods**, where you can write your own code to execute any custom actions. Once a project method is created, it becomes part of the language of the database in which you create it. A project method is composed of statements; each statement consists of one line in the method. Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Although a statement is always one line, that one line can be as long as needed (up to 32,000 characters, which is probably enough for most tasks). The maximum size of a project method is limited to 2 GB of text or 32,000 lines of command.

**Note:** 4D also provides specific methods that are automatically executed depending on database or form events. Ver [Métodos especializados](#specialized-methods).


## Métodos projeto recursivos

Um método de projecto pode ter uma das seguintes funções, dependendo de como é executado e utilizado:

- Sub-rotina e função
- Método ligado ao objeto
- Método do menu
- Método de gerenciamento de processos
- Método de captura de eventos ou erros

### Sub-rotinas e funções
Uma sub-rotina é um método de projecto que pode ser pensado como um servo. Executa as tarefas que outros métodos lhe pedem para executar. Uma função é uma sub-rotina que devolve um valor ao método que a chamou.

When you create a project method, it becomes part of the language of the database in which you create it. You can then call the project method from other project methods, or from [predefined methods](#specialized-methods) in the same way that you call 4D’s built-in commands. Um método de projecto utilizado desta forma é chamado de sub-rotina.

Utiliza sub-rotinas para:

- Reduzir a codificação repetitiva
- Esclareça os seus métodos
- Facilitar mudanças nos seus métodos
- Modularize o seu código

Por exemplo, digamos que você tenha um banco de dados de clientes. As you customize the database, you find that there are some tasks that you perform repeatedly, such as finding a customer and modifying his or her record. O código para fazer isso  parece-se com o seguinte:

```4d
  // Procure um cliente
 QUERY BY EXAMPLE([Customers])
  // Selecione o formulário de entrada
 FORMULÁRIO DE ENTRADA([Customers]; "Data Entry")
  // Modifique o registo do cliente
 MODIFY RECORD([Customers])
```

Se não utilizar sub-rotinas, terá de escrever o código cada vez que quiser modificar o registo de um cliente. If there are ten places in your custom database where you need to do this, you will have to write the code ten times. Se utilizar sub-rotinas, só terá de o escrever uma vez. Esta é a primeira vantagem das sub-rotinas - reduzir a quantidade de código.

If the previously described code was a method called `MODIFY CUSTOMER`, you would execute it simply by using the name of the method in another method. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este método:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

Esta capacidade simplifica dramaticamente os seus métodos. In the example, you do not need to know how the `MODIFY CUSTOMER` method works, just what it does. Esta é a segunda razão para a utilização de sub-rotinas para esclarecer os seus métodos. Desta forma, os seus métodos tornam-se extensões à linguagem 4D.

If you need to change your method of finding customers in this example database, you will need to change only one method, not ten. Este é o próximo motivo para utilizar sub-rotinas para facilitar mudanças nos seus métodos.

Usando sub-rotinas, você torna o seu código modular. Isto significa simplesmente a divisão do seu código em módulos (sub-rotinas), cada um dos quais executa uma tarefa lógica. Considere o seguinte código de um banco de dados de uma conta-corrente:

```4d
 FIND CLEARED CHECKS ` Find the cleared checks
 RECONCILE ACCOUNT ` Reconcile the account
 PRINT CHECK BOOK REPORT ` Print a checkbook report
```

Even for someone who doesn’t know the database, it is clear what this code does. Não é necessário examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas operações complexas, mas aqui é apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu código em tarefas lógicas, ou módulos, sempre que possível.

### Métodos associados aos objetos

Pode encapsular os seus métodos de projeto em **fórmula** objectos e chamá-los dos seus objectos.

Os comandos `Formula` ou `Formula from string` permitem-lhe criar objectos de fórmula nativa que pode encapsular em propriedades de objectos. Permite-lhe implementar métodos de objectos personalizados.

To execute a method stored in an object property, use the **( )** operator after the property name. Por exemplo:

```4d
//myAlert ALERT("Hello world!")
```
Pode encapsular `fullName` num objecto:
```4d
C_OBJECT($o)
$o:=New object("custom_Alert";Formula(myAlert))
$o.custom_Alert() //displays "Hello world!"
```

Também se admite a sintaxe com parênteses:

```4d
$o["custom_Alert"]() //exibe "Hello world!"
```

Pode também [passar parâmetros](Concepts/parameters.md) à sua fórmula quando lhe chamar utilizando $1, $2… , tal como nos métodos de projecto 4D:

```4d
//fullName method C_TEXT($0;$1;$2)
$0:=$1+" "+$2
```
Depois `myAlert` pode ser encapsulado em qualquer objecto e chamado:
```4d
C_OBJECT($o)
$o:=New object("full_name";Formula(fullName))
$result:=$o.full_name("John"; "Smith")
//$result = "John Smith"
// equivalente a $result:=fullName("param1"; "param2")
```
Combinado com a função`This`, tais métodos de objectos permitem escrever um poderoso código genérico. Por exemplo:

```4d
//fullName2 method C_TEXT($0)
$0:=This.firstName+" "+This.lastName
```
Então o método atua como um novo atributo calculado que pode ser adicionado a outros atributos:

```4d
C_OBJECT($o)
$o:=New object("firstName"; "Jim"; "lastName"; "Wesson")
$o.fullName:=Formula(fullName2) //adicionar o método  

$result:=$o.fullName() 
//$result = "Jim Wesson"
```



Note that, even if it does not have parameters, an object method to be executed must be called with ( ) parenthesis. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
$o:=$f.message //devolve o objeto fórmula em $o
```

### Métodos do menu
Um método de menu é invocado quando se selecciona o comando do menu personalizado ao qual está anexado. Atribui-se o método ao comando menu usando o editor de menu ou um comando do tema "Menus". O método executa-se quando o comando do menu é escolhido. Esse processo é um dos principais aspectos da personalização de um banco de dados. By creating custom menus with menu methods that perform specific actions, you personalize your database.

Os comandos personalizados do menu podem causar a realização de uma ou mais actividades. Por exemplo, um comando de menu para introduzir registos pode chamar um método que executa duas tarefas: exibir o formulário de introdução apropriado, e chamar o comando `ADD RECORD` até que o usuário cancele a atividade de introdução de dados.

A automatização de sequências de actividades é uma capacidade muito poderosa da linguagem de programação. Using custom menus, you can automate task sequences and thus provide more guidance to users of the database.


### Métodos Processo

Um **método de processo** é um método de projecto que é chamado quando um processo é iniciado. O processo dura apenas enquanto o método do processo continuar a ser executado, excepto se for um processo de Worker. Note-se que um método de menu anexado a um comando de menu com a propriedade *Start a New Process*  é também o método de processo para o processo recentemente iniciado.

### Métodos de captura de eventos e erros
Um **método de captação de eventos** decorre num processo separado como método de captação de eventos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdução de dados, 4D detecta toques no teclado e cliques, depois chama os métodos corretos de objetos e formulários para que possa responder adequadamente aos eventos a partir destes métodos. Para mais informações, ver a descrição do comando `ON EVENT CALL`.

Um **método de apanhar erros** é um método de projecto baseado na interrupção. Each time an error or an exception occurs, it executes within the process in which it was installed. For more information, see the description of the command `ON ERR CALL`.

## Métodos associados aos objetos

Os métodos de projecto podem chamar-se a si próprios. Por exemplo:

- O método A pode chamar o método B que pode chamar A, por isso A chamará novamente B e assim por diante.
- Um método pode chamar-se a si próprio.

A isto chama-se recorrência. A linguagem 4D suporta plenamente a recorrência.

Aqui um exemplo simples. Digamos que tem uma tabela `[Amigos e Parentes]` composta por este conjunto de campos extremamente simplificado:
- `[Friends and Relatives]Name`
- `[Friends and Relatives]ChildrensName`

Para este exemplo, assumimos que os valores nos campos são únicos (não há duas pessoas com o mesmo nome). Dado um nome, quer construir a frase "Um amigo meu, João que é o filho de Paulo que é o filho de Jane que é o filho de Robert que é o filho de Eleanor, faz isto para viver":

1. Pode construir a frase desta forma:

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

2. Também se pode construir desta forma:

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
    End if
 End if
```

com a função recursiva `Genealogia de` listada aqui:

```4d
  ` Método projecto Genealogia do 
  ` Genealogia de ( String ) -> Text
  ` Genealogia de ( Nome ) -> Parte de frase

 $0:=$1
 QUERY([Friends and Relatives];[Friends and Relatives]ChildrensName=$1)
 If(Records in selection([Friends and Relatives])>0)
    $0:=$0+" who is the child of "+Genealogy of([Friends and Relatives]Name)
 End if
```

Note-se o `Genealogia do método` que se autodenomina.

A primeira forma é um **algoritmo iterativo**. A segunda via é um **algoritmo recursivo**.

Ao implementar código para casos como o exemplo anterior, é importante notar que é sempre possível escrever métodos usando iteração ou recursividade. Tipicamente, a recursão fornece um código mais conciso, legível e de fácil manutenção, mas a sua utilização não é obrigatória.

Alguns usos típicos da recursividade em 4D são:

- Tratar os registos dentro de tabelas que se relacionam entre si da mesma forma que no exemplo.
- Navegar documentos e pastas no seu disco, utilizando os comandos `FOLDER LIST` e `DOCUMENT LIST`. Uma pasta pode conter pastas e documentos, as próprias subpastas podem conter pastas e documentos, e assim por diante.

**Importante:** As chamadas recursivas devem sempre terminar em algum momento. No exemplo, o método `Genealogia de` deixa de se chamar a si próprio quando a consulta não devolve registos. Sem este teste de condição, o método chamar-se-ia indefinidamente; eventualmente, 4D retornaria um erro "Stack Full" porque deixaria de ter espaço para "empilhar" as chamadas (bem como os parâmetros e variáveis locais utilizados no método).


## Métodos especializados {#specialized-methods}

In addition to generic **project methods**, 4D supports several specific method types, that are automatically called depending on events:

| Tipo                          | Contexto de chamada                                                                         | Aceita parâmetros  | Descrição                                                                                                                                                                                         |
| ----------------------------- | ------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Método objecto (widget)**   | Automático, quando um evento envolve a forma a que o método está ligado                     | Não                | Propriedade de um objecto de formulário (também chamado widget)                                                                                                                                   |
| **Método formulário**         | Automático, quando um evento envolve o objecto ao qual o método está ligado                 | Não                | Propriedade de um formulário. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. |
| **No**(default): No highlight | Automático, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar) | Não                | Propriedade de uma tabela. Triggers are methods that can prevent “illegal” operations with the records of your database.                                                                          |
| **Método base**               | Automático, quando ocorre um evento de sessão de trabalho                                   | Sim (pré-definido) | Existem 16 métodos base em 4D. Ver secção Métodos base de dados                                                                                                                                   |
