---
id: clear-set
title: CLEAR SET
slug: /commands/clear-set
displayed_sidebar: docs
---

<!--REF #_command_.CLEAR SET.Syntax-->**CLEAR SET** ( *conjunto* : Text )<!-- END REF-->
<!--REF #_command_.CLEAR SET.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| conjunto | Text | &#8594; | Nome do conjunto a limpar da memória |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.CLEAR SET.Summary-->CLEAR SET Apaga *conjunto* da memória e libera a memória utilizada por *conjunto*.<!-- END REF--> O comando não afeta as tabelas, seleções, ou registros. Para salvar um conjunto antes de apagá-lo, utilize o comando [SAVE SET](../commands/save-set). Como os conjuntos utilizam memória, é bom apagá-los quando não forem mais necessários.  

## Exemplo 

Ver o exemplo do comando [USE SET](use-set.md "USE SET").

## Ver também 

[CREATE EMPTY SET](../commands/create-empty-set)  
[CREATE SET](../commands/create-set)  
[LOAD SET](../commands/load-set)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 117 |
| Thread-seguro | yes |


