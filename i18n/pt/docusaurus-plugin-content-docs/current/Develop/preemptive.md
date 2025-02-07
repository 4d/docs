---
id: preemptive-processes
title: Processos preemptivos
---

O código 4D compilado pode ser executado em **processos preemptivos**. Graças a esta funcionalidade, seus aplicativos 4D compilados poderão aproveitar ao máximo os computadores de vários núcleos de modo que sua execução será mais rápida e pode suportar mais usuários conectados.

## O que é um processo preemptivo?

Quando for executado em _modo preemptivo_, um processo estará dedicado a uma CPU. A gestão de processos então é delegada ao sistema, que pode adjudicar por separado cada CPU em uma máquina multi-núcleo.

Quando for executado em modo _cooperativo_, todos os processos serão gestionados pelo thread da aplicação pai e compartem a mesma CPU, mesmo em uma máquina multi-núcleo.

Como resultado, no modo apropriativo, o rendimento global da aplicação é incrementado, especialmente em máquinas multi-núcleo, já que múltiplos processos (threads ou fios) podem ser executados simultaneamente. Entretanto, os ganhos reais dependem das operações executadas. Por outro lado, já que no modo apropriativo cada fio é independente dos demais e não é gestionado diretamente pela aplicação, limitações específicas se aplicam aos métodos que queira que sejam compatíveis com o modo apropriativo. Além disso, a execução apropriativa está disponível só em alguns contextos específicos.

## Disponibilidade de modo preemptivo

O uso do modo preemptivo está disponível nos seguintes contextos de execução:

