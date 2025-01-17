---
id: new-signal
title: New signal
displayed_sidebar: docs
---

<!-- REF #_command_.New signal.Syntax -->**New signal** { ( *description* : Text ) } : 4D.Signal<!-- END REF -->

<!--REF #_command_.New signal.Params-->

| Parâmetro   | Tipo                       |   | Descrição                          |
| ----------- | -------------------------- | - | ---------------------------------- |
| description | Text                       | → | Descrição para o sinal             |
| Resultado   | 4D. Signal | ← | Objeto nativo encapsulando o sinal |

<!-- END REF-->

<details><summary>História</summary>

| Release | Mudanças   |
| ------- | ---------- |
| 17 R4   | Adicionado |

</details>

#### Descrição

The `New signal` command <!-- REF #_command_.New signal.Summary -->creates a `4D.Signal` object<!-- END REF -->.

Um sinal é um objeto partilhado que pode ser passado como parâmetro de um worker ou processo para outro worker ou processo, de forma que:

- o worker/processo chamado pode atualizar o objeto sinal depois de um processamento especifico ter terminado
- o worker/processo chamado pode parar sua execução e esperar até que o sinal seja atualizado, sem consumir qualquer recurso de CPU.

Optionally, in the *description* parameter you can pass a custom text describing the signal. Esse texto pode também ser definido depois da criação do sinal.

Since the signal object is a shared object, it can also be used to maintain user properties, including the [`.description`](#description) property, by calling the `Use...End use` structure.

**Valor retornado**

Um novo [objeto `4D.Signal`](#signal-object).

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

#### Propriedades

|                |                                 |
| -------------- | ------------------------------- |
| Command number | 1641                            |
| Thread safe    | &amp;check; |
