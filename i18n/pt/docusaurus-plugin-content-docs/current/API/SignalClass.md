---
id: SignalClass
title: Signal
---

Sinais são ferramentas fornecidas pela linguagem 4D para gerenciar interações e evitar conflitos entre processos em uma aplicação multiprocesso. Sinais permitem assegurar que um ou mais processos vão esperar por uma tarefa específica a ser completada antes de continuar a execução. Qualquer processo pode esperar ou liberar um sinal.

> Os semáforos podem ser usados para gerenciar interações. Semáforos permitem ter certeza que dois ou mais processos não modificam o mesmo recurso (arquivo, registro..) ao mesmo tempo. Só o processo que estabelece o semáforo pode removê-lo.


### Objeto sinal

Um sinal é um objeto partilhado que deve ser passado como parâmetro a comandos que chamam ou criam trabalhadores ou processo.

A `4D. Signal` object contains the following built-in methods and properties:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Qualquer worker/processo que chame ao método `.wait()` suspenderá sua execução até que a propriedade `.signaled` seja verdaidera. Enquanto espera um sinal, o processo que chamar não usa nenhuma CPU. Isso pode ser muito interessante para o rendimento nas aplicações multiprocesso. A propriedade `.signaled` se converte em true quando qualquer worker/processo chamar ao método `.trigger()`.

Lembre que para evitar situações de bloqueio, `.wait()` também pode regrassar depois de que tenha alcançado um tempo de espera definido.

Os objetos sinal se criam com o comando [New signal](#new-signal).


### Trabalhar com sinais

Em 4D, se cria um novo objeto sinal chamando ao comando [`New signal`](#new-signal). Quando tiver criado o sinal, deve ser passado como parâmetro a `New process` ou `CALL WORKER` para que a modifiquem quando terminem a tarefa que queira esperar.

- `signal.wait()` deve ser chamado do worker/processo que precisa de outro worker/processo para terminar uma tarefa para poder continuar.
- `signal.trigger()` deve ser chamado desde worker/processo que terminou sua execução para liberar a todos os outros.


![](../assets/en/API/signal.png)

Quando um sinal tiver sido lançado usando uma chamada `signal.trigger()`, não pode ser reutilizado. Se quiser estabelecer outro sinal, precisa chamar o comando `New signal` novamente.

Since a signal object is a [shared object](Concepts/shared.md), you can use it to return results from called workers/processes, provided that you do not forget to write values within a `Use... End use` structure (see example).

### Exemplo

```4d
 #DECLARE ($signal : 4D.
  Signal)  
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

***OpenForm*** method :

```4d
 var $signal : 4D. Signal

  // Creation of a signal
 $signal:=New signal

  // call main process and execute OpenForm method
 CALL WORKER(1;"OpenForm";$signal)
  // do another calculation
 ... // Waiting for the end of the process
 $signaled:=$signal.wait()

  // Processing of the results
 $calc:=$signal.result+...
```

### Resumo


|                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.description.Summary -->|
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.signaled.Summary --> |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.trigger().Summary --> |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)&nbsp;&nbsp;&nbsp;&nbsp;<!-- INCLUDE #SignalClass.wait().Summary --> |




<!-- REF SignalClass.New signal.Desc -->
## New signal


<details><summary>Histórico</summary>

| Versão | Mudanças   |
| ------ | ---------- |
| v17 R4 | Adicionado |

</details>

<!-- REF #_command_.New signal.Syntax -->

**New signal** { ( *description* : Text ) } : 4D. Signal<!-- END REF -->

<!-- REF SignalClass.New signal.Params -->
| Parameter   | Tipo       |    | Descrção                                                      |
| ----------- | ---------- |:--:| ------------------------------------------------------------- |
| description | Text       | -> | Descrição para o sinal                                        |
| Resultados  | 4D. Signal | <- | Objeto nativo encapsulando o sinal|<!-- END REF -->


|


#### Descrção

The `.description` property <!-- REF #_command_.New signal.Summary -->contains a custom description for the `Signal` object.<!-- END REF -->.

Um sinal é um objeto partilhado que pode ser passado como parâmetro de um worker ou processo para outro worker ou processo, de forma que:

*   o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado
*   o worker/processo chamado pode parar sua execução e esperar até que o sinal seja atualizado, sem consumir qualquer recurso de CPU.

Opcionalmente, no parâmetro *description* pode passar um texto personalizado descrevendo o sinal. Esse texto pode também ser definido depois da criação do sinal.

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](#description) property, by calling the `Use... End use` structure.


**Valor retornado**

A new [`4D. Signal` object](#signal-object).

#### Exemplo

Este é um exemplo típico de um worker que fixa um sinal:

```4d
 var $signal : 4D. Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //wait for 1 second max

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker no ha terminado en menos de 1s")
 End if
```


O método ***doSomething*** poderia ser algo como:

```4d
 #DECLARE ($signal : 4D. Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //retorna o resultado
 End use
 $signal.trigger() // O trabalho terminou
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

#### Descrção

The `.wait( )` function <!-- REF #SignalClass.description.Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

`.description` pode ser definida ao criar o objeto signal ou a qualquer momento. Note that since the `Signal` object is a shared object, any write-mode access to the `.description` property must be surrounded by a `Use... End use` structure.

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

#### Descrção

The `.signaled` property <!-- REF #SignalClass.signaled.Summary -->contains the current state of the `Signal` object<!-- END REF -->. . When the signal is created, `.signaled` is **False**.

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
| Parameter | Tipo |  | Descrção                                                   |
| --------- | ---- |::| ---------------------------------------------------------- |
|           |      |  | Does not require any parameters|<!-- END REF -->


|


#### Descrção

The `.trigger( )` function <!-- REF #SignalClass.trigger().Summary -->sets the `signaled` property of the signal object to **true**<!-- END REF --> and awakens all workers or processes waiting for this signal.

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
| Parameter  | Tipo     |    | Descrção                                                     |
| ---------- | -------- | -- | ------------------------------------------------------------ |
| timeout    | Real     | -> | Tempo máximo de espera do sinal em segundos                  |
| Resultados | Booleano | <- | Estado da propriedade `.signaled`|<!-- END REF -->


|


#### Descrção

The `.wait( )` function <!-- REF #SignalClass.wait().Summary -->makes the current process wait until the `.signaled` property of the signal object to become **true** or the optional *timeout* to expire<!-- END REF -->.

Para evitar que o código se bloqueie, pode passar um tempo máximo de espera em segundos no parâmetro *timeout* (se aceitam decimais).
> **Atención**: A chamada a `.wait( )` sem um *timeout* no processo principal de 4D não é recomendável porque poderia congelar toda a aplicação 4D.

Se o sinal já estiver no estado de sinalização (ou seja, a propriedade`.signaled` já é **true**), a função devolve imediatamente, sem esperar.

A função devolve o valor da propriedade `.signaled`. Avaliar esse valor permite saber se a função retornou porque `.trigger( )` foi chamado (`.signaled` é **true**) ou se o *timeout* expirou (`.signaled` é **false**).
> O estado de um processo que espera um signal é `Waiting for internal flag`.


<!-- END REF -->
