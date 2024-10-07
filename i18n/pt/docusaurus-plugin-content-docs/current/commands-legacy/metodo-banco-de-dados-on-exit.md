---
id: metodo-banco-de-dados-on-exit
title: Metodo banco de dados On Exit
slug: /commands/metodo-banco-de-dados-on-exit
displayed_sidebar: docs
---

<!--REF #_command_.Metodo banco de dados On Exit.Syntax-->**Método banco de dados On Exit**<!-- END REF-->
<!--REF #_command_.Metodo banco de dados On Exit.Params-->
| Este comando não requer parâmetros |  |
| --- | --- |

<!-- END REF-->

#### 

<!--REF #_command_.Metodo banco de dados On Exit.Summary-->O Método banco de dados On Exit é chamado quando se sai do banco.<!-- END REF-->

Este método é utilizado nos seguintes ambientes 4D:

* 4D em modo local
* 4D em modo remoto (do lado do cliente)
* Aplicação 4D compilada e fusionada com 4D Volume Desktop

**Nota**: o Método banco de dados On Exit NÃO é invocado por 4D Server.

O Método banco de dados On Exit é invocado automaticamente por 4D; diferentemente dos métodos de projeto, você não pode chamar este método por programação. Entretanto, pode ser executado desde o editor de métodos. Igualmente pode utilizar subrotinas.

Você sai de um banco se:

* O usuário seleciona o comando **Sair** do menu **Arquivo** no ambiente Desenho ou desde o ambiente Aplicação (Quit standard action).
* Uma chamada é realizada ao comando [QUIT 4D](quit-4d.md).
* Um plug-in 4D faz uma chamada ao ponto de entrada [QUIT 4D](quit-4d.md).

Sem importar como se inicie a saída do banco, 4D realiza as seguintes ações:

* Se não existir um Método banco de dados On Exit, 4D aborta cada processo em execução um por um, sem distinção. Se o usuário está introduzindo dados, os registros não serão guardados.
* Se existir um Método banco de dados On Exit , 4D começa a execução deste método em um processo local criado recentemente. Observe que sairá eventualmente de 4D, o Método banco de dados On Exit pode realizar toda a limpeza ou fechar as operações que queira, mas não pode ser negado a sair.

O Método banco de dados On Exit é perfeito para:

* Salvar (localmente, no disco) preferências ou parâmetros a reutilizar ao começo da seguinte sessão em .
* Realizar outras ações automaticamente cada vez que se salga de la base.

**Nota:** não esqueça que o processo criado pelo Método banco de dados On Exit é um processo local/cliente, portanto não pode acessar ao arquivo de dados. Se o Método banco de dados On Exit realiza uma consulta ou uma ordenação, um cliente 4D que está a ponto de sair quedará "congelado" e em realidade não sairá da aplicação. Se necessita acessar a dados quando um cliente sai da aplicação, cria um novo processo global desde o qual o Método banco de dados On Exit possa acessar ao arquivo de dados. Neste caso, tenha certeza de que o novo processo termine corretamente antes do final da execução do Método banco de dados On Exit (utilizando por exemplo variáveis interprocesso).

**Nota**: em um ambiente cliente/servidor, Método banco de dados On Exit se comporta de maneira diferente dependendo de se o usuàrio sair manualmente (via o comando de menu Sair ou uma chamada ao comando [QUIT 4D](quit-4d.md)) ou que 4D Server se feche, o que obriga a todos os clientes a sair.  
  
Quando sair de 4D Server e se dá um tempo de corte (por exemplo, 10 minutos), cada cliente conectado mostra uma mensagem de advertência e se o usuário sair durante o período de tempo determinado, o Método banco de dados On Exit é executado normalmente. Entretanto, em outros casos (por exemplo, o usuário não responde a tempo, o servidor solicita sar imediatamente ou o administrador desconecta manualmente ao cliente), o Método banco de dados On Exit se executa ao mesmo tempo que a conexão ao servidor se fecha. Como resultado, o código em Método banco de dados On Exit não pode iniciar outro processo local ou de servidor e não pode esperar a que se cancelem outros processos (nem esses processos podem seguir acessando ao servidor). Se tentar fazer isso, um erro de rede é gerado (como 10001 ou 10002) já que a conexão ao servidor já está fechada.

#### Nota 

O exemplo abaixo mostra um caso típico onde você lança um ou mais processos no fundo fazendo trabalhos regulares, rodando sem parar em [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md) (ou em [On Server Startup database method](on-server-startup-database-method.md)). Uma flag no objeto da aplicação [Storage](storage.md) é usado para dizer para terminar - e marcar se terminaram.

* Em [Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md)

```4d
 Use(Storage)
    Storage.global:=New shared object("ExitNow";False)
 End use
 $p:=New process("Serverjob";0;"Background job#1")
 $p1:=New process("Check_Invoices";0;"Background job#2")
```

* Aqui está um exemplo de um método de fundo:

```4d
  // fazer trabalhos regulares de fundo no servidor
 While(Not(Bool(Storage.global.ExitNow)))
  // rordar tarefas de contabilidade, calcular dados, etc
  // ...
    DELAY PROCESS(Current process;60*60) //hiberna por um minuto depois repete o loop
 End while
```

* Em **Método banco de dados On Exit**:

```4d
 Use(Storage.global)
    Storage.global.ExitNow:=True //faz com que todos os trabalhadores parem
 End use
 
 $time:=Current time
 $finished:=False
 While((($time+10)>(Current time+0))&(Not($finished)))&NBSP; // max 10 seconds
    $list:=Get process activity(Processes only) // obtém a lista de todos os processos
    $sublist:=$list.processes.query("name='Background job@' and state >=0") //ainda há um trabalho no fundo rodando?
    $finished:=($sublist.length=0)
    If($sublist.length>0)
       For each($job;$sublist)
          RESUME PROCESS($job.number) //Tenha certeza que todos os processos estão acordados
       End for each
    End if
 End while
```

#### Ver também 

[Método banco de dados On Startup](metodo-banco-de-dados-on-startup.md)  
[QUIT 4D](quit-4d.md)  