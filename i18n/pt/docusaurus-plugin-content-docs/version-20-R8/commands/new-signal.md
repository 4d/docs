---
id: new-signal
title: New signal
displayed_sidebar: docs
---

<!-- REF #_command_.New signal.Syntax -->**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!--REF #_command_.New signal.Params-->

| Parâmetro   | Tipo                       |                             | Descrição                          |
| ----------- | -------------------------- | --------------------------- | ---------------------------------- |
| description | Text                       | &#8594; | Descrição para o sinal             |
| Resultado   | 4D. Signal | &#8592; | Objeto nativo encapsulando o sinal |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

## Descrição

O comando `New signal` <!-- REF #_command_.New signal.Summary -->cria um objeto `4D.Signal` <!-- END REF -->.

Um sinal é um objeto partilhado que pode ser passado como parâmetro de um worker ou processo para outro worker ou processo, de forma que:

- o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado
- o worker/processo chamado pode parar sua execução e esperar até que o sinal seja atualizado, sem consumir qualquer recurso de CPU.

Opcionalmente, no parâmetro *description* pode passar um texto personalizado descrevendo o sinal. Esse texto pode também ser definido depois da criação do sinal.

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](#description) property, by calling the `Use...End use` structure.

**Valor retornado**

Um novo [objeto `4D.Signal`](../API/SignalClass.md#signal-object).

## Exemplo

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

O método ***doSomething*** poderia ser como:

```4d
 #DECLARE ($signal : 4D.Signal)
  //any processing
  //...
 Use($signal)
    $signal.myresult:=$processingResult  //return the result
 End use
 $signal.trigger() // The work is finished
```

## Propriedades

|                   |                             |
| ----------------- | --------------------------- |
| Número de comando | 1641                        |
| Thread safe       | &check; |


