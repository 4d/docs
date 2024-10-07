---
id: process-properties
title: PROCESS PROPERTIES
slug: /commands/process-properties
displayed_sidebar: docs
---

<!--REF #_command_.PROCESS PROPERTIES.Syntax-->**PROCESS PROPERTIES** ( *processo* ; *procNome* ; *procEstado* ; *procTempo* {; *procVisivel* {; *unicoID* {; *origem*}}} )<!-- END REF-->
<!--REF #_command_.PROCESS PROPERTIES.Params-->
| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| processo | Integer | &#x1F852; | Número do processo |
| procNome | Text | &#x1F858; | Nome do processo |
| procEstado | Integer | &#x1F858; | Estado do processo |
| procTempo | Integer | &#x1F858; | Tempo acumulado de execução do processo em ticks |
| procVisivel | Boolean, Integer | &#x1F858; | Visível (TRUE) ou Oculto (FALSE) |
| unicoID | Integer | &#x1F858; | Número único do processo |
| origem | Integer | &#x1F858; | Origem do processo |

<!-- END REF-->

#### Descrição 

<!--REF #_command_.PROCESS PROPERTIES.Summary-->O comando PROCESS PROPERTIES devolve a informação sobre o processo cujo número de processo se passa em *processo*.<!-- END REF-->

**Nota:** Se o processo não existir, o que significa que não passou em *processo* um número na range 1 a [Count tasks](count-tasks.md), **PROCESS PROPERTIES** deixa os parâmetros variáveis sem modificar.

Depois da chamada:

* *procNome* devolve o nome do processo. Alguns pontos a ter em conta acerca do nome do processo:
* * Se o processo foi iniciado desde a caixa de diálogo **Executar um método** (com a opção **Novo processo** selecionada), seu nome é “P\_” seguido por um número.  
   * Se o processo foi iniciado a partir de um comando de menu personalizado cuja propriedade **Iniciar um novo processo** é selecionada, o nome do processo é “M\_” ou “ML\_” seguido por um número.  
   * Se o processo foi iniciado pelo servidor web, seu nomes é "Web Process#" seguido por um UUID.  
   * Se o processo foi suspendido (e seu “espaço” não foi reutilizado), ainda é devolvido o nome do processo. Para detectar se um processo está suspendido, prove *procEstado=-1* (ver a continuação).
* *procEstado* devolve o estado do processo no momento da chamada. Este parâmetro pode devolver um dos valores oferecidos pelas seguintes constantes predefinidas:  
| Constante                 | Tipo          | Valor |  
| ------------------------- | ------------- | ----- |  
| Does not exist            | Inteiro longo | \-100 |  
| Aborted                   | Inteiro longo | \-1   |  
| Executing                 | Inteiro longo | 0     |  
| Delayed                   | Inteiro longo | 1     |  
| Waiting for user event    | Inteiro longo | 2     |  
| Waiting for input output  | Inteiro longo | 3     |  
| Waiting for internal flag | Inteiro longo | 4     |  
| Paused                    | Inteiro longo | 5     |

* *procTempo* devolve o tempo acumulado que o processo há utilizado desde que começou, em ticks (1/60 de segundo) .
* O parâmetro opcional *procModo* pode ser uma variável de tipo booleano ou inteiro longo:
* * Se for de tipo Booleano, devolve True se o processo for visível e False se estiver oculto.  
   * Se for de tipo inteiro longo, depois da execução do método, contém um campo de bits onde os dois primeiros bits são definidos:  
         * bit 0 devolve a propriedade de visibilidade: 1 se o processo for visível e 0 se estiver oculto  
         * bit 1 devolve a propriedade de modo apropriativo: 1 se o processo for executado em modo preemptivo e 0 se for executado em modo cooperativo.
* *unicoID*, se especificado, devolve o número único do processo. Na verdade, cada processo tem um número de processo assim como um número único de processo por seção. Este último permite diferenciar entre dois processos ou sessões de processo. Corresponde ao número de processos que tem sido iniciados durante a sessão da aplicação 4D.

##### 

