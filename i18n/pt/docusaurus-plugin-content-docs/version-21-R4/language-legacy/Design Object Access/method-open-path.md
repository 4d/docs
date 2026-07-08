---
id: method-open-path
title: METHOD OPEN PATH
slug: /commands/method-open-path
displayed_sidebar: docs
---

<!--REF #_command_.METHOD OPEN PATH.Syntax-->**METHOD OPEN PATH** ( *rota* : Text {; *line* : Real}{; *} )<!-- END REF-->
<!--REF #_command_.METHOD OPEN PATH.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| rota | Text | &#8594; | Rota do método à abrir |
| line | Real | &#8594; | Line number |
| * | Operador | &#8594; | Se passado = o comando se aplica à base local quando se executa desde um componente (parâmetro ignorado fora deste contexto) |
</div>
<!-- END REF-->

<div class="no-index">
<details><summary>Histórico</summary>

|Versão|Alterações|
|---|---|
|19|Modificado|
|13|Criado por|

</details>
</div>

## Descrição 

<!--REF #_command_.METHOD OPEN PATH.Summary-->O comando **METHOD OPEN PATH** abre, no editor de métodos de 4D, o método cuja rota de acesso interna é passada no parâmetro *rota*.<!-- END REF-->

O comando é assíncrono: retorna imediatamente ao método chamada e não espera que o editor método seja aberto.   
  
Este comando pode abrir todo tipo de métodos (objeto, formulário, trigger, projeto ou base); no entanto, o método já deveria existir. Se o parâmetro *rota* não corresponde a um método existente, o erro -9801 é devolvido "Impossível abrir o método".  
  
Pode executar este comando desde um componente, mas neste caso, deve passar o parâmetro *\** como o acesso ao código do componente é somente de leitura. Se omitido o parâmetro *\** neste contexto, é gerado o erro -9763.

## Ver também 

*Design Object Access Commands*  
[METHOD Get path](../commands/method-get-path)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 1213 |
| Thread-seguro | no |


