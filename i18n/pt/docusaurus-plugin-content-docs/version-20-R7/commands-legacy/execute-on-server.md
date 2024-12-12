---
id: execute-on-server
title: Execute on server
slug: /commands/execute-on-server
displayed_sidebar: docs
---

<!--REF #_command_.Execute on server.Syntax-->**Execute on server** ( *proced* ; *pilha* {; *nome* {; *param* {; *param2* ; ... ; *paramN*}}}{; *} ) : Integer<!-- END REF-->
<!--REF #_command_.Execute on server.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| proced | Text | &#8594;  | Procedimento a executar no processo |
| pilha | Integer | &#8594;  | Tamanho da pilha em bytes |
| nome | Text | &#8594;  | Nome do processo criado |
| param | Expression | &#8594;  | Parâmetro(s) do procedimento |
| * | Operador | &#8594;  | Processo único |
| Resultado | Integer | &#8592; | Número de processo para o processo criado recentemente ou de um processo que está sendo executado |

<!-- END REF-->

*Esse comando não é seguro para thread e não pode ser usado em código adequado.*


#### Descrição 

<!--REF #_command_.Execute on server.Summary-->O comando Execute on server inicia um novo processo na máquina servidor (quando se chama em Cliente/Servidor) ou na mesma máquina (se é chamado em monousuário) e devolve o número deste processo.<!-- END REF-->

Utilize Execute on server para iniciar um procedimento armazenado. Para maior informação sobre procedimentos armazenados, consulte a seção *Stored Procedures* no manual de referência de 4D Server.

Se chamado Execute on server em uma máquina cliente, o comando devolve um número de processo negativo. Se chamada Execute on server na máquina servidor, Execute on server devolve um número de processo positivo. Note que chamar [New process](new-process.md "New process") na máquina servidor faz o mesmo que chamar Execute on server.

Se o processo não foi possível criar (por exemplo, se não há suficiente memória), Execute on server devolve (0) e é gerado um erro. Pode interceptar este erro utilizando um método de gestão de erros instalado pelo comando [ON ERR CALL](on-err-call.md "ON ERR CALL").

##### Método de processo 

 Em *proced*, passe o nome do método de processo para o novo processo. Uma vez 4D seja definido o contexto para o novo processo, começa a execução deste método, o qual é convertido no método de processo. 

##### Pilha de processo 

O parâmetro *pilha* permite indicar a quantidade de memória atribuída para a pilha do processo. É o espaço em memória utilizada para "empilhar" chamadas de método, as variáveis ​​locais, parâmetros nas sub-rotinas e registros empilhados.  

* Passe 0 em *pilha* para usar um tamanho da pilha padrão, adequado para a maioria das aplicações (configuração recomendada).
* Em certos casos especiais, você pode querer usar um valor personalizado. Ele deve ser expresso em bytes. Recomenda-se para passar um mínimo de 64 KB (cerca de 64.000 bytes) epode usar valores acima de 512 KB, em particular, se o processo pode realizar chamadas de longas cadeias (sub-rotinas de chamada em cascata).

**Nota**: A pilha **não** é o total de memória para o processo. Processos compartilham memória para registros, variáveis ​​entre processos, e assim por diante. Um processo também usa memória extra para armazenar suas variáveis ​​de processo. A pilha contém vários itens de informações internas 4D; a quantidade de informação guardada na pilha depende do número de método aninhada chama o processo empregará, o número de formularios que irão abrir antes de fechar os e o número e tamanho das variáveis ​​locais utilizadas em cada chamada de método aninhada.  

##### Nome do processo 

O nome do novo processo é passado em *nome*. Em monousuário, este nome aparece na lista de processos ambiente de Design, e será devolvido pelo comando[Process info](../commands/process-info.md) quando aplicada a este novo processo. Em Cliente / Servidor, esse nome aparece em azul na lista de **procedimentos armazenados** da janela principal de 4D Server.  

