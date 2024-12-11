---
id: semaphore
title: Semaphore
slug: /commands/semaphore
displayed_sidebar: docs
---

<!--REF #_command_.Semaphore.Syntax-->**Semaphore** ( *semaforo* {; *tickCount*} ) : Boolean<!-- END REF-->
<!--REF #_command_.Semaphore.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| semaforo | Text | &#8594;  | Semáforo a testar e estabelecer |
| tickCount | Integer | &#8594;  | Máximo tempo de espera |
| Resultado | Boolean | &#8592; | O semáforo foi criado corretamente (FALSE) ou O semáforo já tinha sido criado (TRUE) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.Semaphore.Summary-->Um semáforo é uma bandeira compartihada entre estações de trabalho (o computador de cada usuário) ou entre processos na mesma estação de trabalho.<!-- END REF--> Um semáforo simplesmente existe ou não existe. Os métodos que cada usuário executa podem provar a existência de um semáforo. Criando e provando semáforos, os métodos podem ser comunicados entre estações de trabalho.  

 A função **Semaphore** devolve TRUE e não faz nada se o *semaforo* existe. Se não existe o semáforo, Semaphore o cria e devolve FALSE. Só um usuário ao tempo pode criar um semáforo. Se *semaforo* devolve FALSE, isto significa que o semáforo não existe, mas também significa que o semáforo foi criado para o processo no qual a chamada for realizada.  

**Semaphore** devolve FALSE se o semáforo não foi definido. Também devolve FALSE se o semáforo já foi definido pelo mesmo processo no qual a chamada tenha sido realizada. Um semáforo está limitado a 255 caracteres, incluindo prefixos (<>, $). Se passa uma cadeia mais longa, o semáforo será provado com a cadeia truncada.  

