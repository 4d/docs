---
id: methods
title: Página Métodos
---


Um método é basicamente um pedaço de código que executa uma ou várias ações. Um método projeto é composto de várias linhas de instruções, cada uma das quais consta de uma linha no método. Uma linha de instrução realiza uma ação e pode ser simples ou complexa. Embora uma instrução seja sempre uma linha, uma linha pode ser tão longa quanto necessário (até 32.000 caracteres, o que provavelmente é suficiente para a maioria das tarefas).

O tamanho máximo de um método de projecto é limitado a 2 GB de texto ou 32.000 linhas de comando.

## Tipos de métodos

Na Linguagem 4D, existem várias categorias de métodos. A categoria depende da forma como podem ser chamados:

| Tipo                          | Contexto de chamada                                                                                               | Aceita parâmetros  | Descrição                                                                                                                                                                                         |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Métodos proyecto**          | Por demanda, quando chamar ao nome do método projeto (ver [Chamando a métodos projeto](#calling-project-methods)) | Sim                | Pode conter qualquer código para executar ações personalizadas Quando um método projeto for criado, se torna parte  parte da linguagem do banco de dados na qual foi criado.                      |
| **Método objecto (widget)**   | Automático, quando um evento envolve a forma a que o método está ligado                                           | Não                | Propriedade de um objecto de formulário (também chamado widget)                                                                                                                                   |
| **Método formulário**         | Automático, quando um evento envolve o objecto ao qual o método está ligado                                       | Não                | Propriedade de um formulário. Pode-se utilizar um método de formulário para gerir dados e objectos, mas é geralmente mais simples e mais eficiente utilizar um método de objecto para estes fins. |
| **No**(default): No highlight | Automático, cada vez que manipula os registos de uma tabela (Adicionar, Apagar e Modificar)                       | Não                | Propriedade de uma tabela. Os gatilhos/triggers são métodos que podem prevenir operações "ilegais" com os registos da sua base de dados.                                                          |
| **Método base**               | Automático, quando ocorre um evento de sessão de trabalho                                                         | Sim (pré-definido) | Existem 16 métodos base em 4D. Ver secção Métodos base de dados                                                                                                                                   |


> A linguagem 4D também suporta **Funções de classe**, que pode ser chamadas no contexto de uma instância de objeto. As funções de classe podem ser integradas (*por exemplo*, `collection.orderBy()` ou `entity.save()`), ou [criado pelo desenvolvedor 4D](classes.md#class-function).


## Métodos projeto recursivos

Um método de projecto pode ter uma das seguintes funções, dependendo de como é executado e utilizado:

- Constantes
- Objeto fórmula
- Método do menu
- Método de gerenciamento de processos
- Método de captura de eventos ou erros

### Sugestões

Uma sub-rotina é um método de projecto que pode ser pensado como um servo. Executa as tarefas que outros métodos lhe pedem para executar. Uma função é uma sub-rotina que devolve um valor ao método que a chamou.

Quando criar um método projeto, este passa a formar parte da lingagem do banco de dados no qual foi criado. Pode daí chamar o método projeto desde outros métodos projeto ou desde [métodos predefinidos](#predefined-methods) da mesma maneira que chama aos comandos integrados de 4D. Um método de projecto utilizado desta forma é chamado de sub-rotina.

Utiliza sub-rotinas para:

- Reduzir a codificação repetitiva
- Esclareça os seus métodos
- Facilitar mudanças nos seus métodos
- Modularize o seu código

Por exemplo, suponha que tenha um banco de dados de clientes. Ao personalizar o banco de dados, pode perceber que ha'tarefas que tem que realizar repetidamente, como achar um cliente e modificar seu registro. O código para fazer isso  parece-se com o seguinte:

```4d
  // Procure um cliente
 QUERY BY EXAMPLE([Customers])
  // Selecione o formulário de entrada
 FORMULÁRIO DE ENTRADA([Customers]; "Data Entry")
  // Modifique o registo do cliente
 MODIFY RECORD([Customers])
```

Se não utilizar sub-rotinas, terá de escrever o código cada vez que quiser modificar o registo de um cliente. Se houver dez lugares na sua base de dados personalizada onde precise fazer isso, terá de escrever o código dez vezes. Se utilizar sub-rotinas, só terá de o escrever uma vez. Esta é a primeira vantagem das sub-rotinas - reduzir a quantidade de código.

Se o código descrito anteriormente fosse um método chamado `MODIFICAR CLIENTE`,  executaria simplesmente utilizando o nome do método em outro método. Por exemplo, para modificar o registo de um cliente e depois imprimir o registo, escrever-se-ia este método:

```4d
 MODIFY CUSTOMER
 PRINT SELECTION([Customers])
```

Esta capacidade simplifica dramaticamente os seus métodos. No exemplo, não precisa saber como funciona o método `MODIFY CUSTOMER` , apenas o que ele faz. Esta é a segunda razão para a utilização de sub-rotinas para esclarecer os seus métodos. Desta forma, os seus métodos tornam-se extensões à linguagem 4D.

Se precisar mudar seu método de pesquisa de clientes nesse banco de dados de exemplo, terá que mudar apenas um método, não dez. Este é o próximo motivo para utilizar sub-rotinas para facilitar mudanças nos seus métodos.

Usando sub-rotinas, você torna o seu código modular. Isto significa simplesmente a divisão do seu código em módulos (sub-rotinas), cada um dos quais executa uma tarefa lógica. Considere o código abaixo de um banco de dados de contas correntes:

```4d
 FIND CLEARED CHECKS ` Buscar os cheques emitidos
 RECONCILE ACCOUNT ` Reconciliar a conta
 PRINT CHECK BOOK REPORT ` Imprimir um relatório da conta
```

Mesmo para alguém que não conheça o banco de dados, é claro o que o código faz. Não é necessário examinar cada sub-rotina. Cada sub-rotina pode ter muitas linhas e realizar algumas operações complexas, mas aqui é apenas importante que desempenhe a sua tarefa. Recomendamos que divida o seu código em tarefas lógicas, ou módulos, sempre que possível.


### Objeto fórmula

Pode encapsular os seus métodos de projeto em **fórmula** objectos e chamá-los dos seus objectos.

Os comandos `Formula` ou `Formula from string` permitem-lhe criar objectos de fórmula nativa que pode encapsular em propriedades de objectos. Permite-lhe implementar métodos de objectos personalizados.

Para executar um método armazenado numa propriedade objeto, utilizar o operador **( )** após o nome da propriedade. Por exemplo:

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



Note-se que, mesmo que não tenha parâmetros, um método de objeto a ser executado deve ser chamado com ( ) parênteses. Chamar só a propriedade de objeto devolverá uma nova referência à fórmula (e não a executará):

```4d
$o:=$f.message //devolve o objeto fórmula em $o
```

### Métodos de menu
Um método de menu é invocado quando se selecciona o comando do menu personalizado ao qual está anexado. Atribui-se o método ao comando menu usando o editor de menu ou um comando do tema "Menus". O método executa-se quando o comando do menu é escolhido. Ao criar menus personalizados com métodos de menu que realizam ações específicas, pode personalizar seu banco de dados.

Os comandos personalizados do menu podem causar a realização de uma ou mais actividades. Por exemplo, um comando de menu para introduzir registos pode chamar um método que executa duas tarefas: exibir o formulário de introdução apropriado, e chamar o comando `ADD RECORD` até que o usuário cancele a atividade de introdução de dados.

A automatização de sequências de actividades é uma capacidade muito poderosa da linguagem de programação. Usando menus personalizados, pode automatizar sequências de tarefa e fornecer mais orientação aos usuários do banco de dados.


### Métodos Processo

Um **método de processo** é um método de projecto que é chamado quando um processo é iniciado. O processo dura apenas enquanto o método do processo continuar a ser executado, excepto se for um processo de Worker. Note-se que um método de menu anexado a um comando de menu com a propriedade *Start a New Process*  é também o método de processo para o processo recentemente iniciado.

### Métodos de captura de eventos e erros
Um **método de captação de eventos** decorre num processo separado como método de captação de eventos. Normalmente, deixa a 4D fazer a maior parte do tratamento do evento por si. Por exemplo, durante a introdução de dados, 4D detecta toques no teclado e cliques, depois chama os métodos corretos de objetos e formulários para que possa responder adequadamente aos eventos a partir destes métodos. Para mais informações, ver a descrição do comando `ON EVENT CALL`.

Um **método de apanhar erros** é um método de projecto baseado na interrupção. Cada vez que um erro ou uma exceção ocorre, ele é executado no processo em que foi instalado. Para mais informações, ver a descrição do comando `ON ERR CALL`.

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