Você pode omitir este parâmetro; se isso acontecer, o nome do processo é uma string vazia.  
  
**Atenção**: Ao contrário do comando [New process](new-process.md), não tente fazer com que o processo seja local em escopo,  colocando o prefixo cifrão (*$*) enquanto usa o comando **Execute on server.** Isso irá funcionar corretamente em um único usuário, porque **Execute on server age**  como [New process](new-process.md) neste ambiente. Por outro lado, em cliente / servidor, este irá gerar um erro.

##### Parâmetros do método processo 

 Pode passar parâmetros ao método de processo. Pode passar parâmetros da mesma forma como os passaria a uma sub rotina. No entanto, há uma restrição, não pode passar expressões de tipo ponteiro. Igualmente, lembre que os arrays não podem ser passados como parâmetros a um método. Uma vez comece a execução no contexto do novo processo, o método de processo recebe os valores dos parâmetros em *$1*, *$2*, etc.

**Nota:** Se passar parâmetros ao método de processo, deve passar o parâmetro *nome*; neste caso não se pode omitir. 

Se passar um objeto 4D ([C\_OBJECT](c-object.md)) ou uma coleção ([C\_COLLECTION](c-collection.md)) como param, uma cópia é enviada (e não uma referência) e a forma JSON se utiliza em UTF-8 para o servidor. Se o objeto ou coleção contiver ponteiros, se enviam seus valores não referenciados, e não os ponteiros mesmos.

##### Parâmetro opcional \* 

Se passado este último parâmetro lhe pede a 4D verificar primeiro se está executando um processo com o mesmo nome que passou em *nome*. Se é assim, 4D não inicia um novo processo e devolve o número do processo com este nome.

#### Exemplo 1 

Se quiser registrar certa informação desde o lado remoto em um arquivo de texto na máquina do servidor.

Executa o método com informação local como parâmetros em uma máquina remota:

```4d
 $process:=Execute on server("WriteLog";0;"WriteLogFile";Current user;String(Current date);String(Current time))
```

O método WriteLog será executado no servidor. Contém, por exemplo:

```4d
 var $1;$2;$3 : Text
 TEXT TO DOCUMENT(Get 4D folder(Logs folder)+"Log"+$1+".txt";$2+" "+$3)
```

#### Exemplo 2 

O exemplo abaixo mostra como a importação de dados pode ser acelerada de maneira dramática em Cliente/Servidor. O método Importacion Clasica listado abaixo permite medir quanto tempo leva uma importação de registros utilizando o comando [IMPORT TEXT](import-text.md) no lado Cliente  

```4d
  //Método de proyecto Importacion Clasica
 $vhDocRef:=Open document("")
 If(OK=1)
    CLOSE DOCUMENT($vhDocRef)
    FORM SET INPUT([Tabla1];"Import")
    $vhHoraInicial:=Current time
    IMPORT TEXT([Tabla1];Document)
    $vhHoraFinal:=Current time
    ALERT("La operación tardó "+String(0+($vhHoraFinal-$vhHoraInicial))+" segundos.")
 End if
```

Ao importar dados de maneira clássica, 4D Client analisa o arquivo ASCII, em seguida, para cada registro, cria um novo registro, preenche os campos com os dados importados e envia o registro para o servidor para que ele possa ser adicionado à unidade básica. Portanto, há muitas solicitações circulando pela rede. Uma forma de otimizar a operação é usar um procedimento armazenado para fazer o trabalho localmente na máquina do servidor. A máquina cliente carrega o documento em um BLOB, inicia um procedimento armazenado passando o BLOB como parâmetro. O procedimento armazenado coloca o BLOB em um documento no disco da máquina do servidor, depois importa o documento localmente. Portanto, a importação de dados ocorre localmente, a uma velocidade comparável à de uma versão independente de 4D, porque a maioria dos pedidos que circulam na rede foram eliminados. Este é o método de projeto CLIENTE IMPORTAR. Executado no computador cliente, inicia a execução do procedimento armazenado SERVIDOR IMPORTAR, listados abaixo:

