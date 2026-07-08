---
id: deferred-formulas
title: Deferred formulas
slug: /commands/deferred-formulas
displayed_sidebar: docs
---

<!--REF #_command_.Deferred formulas.Syntax-->**Deferred formulas** : Collection<!-- END REF-->
<!--REF #_command_.Deferred formulas.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Collection | &#8592; |Pilha de fórmulas diferidas na função ou no método|
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

<!--REF #_command_.Deferred formulas.Summary-->O comando `Deferred formulas` retorna a coleção de todas as fórmulas que foram diferidas usando o comando [`defer`](../../commands/defer) na função ou no método atual<!-- END REF-->. 

Se o comando for chamado a partir de outro contexto, ele retorna uma coleção vazia.



## Exemplo

```4d
defer(ALERT("1"))
defer(ALERT("2"))
...
var $colStack:=Deferred formulas
    //$colStack = [<<Formula: ALERT("2")>>,<<Formula: ALERT("1")>>]
```

## Ver também 

[defer](../commands/defer)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1861 |
| Thread-seguro | yes |