* *origin*, se especificado, retorna um valor que descreve a origem do processo. 4D oferece as constantes pré-definidas abaixo (no tema "*Tipo de processo*"):  
    
| Constante                     | Tipo          | Valor | Comentário                             |  
| ----------------------------- | ------------- | ----- | -------------------------------------- |  
| Apple event manager           | Inteiro longo | \-7   |                                        |  
| Backup process                | Inteiro longo | \-19  |                                        |  
| Cache manager                 | Inteiro longo | \-4   |                                        |  
| Client manager process        | Inteiro longo | \-31  |                                        |  
| Compiler process              | Inteiro longo | \-29  |                                        |  
| Created from execution dialog | Inteiro longo | 3     |                                        |  
| Created from menu command     | Inteiro longo | 2     |                                        |  
| Design process                | Inteiro longo | \-2   |                                        |  
| Event manager                 | Inteiro longo | \-8   |                                        |  
| Execute on client process     | Inteiro longo | \-14  |                                        |  
| Execute on server process     | Inteiro longo | 1     |                                        |  
| External task                 | Inteiro longo | \-9   |                                        |  
| HTTP Log flusher              | Inteiro longo | \-58  |                                        |  
| Indexing process              | Inteiro longo | \-5   |                                        |  
| Internal 4D server process    | Inteiro longo | \-18  |                                        |  
| Internal timer process        | Inteiro longo | \-25  |                                        |  
| Log file process              | Inteiro longo | \-20  |                                        |  
| Main 4D process               | Inteiro longo | \-39  |                                        |  
| Main process                  | Inteiro longo | \-1   |                                        |  
| Method editor macro process   | Inteiro longo | \-17  |                                        |  
| Monitor process               | Inteiro longo | \-26  |                                        |  
| MSC process                   | Inteiro longo | \-22  |                                        |  
| None                          | Inteiro longo | 0     |                                        |  
| On exit process               | Inteiro longo | \-16  |                                        |  
| Other 4D process              | Inteiro longo | \-10  |                                        |  
| Other user process            | Inteiro longo | 4     |                                        |  
| Restore Process               | Inteiro longo | \-21  |                                        |  
| Serial Port Manager           | Inteiro longo | \-6   |                                        |  
| Server interface process      | Inteiro longo | \-15  |                                        |  
| SOAP process                  | Inteiro longo | \-33  |                                        |  
| SQL Method execution process  | Inteiro longo | \-24  |                                        |  
| Web process on 4D remote      | Inteiro longo | \-12  |                                        |  
| Web process with no context   | Inteiro longo | \-3   |                                        |  
| Web server process            | Inteiro longo | \-13  |                                        |  
| Web server spare process      | Inteiro longo | \-32  |                                        |  
| Worker process                | Inteiro longo | 5     | Processos Worker lançados pelo usuário |  
    
    
**Nota:** processos internos de 4D retorna um valor negativo e os processos gerados pelo usuário retornam um valor positivo

#### Exemplo 1 

O seguinte exemplo devolve o nome, o estado, o tempo tomado nas variáveis *vNome*, *vEstado,* e *vTempoTransc* para o processo atual:

```4d
 var vNom : Text // Inicializar as variáveis
 var vEstado : Integer
 var vTempoTransc : Integer
 PROCESS PROPERTIES(Current process;vNome;vEstado;vTempoTransc)
```

#### Exemplo 2 

Ver o exemplo da seção [Semaphore](semaphore.md).

#### Exemplo 3 

Se quiser conhecer a visibilidade e o modo de execução do processo atual. Pode escrever:

```4d
 var vName : Text
 var vState : Integer
 var vTime : Integer
 var vFlags : Integer
 var isVisible : Boolean
 var isPreemptive : Boolean
 PROCESS PROPERTIES(Current process;vName;vState;vTime;vFlags)
 isVisible:=vFlags?? 0 //true se visível
 isPreemptive:=vFlags?? 1 //true se preemptivo
```

#### Ver também 

[Count tasks](count-tasks.md)  
[Get process activity](get-process-activity.md)  
[Process state](process-state.md)  
*Processos 4D Preemptivos*  