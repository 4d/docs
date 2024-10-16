---
id: clear-semaphore
title: CLEAR SEMAPHORE
slug: /commands/clear-semaphore
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SEMAPHORE.Syntax-->**CLEAR SEMAPHORE** ( *semaforo* )<!-- END REF-->
<!--REF #_command_.CLEAR SEMAPHORE.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| semaforo | Text | &#8594;  | Semáforo para limpar |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.CLEAR SEMAPHORE.Summary-->CLEAR SEMAPHORE apaga o *semáforo* previamente criada pela função [Semaphore](semaphore.md "Semaphore").<!-- END REF-->

A regra de utilização é que todos os semáforos devem ser apagados quando já não forem necessários. Se não se apagam os semáforos, permanecem na memória até que o processo que os criou termine. Um processo só pode apagar os semáforos que foram criados. Se você tenta apagar um semáforo desde um processo que não o criou, não acontece nada.

#### Exemplo 

Ver o exemplo de [Semaphore](semaphore.md "Semaphore").

#### Ver também 

*Semáforos e Sinais*  
[Semaphore](semaphore.md)  
[Test semaphore](test-semaphore.md)  