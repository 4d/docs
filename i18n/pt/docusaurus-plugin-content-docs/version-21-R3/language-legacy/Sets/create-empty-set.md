---
id: create-empty-set
title: CREATE EMPTY SET
slug: /commands/create-empty-set
displayed_sidebar: docs
---

<!--REF #_command_.CREATE EMPTY SET.Syntax-->**CREATE EMPTY SET** ( {*tabela* : Table ;} *conjunto* : Text )<!-- END REF-->
<!--REF #_command_.CREATE EMPTY SET.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| tabela | Table | &#8594; | Tabela na qual vai criar um conjunto vazio, ou tabela padrão, se omitido |
| conjunto | Text | &#8594; | Nome do conjunto vazio |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.CREATE EMPTY SET.Summary-->CREATE EMPTY SET cria um conjunto vazio, *conjunto*, para *tabela*.<!-- END REF--> Pode adicionar registros a este conjunto com o comando [ADD TO SET](../commands/add-to-set). Se já existir um conjunto com o mesmo nome, o conjunto existente é apagado e substitui com o novo conjunto.  
  
**Nota**: não tem que utilizar CREATE EMPTY SET antes de utilizar [CREATE SET](../commands/create-set).

## Exemplo 

Consulte o exemplo da seção *Conjuntos*.

## Ver também 

[CLEAR SET](../commands/clear-set)  
[CREATE SET](../commands/create-set)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 140 |
| Thread-seguro | yes |


