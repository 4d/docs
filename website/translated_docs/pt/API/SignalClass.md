---
id: SignalClass
title: Signal
---

Sinais são ferramentas fornecidas pela linguagem 4D para gerenciar interações e evitar conflitos entre processos em uma aplicação multiprocesso. Sinais permitem assegurar que um ou mais processos vão esperar por uma tarefa específica a ser completada antes de continuar a execução. Qualquer processo pode esperar ou liberar um sinal.

> Os semáforos podem ser usados para gerenciar interações. Semáforos permitem ter certeza que dois ou mais processos não modificam o mesmo recurso (arquivo, registro..) ao mesmo tempo. Só o processo que estabelece o semáforo pode removê-lo.


### Objeto sinal

Um sinal é um objeto partilhado que deve ser passado como parâmetro a comandos que chamam ou criam trabalhadores ou processo.

Um objeto `4D.Signal` contém os métodos e propriedades integrados abaixo:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Qualquer worker/processo que chame ao método `.wait()` suspenderá sua execução até que a propriedade `.signaled` seja verdaidera. Enquanto espera um sinal, o processo que chamar não usa nenhuma CPU. Isso pode ser muito interessante para o rendimento nas aplicações multiprocesso. A propriedade `.signaled` se converte em true quando qualquer worker/processo chamar ao método `.trigger()`.

Lembre que para evitar situações de bloqueio,  `.wait()` também pode regrassar depois de que tenha alcançado um tempo de espera definido.

Os objetos sinal se criam com o comando [New signal](#new-signal).


### Trabalhar com sinais

Em 4D, se cria um novo objeto sinal chamando ao comando [`New signal`](#new-signal). Quando tiver criado o sinal, deve ser passado como parâmetro a `New process` ou `CALL WORKER` para que a modifiquem quando terminem a tarefa que queira esperar.

- `signal.wait()` deve ser chamado do worker/processo que precisa de outro worker/processo para terminar uma tarefa para poder continuar.
- `signal.trigger()` deve ser chamado desde worker/processo que terminou sua execução para liberar a todos os outros.


![](assets/en/API/signal.png)

Quando um sinal tiver sido lançado usando uma chamada `signal.trigger()`, não pode ser reutilizado. Se quiser estabelecer outro sinal, precisa chamar o comando `New signal` novamente.

Como um objeto sinal é um [objeto compartilhado](Concepts/shared.md), pode ser usado para retornar resultados de workers/processos, desde que não esqueça de escrever valores dentro de uma estrutura `Use...End use` (ver exemplo).

### Exemplo

```4d
 var $signal : 4D.Signal

  // Criação de sinal
 $signal:=New signal

  // chama processo principal e executar o método OpenForm
 CALL WORKER(1;"OpenForm";$signal)
  // fazer outro cálculo
 ...
  // Esperando pelo final do processo
 $signaled:=$signal.wait()

  // Processando o resultado
 $calc:=$signal.result+...
```

***OpenForm*** method :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Abrir o formulário
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Adiciona um novo atributo para seu objeto partilhado $signal para passar seu resultado aos outros processos:
 Use($signal)
    $signal.result:=$form.value
 End use

  // Ativa o sinal para o processo de espera
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
| Parâmetros | Tipo      |    | Descrição                          |
| ---------- | --------- |:--:| ---------------------------------- |
| descrição  | Texto     | -> | Descrição para o sinal             |
| Resultados | 4D.Signal | <- | Objeto nativo encapsulando o sinal |
<!-- END REF -->


#### Descrição

O comando `New signal` <!-- REF #_command_.New signal.Summary -->cria um objeto `4D.Signal`<!-- END REF -->.

Um sinal é um objeto partilhado que pode ser passado como parâmetro de um worker ou processo para outro worker ou processo, de forma que:

*   o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado
*   o worker/processo chamado pode parar sua execução e esperar até que o sinal seja atualizado, sem consumir qualquer recurso de CPU.

Opcionalmente, no parâmetro *description* pode passar um texto personalizado descrevendo o sinal. Esse texto pode também ser definido depois da criação do sinal.

Já que o objeto sinal é um objeto partilhado, pode também ser usado para manter propriedades usuário, incluindo a propriedade [`.description`](#description) por chamar a estrutura `Use...End use`.


**Valor devoluto**

Um novo objeto [`4D.Signal`](#signal-object).

#### Exemplo

Este é um exemplo típico de um worker que fixa um sinal:

```4d
 var $signal : 4D.Signal
 $signal:=New signal("This is my first signal")

 CALL WORKER("myworker";"doSomething";$signal)
 $signaled:=$signal.wait(1) //espere por um segundo no máximo

 If($signaled)
    ALERT("myworker finished the work. Result: "+$signal.myresult)
 Else
    ALERT("myworker no ha terminado en menos de 1s")
 End if
```


O método ***doSomething*** poderia ser algo como:

```4d
 #DECLARE ($signal : 4D.Signal)
  //qualquer processo
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
| Version | Mudanças   |
| ------- | ---------- |
| v17 R4  | Adicionado |
</details>

<!-- REF #SignalClass.description.Syntax -->
**.description** : Text<!-- END REF -->

#### Descrição

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

#### Descrição

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
| Parâmetros | Tipo |  | Descrição                  |
| ---------- | ---- |::| -------------------------- |
|            |      |  | Não exige nenhum parâmetro |
<!-- END REF -->


#### Descrição

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
| Parâmetros | Tipo     |    | Descrição                                   |
| ---------- | -------- | -- | ------------------------------------------- |
| timeout    | Real     | -> | Tempo máximo de espera do sinal em segundos |
| Resultados | Booleano | <- | Estado da propriedade `.signaled`           |
<!-- END REF -->


#### Descrição

A função `.wait( )` <!-- REF #SignalClass.wait().Summary -->faz com que o  processo atual espere até que a propriedade `.signaled` do objeto sinal se converte em **true** ou expire o *timeout* opcional.

Para evitar que o código se bloqueie, pode passar um tempo máximo de espera em segundos no parâmetro *timeout* (se aceitam decimais).
> **Atención**: A chamada a `.wait( )` sem um *timeout* no processo principal de 4D não é recomendável porque poderia congelar toda a aplicação 4D.

Se o sinal já estiver no estado de sinalização (ou seja, a propriedade`.signaled` já é **true**), a função devolve imediatamente, sem esperar.

A função devolve o valor da propriedade `.signaled`. Avaliar esse valor permite saber se a função retornou porque `.trigger( )` foi chamado (`.signaled` é **true**) ou se o *timeout* expirou (`.signaled` é **false**).
> O estado de um processo que espera um signal é `Waiting for internal flag`.<!-- END REF -->

<style> h2 { background: #d9ebff;}</style>
