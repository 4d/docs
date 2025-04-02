---
id: SignalClass
title: Signal
---

Sinais são ferramentas fornecidas pela linguagem 4D para gerenciar interações e evitar conflitos entre processos em uma aplicação multiprocesso. Sinais permitem assegurar que um ou mais processos vão esperar por uma tarefa específica a ser completada antes de continuar a execução. Qualquer processo pode esperar ou liberar um sinal.

> Os semáforos podem ser usados para gerenciar interações. Os semáforos permitem garantir que dois ou mais processos não modifiquem o mesmo recurso (arquivo, registro...) ao mesmo tempo. Só o processo que estabelece o semáforo pode removê-lo.

### Objeto sinal

Um sinal é um objeto partilhado que deve ser passado como parâmetro a comandos que chamam ou criam trabalhadores ou processo.

Um objeto `4D.Signal` contém os seguintes métodos e propriedades integrados:

- [`.wait()`](#wait)
- [`.trigger()`](#trigger)
- [`.signaled`](#signaled)
- [`.description`](#description).

Qualquer trabalhador/processo que chamar o método `.wait()` suspenderá sua execução até que a propriedade `.signaled` seja verdadeira. Enquanto espera um sinal, o processo que chamar não usa nenhuma CPU. Isso pode ser muito interessante para o rendimento nas aplicações multiprocesso. A propriedade `.signaled` torna-se verdadeira quando qualquer trabalhador/processo chama o método `.trigger()`.

Observe que, para evitar situações de bloqueio, o `.wait()` também pode retornar depois que um tempo limite definido for atingido.

Os objetos Signal são criados com o comando [`New signal`](../commands/new-signal.md).

### Trabalhar com sinais

Em 4D, você cria um objeto signal chamando o comando [`New signal`](../commands/new-signal.md). Depois de criado, esse sinal deve ser passado como parâmetro para os comandos `New process` ou `CALL WORKER` para que eles possam modificá-lo quando tiverem concluído a tarefa pela qual você deseja esperar.

- O `signal.wait()` deve ser chamado pelo trabalhador/processo que precisa que outro trabalhador/processo termine uma tarefa para poder continuar.
- O `signal.trigger()` deve ser chamado pelo trabalhador/processo que terminou sua execução para liberar todos os outros.

![](../assets/en/API/signal.png)

Uma vez que um sinal tenha sido liberado por meio de uma chamada `signal.trigger()`, ele não poderá ser reutilizado novamente. Se você quiser definir outro sinal, precisará chamar o comando `New signal` novamente.

Como um objeto de sinal é um [objeto compartilhado](Concepts/shared.md), você pode usá-lo para retornar resultados de trabalhadores/processos chamados, desde que não se esqueça de escrever valores em uma estrutura `Use...End use` (veja o exemplo).

### Exemplo

```4d
 var $signal : 4D.Signal

// Criação de um sinal
 $signal:=New signal

// chamar o processo principal e executar o método OpenForm
 CALL WORKER(1;"OpenForm";$signal)
// fazer outro cálculo
...
// Esperando pelo fim do processo
 $signaled:=$signal.wait()

// Processamento dos resultados
 $calc:=$signal.result+...
```

Método ***OpenForm*** :

```4d
 #DECLARE ($signal : 4D.Signal)  
 var $form : Object
 $form:=New object("value";0)

  // Abrir o formulário
 $win:=Open form window("Information";Movable form dialog box)
 DIALOG("Information";$form)
 CLOSE WINDOW($win)

  // Adicione um novo atributo ao seu objeto compartilhado $signal para passar seu resultado ao outro processo:
 Use($signal)
    $signal.result:=$form.value
 End use

  // Disparar o sinal para o processo de espera
 $signal.trigger()
```

### Resumo

|                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------- |
| [<!-- INCLUDE #SignalClass.description.Syntax -->](#description)<br/><!-- INCLUDE #SignalClass.description.Summary --> |
| [<!-- INCLUDE #SignalClass.signaled.Syntax -->](#signaled)<br/><!-- INCLUDE #SignalClass.signaled.Summary -->          |
| [<!-- INCLUDE #SignalClass.trigger().Syntax -->](#trigger)<br/><!-- INCLUDE #SignalClass.trigger().Summary -->         |
| [<!-- INCLUDE #SignalClass.wait().Syntax -->](#wait)<br/><!-- INCLUDE #SignalClass.wait().Summary -->                  |

<!-- REF SignalClass.description.Desc -->

## .description

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #SignalClass.description.Syntax -->**.description** : Text<!-- END REF -->

#### Descrição

A propriedade <!-- REF #SignalClass.description.Summary -->contém uma descrição personalizada para o objeto `Signal`<!-- END REF -->.

`.description` pode ser definida ao criar o objeto signal ou a qualquer momento. Note que uma vez que o objeto `Signal` é um objeto compartilhado, qualquer acesso ao modo de escrita à propriedade `.description` deve estar cercado por uma estrutura `Use...End use`.

Essa propriedade é **leitura-escrita**.

<!-- END REF -->

<!-- REF SignalClass.signaled.Desc -->

## .signaled

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #SignalClass.signaled.Syntax -->**.signaled** : Boolean<!-- END REF -->

#### Descrição

A propriedade `.signaled` <!-- REF #SignalClass.signaled.Summary -->contém o estado atual do objeto `Signal`<!-- END REF -->. Quando o sinal é criado, `.signaled` é **False**. Torna-se **True** quando o `.trigger( )` é chamado no objeto.

Essa propriedade é **somente leitura**.

<!-- END REF -->

<!-- REF SignalClass.trigger().Desc -->

## .trigger()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #SignalClass.trigger().Syntax -->**.trigger( )**<!-- END REF -->

<!-- REF #SignalClass.trigger().Params -->

| Parâmetro | Tipo |     | Descrição                  |
| --------- | ---- | :-: | -------------------------- |
|           |      |     | Não exige nenhum parâmetro |

<!-- END REF -->

#### Descrição

A função `.trigger( )` <!-- REF #SignalClass.trigger().Summary -->define a propriedade `signaled` do objeto de sinal como **true**<!-- END REF --> e desperta todos os workers ou processos esperando por este sinal.

Se o sinal já estiver no estado de sinalização (ou seja, a propriedade `signaled` já for **true**), a função não faz nada.

<!-- END REF -->

<!-- REF SignalClass.wait().Desc -->

## .wait()

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

<!-- REF #SignalClass.wait().Syntax -->**.wait**( { *timeout* : Real } ) : Boolean <!-- END REF -->

<!-- REF #SignalClass.wait().Params -->

| Parâmetro  | Tipo       |                             | Descrição                                   |
| ---------- | ---------- | --------------------------- | ------------------------------------------- |
| timeout    | Real       | ->                          | Tempo máximo de espera do sinal em segundos |
| Resultados | Parâmetros | <- | Estado da propriedade `.signaled`           |

<!-- END REF -->

#### Descrição

A função `.wait( )` <!-- REF #SignalClass.wait().Summary -->faz com que o processo atual espere até que a propriedade `.signaled` do objeto signal se torne **true** ou que o *timeout* opcional expire<!-- END REF -->.

Para evitar o bloqueio de código, você pode passar um tempo máximo de espera em segundos no parâmetro *timeout* (são aceitos decimais).

> **Aviso**: Não é recomendável chamar `.wait( )` sem um *timeout* no processo principal do 4D, pois isso pode congelar todo o aplicativo 4D.

Se o sinal já estiver no estado de sinalização (ou seja, a propriedade `.signaled` já é **true**), a função devolve imediatamente, sem esperar.

A função retorna o valor da propriedade `.signaled`. A avaliação desse valor permite saber se a função retornou porque o `.trigger( )` foi chamado (`.signaled` é **true**) ou se o *timeout* expirou (`.signaled` é **false**).

> O estado de um processo que espera um signal é `Waiting for internal flag`.

<!-- END REF -->
