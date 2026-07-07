---
id: current-default-table
title: Current default table
slug: /commands/current-default-table
displayed_sidebar: docs
---

<!--REF #_command_.Current default table.Syntax-->**Current default table**  : Pointer<!-- END REF-->
<!--REF #_command_.Current default table.Params-->
<div class="no-index">

| Parâmetro | Tipo |  | Descrição |
| --- | --- | --- | --- |
| Resultado | Pointer | &#8592; | Ponteiro a tabela padrão |
</div>
<!-- END REF-->

## Descrição 

<!--REF #_command_.Current default table.Summary-->Current default table retorna um ponteiro a tabela que foi passado na última chamada a [DEFAULT TABLE](../commands/default-table) para o processo atual.<!-- END REF-->

## Exemplo 

Desde que uma tabela padrão tenha sido estabelecida, a linha de código abaixo estabelece o título de janela ao nome da tabela padrão atual:

```4d
 SET WINDOW TITLE(Table name(Current default table))
```

## Ver também 

[DEFAULT TABLE](../commands/default-table)  
[Table](../commands/table)  
[Table name](../commands/table-name)  

## Propriedades

|  |  |
| --- | --- |
| Número do comando | 363 |
| Thread-seguro | yes |


