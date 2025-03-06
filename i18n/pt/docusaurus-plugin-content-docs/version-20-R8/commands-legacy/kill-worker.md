---
id: kill-worker
title: KILL WORKER
slug: /commands/kill-worker
displayed_sidebar: docs
---

<!--REF #_command_.KILL WORKER.Syntax-->**KILL WORKER** {( *processo* )}<!-- END REF-->
<!--REF #_command_.KILL WORKER.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Text, Integer | &#8594;  | Número ou nome de processo a terminar (terminar processo atual se omitido) |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.KILL WORKER.Summary-->O comando **KILL WORKER** envia uma mensagem ao processo worker cujo nome ou número que passa em *processo*, pedindo ignorar as mensagens pendentes e por fim a sua execução logo que terminem as tarefas atuais.<!-- END REF-->

Este comando só pode ser utilizado com os processos worker. Para saber mais, por favor consulte a seção *Sobre Workers*. 

Em *processo*, se passa o nome ou o número do processo worker cuja execução deve ser terminado. Se não existir nenhum worker com o nome ou o número de processo especificado, **KILL WORKER** não faz nada.

Se não passar nenhum parâmetro, **KILL WORKER** aplica aos processos worker atualmente em execução e portanto é equivalente a **KILL WORKER* (Current process)*.

Se **KILL WORKER** for aplicado a um worker que não foi criado explícitamente utilizando o comando [CALL WORKER](call-worker.md) (por exemplo, o proceso worker principal da aplicação), só pede a este trabalhador esvaziar sua caixa de mensagens. Em consequência, **KILL WORKER* (1)* não faz nada.

Se chamar ao comando [CALL WORKER](call-worker.md) para enviar uma mensagem a um worker que acaba de ser finalizado por **KILL WORKER**, um novo processo é iniciado. Para ter certeza de que só há um processo que se executa por vez para um trabalhador, o novo processo se iniciará assim que o anterior tenha finalizado. Entrentato, lembre que se [CALL WORKER](call-worker.md) for chamado por um worker para ser enviada uma mensagem, enquanto acaba de ser eliminado por **KILL WORKER**, o comando não faz nada.

#### Exemplo 

O comando abaixo (executado desde um formulário, por exemplo) dará lugar a terminaçao do trabajador:

```4d
 CALL WORKER(vWorkerName;"theWorker";"end")
```

No método (*theWorker*), adicionou código para manejar esta situaçao:

```4d
  //método theWorker
 var $1 : Text //param
 
 Case of
    :($1="call") //se chama ao worker
       ... //fazer algo
    :($1="end") // pede ao worker se suicidar
       KILL WORKER
 End case
```

#### Ver também 

[CALL WORKER](call-worker.md)  
[Current process name](current-process-name.md)  
*Sobre Workers*  

#### Propriedades

|  |  |
| --- | --- |
| Número do comando | 1390 |
| Thread-seguro | &check; |