```4d
  // Método de projeto CLIENTE IMPORTAR
  // CLIENTE IMPORTAR ( Ponteiro ; Alfa )
  // CLIENTE IMPORTAR ( -> [Tabela] ; Formulario de entrada )
 
 var $1 : Pointer
 C_STRING(31;$2)
 var $vhDocRef : Time
 var $vxData : Blob
 var spErrCode : Integer
 
  // Selecione o documento a importar
 $vhDocRef:=Open document("")
 If(OK=1)
  // Se um documento for selecionado, não o deixe aberto
    CLOSE DOCUMENT($vhDocRef)
    $vhHoraInicial:=Current time
  // Tente carregar na memória
    DOCUMENT TO BLOB(Document;$vxData)
    If(OK=1)
  // Se o documento puder ser carregado no BLOB,
  // Inicie o procedimento armazenado que importará os dados na máquina servidor
       $spProcessID:=Execute on server("SERVIDOR IMPORTAR";32*1024;"Servidor Importando";Table($1);$2;$vxData)
  // Neste ponto, já não necessitamos mais ao BLOB neste processo
       CLEAR VARIABLE($vxData)
  // Espere o término da operação realizada pelo procedimento armazenado
       Repeat
          DELAY PROCESS(Current process;300)
          GET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
          If(Undefined(spErrCode))
  // Nota: se o procedimento armazenado não tiver inicializado sua própria instância
  // da variável spErrCode, pode ser que retorne uma variável indefinida
             spErrCode:=1
          End if
       Until(spErrCode<=0)
  // Envia um aviso de recibo ao procedimento armazenado
       spErrCode:=1
       SET PROCESS VARIABLE($spProcessID;spErrCode;spErrCode)
       $vhHoraFinal:=Current time
       ALERT("A operação demorou"+String(0+($vhHoraFinal-$vhHoraInicial))+" segundos.")
    Else
       ALERT("Não há suficiente memória para carregar o documento.")
    End if
 End if
```

Abaixo o método de projeto SERVIDOR IMPORTAR executado como procedimento armazenado:

```4d
  // Método de projeto SERVIDOR IMPORTAR
  // SERVIDOR IMPORTAR ( Entero largo ; Alfa ; BLOB )
  // SERVIDOR IMPORTAR ( Número de tabela ; Formulario de entrada ; Dados importados )
 
 var $1 : Integer
 C_STRING(31;$2)
 var $3 : Blob
 var spErrCode : Integer
 
  // A operação ainda não terminou, atribuimos 1 a spErrCode
 spErrCode:=1
 $vpTabela:=Table($1)
 FORM SET INPUT($vpTabela->;$2)
 $vsDocNome:="Archivo import "+String(1+Random)
 DELETE DOCUMENT($vsDocNome)
 BLOB TO DOCUMENT($vsDocNome;$3)
 IMPORT TEXT($vpTabela->;$vsDocNome)
 DELETE DOCUMENT($vsDocNome)
  `
```

```4d
 A operação terminou
```

, atribuimos 0 a spErrCode 0  
spErrCode:=0  
\` Espere a que a maquina cliente receba os resultados  
Repeat   
DELAY PROCESS(Current process;1)  
Until (spErrCode>0)

Quando estes dois métodos de projeto tenham sido implementados em seu banco de dados, pode realizar uma impotação baseada em um procedimento armazenado, escrevendo por exemplo

CLIENTE IMPORTAR (->\[Tabla1\];"Import")

```4d

```

Com algumas provas comparativas, pode comprovar que com este tipo de método, a importação dos registros pode ser 60 vezes mais rápida que uma importação clássica. 

#### Exemplo 3 

Consulte a seção *Serviços baseados nos procedimentos armazenados (exemplo)* no manual de *Referencia de 4D Server*.

#### Ver também 

[EXECUTE ON CLIENT](execute-on-client.md)  
[New process](new-process.md)  