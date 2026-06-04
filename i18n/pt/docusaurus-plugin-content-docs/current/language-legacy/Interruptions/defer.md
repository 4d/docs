---
id: defer
title: defer
slug: /commands/defer
displayed_sidebar: docs
---

<!--REF #_command_.defer.Syntax-->**defer** ( *exitFormula* : Expression )<!-- END REF-->
<!--REF #_command_.defer.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| exitFormula | Expression | &#8594;  | Expressão a ser executada na saída |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|21 R4|Criado|

</details>
</div>

## Descrição 

<!--REF #_command_.defer.Summary-->O comando `defer` declara uma expressão *exitFormula* que sempre será executada quando o método ou a função terminar, mesmo que um erro tenha sido lançado ou que um `return` tenha sido executado<!-- END REF-->. O uso de `defer` permite garantir que um método ou função termine corretamente executando código de finalização na saída. Além disso, esse comando evita duplicar o mesmo código de saída em cada bloco de retorno ou de tratamento de erro.

:::tip Post de blog relacionado

[Streamline Your Clean-Up Code with the “defer” Command](https://blog.4d.com/streamline-your-clean-up-code-with-the-defer-command)

:::

O comando `defer` pode ser chamado em qualquer lugar do código do método ou função, e você pode inserir quantas expressões `defer` quiser. Durante a execução, todas as expressões *exitFormula* encontradas são empilhadas. Quando a execução termina, seja qual for o motivo (fluxo normal, break, erro, interrupção do usuário, return...), todas as expressões da pilha diferida são desempilhadas e executadas em ordem LIFO (*Last In First Out*).

Por exemplo:

```4d
defer(ALERT("1"))
defer(ALERT("2"))
// Na saída, os alertas exibirão "2" e depois "1"
```

Em *exitFormula*, você passa a expressão que deseja avaliar na saída do método ou função, independentemente da forma de término. Internamente, toda vez que `defer` é chamado, o 4D converte *exitFormula* em uma [formula](../../commands/formula) e a adiciona a uma pilha associada ao método ou função. Quando o método ou função termina, todas as formulas armazenadas na pilha são avaliadas na ordem em que aparecem na coleção.

Como para todas as [formulas](../../commands/formula), se a expressão *exitFormula* usar variáveis locais, seus valores atuais são copiados e armazenados no objeto formula retornado **no momento em que ele é colocado na pilha diferida**. Quando executada, a formula usa esses valores copiados em vez dos valores atuais das variáveis locais.

:::note Notas

- Tenha em mente que variáveis locais armazenam **referências** para valores [object](../../Concepts/dt_object.md#assignment) e [collection](../../Concepts/dt_collection.md#assignment).
- Se *exitFormula* contiver outra instrução `defer`, um erro será lançado.

:::

Se a expressão *exitFormula* lançar um erro, ele é automaticamente interceptado e ignorado, e o fluxo de execução continua sem interrupção.

## Exemplo 1

Estes exemplos ilustram as várias expressões *exitFormula* suportadas:

```4d
// Chamada de método
defer(aMethod)

// Chamada de função de objeto
defer(myObject.aFunction(something))

// Chamada de função singleton
defer(cs.aClass.me.aFunction(something))
```

## Exemplo 2

Você quer garantir que uma referência XML seja sempre liberada corretamente, para evitar possíveis vazamentos de memória:

```4d
var $xmlRef:=DOM Create XML ref("theRoot")
defer(DOM CLOSE XML($xmlRef))
...
```

## Exemplo 3 

Você quer garantir que o monitoramento de atividade seja interrompido no final do método:

```4d
START MONITORING ACTIVITY(0.001;Activity all)
defer(STOP MONITORING ACTIVITY())
...
```

## Exemplo 4 

Você quer controlar a geração de logs:

```4d
$logRecording:=Get database parameter(Diagnostic log recording)
SET DATABASE PARAMETER(Diagnostic log recording; 1)
defer(SET DATABASE PARAMETER(Diagnostic log recording; $logRecording))

$logLevel:=Get database parameter(Diagnostic log level)
SET DATABASE PARAMETER(Diagnostic log level; Log trace)
defer(SET DATABASE PARAMETER(Diagnostic log level; $logLevel))
```

## Ver também 

[throw](../commands/throw)  
[Last errors](../commands/last-errors)  
[ON ERR CALL](../commands/on-err-call)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1805 |
| Thread-seguro | no |