Lembre que os nomes dos semáforos são sensíveis as maiúsculas e minúsculas em 4D (por exemplo, o programa considera que "MySemaphore" é diferente de "mysemaphore" 

O parâmetro opcional *tickCount* lhe permite especificar um tempo de espera (em ticks) se *semaforo* já está definido. Neste caso, a função esperará o que o semáforo seja liberado ou o tempo de espera para terminar antes de devolver [True](true.md "True").  
  
 Há dois tipos de semáforos em 4D: semáforos locais e semáforos globais.

• Um semáforo local é visível para todos os processos de uma mesma estação de trabalho e somente na estação de trabalho. Um semáforo local pode ser criado colocando ao nome do semáforo o signo dólar ($) como prefixo. Os semáforos locais se utilizam para monitorar operações entre os diferentes processos executados na mesma estação de trabalho. Por exemplo, um semáforo local pode ser utilizado para monitorar o acesso a um array interprocesso compartilhado por todos os processos em um banco mono usuário ou na estação de trabalho.  
 • Um semáforo global é visível para todos os usuários e todos seus processos. Os semáforos globais são utilizados para monitorar operações entre usuários de uma base multi-usuário.  
  
Os semáforos globais e locais são idênticos em sua lógica.  
  
A diferença reside em seu alcance. Em 4D Server, os semáforos globais são compartilhados entre todos os processos executados de todos os clientes. Um semáforo local só se comparte entre os processos executados na máquina cliente onde for criada. Em 4D , os semáforos globais e locais tem o mesmo alcance porque você é o único usuário.  
  
Recomendamos usar semáforos locais quando precisar de um semáforo para gerenciar um aspecto local para um cliente da aplicação, tais como a interface ou um array de variáveis interprocesso. Se usar um semáforo global nesse caso, não apenas causaria trocas de network desnecessárias, como poderia afetar outras máquinas clientes desnecessariamente. Usando um semáforo local evitaria esses efeitos colaterais indesejados.  
  
**Nota**: os semáforos locais se recomendam quando o uso de um semáforo for necessário para manejar um aspecto local para um cliente da aplicação, tal como a interface ou um array de valores interprocesso. O uso de um semáforo global provocará neste caso, não só intercâmbios de rede desnecessários, mas também pode afetar outras máquinas cliente. O uso de um semáforo local evitará estes efeitos indesejáveis.  
  
 Os semáforos não são utilizados para proteger o acesso aos registros. Esta gestão é realizada automaticamente 4D e 4D Server. Utilize semáforos para evitar que vários usuários realizem a mesma operação ao mesmo tempo.

#### Exemplo 1 

Abaixo um código típico para usar um semáforo:

```4d
 While(Semaphore("MySemaphore";300))
    IDLE
 End while
  // coloque o código protegido por semáforo aqui
 CLEAR SEMAPHORE("MySemaphore")
```

#### Exemplo 2 

 Neste exemplo, você quer evitar que dois usuários realizem simultâneamente uma atualização global dos preços em uma tabela Produtos. O seguinte método utiliza semáforos para fazer isto: 

```4d
 If(Semaphore("AtualizacaoPreços")) // tente criar o semáforo
    ALERT("Outro usuário já está atualizando os preços. Tente mais tarde.")
 Else
    AtualizarPreços // Atualização de todos os preços
    CLEAR SEMAPHORE("AtualizaçãoPreços") // Apagar o semáforo
 End if
```

#### Exemplo 3 

O exemplo a seguir utiliza um semáforo local. Em um banco de dados com vários processos, você pode querer manter uma lista de "Coisas a fazer". Você deseja manter a lista em um array interprocesso e não em uma tabela. Você utiliza um semáforo para evitar o acesso simultâneo. Nesta situação, só necessita utilizar um semáforo local, porque sua lista "Coisas a fazer" serve apenas para seu uso pessoal.

O array interprocesso se inicializa no método Startup:

```4d
 ARRAY TEXT(◊ListaFazer;0) // A lista de coisas a fazer está inicialmente vazia
```

Este é o método utilizado para adicionar elementos à lista de coisas por fazer:

```4d
  // Método de projeto AGREGAR A LISTA DE COISAS A FAZER
  // AGREGAR A LISTA DE COISAS A FAZER ( Texto )
  // AGREGAR A LISTA DE COISAS A FAZER ( Elemento da lista de coisas a fazer)
 var $1 : Text
 If(Not(Semaphore("$AcessoLista";300)))
  // Espera 5 segundos se o semáforo já existe
    $vlElem:=Size of array(◊ListaFazer)+1
    INSERT IN ARRAY(◊ListaFazer;$vlElem)
    ◊ListaFazer{$vlElem}:=$1
    CLEAR SEMAPHORE("$AcessoLista") // Apagar o semáforo
 End if
```

Pode chamar este método desde qualquer processo.

*Close*

#### Exemplo 4 

Este método permite não executar um método se o semáforo está presente; o método informa o método de chamada com um código de erro e um texto plano.

Sintaxe:   

```4d
 $L_Error:=Semaphore_proof(->$T_Text_error)
```

```4d
  // Estrutura de proteção por semáforo
 var $0 : Integer
 var $1 : Pointer // mensagem de erro
 
  // Inicio do método
 var $L_MyError : Integer
 $L_MyError:=1
 
 var $T_Sema_local : Text
 $T_Sema_local:="$tictac"
 
 If(Semaphore($T_Sema_local;300))
  // Esperávamos 300 tics mas o semáforo
  // não foi lançado pelo que o localizou:
  // terminamos aqui
    $L_MyError:=-1
 
 Else
 
  // Este método somente executa por um processo de cada vez
 
  // Localizamos o semáforo ao mesmo tempo que o introduzimos
  // assim que somos os únicos que o podemos excluir
 
  // Fazer algo
    ...
  // Terminar excluindo o semáforo
    CLEAR SEMAPHORE($T_Sema_local)
 End if
 
 var $T_Message : Text
 If($L_MyError=-1)
    $T_Message:="O semáforo "+$T_Sema_local+" tem o acesso bloqueado ao resto do código"
 Else
    $T_Message:="OK"
 End if
 
 $0:=$L_MyError
 $1->:=$T_Message  // O método chamado recebe um código de erro e uma explicação em texto plano
```

#### Ver também 

[CLEAR SEMAPHORE](clear-semaphore.md)  
*Semáforos e Sinais*  
[Test semaphore](test-semaphore.md)  

#### Propriedades
|  |  |
| --- | --- |
| Número do comando | 143 |
| Thread-seguro | &check; |
| Proibido no servidor ||


