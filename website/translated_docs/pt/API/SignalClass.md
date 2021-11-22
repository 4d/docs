---
id: SignalClass
title: Signal
---

Signals are tools provided by the 4D language to manage interactions and avoid conflicts between processes in a multiprocess application. Signals allow you to make sure one or more process(es) will wait for a specific task to be completed before continuing execution. Any process can wait and/or release a signal.

> Semaphores can also be used to manage interactions. Semaphores allow you to make sure that two or more processes do not modify the same resource (file, record...) at the same time. Only the process that sets the semaphore can remove it.


### Signal Object

A signal is a shared object that must be passed as a parameter to commands that call or create workers or processes.

A `4D.Signal` object contains the following built-in methods and properties:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Any worker/process calling the `.wait()` method will suspend its execution until the `.signaled` property is true. While waiting for a signal, the calling process does not use any CPU. This can be very interesting for performance in multiprocess applications. The `.signaled` property becomes true when any worker/process calls the `.trigger()` method.

Note that to avoid blocking situations, the `.wait()` can also return after a defined timeout has been reached.

Signal objects are created with the [New signal](#new-signal) command.


### Working with signals

In 4D, you create a new signal object by calling the [`New signal`](#new-signal) command. Once created, this signal must be passed as a parameter to the `New process` or `CALL WORKER` commands so that they can modify it when they have finished the task you want to wait for.

- `signal.wait()` must be called from the worker/process that needs another worker/process to finish a task in order to continue.
- `signal.trigger()` must be called from the worker/process that finished its execution in order to release all others.


![](assets/en/API/signal.png)

Once a signal has been released using a `signal.trigger()` call, it cannot be reused again. If you want to set another signal, you need to call the `New signal` command again.

Since a signal object is a [shared object](Concepts/shared.md), you can use it to return results from called workers/processes, provided that you do not forget to write values within a `Use...End use` structure (see example).

### Exemplo

```4d
 var $signal : 4D.Signal

  // Creation of a signal
 $signal:=New signal

  // call main process and execute OpenForm method
 CALL WORKER(1;"OpenForm";$signal)
  // do another calculation
 ...
  // Waiting for the end of the process
 $signaled:=$signal.wait()

  // Processing of the results
 $calc:=$signal.result+...
```

***OpenForm*** method :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Open the form
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Add a new attribute to your $signal shared object to pass your result to the other process:
 Use($signal)
    $signal.result:=$form.value
 End use

  // Trigger the signal to the waiting process
 $signal.trigger()
```

### Resumo


|                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<p>&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




<!-- REF SignalClass.New signal.Desc -->
## New signal


<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #_command_.New signal.Syntax -->
**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| Parameter   | Type      |    | Description                        |
| ----------- | --------- |:--:| ---------------------------------- |
| description | Texto     | -> | Descrição para o sinal             |
| Result      | 4D.Signal | <- | Objeto nativo encapsulando o sinal |
<!-- END REF -->


#### Description

O comando `New signal` <!-- REF #_command_.New signal.Summary -->cria um objeto `4D.Signal`<!-- END REF -->.

Um sinal é um objeto partilhado que pode ser passado como parâmetro de um worker ou processo para outro worker ou processo, de forma que:

*   the called worker/process can update the signal object after specific processing has completed
*   the calling worker/process can stop its execution and wait until the signal is updated, without consuming any CPU resources.

Opcionalmente, no parâmetro *description* pode passar um texto personalizado descrevendo o sinal. Esse texto pode também ser definido depois da criação do sinal.

Já que o objeto sinal é um objeto partilhado, pode também ser usado para manter propriedades usuário, incluindo a propriedade [`.description`](#description) por chamar a estrutura `Use...End use`.


**Returned value**

Um novo objeto [`4D.Signal`](#signal-object).

#### Exemplo

Este é um exemplo típico de um worker que fixa um sinal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //wait for 1 second max

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker has not finished in less than 1s")
 End if
```


O método ***doSomething*** poderia ser algo como:

```4d
 #DECLARE ($signal : 4D.Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //return the result
 End use
 $signal.trigger() // The work is finished
```

<!-- END REF -->


<!-- REF SignalClass.description.Desc -->
## .description

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #SignalClass.description.Syntax -->
**.description** : Text<!-- END REF -->

#### Description

A propriedade `.description` <!-- REF #SignalClass.description.Summary -->contém uma descrição personalizada para o objeto `Signal`.<!-- END REF -->.

`.description` pode ser definida ao criar o objeto signal ou a qualquer momento. Note que, dado que o objeto `Signal` é um objeto compartido, qualquer acesso em modo de escritura a propriedade `.description` deve estar rodeado por uma estrutura `Use...End use`.

Essa propriedade é**apenas escrita**. 

<!-- END REF -->



<!-- REF SignalClass.signaled.Desc -->
## .signaled

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #SignalClass.signaled.Syntax -->
**.signaled** : Boolean<!-- END REF -->

#### Description

A propriedade `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contém o estado atual do objeto `Signal`<!-- END REF -->. Quando se cria um sinal, `.signaled` é **False**. Se converte em **True** quando se chama ao objeto `.trigger( )`.

Essa propriedade é**apenas leitura**. 

<!-- END REF -->



<!-- REF SignalClass.trigger().Desc -->
## .trigger()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #SignalClass.trigger().Syntax -->
**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->
| Parameter | Type |  | Description                     |
| --------- | ---- |::| ------------------------------- |
|           |      |  | Does not require any parameters |
<!-- END REF -->


#### Description

A função `.trigger( )` <!-- REF #SignalClass.trigger().Summary -->põe a propriedade `signaled` do objeto sinal como **true**<!-- END REF --> e desperta a todos os workers ou processos que esperam este sinal.

Se o sinal já estiver no estado de sinalização (ou seja, a propriedade `signaled` já for **true**), a função não faz nada.

<!-- END REF -->



<!-- REF SignalClass.wait().Desc -->
## .wait()

<details><summary>Histórico</summary>
| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |
</details>

<!-- REF #SignalClass.wait().Syntax -->
**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->
| Parameter | Type     |    | Description                                 |
| --------- | -------- | -- | ------------------------------------------- |
| timeout   | Real     | -> | Tempo máximo de espera do sinal em segundos |
| Result    | Booleano | <- | Estado da propriedade `.signaled`           |
<!-- END REF -->


#### Description

A função `.wait( )` <!-- REF #SignalClass.wait().Summary -->faz com que o  processo atual espere até que a propriedade `.signaled` do objeto sinal se converte em **true** ou expire o *timeout* opcional.

Para evitar que o código se bloqueie, pode passar um tempo máximo de espera em segundos no parâmetro *timeout* (se aceitam decimais).
> **Warning**: Calling `.wait( )` without a *timeout* in the 4D main process is not recommended because it could freeze the whole 4D application.

Se o sinal já estiver no estado de sinalização (ou seja, a propriedade`.signaled` já é **true**), a função devolve imediatamente, sem esperar.

A função devolve o valor da propriedade `.signaled`. Avaliar esse valor permite saber se a função retornou porque `.trigger( )` foi chamado (`.signaled` é **true**) ou se o *timeout* expirou (`.signaled` é **false**).
> The state of a process that waits for a signal is `Waiting for internal flag`.<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