| Contexto          | Execução preventiva                                                   |
| ----------------- | --------------------------------------------------------------------- |
| 4D Server         | sim                                                                   |
| 4D remoto         | sim, com [ServerNet ou QUIC](../settings/client-server#network-layer) |
| 4D usuário único  | sim                                                                   |
| Modo compilado    | sim                                                                   |
| Modo interpretado | não                                                                   |

Se o contexto de execução suporta o modo apropriativo e se o método for "thread seguro", um novo processo 4D lançado utilizando os comandos New process ou CALL WORKER ou do menu "Executar método" se executará em modo apropriativo.

De outro modo, se chamar `New process` ou `CALL WORKER` em um contexto de execução que não é suportado (por exemplo em uma máquina remota 4D) o processo é sempre cooperativo.

## Código thread-seguro vs thread-inseguro

O código 4D pode ser executado em fio (thread) apropriativo só quando algumas condições específicas forem cumpridas. Cada parte do código executado (comandos, métodos, variáveis, funções...) deve ser compatível com uma execução apropriativa. Os elementos que podem ser executados em fios apropriativos são chamados threads seguros e os elementos que não podem ser executados em fios apropriativos são chamados threads inseguros.

:::note

Dado que um thread se maneja de forma independente a partir do método processo pai, toda a string de chamadas não deve incluir nenhum código thread inseguro, do contrário a execução apropriativa não será possível. Esse ponto é discutido [neste parágrafo] (#when-is-a-process-started-preemptively).

:::

A propriedade "segurança de fio" de cada elemento depende do elemento em si:

- Comandos 4D: thread seguro é uma propriedade interna. Na [referência da linguagem 4D](https://doc.4d.com/4Dv20/4D/20.1/4D-Language-Reference.100-6479538.en.html), os comandos thread seguro se identificam pelo ícone ![](../assets/en/Develop/thread-safe.png). Você também pode usar o comando [`Command name`](https://doc.4d.com/4dv20/help/command/en/page538.html) para saber se um comando é thread-safe. Grande parte dos comandos 4D podem ser executados em modo apropriativo.
- Métodos de projeto: as condições para segurança de thread se listam no [este parágrafo](#writing-a-thread-safe-method).

Basicamente, o código que se executa em thread apropriativos não podem ser chamados as partes com as interações externas, tal como o código plug-in ou as variáveis interprocesso. Os acessos aos dados, entretanto, são permitidos desde o servidor de dados 4D que suporta a execução apropriativa.

## Declaração de um método preemptivo

Como padrão, 4D executará todos os métodos de projeto em modo cooperativo. Se desejar se beneficiar da funcionalidade modo apropriativo, o primeiro passo consiste em declarar explicitamente todos os métodos que deseja que se iniciem em modo apropriativo sempre que for possível, ou seja, os métodos que considere capaz de executar em processo apropriativo. O compilador [verificará se esses métodos são realmente thread-safe] (#writing-a-thread-safe-method) em tempo de compilação. Também pode desabilitar o modo apropriativo para alguns métodos, se for necessário.

Lembre que definir um método como apropriativo faz com que seja elegível para execução apropriativa, mas não garante que se execute realmente em modo apropriativo. Iniciar um processo no modo preemptivo resulta de uma [avaliação realizada por 4D] (#when-is-a-process-started-preemptively) com relação às propriedades de todos os métodos na cadeia de chamadas do processo.

Para declarar seu método de elegibilidade para o modo apropriativo, é necessário utilizar a opção de declaração "Modo de execução" no quadro de diálogo Propriedades de método:

![](../assets/en/Develop/preemptif.png)

São fornecidas as seguintes opções:

- **Pode ser executado em um processo preemptivo**: ao selecionar esta opção, declara que o método pode ser executado em um processo preemptivo e, portanto, deve ser executado em modo preemptivo quando for possível. A propriedade "preemptive" do método é definida como "capable".

  Quando essa opção estiver marcada, o compilador 4D verificará se o método é realmente capaz e retornará erros se esse não for o caso -- por exemplo, se ele chama direta ou indiretamente comandos ou métodos que não podem ser executados em modo preemptivo (toda a cadeia de chamadas é analisada, mas os erros são reportados apenas ao primeiro subnível). Pode então editar o método para que se torne thread-safe, ou selecionar outra opção.

  Se a capacidade preemptiva do método for aprovada, este é marcado internamente como "thread-safe" e será executado em modo preemptivo sempre que as condições necessárias forem cumpridas. Esta propriedade define a sua elegibilidade para o modo preemptivo, mas não garante que o método será efetivamente executado em modo preemptivo, uma vez que este modo de execução requer um [contexto específico] (#when-is-a-process-started-preemptively).

- **Não pode ser executado em um processo preemptivo**: selecionando esta opção, se declara que o método não deve ser executado em modo preemptivo, e, portanto, sempre se deve executar em modo cooperativo, da mesma forma que nas versões anteriores de 4D. A propriedade "preemptive" do método é definida como "incapable".

  Quando esta opção estiver marcada, o compilador 4D não verificará a habilidade do método de executar preemptivamente; ele é automaticamente marcado como "thread-unsafe" internamente (mesmo que seja teoricamente capaz). Quando chamado em tempo de execução, este método irá "contaminar" quaisquer outros métodos na mesma thread, forçando assim esta thread a ser executada em modo cooperativo, mesmo que os outros métodos sejam thread-safe.

- **Indiferente** (pré-determinado): ao selecionar esta opção, declara que não deseja manejar a propriedade preventiva para o método. A propriedade "preemptiva" do método é definida como "indiferente".

  Quando esta opção está marcada, o compilador 4D avaliará a capacidade preemptiva do método e o marcará internamente como "thread-safe" ou "thread-unsafe". Não é devolvido qualquer erro relacionado com a execução preemptiva. Se o método for avaliado como thread-safe, em tempo de execução não impedirá a execução preemptiva de threads quando chamado num contexto preemptivo. Por outro lado, se o método for avaliado como "thread-unsafe", em tempo de execução impedirá qualquer execução de thread preemptiva quando for chamado.

Note que com essa opção, independentemente da avaliação interna de segurança de thread, o método será sempre executado em modo cooperativo quando chamado diretamente por 4D como o primeiro método pai (por exemplo, através do comando `New process`). Se for marcado internamente como "thread-safe", só é tido em conta quando chamado a partir de outros métodos dentro de uma cadeia de chamadas.

:::note Caso particular

Se o método também tem a propriedade [**Compartilhada por componentes e banco de dados host**](../Project/code-overview.md#shared-by-components-and-host-database), configurando a opção **Indiferente** irá automaticamente marcar o método como thread-unsafe. Se pretender que um método de componente partilhado seja thread-safe, deve defini-lo explicitamente como **Pode ser executado em processos preemptivos**.

:::

## Quando um processo é iniciado de forma preemptiva?

:::info Lembrete

A execução apropriativa só está disponível em modo compilado.

:::

Em modo compilado, quando for iniciado um processo criado pelos métodos `New process` ou `CALL WORKER`, 4D lê a propriedade apropiativa do método processo (também chamado método pai) e executa o processo em modo apropriativo ou cooperativo, em função desta propriedade:

- Se o método processo for thread seguro (validado durante a compilação), o processo é executado em um thread apropriativo.
- Se o método processo for thread inseguro, o processo é executado em um thread cooperativo.
- Se a propriedade apropiativa do método de processo era "indiferente", por compatibilidade o processo é executado em um thread cooperativo (mesmo que o método seja realmente capaz de uso preemptivo). Note, entretanto, que esta funcionalidade de compatibilidade for aplicada só quando for utilizado o método como método de processo: um método declarado "indiferente", mas internamente etiquetado "thread seguro" pelo compilador pode ser chamado apropriativamente por outro método (ver abaixo).

A propriedade segurança de thread depende da cadeia de chamadas. Se um método com a propriedade declarada "capable" chamar a um método thread inseguro em qualquer de seus subníveis, um erro de compilação será devolvido: se um método único em toda a cadeia de chamadas for thread inseguro, "contaminará" todos os outros métodos e a execução apropriativa será recusada pelo compilador. Um thread apropriativo só pode ser criado quando toda a cadeia for thread seguro e o método de processo tiver sido declarado "Pode ser executado em processo apropiativo".
Por outro lado, o mesmo método thread seguro pode ser executado em um thread apropriativo em uma cadeia de chamada e em thread cooperativo em outra cadeia de chamada.

Por exemplo, considere os métodos de projeto abaixo:

```4d
  //Método projeto MyDialog
  //contém chamadas de interface: será internamente thread inseguro
 $win:=Open form window("tools";Palette form window)
 DIALOG("tools")
```

```4d
  //Método projeto MyComp
  //contém computação simples: será internamente thread seguro
 #DECLARE($value : Integer) -> $result : Integer
 $result:=$value*2
```

```4d
  //Método projeto CallDial
 var $vName : Text
 MyDialog
```

```4d
  //Método projeto CallComp
 var $vAge : Integer
 MyComp($vAge)
```

A execução de un método no modo preemptivo dependerá de que a propriedade "execução" e da cadeia de chamadas. A tabela abaixo ilustra estas diversas situações:

![](../assets/en/Develop/legend.png)

| Declaração e cadeia de chamadas       | Compilação | Segurança de thread resultante         | Execução                | Comentário                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------- | ---------- | -------------------------------------- | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ![](../assets/en/Develop/scenar1.png) | OK         | ![](../assets/en/Develop/scenar2.png)  | Apropiativo             | CallComp é o método pai, declarado "capable" de uso preemptivo; já que MyComp é internamente thread seguro, CallComp é thread seguro e o processo for preemptivo                                                                                                                                                                                                                                                                                                                                   |
| ![](../assets/en/Develop/scenar3.png) | Error      | ![](../assets/en/Develop/scenar4.png)  | A execução é impossível | CallDial é o método pai, declarado "capaz"; MyDialog é "indiferente". Entretanto, já que MyDialog está internamente thread inseguro, contamina a string de chamadas. A compilação falha devido a um conflito entre a declaração deCallDial e sua capacidade real. A solução é modificar MyDialog para ser thread seguro, de modo que a execução seja preemptiva, ou mudar a declaração de propriedade de CallDial para executá-lo como cooperativo |
| ![](../assets/en/Develop/scenar5.png) | OK         | ![](../assets/en/Develop/scenar6.png)  | Cooperativo             | Como CallDial se declara "incapable" de uso apropiativo, a compilação é internamente thread inseguro, a execução sempre será cooperativa, independentemente do estado de MyDialog                                                                                                                                                                                                                                                                                                                  |
| ![](../assets/en/Develop/scenar7.png) | OK         | ![](../assets/en/Develop/scenar8.png)  | Cooperativo             | Como CallComp é o método pai com a propriedade "Indifferent", depois o processo é cooperativo mesmo se toda a string for thread seguro.                                                                                                                                                                                                                                                                                                                                            |
| ![](../assets/en/Develop/scenar9.png) | OK         | ![](../assets/en/Develop/scenar10.png) | Cooperativo             | Como CallDial é o método pai (propriedade era "Indifferent"), então o processo é cooperativo e a compilação exitosa                                                                                                                                                                                                                                                                                                                                                             |

### Como descobrir o modo de execução real

4D permite que você identifique o modo de execução dos processos no modo compilado:

- O comando [`PROCESS PROPERTIES`] (https://doc.4d.com/4dv20/help/command/en/page336.html) permite que você descubra se um processo é executado em modo apropriativo ou cooperativo.
- O Explorador de execução e a [janela de administração de 4D Server] (../ServerWindow/processes.md#process-type)
  mostram ícones específicos para os processos preemptivos.

## Escrevendo um método thread seguro

Para ser thread seguro, um método deve respeitar as seguintes regras:

- deve ter a propriedade "Pode ser executado em processos preemptivos" ou "Indiferente"
- não chama a um comando 4D que seja thread inseguro.
- não deve chamar outro método projeto ou função de que não seja thread seguro
- não deve chamar um plug-in que seja thread inseguro.
- não deve usar nenhuma variável de interprocesso(1)
- não deve chamar objetos de interface (2) (existem, no entanto, exceções, veja abaixo).

(1) Para intercambiar dados entre processos preemptivos (e entre todos os processos), pode passar [coleções compartilhadas ou objetos compartidos](../Concepts/shared.md) como parâmetros a processos, ou usar o catálogo [`Storage`](https://doc.4d.com/4dv20/help/command/en/page1525.html).
[Os processos worker](processes.md#worker-processes) também permitem que você troque mensagens entre quaisquer processos, inclusive processos preemptivos.

(2) O comando [`CALL FORM`] (https://doc.4d.com/4dv20/help/command/en/page1391.html) oferece uma solução elegante para chamar objetos de interface a partir de um processo preemptivo.

:::note Notas

- No caso de um método "Compartilhado por componentes e bancos de dados host", a propriedade "Pode ser executado em processos preemptivos" deve ser selecionada.
- Todas as instruções SQL são thread- seguro. O código SQL inserido nos blocos `Begin SQL`/`End SQL` deve estar em conformidade com as seguintes condições:
  - Deve ser aplicado ao 4D Server ou ao banco de dados local do 4D (ODBC ou bancos de dados remotos via `SQL LOGIN` não são thread seguros. No entanto, os bancos de dados locais usados com `USE DATABASE` são thread seguro).
  * Qualquer trigger chamado por instruções SQL deve ser thread seguro (consulte [Triggers](#triggers) abaixo).

:::

Os métodos com a propriedade "Pode ser executado em processos preemptivos" serão verificados por 4D na etapa de compilação. Um erro de compilação se emite quando o compilador encontrar algo que lhe impeça ser thread seguro:

![](../assets/en/Develop/thread-unsafe.png)

:::info

É possível [desativar localmente a verificação thread seguro](#).

:::

O [arquivo de símbolos](../Project/compiler.md#complete-list-of-methods), se ativado, também contém o estado de segurança de thread para cada método.

### Interface do usuário

Como são acessos "externos", as chamadas para objetos da interface do usuário, como formulários, bem como para o depurador, não são permitidas em threads preemptivas.

Os únicos acessos possíveis à interface do usuário de um thread preemptivo são:

- [Diálogo de erro padrão](.../Debugging/basics). A caixa de diálogo é exibida no processo de modo de usuário (no 4D) ou no processo de interface de usuário do servidor (4D Server). O botão **Rastreamento** está desativado.
- Indicadores de progresso padrão
- Diálogos `ALERT`, `Request` e `CONFIRM`. A caixa de diálogo é exibida no processo de modo de usuário (no 4D) ou no processo de interface de usuário do servidor (4D Server). Observe que, se o 4D Server tiver sido iniciado como um serviço no Windows sem interação com o usuário permitida, as caixas de diálogo não serão exibidas.

### Triggers

When a method uses a command that can call a [trigger](https://doc.4d.com/4Dv20R6/4D/20-R6/Triggers.300-6958353.en.html), the 4D compiler evaluates the thread safety of the trigger in order to check the thread safety of the method:

```4d
 SALVAR RECORD([Table_1]) //trigger na Table_1, se ele existir, deve ser seguro por thread-safe
```

Aqui está a lista de comandos que são marcados no tempo de compilação para acionar a segurança do tópico:

`SAVE RECORD`, `SAVE RELATED ONE`, `DELETE RECORD`, `DELETE SELECTION`, `ARRAY TO SELECTION`, `JSON TO SELECTION`, `APPLY TO SELECTION`, `IMPORT DATA`, `IMPORT DIF`, `IMPORT ODBC`, `IMPORT SYLK`, `IMPORT TEXT`.

Se a tabela for passada dinamicamente, o compilador poderá, às vezes, não ser capaz de descobrir qual acionador precisa avaliar. Aqui estão alguns exemplos de tais situações:

```4d
 DEFAULT TABLE([Table_1])
 SAVE RECORD
 SAVE RECORD($ptrOnTable->)
 SAVE RECORD(Table(myMethodThatReturnsATableNumber())->)
```

Nesse caso, todos os triggers são avaliados. Se um comando thread-unsafe for detectado em pelo menos um acionador, o grupo inteiro será rejeitado e o método será declarado thread-unsafe.

:::note

In [client/server applications](../Desktop/clientServer.md), triggers may be executed in cooperative mode, even if their code is thread-safe. This happens when a trigger is activated from a remote process: in this case, the trigger is executed in the ["twinned" process of the client process](https://doc.4d.com/4Dv20R6/4D/20-R6/4D-Server-and-the-4D-Language.300-7182872.en.html#68966) on the server machine. Since this process is used for all calls from the client, it is always executed in cooperative mode.

:::

### Métodos de tratamento de erros

Os [métodos de captura de erros](../Concepts/error-handling.md) instalados pelo comando `ON ERR CALL` devem ser thread-safe se for provável que sejam chamados a partir de um processo preemptivo. Para lidar com esse caso, o compilador verifica a propriedade de segurança de thread dos métodos de projeto de captura de erros passados para o comando `ON ERR CALL` durante a compilação e retorna os erros apropriados se eles não estiverem em conformidade com a execução preemptiva.

Observe que essa verificação só é possível quando o nome do método é passado como uma constante e não é computado, conforme mostrado abaixo:

```4d
 ON ERR CALL("myErrMethod1") //será verificado pelo compilador
 ON ERR CALL("myErrMethod "+String($vNum)) //não será verificado pelo compilador
```

Além disso, se um método de projeto de captura de erros não puder ser chamado em tempo de execução (devido a um problema de segurança de thread ou por qualquer motivo, como "método não encontrado"), será gerado o erro -10532 "Cannot call error handling project method 'methodName'".

### Compatibilidade de ponteiros

Um processo pode desreferenciar um ponteiro para acessar o valor de outra variável de processo somente se ambos os processos forem cooperativos; caso contrário, 4D lançará um erro. Em um processo preemptivo, se algum código 4D tentar desreferenciar um ponteiro para uma variável de interprocesso, o 4D lançará um erro.

Exemplo com os seguintes métodos:

Method1:

```4d
 myVar:=42
 $pid:=New process("Method2";0;"process name";->myVar)
```

Method2:

```4d
 $value:=$1->
```

Se o processo que estiver executando o Method1 ou o processo que estiver executando o Method2 for preemptivo, a expressão `$value:=$1->` gerará um erro de execução.

### Referência do documento DocRef

O uso de parâmetros do tipo DocRef (referência de documento aberto, usado ou retornado por `Open document`, `Create document`, `Append document`, `CLOSE DOCUMENT`, `RECEIVE PACKET`, `SEND PACKET`) é limitado aos seguintes contextos:

- Quando chamada a partir de um processo preemptivo, uma referência `DocRef` só pode ser usada a partir desse processo preemptivo.
- Quando chamada em um processo cooperativo, uma referência `DocRef` pode ser usada em qualquer outro processo cooperativo.

## Desabilitando verificação de segurança local

Pode haver alguns casos em que você prefira que a verificação de segurança de thread dos comandos não seja aplicada a determinadas partes do código, por exemplo, quando ele contém comandos não seguros para thread que você sabe que nunca serão chamados.

Para fazer isso, você deve envolver o código a ser excluído da verificação de segurança de thread de comando com as diretivas especiais `%T-` e `%T+` como comentários. O comentário `//%T-` desativa a verificação de segurança de thread e `//%T+` a ativa novamente:

```4d
  // %T- to disable thread safety checking

  // Place the code containing commands to be excluded from thread safety checking here
 $w:=Open window(10;10;100;100) //for example

  // %T+ to enable thread safety checking again for the rest of the method
```

Obviamente, o desenvolvedor do 4D é responsável pela compatibilidade do modo preemptivo do código entre as diretivas de desativação e reativação. Erros de tempo de execução serão gerados se o código não seguro de thread for executado em um thread preemptivo.
